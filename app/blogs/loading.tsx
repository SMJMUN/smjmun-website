export default function Loading() {
  return (
    <>
      {/* Header Skeleton */}
      <div
        style={{
          backgroundColor: "#042147",
          padding: "180px 0 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 8vw" }}>
          <div
            style={{
              width: "100px",
              height: "12px",
              backgroundColor: "rgba(187,139,87,0.3)",
              margin: "0 auto 24px",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              width: "380px",
              maxWidth: "100%",
              height: "48px",
              backgroundColor: "rgba(255,255,255,0.08)",
              margin: "0 auto 20px",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              width: "300px",
              maxWidth: "100%",
              height: "16px",
              backgroundColor: "rgba(255,255,255,0.05)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Content Skeleton */}
      <div style={{ backgroundColor: "#f8f8f8", padding: "100px 0 120px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 8vw",
          }}
        >
          {/* Featured Skeleton */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              backgroundColor: "#ffffff",
              marginBottom: "60px",
              overflow: "hidden",
              animation: "pulse 2s ease-in-out infinite",
            }}
          >
            <div
              style={{
                aspectRatio: "4 / 3",
                backgroundColor: "rgba(4,33,71,0.06)",
              }}
            />
            <div style={{ padding: "48px" }}>
              <div
                style={{
                  width: "80px",
                  height: "10px",
                  backgroundColor: "rgba(187,139,87,0.2)",
                  marginBottom: "20px",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "80%",
                  height: "28px",
                  backgroundColor: "rgba(4,33,71,0.08)",
                  marginBottom: "16px",
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "14px",
                  backgroundColor: "rgba(4,33,71,0.05)",
                  marginBottom: "10px",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "60%",
                  height: "14px",
                  backgroundColor: "rgba(4,33,71,0.05)",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>

          {/* Grid Skeleton */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "36px",
            }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundColor: "rgba(4,33,71,0.06)",
                  }}
                />
                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      width: "70%",
                      height: "18px",
                      backgroundColor: "rgba(4,33,71,0.08)",
                      marginBottom: "12px",
                      borderRadius: "3px",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "12px",
                      backgroundColor: "rgba(4,33,71,0.04)",
                      marginBottom: "8px",
                      borderRadius: "2px",
                    }}
                  />
                  <div
                    style={{
                      width: "40%",
                      height: "10px",
                      backgroundColor: "rgba(4,33,71,0.03)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
