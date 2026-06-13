export function otpTemplate({
  firstName,
  otp,
  expiresInMinutes,
}: {
  firstName: string;
  otp: string;
  expiresInMinutes: number;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2>SMJ MUN Verification Code</h2>
      <p>Hello ${firstName},</p>
      <p>Your verification code is:</p>
      <h3 style="font-size: 24px; letter-spacing: 2px; padding: 10px; background-color: #f4f4f4; display: inline-block; border-radius: 4px;">${otp}</h3>
      <p>This code expires in ${expiresInMinutes} minutes.</p>
      <p>If you did not request this code, please ignore this email.</p>
      <br />
      <p>Best regards,<br />SMJ MUN</p>
    </div>
  `;
}
