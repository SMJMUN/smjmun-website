function Shimmer({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`bg-navy/[0.06] animate-pulse ${className}`}
      style={style}
    />
  );
}

export default function GalleryCollectionLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <div
        className="relative"
        style={{
          backgroundColor: "#0d1520",
          paddingTop: "clamp(140px, 16vw, 200px)",
          paddingBottom: "clamp(80px, 9vw, 120px)",
          minHeight: "80vh",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12">
            <div style={{ width: 60, height: 10, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
            <div style={{ width: 140, height: 10, backgroundColor: "rgba(187,139,87,0.15)", borderRadius: 2 }} />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div style={{ width: 40, height: 1, backgroundColor: "rgba(187,139,87,0.4)" }} />
            <div style={{ width: 120, height: 10, backgroundColor: "rgba(187,139,87,0.15)", borderRadius: 2 }} />
          </div>

          {/* Title */}
          <div className="mb-3" style={{ width: "min(680px, 90%)", height: 60, backgroundColor: "rgba(255,255,255,0.07)", borderRadius: 3 }} />
          <div className="mb-8" style={{ width: "min(420px, 70%)", height: 50, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 3 }} />

          {/* Gold rule */}
          <div style={{ width: 80, height: 1, backgroundColor: "rgba(187,139,87,0.4)", marginBottom: 32 }} />

          {/* Meta */}
          <div className="flex gap-8 mb-10">
            {[120, 100, 140].map((w, i) => (
              <div key={i} style={{ width: w, height: 12, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 2 }} />
            ))}
          </div>

          {/* Stats row */}
          <div className="flex gap-10">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <div style={{ width: 60, height: 40, backgroundColor: "rgba(255,255,255,0.07)", borderRadius: 2, marginBottom: 6 }} />
                <div style={{ width: 55, height: 10, backgroundColor: "rgba(187,139,87,0.12)", borderRadius: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Strip Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "64px 0", borderBottom: "1px solid rgba(4,33,71,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <Shimmer style={{ width: 80, height: 48, margin: "0 auto 8px", borderRadius: 3 }} />
                <Shimmer style={{ width: 64, height: 10, margin: "0 auto", borderRadius: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <Shimmer style={{ width: 80, height: 10, marginBottom: 16, borderRadius: 2 }} />
              <Shimmer style={{ width: 200, height: 28, borderRadius: 3 }} />
            </div>
            <div className="space-y-3">
              {[100, 95, 88, 72].map((w, i) => (
                <Shimmer key={i} style={{ width: `${w}%`, height: 14, borderRadius: 2 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8vw" }}>
          {/* Heading */}
          <div className="text-center mb-12">
            <Shimmer style={{ width: 80, height: 10, margin: "0 auto 16px", borderRadius: 2 }} />
            <Shimmer style={{ width: 220, height: 40, margin: "0 auto 20px", borderRadius: 3 }} />
            <Shimmer style={{ width: 80, height: 1, margin: "0 auto" }} />
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 mb-8 pb-6" style={{ borderBottom: "1px solid rgba(4,33,71,0.06)" }}>
            {[60, 70, 100, 80, 90].map((w, i) => (
              <Shimmer key={i} style={{ width: w, height: 36, borderRadius: 0 }} />
            ))}
          </div>

          {/* Masonry columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <Shimmer
                key={i}
                style={{
                  aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "4/3" : "1/1",
                  borderRadius: 0,
                  animationDelay: `${i * 60}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
