import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { GalleryService } from "@/lib/sanity/gallery/service";

import GalleryHero from "./components/GalleryHero";
import GalleryStats from "./components/GalleryStats";
import FeaturedGallery from "./components/FeaturedGallery";
import GalleryPageClient from "./components/GalleryPageClient";
import GalleryCTA from "./components/GalleryCTA";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";

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
    GalleryService.getGalleries(),
    GalleryService.getFeaturedGallery(),
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
        <GalleryHero featuredGallery={featuredGallery} />

        {/* 2. Stats */}
        <GalleryStats />

        {/* 3. Featured Collection */}
        <FeaturedGallery gallery={featuredGallery} />

        {/* 4. Moments From The Archive (if featured gallery has photos) */}
        {featuredGallery?.images && featuredGallery.images.length > 0 && (
          <section className="bg-[#18171C] pt-16 pb-12 px-4 lg:px-8 border-b border-white/5">
            <div className="content-editorial text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-[1px] bg-gold/40" />
                <p className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase">Moments From The Archive</p>
                <div className="w-12 h-[1px] bg-gold/40" />
              </div>
            </div>
            
            <div className="max-w-[1400px] mx-auto">
              <GalleryMasonry images={featuredGallery.images} />
            </div>
          </section>
        )}

        {/* 4. Filters + Grid (client) */}
        <section
          aria-labelledby="gallery-collections-heading"
          style={{ backgroundColor: "#18171C" }}
        >
          <div
            className="content-wide"
            style={{
              paddingTop: "clamp(72px, 8vw, 100px)",
              paddingBottom: "0",
            }}
          >
            <div className="content-editorial text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-[1px] bg-gold/40" />
                <p className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase">Explore The Archive</p>
                <div className="w-12 h-[1px] bg-gold/40" />
              </div>
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
