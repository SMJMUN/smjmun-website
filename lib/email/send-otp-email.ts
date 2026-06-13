import { sendEmail } from './send-email';
import { otpTemplate } from './templates/otp-template';

export async function sendOtpEmail({
  to,
  firstName,
  otp,
  expiresInMinutes = 10,
}: {
  to: string;
  firstName: string;
  otp: string;
  expiresInMinutes?: number;
}) {
  const html = otpTemplate({ firstName, otp, expiresInMinutes });
  
  return sendEmail({
    to,
    subject: 'SMJ MUN Verification Code',
    html,
    type: 'OTP',
  });
}
