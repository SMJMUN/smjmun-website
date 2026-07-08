"use client";

import { motion } from "framer-motion";

const stages = [
  {
    word: "Dare",
    color:"text-white",
    copy: "Step beyond comfort, question assumptions, and find the courage to participate.",
  },
  {
    word: "Rise",
    color:"text-[#BB8B57]",
    copy: "Commit to continuous growth, deeper understanding, and responsible leadership.",
  },
  {
    word: "Impact",
    color:"text-charcoal",

    copy: "Use your knowledge, character, and passion to create meaningful change.",
  },
];

export default function DareRiseImpactSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide text-center">
        <span className="section-label">Our Philosophy</span>
      </div>

      <div className="mt-10">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.word}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={` border-t border-white/10 py-16 text-center`}
          >
            <h3 className={`text-display text-md ${stage.color}`}>{stage.word}</h3>
            <p className="content-reading mx-auto mt-6 text-body-lg text-white/60">
              {stage.copy}
            </p>
          </motion.div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
