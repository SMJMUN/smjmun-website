import { NextRequest, NextResponse } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { db } from "@/lib/db";
import { sendBlogNotification } from "@/lib/email/send-blog-notification";
import { SubscriptionStatus } from "@prisma/client";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get(SIGNATURE_HEADER_NAME);
    const body = await request.text(); // Read the body into a string

    if (!secret) {
      console.warn("SANITY_WEBHOOK_SECRET is not set. Skipping signature verification.");
    } else if (signature && !isValidSignature(body, signature, secret)) {
      return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(body);

    // Only process if a blog post is published
    // Webhook should ideally be configured to only send on `create` or on specific status updates
    // For Sanity, payload type might be passed directly
    if (payload._type === "post") {
      const { title, slug, excerpt, mainImage } = payload;
      
      const slugValue = slug?.current || slug;
      
      if (!title || !slugValue) {
        return NextResponse.json({ success: false, message: "Missing title or slug" }, { status: 400 });
      }

      // Format image URL if provided (Sanity image format)
      // This is basic and might need a urlFor(mainImage).url() approach, 
      // but assuming the payload includes a resolved URL if projected correctly
      const imageUrl = mainImage?.asset?.url || null;

      // 1. Fetch active subscribers
      const subscribers = await db.newsletterSubscriber.findMany({
        where: {
          status: SubscriptionStatus.ACTIVE,
        },
        select: {
          email: true,
        },
      });

      const emails = subscribers.map((sub) => sub.email);

      if (emails.length > 0) {
        // 2. Send email via Resend
        await sendBlogNotification(emails, {
          title,
          excerpt: excerpt || "Read our latest post on SMJMUN.",
          slug: slugValue,
          imageUrl,
        });
      }

      return NextResponse.json({ success: true, message: `Notification sent to ${emails.length} subscribers` });
    }

    return NextResponse.json({ success: true, message: "Webhook received, ignored (not a post)" });
  } catch (err: any) {
    console.error("Webhook Error:", err.message);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
