import { sendEmail } from './send-email';
import { contactTemplate } from './templates/contact-template';

export async function sendContactEmail({ to }: { to: string }) {
  const html = contactTemplate();

  return sendEmail({
    to,
    subject: 'We received your message',
    html,
    type: 'CONTACT_INQUIRY',
  });
}
