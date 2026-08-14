import { db } from "@/lib/db";
import type { PartnershipInquiryData } from "@/lib/validations/partnership-inquiry";
import { sendPartnershipEmail } from "@/lib/email/send-partnership-email";

import { sendEmail } from "@/lib/email/send-email";

export async function createPartnershipInquiry(data: PartnershipInquiryData) {
  const inquiry = await db.partnershipInquiry.create({
    data,
  });

  try {
    await sendPartnershipEmail({ to: data.email });
    
    // Notify the team
    const teamHtml = `
      <h2>New Partnership Inquiry</h2>
      <p><strong>Institution:</strong> ${data.institutionName}</p>
      <p><strong>Contact Person:</strong> ${data.contactPerson}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Type:</strong> ${data.institutionType || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message || 'No message provided.'}</p>
    `;
    await sendEmail({
      to: 'info@smjmun.com',
      replyTo: data.email,
      subject: `New Partnership Inquiry from ${data.institutionName}`,
      html: teamHtml,
      type: 'INTERNAL_NOTIFICATION',
    });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send partnership confirmation/notification:", error);
    // Continue even if email fails
  }

  return inquiry;
}
