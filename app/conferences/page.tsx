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
  title: "Conferences | SMJMUN",
  description:
    "Explore upcoming, live, and past SMJMUN conferences. Join India's premier platform for diplomacy, leadership, and global engagement.",
  alternates: { canonical: "https://smjmun.com/conferences" },
  openGraph: {
    title: "Conferences | SMJMUN",
    description: "Explore upcoming, live, and past SMJMUN conferences.",
    type: "website",
    url: "https://smjmun.com/conferences",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences | SMJMUN",
    description: "Explore upcoming, live, and past SMJMUN conferences.",
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default async function ConferencesPage() {
  const conferences = await sanityFetch<Conference[]>({
    query: CONFERENCES_QUERY,
  });

  const featured = conferences.find(c => c.featured && c.status !== "completed") || conferences.find(c => c.status === "upcoming") || conferences[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smjmun.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conferences",
        item: "https://smjmun.com/conferences",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="bg-[#0A0A0A]">
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
