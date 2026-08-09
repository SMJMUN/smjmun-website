'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

const journeySteps = [
  {
    title: "Early MUN Experience",
    description: "Started the journey as a passionate delegate, immersing in debate, foreign policy, and diplomacy."
  },
  {
    title: "Leadership & Chairing",
    description: "Transitioned to the Executive Board, shaping committee dynamics and moderating high-level discourse."
  },
  {
    title: "Training & Mentorship",
    description: "Began training junior delegates, realizing the profound need for structured, accessible diplomatic education."
  },
  {
    title: "National Conference Experience",
    description: "Traveled across the country, participating in 70+ national conferences and building a robust network of future leaders."
  },
  {
    title: "Founding SMJMUN",
    description: "Launched the first SMJMUN conference to democratize access to world-class Model United Nations experiences."
  },
  {
    title: "Building Institutional Partnerships",
    description: "Expanding the vision beyond a single event, partnering with schools to embed diplomatic thinking into mainstream education."
  }
];

export default function FounderJourney() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-20">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <Reveal>
          <h2 
            className="font-[family-name:var(--font-playfair)] font-bold text-white mb-16 text-center"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            From Delegate to Founder
          </h2>
        </Reveal>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {journeySteps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-[#0A0A0A] border-2 border-[#BB8B57] rounded-full z-10" />
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
