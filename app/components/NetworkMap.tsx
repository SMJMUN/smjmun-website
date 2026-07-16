'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CityNode from './CityNode';
import ConnectionLines from './ConnectionLines';

// ---------------------------------------------------------------------------
// Normalized city dataset — single source of truth.
// x and y are percentages (0–100) of the container dimensions.
// ---------------------------------------------------------------------------

type City = {
  name: string;
  /** 0–100: percentage of container width  */
  x: number;
  /** 0–100: percentage of container height */
  y: number;
  labelPosition?: 'left' | 'right';
};

// ---------------------------------------------------------------------------
// HOW TO MANUALLY TUNE POSITIONS (one at a time):
//   x → left/right  (0 = far left edge of map, 100 = far right edge)
//   y → up/down     (0 = top of map, 100 = bottom)
//
//   Change ONE city's x or y, save, and check in browser.
//   The dot AND its connection lines move together — no other file to touch.
//
// Derived from Mercator projection (map spans ~180°W→180°E, ~75°N→60°S):
//   x% = (longitude + 180) / 360 * 100
//   y% = (75 - latitude)  / 135 * 100
// ---------------------------------------------------------------------------
const cities: City[] = [
  //                                    lon      lat      x%    y%
  { name: 'NEW YORK',  x: 24.5, y: 33.0 },                // 74°W  41°N
  { name: 'LONDON',    x: 50.0, y: 25.0 },                // 0°    51°N
  { name: 'DUBAI',     x: 58.5, y: 57.0, labelPosition: 'left' }, // 55°E  25°N
  { name: 'NEW DELHI', x: 67.5, y: 59.0 },                // 77°E  29°N
  { name: 'SINGAPORE', x: 80.0, y: 55.0, labelPosition: 'right' }, // 104°E  1°N
];

interface NetworkMapProps {
  /** Pass true when rendering inside the compact mobile block */
  mobile?: boolean;
}

export default function NetworkMap({ mobile = false }: NetworkMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mapY  = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={containerRef} className={mobile ? 'relative w-full h-full' : 'relative w-full h-[380px] md:h-[420px] lg:h-[450px]'}>

      {/* Massive background glow */}
      <motion.div
        style={{ y: glowY }}
        className={`
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#bb8b57]/10
          ${mobile
            ? 'h-[300px] w-[300px] blur-[100px]'
            : 'h-[600px] w-[600px] md:h-[900px] md:w-[900px] blur-[180px]'}
        `}
      />

      {/* Secondary glow */}
      <motion.div
        style={{ y: glowY }}
        className={`
          absolute left-[55%] top-[45%]
          rounded-full bg-[#bb8b57]/8
          ${mobile ? 'h-[150px] w-[150px] blur-[50px]' : 'h-[300px] w-[300px] blur-[80px]'}
        `}
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
            mobile={mobile}
          />
        ))}
      </div>

      {/* Floating gold particles */}
      <motion.div
        className={`absolute top-[40%] rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)] ${mobile ? 'h-1.5 w-1.5' : 'h-2 w-2'}`}
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className={`absolute top-[30%] rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)] ${mobile ? 'h-1.5 w-1.5' : 'h-2 w-2'}`}
        animate={{ y: [0, -25, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className={`absolute top-[55%] rounded-full bg-[#bb8b57] shadow-[0_0_25px_rgba(187,139,87,1)] ${mobile ? 'h-1.5 w-1.5' : 'h-2 w-2'}`}
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
}
