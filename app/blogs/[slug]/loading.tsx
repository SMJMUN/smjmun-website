export default function Loading() {
  return (
    <>
      {/* Header Skeleton */}
      <div style={{ backgroundColor: "#042147", padding: "180px 0 80px" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 8vw",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "22px",
                backgroundColor: "rgba(187,139,87,0.2)",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "90px",
                height: "22px",
                backgroundColor: "rgba(187,139,87,0.15)",
                borderRadius: "2px",
              }}
            />
          </div>
          <div
            style={{
              width: "85%",
              height: "44px",
              backgroundColor: "rgba(255,255,255,0.1)",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              width: "60%",
              height: "36px",
              backgroundColor: "rgba(255,255,255,0.06)",
              marginBottom: "24px",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              width: "200px",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Cover Image Skeleton */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "-40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            aspectRatio: "2 / 1",
            backgroundColor: "rgba(4,33,71,0.06)",
            margin: "0 8vw",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Body Skeleton */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0 120px" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 8vw",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: `${90 - (i % 3) * 15}%`,
                height: "14px",
                backgroundColor: "rgba(4,33,71,0.05)",
                marginBottom: "16px",
                borderRadius: "2px",
                animation: "pulse 2s ease-in-out infinite",
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
