import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/gallery/types";

function formatEventDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

interface FeaturedGalleryProps {
  gallery: Gallery | null;
}

export default function FeaturedGallery({ gallery }: FeaturedGalleryProps) {
  if (!gallery) return null;

  const coverUrl = gallery.coverImage
    ? urlFor(gallery.coverImage).width(1200).height(800).quality(85).url()
    : null;

  return (
    <section className="section-padding-sm bg-[#111111] border-b border-white/5">
      <div className="content-wide mb-10">
        <div className="flex flex-col items-start px-2 lg:px-3">
          <p className="text-label text-gold mb-4 uppercase tracking-[0.2em]">Featured Collection</p>
          <h2 className="text-heading text-white text-left font-serif text-[clamp(40px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">Archive Spotlight</h2>
          <div className="w-16 h-[2px] bg-gold/60 mt-6" />
        </div>
      </div>

      <div className="content-wide">
        <Link
          href={`/gallery/${gallery.slug.current}`}
          className="group block rounded-2xl border border-white/10 p-2 lg:p-3 no-underline transition-all duration-500 hover:border-gold/50 bg-[#1A1A1A] hover:bg-[#1E1E1E]"
          aria-label={`View collection: ${gallery.title}`}
        >
          <article className="relative overflow-hidden rounded-xl bg-[#111111] flex flex-col lg:flex-row-reverse min-h-[360px] border border-white/5">
            {/* Image Side */}
            <div className="relative w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto overflow-hidden">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={gallery.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
                  <span className="font-serif text-gold/20 text-6xl italic">SMJ</span>
                </div>
              )}

              {/* Gradient for mobile legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 lg:hidden" />

              {/* Featured badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-white bg-gold/90 backdrop-blur-sm rounded-full px-4 py-2">
                  Featured
                </span>
              </div>

              {/* Photo count badge */}
              {gallery.photoCount !== undefined && (
                <div className="absolute bottom-5 right-5 z-10">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10 px-3 py-1.5">
                    {gallery.photoCount} Photos
                  </span>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="relative z-10 w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
              <p className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-4">
                Conference Archive
              </p>

              <h3
                className="font-serif font-bold leading-[1.1] tracking-[-0.02em] text-white mb-5 group-hover:text-gold transition-colors duration-500"
                style={{ fontSize: "clamp(26px, 2.5vw, 40px)" }}
              >
                {gallery.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-col gap-2.5 mb-6 font-sans text-[12px] tracking-[0.08em] uppercase font-medium text-white/50">
                {gallery.location && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold/70 text-[13px]">📍</span>
                    {gallery.location}
                  </div>
                )}
                {gallery.eventDate && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold/70 text-[13px]">📅</span>
                    {formatEventDate(gallery.eventDate)}
                  </div>
                )}
              </div>

              {/* Description */}
              {gallery.description && (
                <p className="font-sans text-[14px] leading-[1.7] text-white/60 mb-8 line-clamp-3 max-w-lg">
                  {gallery.description}
                </p>
              )}

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-black bg-gold rounded-full px-6 py-3 group-hover:bg-white transition-all duration-300">
                  View Collection
                  <span className="text-[14px] group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
