"use client";

import { useMemo } from "react";

export type ZoomStage = "S" | "SM" | "SMJ" | "SMJM" | "SMJMU" | "SMJMUN";

export function useZoomController(stage: ZoomStage) {
  return useMemo(() => {
    // Tune these values to your look:
    const map: Record<ZoomStage, number> = {
      S: 1.15,
      SM: 1.07,
      SMJ: 1.03,
      SMJM: 1.0,
      SMJMU: 0.97,
      SMJMUN: 0.95,
    };

    const scale = map[stage];
    return { scale };
  }, [stage]);
}