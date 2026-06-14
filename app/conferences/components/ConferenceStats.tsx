import React from "react";

const STATS = [
  { value: "5000+", label: "Delegates Hosted" },
  { value: "100+", label: "Partner Schools" },
  { value: "20+", label: "Conferences Held" },
  { value: "30+", label: "Countries Represented" },
];

export default function ConferenceStats() {
  return (
    <section className="py-24 bg-white border-b border-navy/10">
      <div className="content-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-serif text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.02em] text-navy mb-2 group-hover:text-gold transition-colors duration-500">
                {stat.value}
              </div>
              <div className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-navy/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
