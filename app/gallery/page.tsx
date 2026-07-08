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
  title: "Gallery | SMJMUN",
  description:
    "A visual archive of SMJMUN conferences — capturing moments of diplomacy, leadership, and global engagement from India's premier Model United Nations platform.",
  alternates: { canonical: "https://smjmun.com/gallery" },
  openGraph: {
    title: "Gallery | SMJMUN",
    description:
      "Capturing moments of diplomacy, leadership, and global engagement from SMJMUN conferences.",
    type: "website",
    url: "https://smjmun.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | SMJMUN",
    description: "Capturing moments of diplomacy, leadership, and global engagement.",
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default async function GalleryPage() {
  const [galleries, featuredGallery] = await Promise.all([
    sanityFetch<Gallery[]>({ query: GALLERIES_QUERY }),
    sanityFetch<Gallery | null>({ query: FEATURED_GALLERY_QUERY }),
  ]);

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
        name: "Gallery",
        item: "https://smjmun.com/gallery",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
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
