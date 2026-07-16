'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export function useScrolledHeader(threshold = 60) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return isScrolled;
}
