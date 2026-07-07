export function newsletterAdminTemplate({
  email,
  source,
  subscribedAt,
}: {
  email: string;
  source: string;
  subscribedAt: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2>New Newsletter Subscriber</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Source:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${source}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Time:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${subscribedAt}</td>
        </tr>
      </table>
      <br />
      <p style="font-size: 13px; color: #999;">This is an automated notification from the SMJ MUN newsletter system.</p>
    </div>
  `;
}
