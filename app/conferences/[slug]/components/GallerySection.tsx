import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

export default function GallerySection({ conference }: { conference: Conference }) {
  if (!conference.gallery || conference.gallery.length === 0) return null;

  return (
    <section className="section-padding-lg bg-white border-t border-navy/10">
      <div className="content-wide">
        <div className="text-center mb-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
            Gallery
          </span>
          <h2 className="text-section text-navy mb-8">
            Moments from {conference.title}
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        {/* Masonry Layout Approximation */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {conference.gallery.map((img: any, i: number) => {
            if (!img || (!img.asset && !img.url)) return null;

            const isVideo = img.url?.endsWith(".mp4") || img.isVideo;
            const src = isVideo ? img.url : urlFor(img).width(800).quality(85).url();
            
            return (
              <div key={i} className="break-inside-avoid relative overflow-hidden group border border-navy/10 bg-ivory">
                {isVideo ? (
                  <video src={src} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
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
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-gold border border-gold/40 px-6 py-3">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
