"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useSequentialReveal(totalTiles: number, intervalMs: number, enabled: boolean) {
  const [visibleTiles, setVisibleTiles] = useState(0);
  const tRef = useRef<number | null>(null);

  const tilesToShow = useMemo(() => {
    return Math.max(0, Math.min(totalTiles, visibleTiles));
  }, [totalTiles, visibleTiles]);

  useEffect(() => {
    if (!enabled) return;

    setVisibleTiles(0);

    const start = () => {
      tRef.current = window.setInterval(() => {
        setVisibleTiles((v) => {
          const next = v + 1;
          return next >= totalTiles ? totalTiles : next;
        });
      }, intervalMs);
    };

    start();

    return () => {
      if (tRef.current) window.clearInterval(tRef.current);
      tRef.current = null;
    };
  }, [enabled, intervalMs, totalTiles]);

  return { tilesToShow };
}