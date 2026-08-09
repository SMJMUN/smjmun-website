'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderHero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('founder-intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-[#0A0A0A] flex flex-col justify-center overflow-hidden pt-24 md:pt-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#BB8B57] mb-6">
              Founder & President
            </span>
            <h1 
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(48px, 6vw, 82px)', letterSpacing: '-0.02em' }}
            >
              Aarushh Sahu
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-[500px] mb-12">
              Building a generation of confident, informed, and globally minded young leaders.
            </p>
            
            <button 
              onClick={scrollToNext}
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-white hover:text-[#BB8B57] transition-colors duration-300"
            >
              <span>Explore His Journey</span>
              <span className="w-8 h-[1px] bg-white/30 group-hover:bg-[#BB8B57] transition-colors duration-300 relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r border-b border-current -rotate-45 transform translate-x-1/2" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right: Editorial Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative order-1 md:order-2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full relative"
          >
            {/* Editorial Frame */}
            <div className="absolute inset-4 md:inset-8 border border-[#BB8B57]/30 z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[#BB8B57]/10 z-10 mix-blend-overlay pointer-events-none" />
            
            <Image
              src="/images/founder-2.jpeg"
              alt="Aarushh Sahu"
              fill
              className="object-cover object-top grayscale-[20%] contrast-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

      </div>

      {/* Subtle background element */}
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#397fb7]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
