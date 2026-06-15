import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";
import { MapPin, Calendar, Images } from "lucide-react";

function formatEventDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

function getEventYear(dateStr: string) {
  return new Date(dateStr).getFullYear().toString();
}

interface GalleryCardProps {
  gallery: Gallery;
}

export default function GalleryCard({ gallery }: GalleryCardProps) {
  const coverUrl = gallery.coverImage
    ? urlFor(gallery.coverImage).width(800).height(520).quality(82).url()
    : null;

  const year = gallery.eventDate ? getEventYear(gallery.eventDate) : null;
  const date = gallery.eventDate ? formatEventDate(gallery.eventDate) : null;

  return (
    <article className="group flex flex-col bg-white border border-navy/8 hover:border-gold/35 transition-all duration-500 hover:-translate-y-1 h-full">
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
            <span className="font-serif text-gold/20 text-4xl italic">SMJ</span>
          </div>
        )}

        {/* Year badge */}
        {year && (
          <div className="absolute top-4 left-4">
            <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-gold bg-navy/80 backdrop-blur-sm border border-gold/20 px-2.5 py-1">
              {year}
            </span>
          </div>
        )}

        {/* Photo count badge */}
        {gallery.photoCount !== undefined && (
          <div className="absolute top-4 right-4">
            <span className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-white bg-navy/70 backdrop-blur-sm border border-white/10 px-2.5 py-1">
              {gallery.photoCount} Photos
            </span>
          </div>
        )}

        {/* Gold rule hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold/60 transition-all duration-500" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        {/* Conference label */}
        {gallery.conferenceTitle && (
          <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            {gallery.conferenceTitle}
          </p>
        )}

        {/* Title */}
        <h3 className="font-serif text-[19px] lg:text-[21px] font-bold leading-[1.25] tracking-[-0.01em] text-navy mb-4 group-hover:text-charcoal transition-colors duration-300">
          <Link href={`/gallery/${gallery.slug.current}`} className="no-underline">
            {gallery.title}
          </Link>
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-2 mb-6">
          {gallery.location && (
            <div className="flex items-center gap-2 text-navy/55 font-sans text-[12px]">
              <MapPin size={13} className="text-gold/70 flex-shrink-0" />
              <span>{gallery.location}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-2 text-navy/55 font-sans text-[12px]">
              <Calendar size={13} className="text-gold/70 flex-shrink-0" />
              <span>{date}</span>
            </div>
          )}
          {gallery.photoCount !== undefined && (
            <div className="flex items-center gap-2 text-navy/55 font-sans text-[12px]">
              <Images size={13} className="text-gold/70 flex-shrink-0" />
              <span>{gallery.photoCount} photographs</span>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-auto pt-5 border-t border-navy/8">
          <Link
            href={`/gallery/${gallery.slug.current}`}
            className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-charcoal no-underline group/link"
            aria-label={`View collection: ${gallery.title}`}
          >
            <span>View Collection</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
