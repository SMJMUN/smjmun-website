import { sendEmail } from './send-email';
import { newsletterAdminTemplate } from './templates/newsletter-admin-template';

export async function sendNewsletterAdminNotification({
  email,
  source,
}: {
  email: string;
  source: string;
}) {
  const adminEmail = process.env.NEWSLETTER_ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('[NEWSLETTER] NEWSLETTER_ADMIN_EMAIL is not set — skipping admin notification.');
    return { success: false, error: 'NEWSLETTER_ADMIN_EMAIL not configured' };
  }

  const html = newsletterAdminTemplate({
    email,
    source,
    subscribedAt: new Date().toISOString(),
  });

  return sendEmail({
    to: adminEmail,
    subject: 'New Newsletter Subscriber',
    html,
    type: 'NEWSLETTER_ADMIN_NOTIFICATION',
  });
}
