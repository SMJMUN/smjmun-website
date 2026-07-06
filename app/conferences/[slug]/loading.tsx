export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <div
        style={{
          width: "100%",
          height: "75vh",
          minHeight: "520px",
          backgroundColor: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 8vw 80px",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(187,139,87,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "900px", width: "100%" }}>
          {/* Breadcrumb */}
          <div
            style={{
              width: "180px",
              height: "10px",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: "2px",
              marginBottom: "20px",
            }}
          />
          {/* Status pill */}
          <div
            style={{
              width: "90px",
              height: "26px",
              backgroundColor: "rgba(187,139,87,0.15)",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          />
          {/* Title */}
          <div
            style={{
              width: "70%",
              height: "clamp(40px,6vw,80px)",
              backgroundColor: "rgba(255,255,255,0.07)",
              borderRadius: "4px",
              marginBottom: "12px",
            }}
          />
          <div
            style={{
              width: "45%",
              height: "clamp(40px,6vw,80px)",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "4px",
              marginBottom: "28px",
            }}
          />
          {/* Meta */}
          <div
            style={{
              width: "320px",
              maxWidth: "100%",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          />
          {/* Buttons */}
          <div style={{ display: "flex", gap: "14px" }}>
            <div style={{ width: "140px", height: "48px", backgroundColor: "rgba(187,139,87,0.25)", borderRadius: "6px" }} />
            <div style={{ width: "140px", height: "48px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "6px" }} />
          </div>
        </div>
      </div>

      {/* Quick Facts Strip Skeleton */}
      <div
        style={{
          backgroundColor: "#171717",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 8vw",
          display: "flex",
          gap: "32px",
          overflowX: "hidden",
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", flexShrink: 0, paddingRight: "32px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
            <div style={{ width: "18px", height: "18px", backgroundColor: "rgba(187,139,87,0.25)", borderRadius: "3px" }} />
            <div>
              <div style={{ width: "55px", height: "9px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "2px", marginBottom: "8px" }} />
              <div style={{ width: "100px", height: "14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "2px" }} />
            </div>
          </div>
        ))}
      </div>

      {/* Content Area Skeleton */}
      <div style={{ backgroundColor: "#0A0A0A", padding: "80px 8vw" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "48px",
          }}
        >
          {/* Main column */}
          <div>
            <div style={{ width: "110px", height: "11px", backgroundColor: "rgba(187,139,87,0.25)", borderRadius: "2px", marginBottom: "28px" }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: `${90 - i * 8}%`,
                  height: "15px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "2px",
                  marginBottom: "14px",
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
          {/* Sidebar column */}
          <div>
            <div
              style={{
                width: "100%",
                height: "260px",
                backgroundColor: "#171717",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.07)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
