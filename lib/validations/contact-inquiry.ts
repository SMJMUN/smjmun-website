import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactInquiryData = z.infer<typeof contactInquirySchema>;
