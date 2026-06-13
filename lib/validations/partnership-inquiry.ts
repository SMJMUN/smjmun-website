import { z } from "zod";

export const partnershipInquirySchema = z.object({
  institutionName: z.string().min(2, "Institution name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  institutionType: z.string().optional(),
  message: z.string().optional(),
});

export type PartnershipInquiryData = z.infer<typeof partnershipInquirySchema>;
