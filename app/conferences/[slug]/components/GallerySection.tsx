import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/conference/types";
import { GalleryService } from "@/lib/sanity/gallery/service";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {imagesToDisplay.slice(0, 5).map((img: any, i: number) => {
            if (!img || (!img.asset && !img.url)) return null;

            const isVideo = img.url?.endsWith(".mp4") || img.isVideo;
            const src = isVideo ? img.url : urlFor(img).width(800).quality(85).url();

            return (
              <div
                key={i}
                className="break-inside-avoid relative overflow-hidden group"
                style={{
                  borderRadius: 'var(--ds-radius-md)',
                  border: '1px solid var(--ds-border)',
                  backgroundColor: 'var(--ds-surface)',
                }}
              >
                {isVideo ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={img.alt || `Gallery Image ${i + 1}`}
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-[800ms]"
                  />
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(10,10,10,0.6)' }}
                >
                  <span
                    className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3"
                    style={{
                      color: 'var(--ds-gold)',
                      border: '1px solid rgba(187,139,87,0.45)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                    }}
                  >
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

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
