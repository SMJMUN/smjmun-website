'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

const journeySteps = [
  {
    title: "The Delegate",
    description: "The journey began with participation. Learning committee procedure, researching countries, understanding international issues and discovering the confidence that comes from standing behind an argument."
  },
  {
    title: "The Competitor",
    description: "Experience turned into excellence. Years of conferences, preparation and continuous learning resulted in 55+ Best Delegate awards across national and international platforms."
  },
  {
    title: "The Executive Board Member",
    description: "The perspective changed from being inside the committee to helping shape it. Chairing committees brought a deeper understanding of moderation, leadership, conflict management and creating meaningful debate."
  },
  {
    title: "The Trainer",
    description: "The experience became something to share. Training delegates revealed one of the most rewarding parts of the journey — watching students who initially hesitate to speak gradually find confidence in their own voice."
  },
  {
    title: "The Founder",
    description: "Eventually, the goal became bigger than individual achievement. SMJMUN was created to build the kind of platform Aarushh believed young people deserved."
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
