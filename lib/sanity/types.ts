import type { PortableTextBlock } from "next-sanity";

// ─── Sanity Image Reference ────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  alt?: string;
  caption?: string;
}

// ─── Homepage (Singleton) ──────────────────────────────────────────
export interface Homepage {
  _id: string;
  _type: "homepage";
  heroTitle: string;
  heroSubtitle?: string;
  heroImages?: SanityImage[];
  stats?: { label: string; value: string }[];
  partnerLogos?: (SanityImage & { alt?: string })[];
  ctaText?: string;
  ctaLink?: string;
}

// ─── Conference ────────────────────────────────────────────────────
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
}

// ─── Blog ──────────────────────────────────────────────────────────
export interface Blog {
  _id: string;
  _type: "blog";
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: SanityImage;
  body?: PortableTextBlock[];
  author?: string;
  publishedAt: string;
  featured: boolean;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Gallery ───────────────────────────────────────────────────────
export type GalleryImageCategory =
  | "opening"
  | "committee"
  | "networking"
  | "awards"
  | "group"
  | "other";

export const GALLERY_CATEGORY_LABELS: Record<GalleryImageCategory, string> = {
  opening: "Opening Ceremony",
  committee: "Committee Session",
  networking: "Networking",
  awards: "Awards",
  group: "Group Photo",
  other: "Other",
};

export interface GalleryImage {
  _key?: string;
  image: SanityImage;
  alt?: string;
  caption?: string;
  category?: GalleryImageCategory;
}

export interface Gallery {
  _id: string;
  _type: "gallery";
  title: string;
  slug: { current: string };
  coverImage: SanityImage;
  description?: string;
  eventDate?: string;
  location?: string;
  featured?: boolean;
  images?: GalleryImage[];
  // Projected fields from GROQ queries
  photoCount?: number;
  conferenceTitle?: string;
  conferenceSlug?: string;
  delegateCount?: number;
  committeeCount?: number;
}

// ─── Testimonial ───────────────────────────────────────────────────
export interface Testimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  role?: string;
  quote: string;
  avatar?: SanityImage;
  conference?: { _ref: string };
  conferenceName?: string;
}

// ─── Media / Press ─────────────────────────────────────────────────
export interface Media {
  _id: string;
  _type: "media";
  title: string;
  publisher?: string;
  url?: string;
  coverImage?: SanityImage;
  publishedAt?: string;
}