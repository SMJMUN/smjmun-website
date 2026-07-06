"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

export default function ConferenceVideoHero({ conference }: { conference?: Conference }) {
  const bgUrl = conference?.heroImage
    ? urlFor(conference.heroImage).width(1920).height(1080).quality(85).url()
    : null;
return (
  <section className="relative h-screen min-h-[700px] overflow-hidden" style={{ backgroundColor: 'var(--ds-bg-primary)' }}>
    {/* Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
    >
      <source src="/conf-hero-vid.mp4" type="video/mp4" />
    </video>

    {/* Dark Editorial Overlay */}
    <div
      className="absolute inset-0 z-10"
      style={{
        background: `
          linear-gradient(
            90deg,
            rgba(10,10,10,0.96) 0%,
            rgba(10,10,10,0.84) 30%,
            rgba(10,10,10,0.55) 58%,
            rgba(10,10,10,0.18) 100%
          )
        `,
      }}
    />

    {/* Gold accent radial */}
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 75% 40%, rgba(187,139,87,0.12), transparent 55%)',
      }}
    />

    {/* Dot grid — matches landing page */}
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(187,139,87,0.10) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />

    {/* Content */}
    <div className="relative z-20 h-full">
      <div className="content-wide h-full flex items-end">
        <div className="max-w-[760px] pb-24 lg:pb-32">

          {/* Eyebrow */}
          <div className="mb-6">
            <span className="section-label">
              SMJ MUN Conferences
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-white"
            style={{
              fontSize: 'clamp(42px, 6vw, 84px)',
              fontWeight: 700,
              lineHeight: 0.97,
              letterSpacing: '-0.03em',
            }}
          >
            Where Leaders<br />
            <span style={{ color: 'var(--ds-gold)' }}>Are Forged.</span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 max-w-[580px] leading-[1.75]"
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              color: 'var(--ds-text-secondary)',
            }}
          >
            Join one of India&apos;s most distinguished Model United Nations
            experiences, bringing together ambitious students to debate,
            negotiate, collaborate, and shape solutions to global challenges.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("upcoming-conferences")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-ds-primary"
            >
              Explore Conferences
            </button>

            <button className="btn-ds-secondary">
              View Highlights
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Fade — dark, matching bg */}
    <div
      className="absolute bottom-0 left-0 right-0 h-40 z-10"
      style={{ background: 'linear-gradient(to top, var(--ds-bg-primary), transparent)' }}
    />
  </section>
);
}
