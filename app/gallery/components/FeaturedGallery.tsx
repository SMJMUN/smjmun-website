import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";

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
    <section className="section-padding-sm bg-white">
      <div className="content-editorial text-center mb-16">
        <p className="text-label text-gold mb-5">Featured Collection</p>
        <h2 className="text-heading text-navy">Archive Spotlight</h2>
        <div className="gold-rule mx-auto mt-6" />
      </div>

      <div className="content-wide">
        <Link
          href={`/gallery/${gallery.slug.current}`}
          className="group block border border-gold/25 p-2 lg:p-3 no-underline transition-colors duration-500 hover:border-gold"
          aria-label={`View collection: ${gallery.title}`}
        >
          <article className="relative overflow-hidden bg-white flex flex-col lg:flex-row min-h-[480px] border border-stone-100">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={gallery.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
                  <span className="font-serif text-gold/20 text-6xl italic">SMJ</span>
                </div>
              )}

              {/* Gradient for mobile legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-70 lg:hidden" />

              {/* Featured badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-gold bg-white border border-gold/30 px-4 py-2">
                  Featured Collection
                </span>
              </div>

              {/* Photo count badge */}
              {gallery.photoCount !== undefined && (
                <div className="absolute bottom-6 right-6 z-10">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white bg-navy/70 backdrop-blur-sm border border-white/10 px-3 py-1.5">
                    {gallery.photoCount} Photos
                  </span>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="relative z-10 w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-white">
              <p className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6">
                Conference Archive
              </p>

              <h3
                className="font-serif font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-6 group-hover:text-gold transition-colors duration-500"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                {gallery.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-col gap-3 mb-8 font-sans text-[13px] tracking-[0.08em] uppercase font-medium text-navy/55">
                {gallery.location && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold text-[14px]">📍</span>
                    {gallery.location}
                  </div>
                )}
                {gallery.eventDate && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold text-[14px]">📅</span>
                    {formatEventDate(gallery.eventDate)}
                  </div>
                )}
              </div>

              {/* Description */}
              {gallery.description && (
                <p className="font-sans text-[15px] leading-[1.75] text-stone-500 mb-10 line-clamp-3">
                  {gallery.description}
                </p>
              )}

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-gold group-hover:gap-4 transition-all duration-300">
                  View Collection
                  <span className="text-[16px]">→</span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
