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
            <p className="font-bold text-white uppercase tracking-widest text-sm mb-8">
              TO EVERYONE WHO WALKS INTO AN SMJMUN ROOM
            </p>
            <p>I still remember what it felt like to enter a committee room as a delegate.</p>
            <p>You may know your research. You may have prepared your opening speech. You may even know exactly what you want to say.</p>
            <p>And yet, when the room becomes quiet and it is finally your turn to speak, there is always that moment of hesitation.</p>
            <p>That moment matters. Because leadership often begins there.</p>
            <p>Not when everything is perfect. Not when you are completely confident. But when you decide to speak anyway.</p>
            <p>My journey through Model United Nations taught me far more than committee procedure or international affairs. It taught me how to listen, how to disagree without disrespect, how to prepare, how to recover from failure and how to stand behind an idea.</p>
            <p>Over time, I realised that the greatest part of the journey was not the awards. It was watching other people discover their own voices.</p>
            <p>That is one of the reasons SMJMUN exists. We want to create rooms where students can challenge themselves, meet different perspectives, learn from experienced people and discover abilities they may not have known they possessed.</p>
            <p>And our ambition goes beyond a three-day conference. We want to work with institutions to make leadership, communication and global awareness a meaningful part of a student's educational journey.</p>
            <p>To every delegate who walks into an SMJMUN conference:</p>
            <p>Do not come only to win. Come to learn. Come to listen. Come to challenge yourself. And leave with something that stays with you long after the final gavel.</p>
            <p className="font-[family-name:var(--font-playfair)] italic text-xl text-[#BB8B57] mt-8">
              Dare to enter the room. Rise through the experience. Impact the world beyond it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-[family-name:var(--font-playfair)] font-bold text-white text-xl">
              — Mr. Aarushh Sahu
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
