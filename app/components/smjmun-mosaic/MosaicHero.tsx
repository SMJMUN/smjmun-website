"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MosaicCanvas } from "./MosaicCanvas";

export default function MosaicHero() {
  const [enabled, setEnabled] = useState(false);

  React.useEffect(() => {
    const t = window.setTimeout(() => setEnabled(true), 300);
    return () => window.clearTimeout(t);
  }, []);

  // show gold/title after ~26s timeline; could also derive from animation state
  const titleDelay = 26;

  return (
    <section className="relative w-full py-12 md:py-16">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* responsive scale wrapper */}
        <div className="mx-auto flex flex-col items-center">
          <div className="w-full max-w-[980px]">
            <div className="relative aspect-[16/10] sm:aspect-[18/8]">
              {/* subtle glow frame */}
              <div className="absolute inset-0 rounded-[32px] bg-white/5 blur-2xl opacity-70" />
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10" />

              {/* Scale for mobile */}
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <div className="w-full h-full scale-[0.9] sm:scale-100 origin-top">
                  <MosaicCanvas enabled={enabled} />
                </div>
              </div>
            </div>
          </div>

          {/* Gold glow + text */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: enabled ? 1 : 0, filter: enabled ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.8, delay: titleDelay }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-yellow-400/10 px-5 py-2 ring-1 ring-yellow-300/20">
              <motion.span
                animate={{ textShadow: enabled ? "0 0 18px rgba(250,204,21,0.45)" : "none" }}
                transition={{ duration: 0.6, delay: titleDelay }}
                className="font-semibold tracking-wide text-yellow-300"
              >
                Gold glow activated
              </motion.span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: enabled ? 1 : 0, y: enabled ? 0 : 8 }}
              transition={{ duration: 0.7, delay: titleDelay + 0.6 }}
              className="mt-4 text-3xl sm:text-4xl font-bold text-white"
            >
              SMJMUN
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: enabled ? 1 : 0 }}
              transition={{ duration: 0.6, delay: titleDelay + 1.0 }}
              className="mt-2 text-white/70 max-w-2xl mx-auto"
            >
              Built by Leaders. Inspired by Diplomacy.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}