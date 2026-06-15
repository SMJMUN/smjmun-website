"use client";

import {
  useEffect,
  useCallback,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { GalleryImage } from "@/lib/sanity/types";
import { GALLERY_CATEGORY_LABELS } from "@/lib/sanity/types";

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Focus refs
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const currentImage = images[current];
  const imageUrl = currentImage?.image
    ? urlFor(currentImage.image).width(1600).quality(90).url()
    : null;

  // ── Navigation ────────────────────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      const bounded = (index + images.length) % images.length;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(bounded);
        setIsAnimating(false);
        // Scroll thumbnail into view
        const thumb = thumbnailsRef.current?.children[bounded] as HTMLElement;
        thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }, 150);
    },
    [images.length, isAnimating]
  );

  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  // ── Keyboard navigation ───────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goPrev, goNext]);

  // ── Body scroll lock ──────────────────────────────────────────────
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ── Focus trap ────────────────────────────────────────────────────
  useEffect(() => {
    closeButtonRef.current?.focus();
    const container = containerRef.current;
    if (!container) return;

    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const handleTab = (e: FocusEvent) => {
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter((el) => !el.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (!(e as unknown as KeyboardEvent).shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if ((e as unknown as KeyboardEvent).shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    container.addEventListener("keydown", handleTab as EventListener);
    return () => container.removeEventListener("keydown", handleTab as EventListener);
  }, []);

  // ── Touch / swipe ─────────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
    setTouchStart(null);
  };

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${current + 1} of ${images.length}${currentImage?.alt ? `: ${currentImage.alt}` : ""}`}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ backgroundColor: "rgba(4,10,20,0.97)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" style={{ borderBottom: "1px solid rgba(187,139,87,0.15)" }}>
        {/* Counter */}
        <span className="font-sans text-[12px] tracking-[0.2em] text-white/45 uppercase select-none">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>

        {/* Category badge */}
        {currentImage?.category && (
          <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-gold/80 border border-gold/20 px-3 py-1">
            {GALLERY_CATEGORY_LABELS[currentImage.category] ?? currentImage.category}
          </span>
        )}

        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Main image area ── */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 px-4 py-4">
        {/* Prev button */}
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 lg:left-8 z-10 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 bg-black/30 hover:bg-black/50 transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Image */}
        <div
          className="relative max-w-[90vw] max-h-full flex items-center justify-center transition-opacity duration-150"
          style={{ opacity: isAnimating ? 0 : 1, width: "100%", height: "100%" }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={currentImage?.alt ?? `Photo ${current + 1}`}
              fill
              unoptimized
              priority
              sizes="90vw"
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-serif text-gold/20 text-5xl italic">SMJ</span>
            </div>
          )}
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 lg:right-8 z-10 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 bg-black/30 hover:bg-black/50 transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Caption ── */}
      {currentImage?.caption && (
        <div className="flex-shrink-0 text-center px-6 pb-2">
          <p className="font-sans text-[13px] leading-[1.6] text-white/45 max-w-xl mx-auto italic">
            {currentImage.caption}
          </p>
        </div>
      )}

      {/* ── Thumbnail strip ── */}
      <div
        className="flex-shrink-0 px-4 pb-4 pt-2"
        style={{ borderTop: "1px solid rgba(187,139,87,0.10)" }}
      >
        <div
          ref={thumbnailsRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide justify-center"
          role="list"
          aria-label="Image thumbnails"
        >
          {images.map((img, i) => {
            const thumbUrl = img.image
              ? urlFor(img.image).width(120).height(80).quality(70).url()
              : null;
            const isActive = i === current;
            return (
              <button
                key={img._key ?? i}
                role="listitem"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}${img.alt ? `: ${img.alt}` : ""}`}
                aria-current={isActive ? "true" : undefined}
                className="flex-shrink-0 relative overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  width: 60,
                  height: 40,
                  border: isActive ? "1.5px solid #bb8b57" : "1.5px solid rgba(255,255,255,0.1)",
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                {thumbUrl ? (
                  <Image
                    src={thumbUrl}
                    alt={img.alt ?? `Thumbnail ${i + 1}`}
                    fill
                    unoptimized
                    sizes="60px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-navy/50" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
