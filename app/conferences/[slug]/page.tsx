import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  CONFERENCE_BY_SLUG_QUERY,
  CONFERENCES_QUERY,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

// Components
import ConferenceVideoHero from "./components/ConferenceVideoHero";
import QuickFacts from "./components/QuickFacts";
import ConferenceOverview from "./components/ConferenceOverview";
import CommitteeGrid from "./components/CommitteeGrid";
import ConferenceTimeline from "./components/ConferenceTimeline";
import DelegateExperience from "./components/DelegateExperience";
import GallerySection from "./components/GallerySection";
import VenueSection from "./components/VenueSection";
import FAQSection from "./components/FAQSection";
import RegistrationCTA from "./components/RegistrationCTA";
import ConferenceSidebar from "./components/ConferenceSidebar";

// ─── Static Params ─────────────────────────────────────────────────
export async function generateStaticParams() {
  const conferences = await sanityFetch<Conference[]>({
    query: CONFERENCES_QUERY,
    revalidate: 3600,
  });
  return conferences.map((c) => ({ slug: c.slug.current }));
}

// ─── Dynamic Metadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!conference) {
    return { title: "Conference Not Found — SMJ MUN" };
  }

  const title = conference.seoTitle || `${conference.title} — SMJ MUN`;
  const description =
    conference.seoDescription ||
    `${conference.title} at ${conference.venue || "SMJ MUN"}. Join India's premier Model United Nations conference.`;
  const imageUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/conferences/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/conferences/${slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────
export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!conference) notFound();

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--color-white)", position: "relative" }}>
        
        {/* Hero */}
        <ConferenceVideoHero conference={conference} />

        {/* Quick Facts Strip */}
        <QuickFacts conference={conference} />

        {/* Two Column Layout for Desktop */}
        <div className="content-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 py-12 lg:py-20 relative">
            
            {/* Main Content Area */}
            <div className="space-y-12">
              <ConferenceOverview conference={conference} />
              <CommitteeGrid conference={conference} />
            </div>

            {/* Sidebar Area */}
            <div className="hidden lg:block relative">
              <ConferenceSidebar conference={conference} />
            </div>

          </div>
        </div>

        {/* Full Width Sections */}
        <ConferenceTimeline conference={conference} />
        <DelegateExperience />
        <GallerySection conference={conference} />
        <VenueSection conference={conference} />
        <FAQSection />
        
        <RegistrationCTA conference={conference} />
      </main>
      <Footer />
    </>
  );
}
