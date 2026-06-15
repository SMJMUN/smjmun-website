import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";
import { MapPin, Calendar, Images, ExternalLink } from "lucide-react";

interface CollectionHeroProps {
  gallery: Gallery;
}

function formatEventDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function CollectionHero({ gallery }: CollectionHeroProps) {
  const coverUrl = gallery.coverImage
    ? urlFor(gallery.coverImage).width(1600).height(900).quality(88).url()
    : null;

  const date = gallery.eventDate ? formatEventDate(gallery.eventDate) : null;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(140px, 16vw, 200px)",
        paddingBottom: "clamp(80px, 9vw, 120px)",
        minHeight: "80vh",
        backgroundColor: "#0d1520",
      }}
      aria-labelledby="collection-hero-title"
    >
      {/* Background hero image */}
      {coverUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={coverUrl}
            alt={`${gallery.title} — cover photograph`}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover opacity-35"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
      )}

      {/* Rich gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(4,10,20,0.97) 0%, rgba(4,10,20,0.65) 50%, rgba(4,10,20,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold grid texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187,139,87,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187,139,87,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="content-wide relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-2 list-none">
            <li>
              <Link
                href="/gallery"
                className="font-sans text-[11px] tracking-[0.18em] uppercase text-white/35 hover:text-gold/70 transition-colors duration-200 no-underline"
              >
                Gallery
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-white/20 text-[10px]">›</span>
            </li>
            <li>
              <span
                className="font-sans text-[11px] tracking-[0.18em] uppercase text-gold/70"
                aria-current="page"
              >
                {gallery.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-gold/60" aria-hidden="true" />
          <p className="text-label text-gold">Conference Archive</p>
        </div>

        {/* Title */}
        <h1
          id="collection-hero-title"
          className="font-serif text-white font-bold leading-[0.97] tracking-[-0.025em] mb-8"
          style={{ fontSize: "clamp(40px, 6vw, 80px)", maxWidth: "900px" }}
        >
          {gallery.title}
        </h1>

        {/* Gold rule */}
        <div className="gold-rule mb-8" aria-hidden="true" />

        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-6 mb-10">
          {gallery.location && (
            <div className="flex items-center gap-2 text-white/55">
              <MapPin size={14} className="text-gold/70 flex-shrink-0" aria-hidden="true" />
              <span className="font-sans text-[13px] tracking-[0.05em]">{gallery.location}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-2 text-white/55">
              <Calendar size={14} className="text-gold/70 flex-shrink-0" aria-hidden="true" />
              <span className="font-sans text-[13px] tracking-[0.05em]">{date}</span>
            </div>
          )}
          {gallery.photoCount !== undefined && (
            <div className="flex items-center gap-2 text-white/55">
              <Images size={14} className="text-gold/70 flex-shrink-0" aria-hidden="true" />
              <span className="font-sans text-[13px] tracking-[0.05em]">{gallery.photoCount} Photographs</span>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8">
          {gallery.photoCount !== undefined && (
            <div>
              <div className="font-serif text-[clamp(28px,3.5vw,44px)] font-bold tracking-[-0.02em] text-white leading-none mb-1">
                {gallery.photoCount}
              </div>
              <div className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold/60">
                Photos
              </div>
            </div>
          )}
          {gallery.delegateCount !== undefined && (
            <div>
              <div className="font-serif text-[clamp(28px,3.5vw,44px)] font-bold tracking-[-0.02em] text-white leading-none mb-1">
                {gallery.delegateCount}+
              </div>
              <div className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold/60">
                Delegates
              </div>
            </div>
          )}
          {gallery.committeeCount !== undefined && gallery.committeeCount > 0 && (
            <div>
              <div className="font-serif text-[clamp(28px,3.5vw,44px)] font-bold tracking-[-0.02em] text-white leading-none mb-1">
                {gallery.committeeCount}
              </div>
              <div className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold/60">
                Committees
              </div>
            </div>
          )}
        </div>

        {/* Conference cross-link */}
        {gallery.conferenceSlug && (
          <div className="mt-10">
            <Link
              href={`/conferences/${gallery.conferenceSlug}`}
              className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-gold/80 hover:text-gold border border-gold/25 hover:border-gold/60 px-5 py-2.5 transition-all duration-300 no-underline"
              aria-label={`View conference details for ${gallery.conferenceTitle ?? gallery.title}`}
            >
              <ExternalLink size={12} aria-hidden="true" />
              View Conference
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
