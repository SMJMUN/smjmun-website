import React from "react";
import type { Conference } from "@/lib/sanity/types";

export default function CommitteeGrid({ conference }: { conference: Conference }) {
  if (!conference.committees || conference.committees.length === 0) return null;

  return (
    <section className="pt-16 pb-8 border-t border-navy/10 mt-16">
      <div className="mb-12">
        <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold block mb-4">
          Committees
        </span>
        <h2 className="text-subheading text-navy">
          Simulations & Agendas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conference.committees.map((committee, i) => (
          <div
            key={i}
            className="group relative bg-white border border-navy/10 p-8 lg:p-10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 overflow-hidden"
          >
            {/* Elegant Background Numeral */}
            <div className="absolute -right-4 -bottom-8 font-serif text-[120px] font-bold text-navy/[0.03] select-none pointer-events-none group-hover:text-gold/[0.05] transition-colors duration-500">
              {String(i + 1).padStart(2, '0')}
            </div>
            
            <h3 className="font-serif text-[22px] font-bold text-navy mb-4 relative z-10 leading-[1.3] group-hover:text-charcoal transition-colors duration-300">
              {committee.name}
            </h3>
            
            {committee.agenda && (
              <p className="font-sans text-[14px] leading-[1.7] text-navy/70 mb-6 relative z-10">
                <span className="font-semibold text-navy">Agenda:</span> {committee.agenda}
              </p>
            )}

            {committee.chairperson && (
              <div className="pt-6 border-t border-navy/10 relative z-10">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-gold/80 block mb-1">
                  Chairperson
                </span>
                <div className="font-sans text-[14px] font-medium text-navy">
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
