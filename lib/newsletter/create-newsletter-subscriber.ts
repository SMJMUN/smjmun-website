import { db } from "@/lib/db";
import type { SubscriptionSource } from "@prisma/client";
import { sendNewsletterWelcomeEmail } from "@/lib/email/send-newsletter-welcome-email";
import { sendNewsletterAdminNotification } from "@/lib/email/send-newsletter-admin-notification";

export type CreateSubscriberInput = {
  email: string;
  source: SubscriptionSource;
  ipAddress?: string;
  userAgent?: string;
};

export type CreateSubscriberResult = {
  success: true;
  alreadySubscribed: boolean;
  message: string;
};

/**
 * Normalizes, deduplicates, and persists a newsletter subscriber.
 *
 * - Trims and lowercases the email.
 * - If already subscribed: returns success without re-sending the welcome email.
 * - If new: inserts inside a transaction, then sends welcome + admin emails.
 * - Email failures never roll back the subscription.
 */
export async function createNewsletterSubscriber(
  input: CreateSubscriberInput
): Promise<CreateSubscriberResult> {
  const email = input.email.trim().toLowerCase();

  // ── Check for existing subscriber ──────────────────────────────────
  const existing = await db.newsletterSubscriber.findUnique({
    where: { email },
  });

  if (existing) {
    // If previously unsubscribed and re-subscribing, reactivate
    if (existing.status === "UNSUBSCRIBED") {
      await db.newsletterSubscriber.update({
        where: { email },
        data: {
          status: "ACTIVE",
          source: input.source,
          unsubscribedAt: null,
          ipAddress: input.ipAddress,
          userAgent: input.userAgent,
        },
      });

      // Send welcome email on reactivation
      try {
        await sendNewsletterWelcomeEmail({ to: email });
      } catch (error) {
        console.error("[EMAIL ERROR] Failed to send newsletter welcome email:", error);
      }

      try {
        await sendNewsletterAdminNotification({ email, source: input.source });
      } catch (error) {
        console.error("[EMAIL ERROR] Failed to send newsletter admin notification:", error);
      }

      return {
        success: true,
        alreadySubscribed: false,
        message: "Welcome back! Your subscription has been reactivated.",
      };
    }

    // Already actively subscribed — no welcome email
    return {
      success: true,
      alreadySubscribed: true,
      message: "Thanks! You're already part of the SMJ MUN newsletter.",
    };
  }

  // ── Create new subscriber (transactional) ─────────────────────────
  await db.$transaction(async (tx) => {
    await tx.newsletterSubscriber.create({
      data: {
        email,
        source: input.source,
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      },
    });
  });

  // ── Send emails (outside transaction — failures don't roll back) ──
  try {
    await sendNewsletterWelcomeEmail({ to: email });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send newsletter welcome email:", error);
  }

  try {
    await sendNewsletterAdminNotification({ email, source: input.source });
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to send newsletter admin notification:", error);
  }

  return {
    success: true,
    alreadySubscribed: false,
    message: "You've been subscribed to the SMJ MUN newsletter!",
  };
}
