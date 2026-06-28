'use client';

import { motion } from 'framer-motion';
import NetworkMap from './NetworkMap';

export default function GlobalMovementSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/images/noise.png')" }}
      />

      {/* Gold glow — right side */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(187,139,87,0.07), transparent 70%)' }}
      />

      {/* ── MOBILE layout ── */}
      <div className="relative z-10 flex flex-col lg:hidden">

        {/* TEXT BLOCK — ~25 vh */}
        <div className="px-5 pt-8 pb-4" style={{ minHeight: '25vh' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3 text-xs"
          >
            A Global Movement
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-white leading-tight"
            style={{ fontSize: 'clamp(22px, 6vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Connecting young minds.{' '}
            <span className="text-[#BB8B57]">Inspiring dialogue.</span>
          </motion.h2>

          {/* Stats row */}
          <div className="mt-4 flex gap-8">
            <div>
              <p className="font-serif text-[#BB8B57] text-2xl font-bold leading-none">50K+</p>
              <p className="mt-1 text-[#7A7A7A] text-xs" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>Delegates</p>
            </div>
            <div>
              <p className="font-serif text-[#BB8B57] text-2xl font-bold leading-none">20+</p>
              <p className="mt-1 text-[#7A7A7A] text-xs" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>Countries</p>
            </div>
          </div>

          <motion.div whileHover={{ x: 4 }} className="mt-4">
            <button className="btn-ds-secondary text-sm py-2 px-4">
              Explore Our Global Reach
              <span className="btn-ds-arrow ml-2">→</span>
            </button>
          </motion.div>
        </div>

        {/* MAP BLOCK — ~45 vh */}
        <div className="relative w-full" style={{ height: '45vh', minHeight: '220px', maxHeight: '340px' }}>
          <div className="absolute inset-0 bg-[#BB8B57]/10 blur-[100px] rounded-full pointer-events-none" />
          <NetworkMap mobile />
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 hidden lg:block">
        <div className="grid lg:grid-cols-[0.38fr_0.62fr] items-center gap-16 lg:gap-24">

          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5"
            >
              A Global Movement
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-white"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Connecting young minds.
              <br />
              Inspiring dialogue.
              <br />
              Creating global impact.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 text-[#B8B8B8] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Our reach extends beyond borders,
              bringing together future leaders
              from across continents.
            </motion.p>

            <motion.div whileHover={{ x: 4 }} className="mt-10">
              <button className="btn-ds-secondary">
                Explore Our Global Reach
                <span className="btn-ds-arrow">→</span>
              </button>
            </motion.div>

            <div className="mt-14 flex gap-12">
              <div>
                <p
                  className="font-serif text-[#BB8B57]"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1 }}
                >
                  50K+
                </p>
                <p
                  className="mt-2 text-[#7A7A7A] text-sm"
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Delegates
                </p>
              </div>

              <div>
                <p
                  className="font-serif text-[#BB8B57]"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1 }}
                >
                  20+
                </p>
                <p
                  className="mt-2 text-[#7A7A7A] text-sm"
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Countries
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#BB8B57]/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="relative h-[300px] md:h-[450px]">
              <NetworkMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
