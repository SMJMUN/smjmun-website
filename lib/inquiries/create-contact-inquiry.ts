import { db } from "@/lib/db";
import type { ContactInquiryData } from "@/lib/validations/contact-inquiry";
import { sendContactEmail } from "@/lib/email/send-contact-email";

export async function createContactInquiry(data: ContactInquiryData) {
  const inquiry = await db.contactInquiry.create({
    data,
  });

  try {
    await sendContactEmail({ to: data.email });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send contact confirmation:", error);
    // Continue even if email fails
  }

  return inquiry;
}
