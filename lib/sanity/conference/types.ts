import type { PortableTextBlock } from "next-sanity";
import type { SanityImage } from "../shared/types";

export type ConferenceStatus = "draft" | "upcoming" | "live" | "completed";

export interface Committee {
  name: string;
  agenda?: string;
  chairperson?: string;
}

export interface Conference {
  _id: string;
  _type: "conference";
  title: string;
  slug: { current: string };
  heroImage: SanityImage;
  overview?: PortableTextBlock[];
  venue?: string;
  date?: string;
  registrationFee?: number;
  capacity?: number;
  registrationOpen: boolean;
  registrationCloseDate?: string;
  status: ConferenceStatus;
  featured: boolean;
  committees?: Committee[];
  agenda?: PortableTextBlock[];
  gallery?: SanityImage[];
  seoTitle?: string;
  seoDescription?: string;
  eligibility?: string;
  eligibilityRichText?: PortableTextBlock[];
  dressCode?: string;
  reportingTime?: string;
  accommodationAvailable?: boolean;
  foodProvided?: boolean;
  transportAvailable?: boolean;
  parkingAvailable?: boolean;
  certificateProvided?: boolean;
  delegateKitIncluded?: boolean;
  awards?: string[];
  resources?: any[];
  refundPolicy?: string;
  cancellationPolicy?: string;
  codeOfConduct?: string;
  contact?: any;
}
