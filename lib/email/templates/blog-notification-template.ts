import { getBaseEmailWrapper } from "./base-email-wrapper";

export function blogNotificationTemplate(
  title: string,
  excerpt: string,
  slug: string,
  imageUrl?: string
): string {
  const blogUrl = `https://smjmun.com/blogs/${slug}`;
  
  const imageHtml = imageUrl 
    ? `<div style="text-align: center; margin-bottom: 24px;">
         <img src="${imageUrl}" alt="Blog Cover Image" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
       </div>`
    : "";

  const content = `
    <h2 style="margin-bottom: 16px; color: #0A1628;">New Blog Published: ${title}</h2>
    ${imageHtml}
    <p style="font-size: 16px; line-height: 1.6; color: #4b5563; margin-bottom: 24px;">
      ${excerpt}
    </p>
    <div style="text-align: center;">
      <a href="${blogUrl}" class="button" style="display: inline-block; background-color: #A97C50; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 10px; margin-bottom: 20px;">
        Read Full Article
      </a>
    </div>
    <div class="divider" style="border-top: 1px solid #e2e8f0; margin: 30px 0;"></div>
    <p style="font-size: 12px; color: #94a3b8; text-align: center;">
      You are receiving this email because you subscribed to updates from SMJMUN. 
      <br />
      If you no longer wish to receive these emails, you can <a href="https://smjmun.com/unsubscribe?email={{email_address}}" style="color: #64748b; text-decoration: underline;">unsubscribe here</a>.
    </p>
  `;

  return getBaseEmailWrapper(content, `New Post: ${title}`);
}
