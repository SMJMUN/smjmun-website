import React from "react";

const STATS = [
  { value: "5000+", label: "Delegates Hosted" },
  { value: "100+", label: "Partner Schools" },
  { value: "20+", label: "Conferences Held" },
  { value: "30+", label: "Countries Represented" },
];

export default function ConferenceStats() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--ds-bg-primary)',
        borderTop: '1px solid var(--ds-border)',
        borderBottom: '1px solid var(--ds-border)',
      }}
    >
      {/* Dot grid watermark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(187,139,87,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="content-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center group">
              {/* Number */}
              <div
                className="font-serif font-bold transition-colors duration-500"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  color: 'var(--ds-gold)',
                }}
              >
                {stat.value}
              </div>

              {/* Divider rule */}
              <div
                className="mx-auto my-4"
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: 'rgba(187,139,87,0.35)',
                  transition: 'width 300ms ease',
                }}
              />

              {/* Label */}
              <div
                className="font-sans font-medium uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  color: 'var(--ds-text-muted)',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
