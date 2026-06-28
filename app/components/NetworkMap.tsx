'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import CityNode from './CityNode';
import ConnectionLines from './ConnectionLines';

// ---------------------------------------------------------------------------
// Normalized city dataset — single source of truth.
// x and y are percentages (0–100) of the container dimensions.
//
// Derived from the original 600×450 pixel layout:
//   x% = pixelX / 600 * 100
//   y% = pixelY / 450 * 100
//
// To add a new city, simply provide x and y in 0-100 space:
//   { name: "TOKYO", x: 85.0, y: 38.9 }
// ---------------------------------------------------------------------------

type City = {
  name: string;
  /** 0–100: percentage of container width  */
  x: number;
  /** 0–100: percentage of container height */
  y: number;
  labelPosition?: 'left' | 'right';
};

const cities: City[] = [
  //                   px→%          px→%
  { name: 'NEW YORK',   x: 30.0, y: 48.9 },  // 180/600, 220/450
  { name: 'LONDON',     x: 70.0, y: 33.3 },  // 420/600, 150/450
  { name: 'DUBAI',      x: 36.7, y: 71.1, labelPosition: 'left' },  // 220/600, 320/450
  { name: 'NEW DELHI',  x: 60.0, y: 60.0 },  // 360/600, 270/450
  { name: 'SINGAPORE',  x: 91.7, y: 67.8, labelPosition: 'left' },  // 550/600, 305/450
];

export default function NetworkMap() {
  const { scrollYProgress } = useScroll();

  const mapY  = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="relative w-full h-[380px] md:h-[420px] lg:h-[450px]">

      {/* Massive background glow */}
      <motion.div
        style={{ y: glowY }}
        className="
          absolute left-1/2 top-1/2
          h-[600px] w-[600px] md:h-[900px] md:w-[900px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#bb8b57]/10 blur-[180px]
        "
      />

      {/* Secondary glow */}
      <motion.div
        style={{ y: glowY }}
        className="
          absolute left-[55%] top-[45%]
          h-[300px] w-[300px]
          rounded-full bg-[#bb8b57]/8 blur-[80px]
        "
      />

      {/* World map image layers */}
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src="/images/world-map.svg"
          alt=""
          className="absolute inset-0 w-full opacity-[0.18]"
        />
        <motion.img
          src="/images/world-map.svg"
          alt=""
          style={{ y: glowY }}
          className="absolute inset-0 w-full opacity-[0.08] z-[100]"
        />
      </motion.div>

      {/* SVG connection lines */}
      <div className="absolute inset-0">
        <ConnectionLines cities={cities} />
      </div>

      {/* City nodes */}
      <div className="absolute inset-0">
        {cities.map((city) => (
          <CityNode
            key={city.name}
            name={city.name}
            x={city.x}
            y={city.y}
            labelPosition={city.labelPosition}
          />
        ))}
      </div>

      {/* Floating gold particles */}
      <motion.div
        className="absolute top-[40%] h-2 w-2 rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)]"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[30%] h-2 w-2 rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)]"
        animate={{ y: [0, -25, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[55%] h-2 w-2 rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)]"
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
}
