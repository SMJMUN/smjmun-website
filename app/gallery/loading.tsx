function Shimmer({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`animate-pulse ${className}`}
      style={{ backgroundColor: "rgba(255,255,255,0.06)", ...style }}
    />
  );
}

function ShimmerLight({
  style = {},
}: {
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="animate-pulse"
      style={{ backgroundColor: "rgba(4,33,71,0.06)", ...style }}
    />
  );
}

export default function GalleryLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <div
        style={{
          backgroundColor: "#18171C",
          paddingTop: "clamp(140px, 16vw, 200px)",
          paddingBottom: "clamp(80px, 9vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div style={{ width: 40, height: 1, backgroundColor: "rgba(187,139,87,0.4)" }} />
            <Shimmer style={{ width: 120, height: 10, borderRadius: 2 }} />
          </div>
          {/* Title */}
          <Shimmer style={{ width: "min(520px, 80%)", height: 80, borderRadius: 3, marginBottom: 12 }} />
          <Shimmer style={{ width: "min(300px, 60%)", height: 70, borderRadius: 3, marginBottom: 28 }} />
          {/* Gold rule */}
          <div style={{ width: 80, height: 1, backgroundColor: "rgba(187,139,87,0.35)", marginBottom: 28 }} />
          {/* Subtitle */}
          <Shimmer style={{ width: "min(480px, 75%)", height: 16, borderRadius: 2, marginBottom: 8 }} />
          <Shimmer style={{ width: "min(360px, 60%)", height: 16, borderRadius: 2, marginBottom: 32 }} />
          {/* Meta line */}
          <div className="flex items-center gap-4">
            <div style={{ width: 20, height: 1, backgroundColor: "rgba(187,139,87,0.3)" }} />
            <Shimmer style={{ width: 200, height: 10, borderRadius: 2 }} />
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0", borderBottom: "1px solid rgba(4,33,71,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <ShimmerLight style={{ width: 80, height: 52, margin: "0 auto 8px", borderRadius: 3 }} />
                <ShimmerLight style={{ width: 60, height: 10, margin: "0 auto", borderRadius: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          {/* Section heading */}
          <div className="text-center mb-14">
            <ShimmerLight style={{ width: 100, height: 10, margin: "0 auto 20px", borderRadius: 2 }} />
            <ShimmerLight style={{ width: 260, height: 44, margin: "0 auto 20px", borderRadius: 3 }} />
            <ShimmerLight style={{ width: 80, height: 1, margin: "0 auto" }} />
          </div>
          {/* Featured card */}
          <div style={{ display: "flex", border: "1px solid rgba(4,33,71,0.08)", minHeight: 440 }}>
            <ShimmerLight style={{ width: "50%", minHeight: 440 }} />
            <div style={{ width: "50%", padding: "48px 56px", display: "flex", flexDirection: "column", gap: 16 }}>
              <ShimmerLight style={{ width: 80, height: 10, borderRadius: 2 }} />
              <ShimmerLight style={{ width: "80%", height: 36, borderRadius: 3 }} />
              <ShimmerLight style={{ width: "60%", height: 28, borderRadius: 3 }} />
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                <ShimmerLight style={{ width: 130, height: 12, borderRadius: 2 }} />
                <ShimmerLight style={{ width: 110, height: 12, borderRadius: 2 }} />
              </div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[100, 95, 80].map((w, i) => (
                  <ShimmerLight key={i} style={{ width: `${w}%`, height: 13, borderRadius: 2 }} />
                ))}
              </div>
              <ShimmerLight style={{ width: 120, height: 14, borderRadius: 2, marginTop: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid Skeleton */}
      <div style={{ backgroundColor: "var(--color-ivory)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          {/* Section heading */}
          <div className="text-center mb-10">
            <ShimmerLight style={{ width: 80, height: 10, margin: "0 auto 16px", borderRadius: 2 }} />
            <ShimmerLight style={{ width: 200, height: 44, margin: "0 auto 20px", borderRadius: 3 }} />
            <ShimmerLight style={{ width: 80, height: 1, margin: "0 auto" }} />
          </div>

          {/* Filter pills */}
          <div style={{ display: "flex", gap: 8, paddingBottom: 20, borderBottom: "1px solid rgba(4,33,71,0.06)", marginBottom: 40 }}>
            {[55, 65, 55, 80, 70, 65].map((w, i) => (
              <ShimmerLight key={i} style={{ width: w, height: 36, borderRadius: 0 }} />
            ))}
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ border: "1px solid rgba(4,33,71,0.08)", backgroundColor: "#ffffff" }}>
                <ShimmerLight style={{ aspectRatio: "16/10" }} />
                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  <ShimmerLight style={{ width: 80, height: 10, borderRadius: 2 }} />
                  <ShimmerLight style={{ width: "85%", height: 20, borderRadius: 2 }} />
                  <ShimmerLight style={{ width: "60%", height: 18, borderRadius: 2 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    <ShimmerLight style={{ width: 110, height: 11, borderRadius: 2 }} />
                    <ShimmerLight style={{ width: 90, height: 11, borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
