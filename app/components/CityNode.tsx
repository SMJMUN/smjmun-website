'use client';

import { motion } from 'framer-motion';

// ---------------------------------------------------------------------------
// Normalized coordinate system
// All positions are expressed as percentages (0–100) of the container size.
// ---------------------------------------------------------------------------

interface CityNodeProps {
  name: string;
  /** Horizontal position as a percentage of the container width (0–100) */
  x: number;
  /** Vertical position as a percentage of the container height (0–100) */
  y: number;
  labelPosition?: 'left' | 'right';
  /** Render smaller nodes + labels for the compact mobile view */
  mobile?: boolean;
}

export default function CityNode({
  name,
  x,
  y,
  labelPosition = 'right',
  mobile = false,
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
        className={`absolute left-1/2 top-1/2 rounded-full border border-[#bb8b57]/40 ${
          mobile ? 'h-5 w-5' : 'h-8 w-8'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Glow */}
      <div
        className={`absolute left-1/2 top-1/2 rounded-full bg-[#bb8b57]/30 blur-xl ${
          mobile ? 'h-5 w-5' : 'h-8 w-8'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Core Node */}
      <motion.div
        className={`rounded-full bg-[#bb8b57] shadow-[0_0_20px_rgba(187,139,87,0.9)] ${
          mobile ? 'h-1.5 w-1.5' : 'h-3 w-3'
        }`}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glass Label */}
      <motion.div
        className={`
          absolute top-1/2 -translate-y-1/2
          whitespace-nowrap rounded-full
          border border-white/10 bg-white/5
          uppercase tracking-[0.15em] text-white/90
          backdrop-blur-xl
          ${mobile
            ? 'px-2 py-[3px] text-[7px]'
            : 'px-4 py-2 text-[11px] tracking-[0.2em]'}
          ${labelPosition === 'right'
            ? mobile ? 'left-3' : 'left-5'
            : mobile ? 'right-3' : 'right-5'}
        `}
      >
        {name}
      </motion.div>
    </motion.div>
  );
}
