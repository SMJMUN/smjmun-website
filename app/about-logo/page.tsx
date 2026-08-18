import React from 'react';
import { Metadata } from 'next';
import LogoHero from './components/LogoHero';
import LogoElements from './components/LogoElements';
import LogoIdentity from './components/LogoIdentity';

export const metadata: Metadata = {
  title: 'Logo Philosophy | SMJMUN',
  description: 'The philosophy and profound meaning behind the Shri Seth Mangilal Ji Sahu International Model United Nations emblem.',
};

export default function AboutLogoPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white/80 font-sans selection:bg-[#BB8B57]/30">
      <LogoHero />
      <LogoElements />
      <LogoIdentity />
    </main>
  );
}
