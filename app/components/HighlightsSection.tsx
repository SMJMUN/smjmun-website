'use client';

import React from 'react';
import YoutubeCard from './YoutubeCard';
import { Reveal } from '@/components/program/shared/Reveal';

const HIGHLIGHTS_URLS = [
  'https://www.youtube.com/shorts/KC1vhEubL-4',
  'https://www.youtube.com/shorts/hxQSbC-nPFs',
  'https://www.youtube.com/shorts/DT_ZeQR_lZo',
  'https://www.youtube.com/shorts/sVZM_XzMfTM',
];

export default function HighlightsSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
            View Highlights
          </h2>
          <div className="w-24 h-1 bg-[#BB8B57] mx-auto" />
        </Reveal>
        
        <Reveal>
          <YoutubeCard urls={HIGHLIGHTS_URLS} />
        </Reveal>
      </div>
    </section>
  );
}
