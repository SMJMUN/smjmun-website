import { NextResponse } from "next/server";
import { newsletterSubscriptionSchema } from "@/lib/validations/newsletter-subscription";
import { createNewsletterSubscriber } from "@/lib/newsletter/create-newsletter-subscriber";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = newsletterSubscriptionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const email = parsed.data.email.trim().toLowerCase();

    const rateLimitResult = await rateLimit(email);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Extract metadata from request headers
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const result = await createNewsletterSubscriber({
      email,
      source: parsed.data.source,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      alreadySubscribed: result.alreadySubscribed,
      message: result.message,
    });
  } catch (error) {
    console.error("[POST /api/newsletter/subscribe]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
