import { getBaseEmailWrapper } from "./base-email-wrapper";

export function contactTemplate(): string {
  const content = `
    <h2 style="margin-bottom: 16px;">Thank You for Reaching Out!</h2>
    <p>We're thrilled to hear from you.</p>
    <p style="margin-top: 16px;">We have successfully received your message. Our team at SMJMUN is currently reviewing it and will get back to you shortly.</p>
  `;
  return getBaseEmailWrapper(content, "Thank You for Contacting SMJMUN");
}

