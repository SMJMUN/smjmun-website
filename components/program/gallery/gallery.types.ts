/**
 * Shape of a single gallery image. This is the only data contract the
 * component depends on — no images are ever hardcoded inside Gallery3D.
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Fully resolved transform for a single card at a given offset from the
 * active index. Everything the card renders (position, depth, rotation,
 * scale, and visual treatment) comes from one of these objects.
 */
export interface GalleryTransform {
  x: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  blur: number;
  brightness: number;
  zIndex: number;
}

export interface Gallery3DProps {
  images: GalleryImage[];
  className?: string;
  /** Called when a card is activated via click or Enter. Optional. */
  onImageSelect?: (image: GalleryImage, index: number) => void;
}

export type SwipeDirection = "left" | "right";