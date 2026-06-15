interface CollectionSummaryProps {
  description: string;
  title: string;
}

export default function CollectionSummary({
  description,
  title,
}: CollectionSummaryProps) {
  return (
    <section
      className="section-padding-sm"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="collection-summary-heading"
    >
      <div className="content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left: Label column */}
          <div className="lg:pt-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold/60" aria-hidden="true" />
              <p className="text-label text-gold">Conference Summary</p>
            </div>
            <h2
              id="collection-summary-heading"
              className="font-serif text-navy font-bold leading-[1.1] tracking-[-0.015em]"
              style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
            >
              {title}
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p
              className="font-sans leading-[1.8] text-navy/65"
              style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }}
            >
              {description}
            </p>

            {/* Gold accent line */}
            <div
              className="mt-8 w-16 h-[1px]"
              style={{ backgroundColor: "rgba(187,139,87,0.4)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
