import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  GALLERIES_QUERY,
  FEATURED_GALLERY_QUERY,
} from "@/lib/sanity/queries/gallery";
import type { Gallery } from "@/lib/sanity/types";

import GalleryHero from "./components/GalleryHero";
import GalleryStats from "./components/GalleryStats";
import FeaturedGallery from "./components/FeaturedGallery";
import GalleryPageClient from "./components/GalleryPageClient";
import GalleryCTA from "./components/GalleryCTA";

export const metadata: Metadata = {
  title: "Gallery — SMJ MUN Conference Archive",
  description:
    "A visual archive of SMJ MUN conferences — capturing moments of diplomacy, leadership, and global engagement from India's premier Model United Nations platform.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — SMJ MUN Conference Archive",
    description:
      "Capturing moments of diplomacy, leadership, and global engagement from SMJ MUN conferences.",
    type: "website",
    url: "/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMJ MUN Gallery",
    description: "A visual archive of SMJ MUN conferences across India and beyond.",
  },
};

export default async function GalleryPage() {
  const [galleries, featuredGallery] = await Promise.all([
    sanityFetch<Gallery[]>({ query: GALLERIES_QUERY }),
    sanityFetch<Gallery | null>({ query: FEATURED_GALLERY_QUERY }),
  ]);

  return (
    <>
      <main>
        {/* 1. Hero */}
        <GalleryHero />

        {/* 2. Stats */}
        <GalleryStats />

        {/* 3. Featured Collection */}
        <FeaturedGallery gallery={featuredGallery} />

        {/* 4. Filters + Grid (client) */}
        <section
          aria-labelledby="gallery-collections-heading"
          style={{ backgroundColor: "var(--color-ivory)" }}
        >
          <div
            className="content-wide"
            style={{
              paddingTop: "clamp(72px, 8vw, 100px)",
              paddingBottom: "0",
            }}
          >
            <div className="text-center mb-14">
              <p className="text-label text-gold mb-5">Archive</p>
              <h2
                id="gallery-collections-heading"
                className="text-heading text-navy"
              >
                All Collections
              </h2>
              <div className="gold-rule mx-auto mt-6" />
            </div>
          </div>

          <GalleryPageClient
            galleries={galleries}
            featuredGallery={featuredGallery}
          />
        </section>

        {/* 5. CTA */}
        <GalleryCTA />
      </main>
      <Footer />
    </>
  );
}
