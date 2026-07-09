export enum Intent {
  CONFERENCE = "CONFERENCE",
  PROGRAM = "PROGRAM",
  ORGANIZATION = "ORGANIZATION",
  FAQ = "FAQ",
  CONTACT = "CONTACT",
  GREETING = "GREETING",
  UNKNOWN = "UNKNOWN",
  // Reserved for future expansion
  // BLOG = "BLOG",
  // GALLERY = "GALLERY",
  // MEDIA = "MEDIA",
  // PARTNERSHIP = "PARTNERSHIP",
}

export interface RoutedIntent {
  intent: Intent;
  matchedKeywords: string[];
  entityQuery?: string;
  retrievalStrategy?: ConferenceRetrievalStrategy;
  confidence?: number;
  isFollowUp?: boolean;
}

export enum ConferenceRetrievalStrategy {
  SINGLE = "SINGLE",
  SEARCH = "SEARCH",
  FEATURED = "FEATURED",
  UPCOMING = "UPCOMING",
  ALL = "ALL",
  BY_CITY = "BY_CITY",
  BY_VENUE = "BY_VENUE",
  BY_COMMITTEE = "BY_COMMITTEE",
  BY_STATUS = "BY_STATUS",
  COMPARE = "COMPARE",
}

export interface RetrievalResult<T> {
  status: "SUCCESS" | "NOT_FOUND" | "AMBIGUOUS";
  confidence: number;
  strategy: ConferenceRetrievalStrategy;
  data: T[];
  suggestions?: { slug: string; title: string }[];
  message?: string;
}

export interface ChatContext {
  intent: Intent;
  title: string;
  content: string;
  sources?: string[];
}
