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
              Aarushh Sahu is the Founder and President of SMJMUN and a passionate advocate for experiential youth education.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              His journey with Model United Nations began as a delegate. What started as participation gradually became a deeper pursuit of understanding — of international affairs, public policy, structured debate, negotiation and leadership.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Over the years, Mr. Sahu participated in 70+ national and 10+ international Model United Nations conferences, earning 55+ Best Delegate awards and serving on the Executive Board of 50+ committees.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p>
              The experience eventually moved beyond competition. As an Executive Board member and trainer, he began working with younger delegates and observing the difference that structured mentorship could make.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <p>
              That experience changed the question. It was no longer simply: <br/><br/>
              <em>“How can I become a better delegate?”</em><br/><br/>
              It became:<br/><br/>
              <em>“How can I create better opportunities for others?”</em><br/><br/>
              That question became the foundation of SMJMUN.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>
              Today, Aarushh works toward creating platforms where students can develop the confidence to speak, the discipline to prepare, the curiosity to understand and the courage to lead.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              His vision for SMJMUN extends beyond conferences. He aims to build long-term relationships with educational institutions and create a stronger ecosystem for youth leadership and experiential learning.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
