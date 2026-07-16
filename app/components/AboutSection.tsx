"use client";


import Image from 'next/image';
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/community-3.png"
          alt="Founder"
          className="h-full w-full object-cover object-center md:object-right"
         fill sizes="(max-width: 768px) 100vw, 50vw" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Left Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <span className="section-label">About SMJMUN</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-3xl font-semibold leading-tight text-white md:text-5xl"
          >
            MUN teaches you how to speak.<br/> We exist to give you something worth saying.
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 border-l-2 border-[#BB8B57] pl-6"
          >
            <p className="max-w-xl text-lg leading-8 text-[#B8B8B8]">
              Since 2023, SMJMUN has trained thousands of delegates through conferences, institutional programmes, and leadership training — building not just confident speakers, but thoughtful, responsible young leaders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 right-10 flex flex-col gap-1"
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-5 w-5 rotate-45 border-b-2 border-r-2 border-white/50"
          />
        ))}
      </motion.div>
    </section>
  );
}