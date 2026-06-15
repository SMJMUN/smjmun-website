import { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { CONFERENCES_QUERY } from "@/lib/sanity/queries";
import type { Conference } from "@/lib/sanity/types";

// Components
import ConferenceVideoHero from "./components/ConferenceVideoHero";
import FeaturedConference from "./components/FeaturedConference";
import ConferenceTabs from "./components/ConferenceTabs";
import WhyAttend from "./components/WhyAttend";
import ConferenceStats from "./components/ConferenceStats";
import DelegateJourney from "./components/DelegateJourney";
import ConferenceCTA from "./components/ConferenceCTA";

export const metadata: Metadata = {
  title: "Conferences — SMJ MUN",
  description:
    "Explore upcoming, live, and past SMJ MUN conferences. Join India's premier platform for diplomacy, leadership, and global engagement.",
  alternates: { canonical: "/conferences" },
  openGraph: {
    title: "Conferences — SMJ MUN",
    description: "Explore upcoming, live, and past SMJ MUN conferences.",
    type: "website",
    url: "/conferences",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences — SMJ MUN",
    description: "Explore upcoming, live, and past SMJ MUN conferences.",
  },
};

export default async function ConferencesPage() {
  const conferences = await sanityFetch<Conference[]>({
    query: CONFERENCES_QUERY,
  });

  // Featured conference: The latest upcoming one, or just the first featured one
  const featured = conferences.find(c => c.featured && c.status !== "completed") || conferences.find(c => c.status === "upcoming") || conferences[0];

  return (
    <>
      <main>
        <ConferenceVideoHero conference={featured} />
        <FeaturedConference conference={featured} />
        <ConferenceTabs conferences={conferences} />
        <WhyAttend />
        <ConferenceStats />
        <DelegateJourney />
        <ConferenceCTA />
      </main>
      <Footer />
    </>
  );
}
