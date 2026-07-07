import type { GalleryTransform } from './gallery.types';

/** Cards beyond this distance from the active index are never rendered. */
export const MAX_OFFSET = 3;

export const AUTOPLAY_INTERVAL_MS = 4000;
export const RESUME_AFTER_INACTIVITY_MS = 5000;

/** Single shared transition for every animated transform property. */
export const TRANSITION = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/** Slow, ambient "alive" bob applied to every visible card. */
export const IDLE_Y_KEYFRAMES = [0, -8, 0];
export const IDLE_TRANSITION = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export const SWIPE_THRESHOLD_PX = 50;

/**
 * Depth, scale, opacity, blur and brightness by absolute distance from the
 * active card (0 = center). Sign-dependent values (x position, rotation
 * direction) live in OFFSET_X / OFFSET_ROTATE below and are mirrored at
 * runtime in gallery.utils.ts.
 */
export const TRANSFORM_PRESETS: Record<
  number,
  Omit<GalleryTransform, "x" | "rotateY" | "zIndex">
> = {
  0: { z: 220, scale: 1.2, opacity: 1, blur: 0, brightness: 1 },
  1: { z: -60, scale: 0.93, opacity: 0.7, blur: 0, brightness: 0.8 },
  2: { z: -180, scale: 0.82, opacity: 0.55, blur: 1, brightness: 0.65 },
  3: { z: -350, scale: 0.7, opacity: 0.4, blur: 2, brightness: 0.5 },
};

/** Horizontal displacement (px) by absolute offset distance. */
export const OFFSET_X: Record<number, number> = {
  0: 0,
  1: 240,
  2: 470,
  3: 700,
};

/** Y-axis rotation (deg) by absolute offset distance. */
export const OFFSET_ROTATE: Record<number, number> = {
  0: 0,
  1: 18,
  2: 35,
  3: 55,
};

export const BASE_Z_INDEX = 100;

/**
 * Responsive visible-card counts. Checked top to bottom, first match wins,
 * so order matters (widest breakpoint first).
 */
export const RESPONSIVE_VISIBLE: { minWidth: number; visible: number }[] = [
  { minWidth: 1280, visible: 7 }, // desktop
  { minWidth: 1024, visible: 5 }, // laptop
  { minWidth: 640, visible: 3 }, // tablet
  { minWidth: 0, visible: 1 }, // mobile
];

/** Below this breakpoint, 3D rotation/depth is disabled entirely. */
export const MOBILE_BREAKPOINT_PX = 640;