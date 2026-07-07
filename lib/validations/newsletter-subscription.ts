import { z } from "zod";

/**
 * Valid subscription sources — matches the Prisma SubscriptionSource enum.
 * Extend this array (and the Prisma enum) when new entry-points are added.
 */
const SUBSCRIPTION_SOURCES = [
  "FOOTER",
  "BLOG",
  "CONTACT",
  "HOMEPAGE",
  "CONFERENCE",
  "PARTNERSHIP",
  "POPUP",
  "OTHER",
] as const;

export const newsletterSubscriptionSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  source: z.enum(SUBSCRIPTION_SOURCES, {
    error: "Invalid subscription source",
  }),
});

export type NewsletterSubscriptionData = z.infer<typeof newsletterSubscriptionSchema>;
