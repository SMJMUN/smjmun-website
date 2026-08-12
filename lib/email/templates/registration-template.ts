import { getBaseEmailWrapper } from "./base-email-wrapper";

export function registrationTemplate({
  studentName,
  conferenceTitle,
  venue,
  date,
  registrationId,
}: {
  studentName: string;
  conferenceTitle: string;
  venue: string;
  date: string;
  registrationId: string;
}): string {
  const content = `
    <h2>Registration Confirmed</h2>
    <p style="margin-top: 10px;">Hello ${studentName},</p>
    <p>Your registration for <strong>${conferenceTitle}</strong> is confirmed! We are thrilled to welcome you.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin-top: 30px; margin-bottom: 30px; background-color: #f8fafc; border-radius: 8px; overflow: hidden;">
      <tr>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0;"><strong>Registration ID:</strong></td>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">${registrationId}</td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0;"><strong>Conference:</strong></td>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0;">${conferenceTitle}</td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0;"><strong>Date:</strong></td>
        <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0;">${date}</td>
      </tr>
      <tr>
        <td style="padding: 15px 20px;"><strong>Venue:</strong></td>
        <td style="padding: 15px 20px;">${venue}</td>
      </tr>
    </table>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://smjmun.com/conferences" class="button">View Conference Details</a>
    </div>

    <p style="margin-top: 20px;">We look forward to seeing you at the conference. If you have any questions, feel free to reply directly to this email.</p>
  `;
  return getBaseEmailWrapper(content, "Your SMJMUN Registration is Confirmed!");
}

