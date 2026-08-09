'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

export default function FounderVision() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#BB8B57]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#BB8B57]">Beyond the Conference</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 
            className="font-[family-name:var(--font-playfair)] font-bold text-white mb-12"
            style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.1 }}
          >
            A Vision for Institutional Leadership
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <Reveal delay={0.2}>
            <p className="text-white/80 font-light text-lg leading-relaxed mb-6">
              The ultimate goal of SMJMUN extends far beyond hosting successful conferences. Aarushh envisions a holistic, interconnected ecosystem where youth leadership is not an extracurricular activity, but a core component of mainstream education. 
            </p>
            <p className="text-white/80 font-light text-lg leading-relaxed">
              This means building long-term educational partnerships with schools and universities, institutionalizing diplomatic training, and creating continuous leadership pipelines that bridge the gap between classroom theory and real-world execution.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <ul className="space-y-6">
              {[
                "Building long-term educational partnerships",
                "Connecting diverse academic institutions",
                "Creating continuous leadership opportunities",
                "Expanding MUN education to all demographics",
                "Developing a robust youth leadership ecosystem"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 bg-[#BB8B57] rounded-full" />
                  <span className="text-white/90 text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
