import { NextResponse } from "next/server";
import { partnershipInquirySchema } from "@/lib/validations/partnership-inquiry";
import { createPartnershipInquiry } from "@/lib/inquiries/create-partnership-inquiry";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const parsed = partnershipInquirySchema.safeParse(body);
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

    await createPartnershipInquiry(parsed.data);

    return NextResponse.json({
      success: true,
      message: "Partnership inquiry submitted successfully",
    });
  } catch (error) {
    console.error("[POST /api/partnerships]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
