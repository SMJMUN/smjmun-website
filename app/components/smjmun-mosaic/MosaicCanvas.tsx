"use client";

import React, { useMemo } from "react";
import { MosaicTile } from "./MosaicTile";
import { useSequentialReveal } from "./hooks/useSequentialReveal";
import { useLetterAnimation, Stage } from "./hooks/useLetterAnimation";
import { useZoomController } from "./hooks/useZoomController";
import { motion } from "framer-motion";

import { letterS } from "./data/letters/S";
import { letterM } from "./data/letters/M";
// import { letterJ } from "./data/letters/J";
import { letterU } from "./data/letters/U";
import { letterN } from "./data/letters/N";

import { imagePool } from "./data/images/gallery";

type TileData = {
  id: string;
  image: string;
  gridX: number;
  gridY: number;
  rotation?: number;
  // absolute positioning is derived later
  order: number; // sequential reveal ordering
  belongsTo: Stage; // which stage letter it belongs to
};

const TILE_SIZE = 68; // tune for responsiveness below (we’ll scale via CSS container)
const GAP = 14;        // spacing inside the grid

function layoutLetter(tiles: typeof letterS, offsetX: number, belongsTo: Stage): TileData[] {
  return tiles.map((t, i) => {
    // Choose an image deterministically by tile index.
    const image = imagePool[(i + offsetX * 31) % imagePool.length];

    return {
      id: `${belongsTo}-${i}-${offsetX}`,
      image,
      gridX: t.x + offsetX,
      gridY: t.y,
      rotation: t.rotation ?? 0,
      order: i, // will be overwritten when concatenating
      belongsTo,
    };
  });
}

export function MosaicCanvas({ enabled }: { enabled: boolean }) {
  const { stage, zoomLabel } = useLetterAnimation({
    enabled,
    timings: {
      SCompleteMs: 4000,
      MCompleteMs: 8000,
      JCompleteMs: 12000,
      M2CompleteMs: 16000,
      UCompleteMs: 20000,
      NCompleteMs: 24000,
      completeHoldMs: 0,
    },
  });

  const { scale } = useZoomController(zoomLabel);

  // Concatenate tiles in build order:
  const tiles: TileData[] = useMemo(() => {
    // Offsets are "letter spacing" in grid units.
    const offsetS = 0;
    const offsetM = 6;  // gap between letters
    const offsetJ = 12;
    const offsetM2 = 18;
    const offsetU = 24;
    const offsetN = 30;

    const s = layoutLetter(letterS, offsetS, Stage.S);
    const m = layoutLetter(letterM, offsetM, Stage.M);
    // const j = layoutLetter(letterJ, offsetJ, Stage.J);
    const m2 = layoutLetter(letterM, offsetM2, Stage.M2);
    // const u = layoutLetter(letterU, offsetU, Stage.U);
    const n = layoutLetter(letterN, offsetN, Stage.N);

    const concatenated = [...s, ...m, ...m2, ...n];

    return concatenated.map((t, idx) => ({
      ...t,
      order: idx,
    }));
  }, []);

  const intervalMs = 120; // 100-150ms as requested
  const { tilesToShow } = useSequentialReveal(tiles.length, intervalMs, enabled);

  // Centering:
  const gridWidth = useMemo(() => {
    const maxX = tiles.reduce((acc, t) => Math.max(acc, t.gridX), 0);
    return maxX + 1;
  }, [tiles]);

  const gridHeight = useMemo(() => {
    const maxY = tiles.reduce((acc, t) => Math.max(acc, t.gridY), 0);
    return maxY + 1;
  }, [tiles]);

  const canvasW = gridWidth * (TILE_SIZE + GAP);
  const canvasH = gridHeight * (TILE_SIZE + GAP);

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <motion.div
        style={{
          width: canvasW,
          height: canvasH,
          transformOrigin: "50% 40%",
        }}
        className="relative"
        animate={{ scale }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {tiles.map((t) => {
          const visible = t.order < tilesToShow;

          // Convert grid coords -> absolute px
          const px =
            (t.gridX * (TILE_SIZE + GAP)) +
            0; // left

          const py =
            (t.gridY * (TILE_SIZE + GAP)) +
            0; // top

          // Slight per-tile drift/rotation vibe is controlled in MosaicTile animation:
          return (
            <MosaicTile
              key={t.id}
              image={t.image}
              x={px}
              y={py}
              visible={visible}
              rotation={t.rotation}
              tileSize={TILE_SIZE}
              gap={GAP}
              index={t.order}
            />
          );
        })}
      </motion.div>
    </div>
  );
}