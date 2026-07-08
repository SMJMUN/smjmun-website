"use client";

import { motion } from "framer-motion";

export default function ManifestoSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-section text-white"
        >
          The World Is
          <br />
          Still Being Written
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-editorial content-editorial mt-10 text-white/60"
        >
          &ldquo;The world is not handed to you complete. It is handed to you
          in progress.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
