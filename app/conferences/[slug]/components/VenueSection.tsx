import React from "react";
import type { Conference } from "@/lib/sanity/types";
import { Building, Wifi, Coffee, Mic } from "lucide-react";

export default function VenueSection({ conference }: { conference: Conference }) {
  if (!conference.venue) return null;

  return (
    <section className="section-padding-lg bg-ivory border-t border-navy/10">
      <div className="content-editorial text-center">
        <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
          The Venue
        </span>
        <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-bold tracking-[-0.02em] text-navy mb-8 leading-[1.05]">
          {conference.venue}
        </h2>
        <div className="gold-rule mx-auto mb-10" />
        
        <p className="font-sans text-[18px] leading-[1.8] text-navy/70 mb-16 max-w-[700px] mx-auto">
          Experience the grandeur and professional atmosphere of our carefully selected venue, providing the perfect backdrop for high-level diplomatic discourse and collaboration.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Building size={32} className="text-gold mb-4" strokeWidth={1.5} />
            <span className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-navy">State-of-the-art<br/>Committees</span>
          </div>
          <div className="flex flex-col items-center">
            <Mic size={32} className="text-gold mb-4" strokeWidth={1.5} />
            <span className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-navy">Premium A/V<br/>Equipment</span>
          </div>
          <div className="flex flex-col items-center">
            <Coffee size={32} className="text-gold mb-4" strokeWidth={1.5} />
            <span className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-navy">Networking<br/>Lounges</span>
          </div>
          <div className="flex flex-col items-center">
            <Wifi size={32} className="text-gold mb-4" strokeWidth={1.5} />
            <span className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-navy">High-Speed<br/>Connectivity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
