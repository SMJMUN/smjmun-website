"use client";

import { useEffect, useMemo, useState } from "react";

export enum Stage {
  S = "S",
  M = "M",
  J = "J",
  M2 = "M2",
  U = "U",
  N = "N",
  COMPLETE = "COMPLETE",
}

 type StageConfig = Array<{ stage: Stage; label: string; durationMs: number }>;

export function useLetterAnimation(options: {
  enabled: boolean;
  timings: {
    SCompleteMs: number;  // e.g. 4000
    MCompleteMs: number;  // 8000
    JCompleteMs: number;  // 12000
    M2CompleteMs: number; // 16000
    UCompleteMs: number;  // 20000
    NCompleteMs: number;  // 24000
    completeHoldMs?: number; // optional
  };
}) {
  const { enabled, timings } = options;

  const config: StageConfig[] = useMemo(() => {
    return [
      { stage: Stage.S, label: "S", durationMs: timings.SCompleteMs },
      { stage: Stage.M, label: "SM", durationMs: timings.MCompleteMs - timings.SCompleteMs },
      { stage: Stage.J, label: "SMJ", durationMs: timings.JCompleteMs - timings.MCompleteMs },
      { stage: Stage.M2, label: "SMJM", durationMs: timings.M2CompleteMs - timings.JCompleteMs },
      { stage: Stage.U, label: "SMJMU", durationMs: timings.UCompleteMs - timings.M2CompleteMs },
      { stage: Stage.N, label: "SMJMUN", durationMs: timings.NCompleteMs - timings.UCompleteMs },
    ];
  }, [timings]);

  const [stage, setStage] = useState<Stage>(Stage.S);
  const [label, setLabel] = useState<StageConfig[number]["label"]>("S");
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let elapsedIndex = 0;
    setStageIndex(0);

    setStage(Stage.S);
    setLabel("S");

    let t: number | null = null;

    const run = () => {
      const step = () => {
        const current = config[elapsedIndex];
        if (!current) {
          setStage(Stage.COMPLETE);
          return;
        }

        setStage(current.stage);
        setLabel(current.label);
        elapsedIndex++;

        if (elapsedIndex < config.length) {
          t = window.setTimeout(step, current.durationMs);
        } else {
          // last stage reached; next micro-step to COMPLETE optional
          window.setTimeout(() => setStage(Stage.COMPLETE), 250);
        }
      };

      step();
    };

    run();

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [enabled, config]);

  return { stage, stageIndex, zoomLabel: label };
}