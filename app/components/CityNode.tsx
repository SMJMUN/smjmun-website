'use client';

import { motion } from 'framer-motion';

// ---------------------------------------------------------------------------
// Normalized coordinate system
// All positions are expressed as percentages (0–100) of the container size.
// This makes the layout resolution-independent and removes the need for
// separate desktop/mobile city arrays.
//
// Conversion formula (from the original 600×450 SVG space):
//   x% = pixelX / 600 * 100
//   y% = pixelY / 450 * 100
// ---------------------------------------------------------------------------

interface CityNodeProps {
  name: string;
  /** Horizontal position as a percentage of the container width (0–100) */
  x: number;
  /** Vertical position as a percentage of the container height (0–100) */
  y: number;
  labelPosition?: 'left' | 'right';
}

export default function CityNode({
  name,
  x,
  y,
  labelPosition = 'right',
}: CityNodeProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        left:      `${x}%`,
        top:       `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Outer Pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#bb8b57]/40"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full bg-[#bb8b57]/30 blur-xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Core Node */}
      <motion.div
        className="h-3 w-3 rounded-full bg-[#bb8b57] shadow-[0_0_20px_rgba(187,139,87,0.9)]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glass Label */}
      <motion.div
        className={`
          absolute top-1/2 -translate-y-1/2
          whitespace-nowrap rounded-full
          border border-white/10 bg-white/5
          px-4 py-2
          text-[11px] uppercase tracking-[0.2em] text-white/90
          backdrop-blur-xl
          ${labelPosition === 'right' ? 'left-5' : 'right-5'}
        `}
      >
        {name}
      </motion.div>
    </motion.div>
  );
}
