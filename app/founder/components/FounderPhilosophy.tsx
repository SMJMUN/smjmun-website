'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

export default function FounderPhilosophy() {
  return (
    <section className="py-32 md:py-40 bg-[#f8f8f8] relative z-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <Reveal>
          {/* Oversized Quotation Mark */}
          <div 
            className="font-[family-name:var(--font-playfair)] text-[#BB8B57]/20 leading-none mb-[-40px] md:mb-[-60px]"
            style={{ fontSize: 'clamp(120px, 15vw, 200px)' }}
          >
            "
          </div>
          
          <blockquote 
            className="font-[family-name:var(--font-playfair)] font-bold text-[#042147] italic relative z-10 mb-12"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
          >
            A journey of a thousand miles begins with a single step.
          </blockquote>
          
          <div className="w-16 h-[2px] bg-[#BB8B57] mx-auto mb-12" />
          
          <p className="text-[#042147]/80 text-lg md:text-xl font-light leading-relaxed max-w-[700px] mx-auto">
            True leadership isn't born in the grand halls of international summits, but in the small, courageous decisions young people make every day. By providing a platform for these first steps, we aren't just simulating the United Nations — we are building the foundation for tomorrow's reality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
