import { getBaseEmailWrapper } from "./base-email-wrapper";

export function newsletterWelcomeTemplate(): string {
  const content = `
    <h2 style="font-size: 22px; color: #0A1628; margin: 0 0 16px;">Welcome to the SMJMUN Newsletter</h2>

    <p>Thank you for subscribing! We're delighted to have you join the SMJMUN community.</p>

    <p style="margin-top: 16px;">Here's what you can expect from us:</p>

    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 10px; margin-bottom: 24px;">
      <li><strong>Conference announcements</strong> — dates, venues, and registration details</li>
      <li><strong>Leadership opportunities</strong> — executive board and volunteer openings</li>
      <li><strong>New publications</strong> — articles, research papers, and blog posts</li>
      <li><strong>Exclusive updates</strong> — behind-the-scenes insights and community highlights</li>
    </ul>

    <p>We respect your inbox and will only send content that matters. You can unsubscribe at any time.</p>
  `;
  return getBaseEmailWrapper(content, "Welcome to the SMJMUN Newsletter");
}
