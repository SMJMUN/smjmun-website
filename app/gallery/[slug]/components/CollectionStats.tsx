import type { Gallery } from "@/lib/sanity/types";

interface CollectionStatsProps {
  gallery: Gallery;
}

export default function CollectionStats({ gallery }: CollectionStatsProps) {
  const stats = [
    {
      value: gallery.photoCount != null ? String(gallery.photoCount) : "—",
      label: "Photographs",
    },
    {
      value:
        gallery.delegateCount != null ? `${gallery.delegateCount}+` : "—",
      label: "Delegates",
    },
    {
      value:
        gallery.committeeCount != null && gallery.committeeCount > 0
          ? String(gallery.committeeCount)
          : "—",
      label: "Committees",
    },
    {
      value: gallery.location
        ? gallery.location.split(",")[gallery.location.split(",").length - 1]?.trim() ?? "India"
        : "India",
      label: "Location",
    },
  ];

  return (
    <section
      className="py-16 lg:py-20 border-b"
      style={{ borderColor: "rgba(4,33,71,0.08)", backgroundColor: "#ffffff" }}
      aria-label="Collection statistics"
    >
      <div className="content-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="font-serif font-bold tracking-[-0.02em] text-navy mb-2 group-hover:text-gold transition-colors duration-500"
                style={{ fontSize: "clamp(36px,4.5vw,60px)", lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-navy/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
