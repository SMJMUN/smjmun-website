export function newsletterWelcomeTemplate(): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="text-align: center; padding: 32px 0 24px;">
        <h1 style="font-size: 28px; color: #0A1628; margin: 0;">SMJ MUN</h1>
        <p style="font-size: 12px; letter-spacing: 3px; color: #BB8B57; text-transform: uppercase; margin-top: 4px;">Newsletter</p>
      </div>

      <div style="border-top: 2px solid #BB8B57; padding-top: 24px;">
        <h2 style="font-size: 22px; color: #0A1628; margin: 0 0 16px;">Welcome to the SMJ MUN Newsletter</h2>

        <p>Thank you for subscribing! We're delighted to have you join the SMJ MUN community.</p>

        <p>Here's what you can expect from us:</p>

        <ul style="padding-left: 20px; line-height: 1.8;">
          <li><strong>Conference announcements</strong> — dates, venues, and registration details</li>
          <li><strong>Leadership opportunities</strong> — executive board and volunteer openings</li>
          <li><strong>New publications</strong> — articles, research papers, and blog posts</li>
          <li><strong>Exclusive updates</strong> — behind-the-scenes insights and community highlights</li>
        </ul>

        <p style="margin-top: 24px;">We respect your inbox and will only send content that matters. You can unsubscribe at any time.</p>
      </div>

      <div style="border-top: 1px solid #eee; margin-top: 32px; padding-top: 16px;">
        <p style="font-size: 13px; color: #999; margin: 0;">Best regards,<br />The SMJ MUN Team</p>
      </div>
    </div>
  `;
}
