import React from "react";
import type { Conference } from "@/lib/sanity/types";
import { Building, Wifi, Coffee, Mic, MapPin } from "lucide-react";

export default function VenueSection({ conference }: { conference: Conference }) {
  if (!conference.venue) return null;

  const features = [
    { icon: Building, title: "Committee Rooms",  desc: "Professionally designed spaces for engaging debate and collaboration." },
    { icon: Mic,      title: "A/V Equipment",    desc: "Modern presentation and audio systems for every session." },
    { icon: Coffee,   title: "Networking Areas", desc: "Dedicated lounges for delegates, advisors, and guests." },
    { icon: Wifi,     title: "Connectivity",     desc: "Reliable high-speed internet access throughout the venue." },
  ];

  return (
    <section
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--ds-bg-primary)',
        borderTop: '1px solid var(--ds-border)',
      }}
    >
      {/* Gold glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '40%',
          height: '80%',
          background: 'radial-gradient(ellipse at 90% 50%, rgba(187,139,87,0.07), transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div>
            <span className="section-label block mb-5">Conference Venue</span>

            <h2
              className="font-serif text-white"
              style={{
                fontSize: 'clamp(38px, 6vw, 72px)',
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                fontWeight: 700,
              }}
            >
              {conference.venue}
            </h2>

            <div
              className="flex items-center gap-2 mt-5"
              style={{ color: 'var(--ds-text-muted)' }}
            >
              <MapPin className="w-4 h-4" style={{ color: 'var(--ds-gold)' }} />
              <span className="font-sans text-[16px]" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                New Delhi, India
              </span>
            </div>

            <div className="gold-rule mt-8 mb-8" />

            <p
              className="font-sans leading-[1.85] max-w-xl"
              style={{
                fontSize: '17px',
                color: 'var(--ds-text-muted)',
                fontFamily: 'var(--font-body), system-ui, sans-serif',
              }}
            >
              Experience the grandeur and professional atmosphere of one of New Delhi&apos;s premier conference venues, providing the perfect backdrop for high-level diplomatic discourse, committee sessions, networking, and collaboration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { v: "500+", l: "Delegates" },
                { v: "8+",   l: "Committees" },
                { v: "3",    l: "Conference Days" },
                { v: "100+", l: "Institutions" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="font-serif"
                    style={{ fontSize: '38px', fontWeight: 700, color: 'var(--ds-gold)', lineHeight: 1 }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase mt-1"
                    style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Venue Highlights card */}
          <div className="relative">
            <div
              className="card-ds p-8"
              style={{ borderRadius: '28px' }}
            >
              <div className="mb-8">
                <h3
                  className="font-serif text-white mb-2"
                  style={{ fontSize: '26px', fontWeight: 700 }}
                >
                  Venue Highlights
                </h3>
                <p
                  className="font-sans leading-[1.7]"
                  style={{
                    fontSize: '14px',
                    color: 'var(--ds-text-muted)',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  Designed to deliver a world-class conference experience for delegates and advisors.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 transition-colors duration-300"
                      style={{
                        borderRadius: '14px',
                        border: '1px solid var(--ds-border)',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <Icon
                        className="w-6 h-6 mb-4"
                        strokeWidth={1.5}
                        style={{ color: 'var(--ds-gold)' }}
                      />
                      <h4
                        className="font-sans font-semibold mb-2"
                        style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="font-sans text-sm leading-[1.6]"
                        style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating location chip */}
            <div
              className="absolute -bottom-6 -left-6 px-5 py-4 hidden lg:flex items-center gap-3"
              style={{
                backgroundColor: 'var(--ds-surface)',
                border: '1px solid var(--ds-border)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <MapPin className="w-5 h-5" style={{ color: 'var(--ds-gold)' }} />
              <div>
                <p
                  className="font-sans font-medium"
                  style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  New Delhi
                </p>
                <p
                  className="font-sans text-sm"
                  style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Diplomatic &amp; Political Capital
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}