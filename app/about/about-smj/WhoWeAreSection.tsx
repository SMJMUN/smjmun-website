"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WhoWeAreSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="section-label">About</span>
          <h2 className="text-5xl mt-6 max-w-3xl text-white">
            An Institution Built Around Purpose.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          {/* Left — statement, sticky on desktop so it stays in view while reading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:sticky md:top-32 md:self-start"
          >
            <p className="text-editorial text-[var(--ds-gold)]">
              &ldquo;MUN teaches you how to speak.&rdquo;
            </p>
            <div className="gold-rule mt-8" />
          </motion.div>

          {/* Right — the actual reading content, capped to a comfortable line length */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="content-reading"
          >
            <p className="text-body-lg text-white/80">
              Shri Seth Mangilalji Sahu International Model United Nations
              exists because the world does not simply need confident
              speakers.
            </p>
            <p className="mt-6 text-body-lg text-white/70">
              It needs thoughtful people — delegates who can listen before
              they argue, research before they claim, and carry
              responsibility long after the gavel falls. SMJMUN was built to
              shape that kind of person, one committee session at a time.
            </p>
            <p className="mt-6 text-body-lg text-white/70">
              We are not a weekend event. We are an ongoing practice in
              judgment, character, and service — one delegates carry with
              them long after their final round of debate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
