import { NextResponse } from "next/server";
import { contactInquirySchema } from "@/lib/validations/contact-inquiry";
import { createContactInquiry } from "@/lib/inquiries/create-contact-inquiry";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const parsed = contactInquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const rateLimitResult = await rateLimit(parsed.data.email);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await createContactInquiry(parsed.data);

    return NextResponse.json({
      success: true,
      message: "Contact inquiry submitted successfully",
    });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
