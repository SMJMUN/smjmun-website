"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AUTOPLAY_INTERVAL_MS,
  RESUME_AFTER_INACTIVITY_MS,
  SWIPE_THRESHOLD_PX,
} from "./gallery.constants";
import {
  getVisibleCountForWidth,
  isMobileWidth,
  wrapIndex,
} from "./gallery.utils";

interface UseGalleryOptions {
  length: number;
}

interface UseGalleryReturn {
  activeIndex: number;
  visibleCount: number;
  isFlat: boolean;
  prefersReducedMotion: boolean;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  handleHover: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  touchHandlers: {
    onTouchStart: (event: React.TouchEvent) => void;
    onTouchEnd: (event: React.TouchEvent) => void;
  };
}

/**
 * Owns every piece of interactive behavior for Gallery3D. The component
 * itself stays purely presentational — this hook is the only place state
 * lives, and activeIndex is the single source of truth everything derives
 * from.
 */
export function useGallery({ length }: UseGalleryOptions): UseGalleryReturn {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.floor(length / 2)
  );
  const [visibleCount, setVisibleCount] = useState(7);
  const [isFlat, setIsFlat] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Responsive visible-card count + mobile flat mode.
  useEffect(() => {
    const updateFromWidth = () => {
      const width = window.innerWidth;
      setVisibleCount(getVisibleCountForWidth(width));
      setIsFlat(isMobileWidth(width));
    };
    updateFromWidth();
    window.addEventListener("resize", updateFromWidth);
    return () => window.removeEventListener("resize", updateFromWidth);
  }, []);

  // prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const goTo = useCallback(
    (index: number) => setActiveIndex(wrapIndex(index, length)),
    [length]
  );

  const next = useCallback(
    () => setActiveIndex((current) => wrapIndex(current + 1, length)),
    [length]
  );

  const prev = useCallback(
    () => setActiveIndex((current) => wrapIndex(current - 1, length)),
    [length]
  );

  const pauseAutoplay = useCallback(() => {
    setIsAutoplayPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoplayPaused(false);
    }, RESUME_AFTER_INACTIVITY_MS);
  }, []);

  const handleHover = useCallback(
    (index: number) => {
      pauseAutoplay();
      goTo(index);
    },
    [goTo, pauseAutoplay]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        pauseAutoplay();
        prev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        pauseAutoplay();
        next();
      }
    },
    [next, prev, pauseAutoplay]
  );

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      if (touchStartXRef.current === null) return;
      const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
      touchStartXRef.current = null;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;

      pauseAutoplay();
      if (deltaX < 0) next();
      else prev();
    },
    [next, prev, pauseAutoplay]
  );

  // Autoplay: every 4s, advance one card. Paused on interaction, resumes
  // automatically 5s after the last one.
  useEffect(() => {
    if (isAutoplayPaused || prefersReducedMotion || length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, length));
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isAutoplayPaused, prefersReducedMotion, length]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return {
    activeIndex,
    visibleCount,
    isFlat,
    prefersReducedMotion,
    goTo,
    next,
    prev,
    handleHover,
    handleKeyDown,
    touchHandlers: { onTouchStart, onTouchEnd },
  };
}