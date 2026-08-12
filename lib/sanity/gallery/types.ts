import type { SanityImage } from "../shared/types";

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

export interface GalleryImage extends SanityImage {
  _key?: string;
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
