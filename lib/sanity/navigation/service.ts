import { sanityFetch } from "@/lib/sanity/client";
import {
  FEATURED_NAVIGATION_CONFERENCE_QUERY,
  UPCOMING_NAVIGATION_CONFERENCES_QUERY,
} from "./queries";
import { ConferenceSummary, NavigationData } from "./types";

/**
 * Reusable helper to get the featured conference using the fallback priority logic:
 * 1. Explicitly featured
 * 2. Nearest upcoming (handled by service if featured is null)
 * 3. Latest published (handled if all else fails)
 */
export async function getFeaturedConference(): Promise<ConferenceSummary | null> {
  let featuredConference = await sanityFetch<ConferenceSummary | null>({
    query: FEATURED_NAVIGATION_CONFERENCE_QUERY,
    revalidate: 300, // 5 minutes
    tags: ["navigation"],
  });

  if (!featuredConference) {
    // Priority 2: Nearest upcoming conference. We can just pick the first upcoming conference if it exists.
    const upcomingConferences = await sanityFetch<ConferenceSummary[]>({
      query: UPCOMING_NAVIGATION_CONFERENCES_QUERY,
      revalidate: 300,
      tags: ["navigation"],
    });
    
    if (upcomingConferences && upcomingConferences.length > 0) {
      featuredConference = upcomingConferences[0];
    }
  }

  return featuredConference;
}

/**
 * Returns the complete navigation data payload for the mega menu and mobile drawer.
 */
export async function getNavigationData(): Promise<NavigationData> {
  try {
    const upcomingConferences = await sanityFetch<ConferenceSummary[]>({
      query: UPCOMING_NAVIGATION_CONFERENCES_QUERY,
      revalidate: 300,
      tags: ["navigation"],
    });

    let featuredConference = await sanityFetch<ConferenceSummary | null>({
      query: FEATURED_NAVIGATION_CONFERENCE_QUERY,
      revalidate: 300,
      tags: ["navigation"],
    });

    if (!featuredConference && upcomingConferences && upcomingConferences.length > 0) {
      featuredConference = upcomingConferences[0];
    }

    return {
      featuredConference,
      upcomingConferences: upcomingConferences || [],
    };
  } catch (error) {
    console.error("Failed to fetch navigation data:", error);
    return {
      featuredConference: null,
      upcomingConferences: [],
    };
  }
}
