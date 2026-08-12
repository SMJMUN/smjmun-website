import { getBaseEmailWrapper } from "./base-email-wrapper";

export function newsletterAdminTemplate({
  email,
  source,
  subscribedAt,
}: {
  email: string;
  source: string;
  subscribedAt: string;
}): string {
  const content = `
    <h2>New Newsletter Subscriber</h2>
    <p>A new user has subscribed to the SMJMUN newsletter.</p>
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
  `;
  return getBaseEmailWrapper(content, "New SMJMUN Newsletter Subscriber");
}
