'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import CityNode from './CityNode';
import ConnectionLines from './ConnectionLines';

const cities = [
  {
    name: 'NEW YORK',
    x: 180,
    y: 220,
  },
  {
    name: 'LONDON',
    x: 420,
    y: 150,
  },
  {
    name: 'DUBAI',
    x: 220,
    y: 320,
  },
  {
    name: 'NEW DELHI',
    x: 360,
    y: 270,
  },
  {
    name: 'SINGAPORE',
    x: 550,
    y: 305,
  },
];

export default function NetworkMap() {
  const { scrollYProgress } = useScroll();

  const mapY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  return (
    <div
    className="
relative!
w-full!
h-[380px]!
md:h-[420px]!
lg:h-[450px]!
"
    >
      {/* Massive Background Glow */}

      <motion.div
        style={{ y: glowY }}
        className="
          absolute!
          left-1/2!
          top-1/2!
          h-[600px]!
          w-[600px]!
          md:h-[900px]!
          md:w-[900px]!
          -translate-x-1/2!
          -translate-y-1/2
          rounded-full!
          bg-[#bb8b57]/10!
          blur-[180px]!
        "
      />

      {/* Secondary Glow */}

      <motion.div
        style={{ y: glowY }}
        className="
          absolute!
          left-[55%]!
          top-[45%]!
          h-[300px]!
          w-[300px]!
          rounded-full!
        bg-[#bb8b57]/8!
blur-[80px]!
        "
      />

      {/* Map Layer */}

      <motion.div
        className="
          absolute!
          inset-0!
          flex!
          items-center!
          justify-center!
        "
      >
      <motion.img
  src="/images/world-map.svg"
  alt=""
  className="
    absolute
    inset-0!
    w-full!
  opacity-[0.18]!
  "

/>

<motion.img
  src="/images/world-map.svg"
  alt=""
  className="
    absolute!
    inset-0!
    w-full!
    opacity-[0.025]!
    opacity-[0.08]!
    z-100!
  "
  style={{ y: glowY }}
/>
      </motion.div>

      {/* SVG Network */}

      <div
        className="
          absolute
          inset-0
        "
      >
        <ConnectionLines cities={cities} />
      </div>

      {/* Nodes */}

      <div
        className="
          absolute!
          inset-0!
        "
      >
        {cities.map((city) => (
          <CityNode
            key={city.name}
            name={city.name}
            x={city.x}
            y={city.y}
          />
        ))}
      </div>

      {/* Floating Gold Particles */}

      <motion.div
        className="
          absolute
          top-[40%]!
          h-2!
          w-2!
          rounded-full!
          bg-[#bb8b57]!
          shadow-[0_0_25px_rgba(187,139,87,1)]!
        "
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="
          absolute
          top-[30%]!
          h-2!
          w-2!
          rounded-full!
          bg-[#bb8b57]!
          shadow-[0_0_25px_rgba(187,139,87,1)]!
        "
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="
          absolute
          top-[55%]!
          h-2!
          w-2!
          rounded-full!
          bg-[#bb8b57]!
          shadow-[0_0_25px_rgba(187,139,87,1)]!
        "
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
