import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";
import { MapPin, Calendar } from "lucide-react";

interface RelatedGalleriesProps {
  galleries: Gallery[];
  currentTitle: string;
}

function formatEventDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

export default function RelatedGalleries({
  galleries,
  currentTitle,
}: RelatedGalleriesProps) {
  if (!galleries || galleries.length === 0) return null;

  return (
    <section
      className="section-padding-sm"
      style={{ backgroundColor: "var(--color-ivory)" }}
      aria-labelledby="related-galleries-heading"
    >
      <div className="content-wide">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-label text-gold mb-5">More Archives</p>
          <h2
            id="related-galleries-heading"
            className="text-heading text-navy"
          >
            Related Collections
          </h2>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
          <p
            className="font-sans text-navy/45 mt-5 max-w-[480px] mx-auto"
            style={{ fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.7 }}
          >
            Explore more conferences from the SMJ MUN archive.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleries.map((gallery) => {
            const coverUrl = gallery.coverImage
              ? urlFor(gallery.coverImage).width(800).height(520).quality(82).url()
              : null;
            const date = gallery.eventDate
              ? formatEventDate(gallery.eventDate)
              : null;

            return (
              <article
                key={gallery._id}
                className="group flex flex-col bg-white border border-navy/8 hover:border-gold/35 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <Link
                  href={`/gallery/${gallery.slug.current}`}
                  className="block relative overflow-hidden"
                  style={{ aspectRatio: "16 / 10" }}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={gallery.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
                      <span className="font-serif text-gold/20 text-3xl italic">SMJ</span>
                    </div>
                  )}

                  {/* Photo count overlay */}
                  {gallery.photoCount !== undefined && (
                    <div className="absolute top-4 right-4">
                      <span className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-white bg-navy/70 backdrop-blur-sm border border-white/10 px-2.5 py-1">
                        {gallery.photoCount} Photos
                      </span>
                    </div>
                  )}

                  {/* Gold hover rule */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold/60 transition-all duration-500" />
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-serif text-[18px] lg:text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-navy mb-3 group-hover:text-charcoal transition-colors duration-300">
                    <Link
                      href={`/gallery/${gallery.slug.current}`}
                      className="no-underline"
                      aria-label={`View collection: ${gallery.title}`}
                    >
                      {gallery.title}
                    </Link>
                  </h3>

                  <div className="flex flex-col gap-1.5 mb-5">
                    {gallery.location && (
                      <div className="flex items-center gap-2 text-navy/50 font-sans text-[12px]">
                        <MapPin size={12} className="text-gold/65 flex-shrink-0" aria-hidden="true" />
                        <span>{gallery.location}</span>
                      </div>
                    )}
                    {date && (
                      <div className="flex items-center gap-2 text-navy/50 font-sans text-[12px]">
                        <Calendar size={12} className="text-gold/65 flex-shrink-0" aria-hidden="true" />
                        <span>{date}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-navy/8">
                    <Link
                      href={`/gallery/${gallery.slug.current}`}
                      className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-charcoal no-underline group/link"
                      aria-label={`View collection: ${gallery.title}`}
                    >
                      <span>View Collection</span>
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
