"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingManifestoSection() {
  return (
    <section className="section-padding-lg border-t border-white/10 bg-[#0A0A0A]">
      <div className="content-wide flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-heading content-statement text-white"
        >
          &ldquo;We do not aspire to produce better delegates. We aspire to
          develop responsible stewards of an unfinished world.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/conferences" className="btn-ds-primary">
            Explore Conferences
          </Link>
          <Link href="/partenrships" className="btn-ds-secondary">
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
