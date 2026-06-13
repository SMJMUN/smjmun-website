import { resend } from './client';
import { logEmailEvent } from './log-email-event';

export type SendEmailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  type: string;
};

export type SendEmailResult = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendEmail({
  to,
  subject,
  html,
  type,
}: SendEmailOptions): Promise<SendEmailResult> {
  const mode = process.env.EMAIL_MODE || 'test';
  const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';
  const replyTo = process.env.EMAIL_REPLY_TO || 'test@example.com';
  
  const toList = Array.isArray(to) ? to : [to];

  if (mode === 'test') {
    // Test mode behavior
    console.log(`\n[EMAIL TEST MODE]`);
    console.log(`Type: ${type}`);
    console.log(`To: ${toList.join(', ')}`);
    console.log(`Subject: ${subject}\n`);
    
    logEmailEvent({
      type,
      to: toList.join(', '),
      subject,
      success: true,
    });
    
    return { success: true, message: 'Simulated email sent successfully in test mode.' };
  }

  // Production mode
  try {
    const data = await resend.emails.send({
      from,
      to: toList,
      replyTo: replyTo,
      subject,
      html,
    });

    if (data.error) {
      logEmailEvent({
        type,
        to: toList.join(', '),
        subject,
        success: false,
        error: data.error.message,
      });
      return { success: false, error: data.error.message };
    }

    logEmailEvent({
      type,
      to: toList.join(', '),
      subject,
      success: true,
    });

    return { success: true, message: 'Email sent successfully.' };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown email error';
    logEmailEvent({
      type,
      to: toList.join(', '),
      subject,
      success: false,
      error: errorMessage,
    });
    return { success: false, error: errorMessage };
  }
}
