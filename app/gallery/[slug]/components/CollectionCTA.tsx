import Link from "next/link";

interface CollectionCTAProps {
  conferenceSlug?: string;
  conferenceTitle?: string;
}

export default function CollectionCTA({
  conferenceSlug,
  conferenceTitle,
}: CollectionCTAProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#042147" }}
      aria-labelledby="collection-cta-heading"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187,139,87,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187,139,87,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 translate-x-[8%] translate-y-[20%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold text-white/[0.025]"
          style={{ fontSize: "clamp(80px, 14vw, 200px)", lineHeight: 1 }}
        >
          Archive
        </span>
      </div>

      <div
        className="content-wide relative z-10 text-center"
        style={{
          paddingTop: "clamp(72px, 8vw, 112px)",
          paddingBottom: "clamp(72px, 8vw, 112px)",
        }}
      >
        <div className="max-w-[640px] mx-auto">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold/60" aria-hidden="true" />
            <p className="text-label text-gold/80">Become Part of History</p>
            <div className="w-8 h-[1px] bg-gold/60" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="collection-cta-heading"
            className="font-serif text-white font-bold leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Join the Next Conference
          </h2>

          {/* Body */}
          <p
            className="font-sans text-white/55 leading-[1.7] mb-10"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
          >
            Every SMJ MUN conference is a chapter in our growing institutional
            archive. Register for an upcoming event and let your experience
            be captured for generations of future delegates.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {conferenceSlug && (
              <Link
                href={`/conferences/${conferenceSlug}`}
                id="collection-cta-conference-link"
                className="btn-outline inline-flex items-center gap-3"
                aria-label={`View conference: ${conferenceTitle ?? "this conference"}`}
              >
                View Conference
                <span aria-hidden="true">→</span>
              </Link>
            )}
            <Link
              href="/conferences"
              id="collection-cta-all-conferences"
              className={`inline-flex items-center gap-3 font-sans text-[12px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                conferenceSlug
                  ? "text-gold hover:text-gold/80"
                  : "btn-outline"
              }`}
              aria-label="Browse all conferences"
            >
              All Conferences
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
