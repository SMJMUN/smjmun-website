const STATS = [
  { value: "5,000+", label: "Photos" },
  { value: "30+", label: "Events" },
  { value: "100+", label: "Schools" },
  { value: "10+", label: "Cities" },
];

export default function GalleryStats() {
  return (
    <section className="py-20 bg-white border-b border-navy/8">
      <div className="content-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-serif text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.02em] text-navy mb-2 group-hover:text-gold transition-colors duration-500">
                {stat.value}
              </div>
              <div className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-navy/45">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
