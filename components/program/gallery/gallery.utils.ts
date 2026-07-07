import {
  BASE_Z_INDEX,
  MAX_OFFSET,
  MOBILE_BREAKPOINT_PX,
  OFFSET_ROTATE,
  OFFSET_X,
  RESPONSIVE_VISIBLE,
  TRANSFORM_PRESETS,
} from "./gallery.constants";
import type { GalleryTransform } from "./gallery.types";

/** Signed distance of a card from the active index. Everything derives from this. */
export function getOffset(index: number, activeIndex: number): number {
  return index - activeIndex;
}

/**
 * Resolves the full transform for a signed offset. Values beyond MAX_OFFSET
 * clamp to the outermost preset (they'll be hidden by isVisible anyway).
 * On mobile / reduced-motion, all 3D depth collapses to a flat fade.
 */
export function getTransform(
  offset: number,
  options: { isFlat: boolean }
): GalleryTransform {
  const abs = Math.min(Math.abs(offset), MAX_OFFSET);
  const sign = Math.sign(offset);
  const preset = TRANSFORM_PRESETS[abs];

  if (options.isFlat) {
    return {
      x: offset * 40,
      z: 0,
      rotateY: 0,
      scale: abs === 0 ? 1 : 0.9,
      opacity: abs === 0 ? 1 : 0,
      blur: 0,
      brightness: 1,
      zIndex: abs === 0 ? BASE_Z_INDEX : 0,
    };
  }

  return {
    x: OFFSET_X[abs] * sign,
    z: preset.z,
    rotateY: OFFSET_ROTATE[abs] * -sign,
    scale: preset.scale,
    opacity: preset.opacity,
    blur: preset.blur,
    brightness: preset.brightness,
    zIndex: BASE_Z_INDEX - abs * 10,
  };
}

/** Whether a card at this offset falls within the currently visible window. */
export function isVisible(offset: number, visibleCount: number): boolean {
  const half = Math.floor(visibleCount / 2);
  return Math.abs(offset) <= half;
}

export function getVisibleCountForWidth(width: number): number {
  const match = RESPONSIVE_VISIBLE.find((bp) => width >= bp.minWidth);
  return match?.visible ?? 1;
}

export function isMobileWidth(width: number): boolean {
  return width < MOBILE_BREAKPOINT_PX;
}

/** Wraps an index into [0, length) so autoplay/keyboard nav loops seamlessly. */
export function wrapIndex(index: number, length: number): number {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
}