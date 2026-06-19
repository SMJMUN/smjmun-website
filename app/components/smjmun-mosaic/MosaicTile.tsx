"use client";

import { motion } from "framer-motion";
import React from "react";

type MosaicTileProps = {
  image: string;
  x: number; // px absolute (computed by canvas)
  y: number; // px absolute (computed by canvas)
  visible: boolean;
  rotation?: number;
  tileSize: number;
  gap: number;
  index: number; // for stagger randomness if desired
};

export function MosaicTile({
  image,
  x,
  y,
  visible,
  rotation = 0,
  tileSize,
  index,
}: MosaicTileProps) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        width: tileSize,
        height: tileSize,
        left: x,
        top: y,
      }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        rotate: visible ? rotation : rotation * 0.3,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: visible ? index * 0.002 : 0,
      }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl">
        <motion.img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          initial={false}
          animate={{ filter: visible ? "saturate(1) contrast(1)" : "saturate(0.8) contrast(0.9)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* glass overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-black/10 opacity-80 mix-blend-overlay" />

        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />

        {/* shadow */}
        <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-black/30 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-60" />

        {/* hover effects */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl transition duration-300 group-hover:ring-1 group-hover:ring-white/20" />
      </div>
    </motion.div>
  );
}