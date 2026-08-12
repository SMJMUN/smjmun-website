import { getBaseEmailWrapper } from "./base-email-wrapper";

export function partnershipTemplate(): string {
  const content = `
    <h2 style="margin-bottom: 16px;">Thank you for contacting SMJMUN</h2>
    <p>We have received your partnership inquiry. Our institutional relations team is reviewing your message and will reach out to you shortly to discuss potential collaborations.</p>
    <p style="margin-top: 16px;">We greatly value partnerships with leading institutions to build future global leaders.</p>
  `;
  return getBaseEmailWrapper(content, "Your Partnership Inquiry - SMJMUN");
}
