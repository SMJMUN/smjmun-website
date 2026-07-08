import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ConferenceStatus =
  | "upcoming"
  | "live"
  | "completed"
  | "cancelled";

export interface ConferenceSummary {
  title: string;
  slug: string;
  heroImage?: SanityImageSource | null;
  venue: string;
  date: string;
  registrationOpen: boolean;
  status: ConferenceStatus;
  featured?: boolean;
}

export interface NavigationData {
  featuredConference: ConferenceSummary | null;
  upcomingConferences: ConferenceSummary[];
}
