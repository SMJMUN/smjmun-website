'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

export default function FounderMessage() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-20 border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] font-bold text-white mb-10">
            A Message from the Founder
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-white/80 font-light text-lg leading-[1.8]">
            <p>
              When we hosted the very first SMJMUN conference, our goal was simple: to create a space where students could debate freely, think critically, and step out of their comfort zones. We had no idea it would spark a movement.
            </p>
            <p>
              Today, watching thousands of delegates transform from hesitant speakers into commanding diplomats is the greatest privilege of my life. But this journey has never been about me, or even just about SMJMUN. It's about the incredible potential of Indian youth when given the right platform, the right mentorship, and the right opportunities.
            </p>
            <p>
              To every delegate, educator, and partner who has joined us on this journey: thank you. The future belongs to those who are bold enough to debate it, and I am incredibly excited to continue building that future alongside all of you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-[family-name:var(--font-playfair)] font-bold text-white text-xl">
              — Aarushh Sahu
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-[#BB8B57] mt-2">
              Founder & President, SMJMUN
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
