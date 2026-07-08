"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Roots Before Reach",
    body: "Know where you came from before you decide where you're going. Great leadership begins with understanding your values, culture, and integrity.",
  },
  {
    title: "Knowledge Before Action",
    body: "Learn deeply before speaking boldly. Every opinion deserves understanding — we ask delegates to think critically before they act.",
  },
  {
    title: "Character Before Credentials",
    body: "Who you become matters more than what you win. Awards recognize excellence, but character is what defines lasting influence.",
  },
  {
    title: "Service Before Recognition",
    body: "Leadership begins where ego ends. Success is measured by the lives improved through your actions, not by applause.",
  },
];

export default function FourPillarsSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide">
        <span className="section-label">Our Foundation</span>
        <h2 className="text-heading mt-6 max-w-2xl text-white">
          Four Pillars That Shape Every Delegate
        </h2>

        <div className="mt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="grid grid-cols-1 gap-4 border-t border-white/10 py-10 md:grid-cols-[1fr_1.6fr] md:gap-16"
            >
              <h3 className="text-subheading text-[var(--ds-gold)]">
                {pillar.title}
              </h3>
              <p className="content-reading text-body-lg text-white/70">
                {pillar.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
