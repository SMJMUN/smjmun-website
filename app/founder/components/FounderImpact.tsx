'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const impactStats = [
  { value: 55, suffix: "+", label: "Best Delegate\nAwards" },
  { value: 50, suffix: "+", label: "Committees\nChaired" },
  { value: 70, suffix: "+", label: "National\nConferences" },
  { value: 11000, suffix: "+", label: "Delegates\nTrained" },
];

function StatCounter({ stat }: { stat: typeof impactStats[0] }) {
  const [ref, display] = useAnimatedCounter({ end: stat.value, suffix: stat.suffix });
  
  return (
    <div className="flex flex-col flex-1 w-full text-center md:text-left">
      <span 
        ref={ref as React.Ref<HTMLSpanElement>}
        className="font-[family-name:var(--font-playfair)] font-bold text-[#BB8B57] leading-none mb-4"
        style={{ fontSize: 'clamp(48px, 5vw, 64px)' }}
      >
        {display}
      </span>
      <span className="text-[11px] uppercase tracking-[0.15em] text-white/60 whitespace-pre-line leading-relaxed">
        {stat.label}
      </span>
    </div>
  );
}

export default function FounderImpact() {
  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
            {impactStats.map((stat, index) => (
              <React.Fragment key={index}>
                <StatCounter stat={stat} />
                
                {/* Vertical Divider for Desktop */}
                {index < impactStats.length - 1 && (
                  <div className="hidden md:block w-[1px] h-20 bg-gradient-to-b from-transparent via-[#BB8B57]/30 to-transparent flex-shrink-0" />
                )}
                
                {/* Horizontal Divider for Mobile */}
                {index < impactStats.length - 1 && (
                  <div className="block md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-[#BB8B57]/30 to-transparent" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
