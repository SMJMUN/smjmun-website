import { resend } from "./client";
import { blogNotificationTemplate } from "./templates/blog-notification-template";

export interface BlogNotificationData {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
}

export async function sendBlogNotification(
  subscribers: string[],
  blogData: BlogNotificationData
) {
  const fromEmail = process.env.EMAIL_FROM || "SMJMUN <info@smjmun.com>";
  const isProduction = process.env.EMAIL_MODE === "production";

  if (!isProduction) {
    console.log("[DEV] Skipping blog notification email send.");
    return { success: true };
  }

  // Resend batch API accepts up to 100 emails per batch.
  const batchSize = 100;
  const batches = [];

  for (let i = 0; i < subscribers.length; i += batchSize) {
    batches.push(subscribers.slice(i, i + batchSize));
  }

  try {
    for (const batch of batches) {
      const emailPayloads = batch.map((email) => ({
        from: fromEmail,
        to: [email],
        subject: `New Post: ${blogData.title}`,
        html: blogNotificationTemplate(
          blogData.title,
          blogData.excerpt,
          blogData.slug,
          blogData.imageUrl
        ).replace("{{email_address}}", encodeURIComponent(email)), // Replace unsubscribe placeholder
      }));

      // Use Resend's batch sending API
      const { data, error } = await resend.batch.send(emailPayloads);

      if (error) {
        console.error("[Blog Notification] Error sending batch:", error);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("[Blog Notification] Unhandled error:", error);
    return { success: false, error };
  }
}
