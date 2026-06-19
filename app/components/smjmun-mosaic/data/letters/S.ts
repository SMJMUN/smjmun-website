import type { TilePosition } from "./types";

export const letterS: TilePosition[] = [
  // Example 7x5-ish outline; adjust density to your taste
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
  { x: 0, y: 1 }, { x: 0, y: 2 },
  { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
  { x: 3, y: 1 }, { x: 3, y: 2 },
  { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 },
].map((t, i) => (i % 7 === 0 ? { ...t, rotation: -2 } : t));