import { getBaseEmailWrapper } from "./base-email-wrapper";

export function otpTemplate({
  firstName,
  otp,
  expiresInMinutes = 10,
}: {
  firstName?: string;
  otp: string;
  expiresInMinutes?: number;
}): string {
  const greeting = firstName ? `Hi ${firstName},` : 'Hello,';
  const content = `
    <h2 style="margin-bottom: 16px;">SMJMUN Verification Code</h2>
    <p>${greeting}</p>
    <p>Please use the following code to verify your email address. This code is valid for ${expiresInMinutes} minutes.</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #A97C50; background-color: #f8fafc; padding: 15px 30px; border-radius: 8px; border: 1px solid #e2e8f0;">
        ${otp}
      </span>
    </div>

    <p style="margin-top: 20px;">If you didn't request this code, you can safely ignore this email.</p>
  `;
  return getBaseEmailWrapper(content, "Your SMJMUN Verification Code");
}
