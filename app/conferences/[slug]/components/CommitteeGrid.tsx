import React from "react";
import type { Conference } from "@/lib/sanity/types";

export default function CommitteeGrid({ conference }: { conference: Conference }) {
  if (!conference.committees || conference.committees.length === 0) return null;

  return (
    <section
      className="pt-16 pb-8 mt-16"
      style={{ borderTop: '1px solid var(--ds-border)' }}
    >
      <div className="mb-12">
        <span className="section-label block mb-4">Committees</span>
        <h2
          className="font-serif text-white"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Simulations &amp; Agendas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conference.committees.map((committee, i) => (
          <div
            key={i}
            className="card-ds group relative p-8 lg:p-10 overflow-hidden"
            style={{
              borderRadius: 'var(--ds-radius-md)',
              transition: 'border-color 500ms ease, transform 400ms ease',
            }}
          >
            {/* Ghost numeral watermark */}
            <div
              className="absolute -right-3 -bottom-6 font-serif font-bold select-none pointer-events-none transition-colors duration-500"
              style={{
                fontSize: '120px',
                lineHeight: 1,
                color: 'rgba(187,139,87,0.04)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <h3
              className="font-serif text-white mb-4 relative z-10 leading-[1.3] group-hover:text-[#BB8B57] transition-colors duration-300"
              style={{ fontSize: '21px', fontWeight: 700 }}
            >
              {committee.name}
            </h3>

            {committee.agenda && (
              <p
                className="font-sans leading-[1.75] mb-6 relative z-10"
                style={{
                  fontSize: '14px',
                  color: 'var(--ds-text-muted)',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Agenda: </span>
                {committee.agenda}
              </p>
            )}

            {committee.chairperson && (
              <div
                className="pt-5 relative z-10"
                style={{ borderTop: '1px solid var(--ds-border)' }}
              >
                <span
                  className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1"
                  style={{ color: 'var(--ds-gold)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Chairperson
                </span>
                <div
                  className="font-sans text-[14px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  {committee.chairperson}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
