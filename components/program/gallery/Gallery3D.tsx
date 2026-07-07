"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { GalleryCard } from "./GalleryCard";
import { useGallery } from "./useGallery";
import { getOffset, getTransform, isVisible } from "./gallery.utils";
import type { Gallery3DProps } from "./gallery.types";

const NOISE_OVERLAY_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function Gallery3D({ images, className, onImageSelect }: Gallery3DProps) {
  const {
    activeIndex,
    visibleCount,
    isFlat,
    prefersReducedMotion,
    goTo,
    handleHover,
    handleKeyDown,
    touchHandlers,
  } = useGallery({ length: images.length });

  const flatten = isFlat || prefersReducedMotion;

  const cards = useMemo(
    () =>
      images.map((image, index) => {
        const offset = getOffset(index, activeIndex);
        return {
          image,
          index,
          transform: getTransform(offset, { isFlat: flatten }),
          visible: isVisible(offset, visibleCount),
        };
      }),
    [images, activeIndex, visibleCount, flatten]
  );

  if (images.length === 0) return null;

  return (
    <div
      role="list"
      aria-label="Image gallery"
      aria-activedescendant={images[activeIndex]?.id}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={touchHandlers.onTouchStart}
      onTouchEnd={touchHandlers.onTouchEnd}
      className={cn(
        "relative isolate h-[380px] w-full overflow-hidden rounded-3xl bg-[#0B0B0B] outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:h-[440px] lg:h-[520px]",
        className
      )}
    >
      {/* Ambient light + vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(255,255,255,0.07),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

      {/* Edge fade masks so cards drift off into darkness, not a hard cut */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#0B0B0B] to-transparent sm:w-28 lg:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#0B0B0B] to-transparent sm:w-28 lg:w-40" />

      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_OVERLAY_URL}")` }}
      />

      {/* "Camera" notch, echoing the reference art direction */}
      <div className="pointer-events-none absolute left-1/2 top-5 z-20 h-2.5 w-20 -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:top-7" />

      <div className="relative h-full w-full" style={{ perspective: 1800 }}>
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map(({ image, index, transform, visible }) => (
            <GalleryCard
              key={image.id}
              image={image}
              transform={transform}
              isActive={index === activeIndex}
              isVisible={visible}
              prefersReducedMotion={prefersReducedMotion}
              onHover={() => handleHover(index)}
              onSelect={() => {
                goTo(index);
                onImageSelect?.(image, index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}