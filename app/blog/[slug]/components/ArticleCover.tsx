import Image from "next/image";

interface ArticleCoverProps {
  src: string;
  alt: string;
}

export default function ArticleCover({ src, alt }: ArticleCoverProps) {
  return (
    <div
      className="bg-white"
      style={{
        paddingLeft: "clamp(20px, 6vw, 64px)",
        paddingRight: "clamp(20px, 6vw, 64px)",
      }}
    >
      {/* Lifted card effect — overlaps into hero section */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: "1100px",
          marginTop: "-48px",
          borderRadius: "2px",
          boxShadow: "0 32px 80px rgba(4,33,71,0.18), 0 8px 24px rgba(4,33,71,0.08)",
        }}
      >
        {/* Aspect ratio wrapper */}
        <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover"
          />
          {/* Subtle inner shadow for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(4,33,71,0.06)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
