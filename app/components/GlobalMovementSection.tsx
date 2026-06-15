'use client';

import { motion } from 'framer-motion';
import NetworkMap from './NetworkMap';

const cities = [
  'New Delhi',
  'Dubai',
  'Singapore',
  'London',
  'New York',
];

export default function GlobalMovementSection() {
  return (
    <section
      className="
        relative
        overflow-hidden!
        bg-[#1A1A1A]!
        py-8!
            min-h-[550px]!
        
      "
    >
      <div
  className="
    absolute!
    inset-0!
    opacity-[0.03]!
    bg-[url('/images/noise.png')]!
    pointer-events-none!
  "
/>

<div
  className="
    absolute
    right-0!
    top-0!
    h-full!
    w-[50%]!
    bg-gradient-to-l1
    from-[#bb8b57]/10!
    to-transparent!
  "
/>
 <div className="relative! z-10! mx-auto! max-w-7xl! px-6! md:px-8!">
  <div className="grid! lg:grid-cols-[0.38fr_0.62fr] items-center! gap-16! lg:gap-24!">

    {/* LEFT CONTENT */}
    <div className="max-w-md">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          mb-5!
          text-xs!
          uppercase!
          tracking-[0.35em]!
          text-[#bb8b57]!
          font-medium!
        "
      >
        A Global Movement
      </motion.p>

      <motion.h5
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          text-white!
          text-3xl!
          leading-[1.05]!
          tracking-[-0.03em]!
          font-serif!
          
        "
      >
        Connecting young minds.
        <br />
        Inspiring dialogue.
        <br />
        Creating global impact.
      </motion.h5>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="
          mt-10!
          text-white/65!
          text-lg!
          leading-relaxed!
        "
      >
        Our reach extends beyond borders,
        bringing together future leaders
        from across continents.
      </motion.p>

      <motion.button
        whileHover={{ x: 4 }}
        className="
          mt-10!
          border!
          border-[#bb8b57]/40!
          px-7!
          py-4!
          text-white!
          text-sm!
          tracking-[0.08em]!
          flex!
          items-center!
          gap-4!
          hoverbg-white/5!
          transition-all!
        "
      >
        Explore Our Global Reach
        <span>→</span>
      </motion.button>

      <div className="mt-14! flex! gap-12!">
        <div>
          <p className="text-4xl! font-serif! text-[#bb8b57]!">
            50K+
          </p>
          <p className="mt-1! text-white/50! text-sm!">
            Delegates
          </p>
        </div>

        <div>
          <p className="text-4xl! font-serif! text-[#bb8b57]!">
            20+
          </p>
          <p className="mt-1! text-white/50! text-sm!">
            Countries
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT MAP */}
    <div className="relative">

      <div
        className="
          absolute!
          inset-0!
          bg-[#bb8b57]/10!
          blur-[140px]!
          rounded-full!
        "
      />

      <div className="relative h-[450px]!">
        <NetworkMap />
      </div>

    </div>
  </div>
</div>
    </section>
  );
}
