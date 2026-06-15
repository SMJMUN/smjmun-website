import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Decorative grid texture */}
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
          style={{ fontSize: "clamp(100px, 16vw, 220px)", lineHeight: 1 }}
        >
          Gallery
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
            <div className="w-8 h-[1px] bg-gold/60" />
            <p className="text-label text-gold/80">Be Part of the Archive</p>
            <div className="w-8 h-[1px] bg-gold/60" />
          </div>

          {/* Heading */}
          <h2
            className="font-serif text-white font-bold leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Join Future Conferences
          </h2>

          {/* Description */}
          <p
            className="font-sans text-white/55 leading-[1.7] mb-10"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
          >
            Every conference creates memories that last a lifetime. Register
            for an upcoming SMJ MUN conference and become part of our
            growing archive of diplomacy, leadership, and global engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/conferences"
              id="gallery-cta-conferences"
              className="btn-outline inline-flex items-center gap-3"
              aria-label="Browse upcoming conferences"
            >
              Browse Conferences
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/register"
              id="gallery-cta-register"
              className="inline-flex items-center gap-3 font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold/80 transition-colors duration-300"
              aria-label="Register for a conference"
            >
              Register Now
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
