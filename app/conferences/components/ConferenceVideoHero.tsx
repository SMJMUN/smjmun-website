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
  <section className="relative h-screen min-h-[700px] overflow-hidden bg-navy">
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

    {/* Premium Overlay */}
    <div
      className="absolute inset-0 z-10"
      style={{
        background: `
          linear-gradient(
            90deg,
            rgba(4,33,71,0.94) 0%,
            rgba(4,33,71,0.82) 28%,
            rgba(4,33,71,0.55) 55%,
            rgba(4,33,71,0.18) 100%
          )
        `,
      }}
    />

    {/* Content */}
    <div className="relative z-20 h-full">
      <div className="content-wide h-full flex items-end">
        <div className="max-w-[760px] pb-24 lg:pb-32">

          {/* Eyebrow */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 text-gold text-[11px] font-semibold tracking-[0.35em] uppercase">
              SMJ MUN Conferences
            </span>
          </div>

      

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[620px]
              text-white/75
              text-[18px]
              lg:text-[20px]
              leading-[1.8]
            "
          >
            Join one of India's most distinguished Model United Nations
            experiences, bringing together ambitious students to debate,
            negotiate, collaborate, and shape solutions to global challenges.
          </p>

    

          {/* Actions */}
          <div className="mt-12 flex flex-wrap gap-4">

            <button
              onClick={() =>
                document
                  .getElementById("upcoming-conferences")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                bg-gold
                text-navy
                px-8
                py-4
                text-sm
                font-semibold
                tracking-[0.12em]
                uppercase
                transition-all
                hover:scale-[1.02]
              "
            >
              Explore Conferences
            </button>

            <button
              className="
                border
                border-white/20
                bg-white/5
                backdrop-blur-sm
                text-white
                px-8
                py-4
                text-sm
                font-semibold
                tracking-[0.12em]
                uppercase
                transition-all
                hover:bg-white/10
              "
            >
              View Highlights
            </button>

          </div>

        </div>
      </div>
    </div>

    {/* Bottom Fade */}
    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        h-40
        z-10
        bg-gradient-to-t
        from-[#F7F1E9]
        to-transparent
      "
    />
  </section>
);
}
