export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <div
        style={{
          backgroundColor: "#0A0A0A",
          height: "100vh",
          minHeight: "700px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 8vw 20vh",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(187,139,87,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "760px", width: "100%" }}>
          <div
            style={{
              width: "120px",
              height: "11px",
              backgroundColor: "rgba(187,139,87,0.25)",
              marginBottom: "24px",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              width: "70%",
              height: "clamp(42px,6vw,84px)",
              backgroundColor: "rgba(255,255,255,0.07)",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              width: "50%",
              height: "clamp(42px,6vw,84px)",
              backgroundColor: "rgba(187,139,87,0.12)",
              borderRadius: "4px",
              marginBottom: "32px",
            }}
          />
          <div
            style={{
              width: "480px",
              maxWidth: "100%",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "2px",
              marginBottom: "10px",
            }}
          />
          <div
            style={{
              width: "360px",
              maxWidth: "100%",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.04)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Featured Card Skeleton */}
      <div
        style={{
          backgroundColor: "#111111",
          padding: "100px 8vw",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <div style={{ width: "100px", height: "10px", backgroundColor: "rgba(187,139,87,0.3)", borderRadius: "2px" }} />
          <div style={{ width: "240px", height: "24px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px" }} />
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            minHeight: "420px",
            backgroundColor: "#171717",
            border: "1px solid rgba(255,255,255,0.06)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "rgba(187,139,87,0.04)" }} />
          <div style={{ flex: 1, padding: "48px" }}>
            <div style={{ width: "60%", height: "20px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px", marginBottom: "16px" }} />
            <div style={{ width: "80%", height: "32px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "24px" }} />
            <div style={{ width: "40%", height: "12px", backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      {/* Cards Grid Skeleton */}
      <div
        style={{
          backgroundColor: "#0A0A0A",
          padding: "100px 0 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 8vw",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#171717",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                overflow: "hidden",
                animation: "pulse 2s ease-in-out infinite",
                animationDelay: `${i * 120}ms`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  backgroundColor: "rgba(187,139,87,0.05)",
                }}
              />
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    width: "55px",
                    height: "10px",
                    backgroundColor: "rgba(187,139,87,0.2)",
                    borderRadius: "2px",
                    marginBottom: "14px",
                  }}
                />
                <div
                  style={{
                    width: "80%",
                    height: "20px",
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "3px",
                    marginBottom: "10px",
                  }}
                />
                <div
                  style={{
                    width: "55%",
                    height: "12px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
