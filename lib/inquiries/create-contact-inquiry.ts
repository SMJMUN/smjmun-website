import { db } from "@/lib/db";
import type { ContactInquiryData } from "@/lib/validations/contact-inquiry";
import { sendContactEmail } from "@/lib/email/send-contact-email";

import { sendEmail } from "@/lib/email/send-email";

export async function createContactInquiry(data: ContactInquiryData) {
  const inquiry = await db.contactInquiry.create({
    data,
  });

  try {
    await sendContactEmail({ to: data.email });
    
    // Notify the team
    const teamHtml = `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `;
    await sendEmail({
      to: 'info@smjmun.com',
      replyTo: data.email,
      subject: `New Contact Inquiry from ${data.name}`,
      html: teamHtml,
      type: 'INTERNAL_NOTIFICATION',
    });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send contact confirmation/notification:", error);
    // Continue even if email fails
  }

  return inquiry;
}
