export default function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#18171C",
        paddingTop: "clamp(140px, 16vw, 200px)",
        paddingBottom: "clamp(80px, 9vw, 120px)",
      }}
    >
      {/* Subtle gold grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187,139,87,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187,139,87,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large watermark text */}
      <div
        className="absolute bottom-0 right-0 translate-x-[5%] translate-y-[20%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold text-white/[0.025]"
          style={{ fontSize: "clamp(120px, 20vw, 280px)", lineHeight: 1 }}
        >
          Archive
        </span>
      </div>

      <div className="content-wide relative z-10">
        <div className="max-w-[800px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-gold/60" />
            <p className="text-label text-gold">SMJ MUN Archive</p>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-white font-bold leading-[0.97] tracking-[-0.025em] mb-8"
            style={{ fontSize: "clamp(52px, 7.5vw, 100px)" }}
          >
            Conference
            <br />
            <em className="not-italic text-gold/80">Gallery</em>
          </h1>

          {/* Thin gold rule */}
          <div className="gold-rule mb-8" />

          {/* Subtitle */}
          <p
            className="font-sans text-white/55 leading-[1.7]"
            style={{ fontSize: "clamp(16px, 1.6vw, 19px)", maxWidth: "520px" }}
          >
            Capturing moments of diplomacy, leadership, and global engagement.
            A visual archive of every conference, committee session, and ceremony.
          </p>

          {/* Bottom meta */}
          <div className="flex items-center gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1px] bg-gold/40" />
              <p className="font-sans text-[11px] tracking-[0.12em] text-white/30 uppercase">
                Est. 2024 · Diplomacy &amp; Leadership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
