import type { Gallery } from "@/lib/sanity/types";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  galleries: Gallery[];
}

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  if (galleries.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="gold-rule mx-auto mb-8" />
        <p className="font-serif text-[22px] italic text-navy/40">
          No collections found.
        </p>
        <p className="font-sans text-[13px] text-navy/30 mt-3">
          Try selecting a different filter above.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {galleries.map((gallery) => (
        <GalleryCard key={gallery._id} gallery={gallery} />
      ))}
    </div>
  );
}
