'use client';

import { motion } from 'framer-motion';

// ---------------------------------------------------------------------------
// Normalized coordinate system
// All city positions are expressed as percentages (0–100).
// The SVG uses viewBox="0 0 100 100" so path coordinates map 1-to-1
// with the percentage values — no conversion needed.
// ---------------------------------------------------------------------------

interface City {
  name: string;
  /** Horizontal position as a percentage of the container width (0–100) */
  x: number;
  /** Vertical position as a percentage of the container height (0–100) */
  y: number;
  labelPosition?: 'left' | 'right';
}

interface Props {
  cities: City[];
}

export default function ConnectionLines({ cities }: Props) {
  const getCity = (name: string) => cities.find((c) => c.name === name);

  const routes: [string, string][] = [
    ['NEW DELHI', 'LONDON'],
    ['LONDON',    'NEW YORK'],
    ['DUBAI',     'SINGAPORE'],
    ['NEW DELHI', 'SINGAPORE'],
  ];

  /**
   * Build a cubic bezier arc between two cities.
   * All coordinates are in the 0-100 normalized space (matching viewBox="0 0 100 100").
   */
  const createCurve = (start: City, end: City) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;

    const distance    = Math.sqrt(dx * dx + dy * dy);
    const curveHeight = distance * 0.35;

    const cx1 = start.x + dx * 0.3;
    const cy1 = start.y - curveHeight;
    const cx2 = start.x + dx * 0.7;
    const cy2 = end.y   - curveHeight;

    return {
      path: `M ${start.x} ${start.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${end.x} ${end.y}`,
      midX: (start.x + end.x) / 2,
      midY: (start.y + end.y) / 2 - curveHeight * 0.6,
    };
  };

  return (
    /*
     * viewBox="0 0 100 100" — coordinate space matches the normalized city positions.
     * preserveAspectRatio="none" — stretches to fill the container at any size.
     */
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <filter id="route-glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="particleGlow">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="50%"  stopColor="#bb8b57" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {routes.map(([from, to], index) => {
        const start = getCity(from);
        const end   = getCity(to);
        if (!start || !end) return null;

        const route = createCurve(start, end);

        return (
          <g key={`${from}-${to}`}>
            {/* Blur / glow layer */}
            <path
              d={route.path}
              fill="none"
              stroke="rgba(187,139,87,.10)"
              strokeWidth="1.5"
              filter="url(#route-glow)"
            />

            {/* Main route line — draws in on mount */}
            <motion.path
              d={route.path}
              fill="none"
              stroke="rgba(187,139,87,.25)"
              strokeWidth="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.4 }}
            />

            {/* Animated dashes travelling along the route */}
            <motion.path
              d={route.path}
              fill="none"
              stroke="#bb8b57"
              strokeWidth="0.35"
              strokeDasharray="1.5 2"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            />

            {/* Travelling highlight orb */}
            <motion.circle r="0.9" fill="#bb8b57" filter="url(#route-glow)">
              <animateMotion
                dur={`${6 + index}s`}
                repeatCount="indefinite"
                path={route.path}
              />
            </motion.circle>

            {/* Energy core (white centre) */}
            <motion.circle r="0.4" fill="#fff">
              <animateMotion
                dur={`${6 + index}s`}
                repeatCount="indefinite"
                path={route.path}
              />
            </motion.circle>

            {/* Mid-route spark */}
            <motion.circle
              cx={route.midX}
              cy={route.midY}
              r="0.4"
              fill="#bb8b57"
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </g>
        );
      })}
    </svg>
  );
}
