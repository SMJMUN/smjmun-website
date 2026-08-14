import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/gallery/types";

interface GalleryHeroProps {
  featuredGallery?: Gallery | null;
}

export default function GalleryHero({ featuredGallery }: GalleryHeroProps) {
  const coverUrl = featuredGallery?.coverImage
    ? urlFor(featuredGallery.coverImage).width(1600).height(900).quality(85).url()
    : null;

  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center"
      style={{
        backgroundColor: "#18171C",
        minHeight: "70vh",
        paddingTop: "clamp(120px, 14vw, 160px)",
        paddingBottom: "clamp(60px, 7vw, 90px)",
      }}
    >
      {/* Background Image */}
      {coverUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={coverUrl}
            alt="Moments That Define SMJMUN"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
      )}

      {/* Rich gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(24,23,28,1) 0%, rgba(24,23,28,0.5) 50%, rgba(24,23,28,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle gold grid texture */}
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

      <div className="content-wide relative z-10">
        <div className="max-w-[800px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-label text-gold uppercase tracking-[0.2em] font-semibold text-[11px]">SMJMUN Archive</p>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-white font-bold leading-[0.97] tracking-[-0.025em] mb-8"
            style={{ fontSize: "clamp(52px, 7.5vw, 100px)" }}
          >
            Moments That
            <br />
            Define <em className="not-italic text-gold">SMJMUN</em>
          </h1>

          {/* Thin gold rule */}
          <div className="w-12 h-[2px] bg-gold mb-8" />

          {/* Subtitle */}
          <p
            className="font-sans text-white/70 leading-[1.7]"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)", maxWidth: "480px" }}
          >
            A visual record of diplomacy, leadership, debate and community.
            Explore the journey of ideas that continue to shape tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
