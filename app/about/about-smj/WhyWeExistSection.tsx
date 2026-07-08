"use client";

import { motion } from "framer-motion";

const steps = [
  "Public Speaking",
  "Critical Thinking",
  "Character",
  "Responsibility",
  "Stewardship",
];

export default function WhyWeExistSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide">
        <div className="content-statement">
          <span className="section-label">Why We Exist</span>
          <p className="text-heading mt-6 text-white">
            Most conferences prepare delegates for committee rooms.
            <br />
            <span className="text-[var(--ds-gold)]">
              We prepare them for the world.
            </span>
          </p>
        </div>

        {/* A genuine progression — numbering carries real meaning here,
            each step builds on the one before it */}
        <div className="mt-20 flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-baseline justify-between border-b border-white/10 py-8 first:border-t"
            >
              <h3 className="text-subheading text-white/90">{step}</h3>
              <span className="text-label text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
