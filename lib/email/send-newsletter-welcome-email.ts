import { sendEmail } from './send-email';
import { newsletterWelcomeTemplate } from './templates/newsletter-welcome-template';

export async function sendNewsletterWelcomeEmail({ to }: { to: string }) {
  const html = newsletterWelcomeTemplate();

  return sendEmail({
    to,
    subject: 'Welcome to the SMJ MUN Newsletter',
    html,
    type: 'NEWSLETTER_WELCOME',
  });
}
