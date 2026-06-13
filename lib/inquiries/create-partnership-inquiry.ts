import { db } from "@/lib/db";
import type { PartnershipInquiryData } from "@/lib/validations/partnership-inquiry";
import { sendPartnershipEmail } from "@/lib/email/send-partnership-email";

export async function createPartnershipInquiry(data: PartnershipInquiryData) {
  const inquiry = await db.partnershipInquiry.create({
    data,
  });

  try {
    await sendPartnershipEmail({ to: data.email });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send partnership confirmation:", error);
    // Continue even if email fails
  }

  return inquiry;
}
