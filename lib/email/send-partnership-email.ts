import { sendEmail } from './send-email';
import { partnershipTemplate } from './templates/partnership-template';

export async function sendPartnershipEmail({ to }: { to: string }) {
  const html = partnershipTemplate();

  return sendEmail({
    to,
    subject: 'Thank you for contacting SMJ MUN',
    html,
    type: 'PARTNERSHIP_INQUIRY',
  });
}
