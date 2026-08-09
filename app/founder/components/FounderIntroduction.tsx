'use client';

import React from 'react';
import { Reveal } from '@/components/program/shared/Reveal';

export default function FounderIntroduction() {
  return (
    <section id="founder-intro" className="py-24 md:py-32 bg-[#0A0A0A] relative z-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#BB8B57]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#BB8B57]">The Person Behind SMJMUN</span>
          </div>
        </Reveal>

        <div className="space-y-8 text-lg md:text-xl font-light text-white/80 leading-[1.8] md:leading-[2]">
          <Reveal delay={0.1}>
            <p>
              Aarushh Sahu founded SMJMUN with a singular conviction: that world-class diplomatic education should not remain the exclusive privilege of a select few schools in major metropolitan cities. Recognizing the transformative power of discourse and leadership at a young age, he envisioned a platform that could bring the authentic Model United Nations experience to students across the nation, regardless of their background.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p>
              His journey began on the debate floor. As a passionate delegate, he quickly immersed himself in the MUN circuit, developing a profound understanding of international relations, public policy, and crisis management. This early exposure fostered a deep appreciation for the art of negotiation and the importance of youth voices in global conversations. 
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p>
              Over time, his role evolved. The transition from a competitive participant to an executive board member and trainer allowed him to observe the systemic gaps in MUN accessibility and quality. He didn't just want to win awards; he wanted to elevate the standard of debate for everyone. Today, as a founder, he builds the very rooms he once competed in, dedicating his expertise to shaping a generation of informed, empathetic, and capable leaders.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
