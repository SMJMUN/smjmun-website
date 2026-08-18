'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoHero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BB8B57]/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* The Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-12 drop-shadow-[0_0_30px_rgba(187,139,87,0.15)]"
        >
          <Image
            src="/images/SMJMUNLOGOFILE.png"
            alt="SMJMUN Official Emblem"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-[#BB8B57] text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Shri Seth Mangilal Ji Sahu International Model United Nations
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight">
            The Logo Philosophy
          </h1>
        </motion.div>

        {/* The Defining Statement / The Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Subtle Decorative Line */}
          <div className="w-px h-16 bg-gradient-to-b from-[#BB8B57] to-transparent mx-auto mb-10" />

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#BB8B57] leading-snug mb-10 text-center italic px-4">
            "MUN teaches you how to speak. SMJMUN exists to give you something worth saying."
          </blockquote>
          
          <div className="space-y-6 text-base md:text-lg text-white/70 leading-relaxed font-light px-4 text-justify md:text-center">
            <p>
              Most organizations in this space train delegates to perform. They teach procedure, language, and posture. These things have value. But SMJMUN was built on a different premise — that skill without substance is performance, and that the world needs people who do not just know how to argue, but who have something real to stand for.
            </p>
            <p>
              The SMJMUN emblem is not a logo. It is a statement of what we believe every participant is capable of becoming. Every element, every color, every line carries a specific philosophical meaning. Taken together, they form a map — not of a destination, but of a journey.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            <blockquote className="text-xl md:text-2xl font-serif text-[#BB8B57]/90 leading-snug text-center italic px-4">
              "The world is not handed to you complete. It is handed to you in progress."
            </blockquote>
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light px-4 text-justify md:text-center">
              This is what the emblem says. The world is incomplete. You are being asked to help finish it. Not when you are older, not when you are more qualified, not when you feel ready — but now. Beginning here. Beginning today.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default LogoHero;
