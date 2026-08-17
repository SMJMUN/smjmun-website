import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/conference/types";
import { GalleryService } from "@/lib/sanity/gallery/service";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";

export default async function GallerySection({ conference }: { conference: Conference }) {
  const globalGallery = await GalleryService.getGalleryByConferenceSlug(conference.slug.current);

  const imagesToDisplay = globalGallery?.images || conference.gallery;

  if (!imagesToDisplay || imagesToDisplay.length === 0) return null;

  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{
        backgroundColor: 'var(--ds-bg-secondary)',
        borderTop: '1px solid var(--ds-border)',
      }}
    >
      <div className="content-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-6">Gallery</span>
          <h2
            className="font-serif text-white mb-8"
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Moments from {conference.title}
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        {/* Masonry layout */}
        <GalleryMasonry images={imagesToDisplay.slice(0, 8)} />

        {globalGallery?.slug && (
          <div className="mt-12 text-center">
            <Link
              href={`/gallery/${globalGallery.slug.current}`}
              className="inline-flex items-center justify-center px-8 py-4 font-[family-name:var(--font-sora)] font-semibold text-[13px] tracking-[0.1em] uppercase transition-all duration-300"
              style={{
                backgroundColor: "var(--ds-gold)",
                color: "#ffffff",
                borderRadius: "var(--ds-radius-md)",
              }}
            >
              View All Photos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
