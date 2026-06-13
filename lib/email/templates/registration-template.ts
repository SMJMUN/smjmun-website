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
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2>Registration Confirmed — SMJ MUN</h2>
      <p>Hello ${studentName},</p>
      <p>Your registration for <strong>${conferenceTitle}</strong> is confirmed!</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Registration ID:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${registrationId}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Conference:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${conferenceTitle}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Venue:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${venue}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">We look forward to seeing you at the conference.</p>
      <br />
      <p>Best regards,<br />SMJ MUN</p>
    </div>
  `;
}
