"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IDLE_TRANSITION,
  IDLE_Y_KEYFRAMES,
  TRANSITION,
} from "./gallery.constants";
import type { GalleryImage, GalleryTransform } from "./gallery.types";

interface GalleryCardProps {
  image: GalleryImage;
  transform: GalleryTransform;
  isActive: boolean;
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onHover: () => void;
  onSelect: () => void;
}

export function GalleryCard({
  image,
  transform,
  isActive,
  isVisible,
  prefersReducedMotion,
  onHover,
  onSelect,
}: GalleryCardProps) {
  const { x, z, rotateY, scale, opacity, blur, brightness, zIndex } =
    transform;

  return (
    // Static centering layer: puts the card's origin at the container's
    // center. Kept on its own element so it never fights with the animated
    // transform below (they're independent DOM nodes, independent transforms).
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        role="listitem"
        aria-selected={isActive}
        aria-label={image.caption ?? image.alt}
        aria-hidden={!isVisible}
        tabIndex={isActive ? 0 : -1}
        onMouseEnter={onHover}
        onFocus={onHover}
        onClick={onSelect}
        onKeyDown={(event) => {
          if (event.key === "Enter") onSelect();
        }}
        className="relative aspect-[3/4] w-[170px] cursor-pointer overflow-hidden rounded-[28px] shadow-xl [backface-visibility:hidden] sm:w-[210px] lg:w-[240px]"
        style={{
          transformStyle: "preserve-3d",
          pointerEvents: isVisible ? "auto" : "none",
        }}
        initial={false}
        animate={{
          x,
          y: prefersReducedMotion ? 0 : IDLE_Y_KEYFRAMES,
          z,
          rotateY,
          scale,
          opacity: isVisible ? opacity : 0,
          filter: `brightness(${brightness}) blur(${blur}px)`,
          zIndex,
        }}
        transition={{
          default: TRANSITION,
          y: prefersReducedMotion
            ? { duration: 0 }
            : IDLE_TRANSITION,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 240px"
          priority={isActive}
          className="object-cover"
        />
        {image.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
            <p className="text-xs font-medium text-white/90">
              {image.caption}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}