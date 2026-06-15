"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { GalleryImage } from "@/lib/sanity/types";
import { GALLERY_CATEGORY_LABELS } from "@/lib/sanity/types";

const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), {
  ssr: false,
});

interface GalleryMasonryProps {
  images: GalleryImage[];
  activeCategory?: string;
}

export default function GalleryMasonry({
  images,
  activeCategory = "All",
}: GalleryMasonryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter(
          (img) =>
            img.category &&
            (GALLERY_CATEGORY_LABELS[img.category] === activeCategory ||
              img.category === activeCategory)
        );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  if (filtered.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="gold-rule mx-auto mb-8" />
        <p className="font-serif text-[22px] italic text-navy/40">
          No photographs in this category.
        </p>
        <p className="font-sans text-[13px] text-navy/30 mt-3">
          Select a different category to explore more.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry Grid */}
      <div
        className="w-full"
        style={{
          columns: "2",
          columnGap: "8px",
        }}
      >
        <style>{`
          @media (min-width: 640px) { .masonry-grid { columns: 3 !important; } }
          @media (min-width: 1024px) { .masonry-grid { columns: 4 !important; } }
          .masonry-item { break-inside: avoid; margin-bottom: 8px; }
        `}</style>
        <div className="masonry-grid w-full" style={{ columns: "2", columnGap: "8px" }}>
          {filtered.map((img, index) => {
            const isLarge = index % 7 === 0 || index % 11 === 0;
            const imageUrl = img.image
              ? urlFor(img.image)
                  .width(isLarge ? 900 : 600)
                  .quality(82)
                  .url()
              : null;

            return (
              <div key={img._key ?? index} className="masonry-item">
                <button
                  onClick={() => openLightbox(index)}
                  aria-label={img.alt ?? `View photo ${index + 1}`}
                  className="group block w-full relative overflow-hidden cursor-pointer border-0 p-0 bg-transparent"
                  style={{ display: "block" }}
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{
                      aspectRatio: isLarge ? "3/4" : index % 3 === 0 ? "4/3" : "1/1",
                      backgroundColor: "#0d1b2a",
                    }}
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={img.alt ?? `Conference photograph ${index + 1}`}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy to-navy/60 flex items-center justify-center">
                        <span className="font-serif text-gold/20 text-3xl italic">SMJ</span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <div className="w-9 h-9 border border-white/60 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M1 7H13M7 1V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    {img.category && img.category !== "other" && (
                      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-sans text-[9px] font-semibold tracking-[0.15em] uppercase text-white bg-navy/70 backdrop-blur-sm px-2 py-1 border border-white/10">
                          {GALLERY_CATEGORY_LABELS[img.category] ?? img.category}
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
