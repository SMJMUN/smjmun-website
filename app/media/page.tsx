import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { MEDIA_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Media } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Media & Press — SMJ MUN",
  description:
    "SMJ MUN in the press. Read media coverage and news articles featuring India's premier Model United Nations platform.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media & Press — SMJ MUN",
    description:
      "Media coverage and press articles featuring India's premier MUN platform.",
    type: "website",
    url: "/media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press — SMJ MUN",
    description: "SMJ MUN in the press — media coverage and news.",
  },
};

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

export default async function MediaPage() {
  const items = await sanityFetch<Media[]>({ query: MEDIA_QUERY });

  const featured = items[0];
  const rest = items.slice(1);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            backgroundColor: "#042147",
            padding: "180px 0 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 8vw" }}>
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#bb8b57",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Media &amp; Press
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              In The Press
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Coverage and features from leading publications on SMJ MUN&apos;s
              impact across India and beyond.
            </p>
          </div>
        </section>

        {/* Media Grid */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "100px 0 120px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {items.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "1px",
                    backgroundColor: "#bb8b57",
                    margin: "0 auto 32px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "24px",
                    fontStyle: "italic",
                    color: "#042147",
                    opacity: 0.5,
                  }}
                >
                  Press coverage coming soon.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  flexWrap: "wrap",
                }}
              >
                {/* Featured / Dominant Story */}
                {featured && (
                  <a
                    href={featured.url || "#"}
                    target={featured.url ? "_blank" : undefined}
                    rel={featured.url ? "noopener noreferrer" : undefined}
                    className="media-item"
                    style={{
                      flex: "1 1 55%",
                      minWidth: "320px",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "3 / 2",
                        overflow: "hidden",
                        position: "relative",
                        marginBottom: "24px",
                        backgroundColor: "#042147",
                      }}
                    >
                      {featured.coverImage && (
                        <Image
                          src={urlFor(featured.coverImage)
                            .width(900)
                            .height(600)
                            .quality(80)
                            .url()}
                          alt={featured.title}
                          fill
                          sizes="60vw"
                          style={{
                            objectFit: "cover",
                            transition:
                              "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                          }}
                        />
                      )}
                      {/* Overlapping bar */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-1px",
                          left: "0",
                          right: "30%",
                          backgroundColor: "#042147",
                          padding: "20px 28px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            fontSize: "11px",
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#bb8b57",
                          }}
                        >
                          {featured.publisher || "Featured"}
                          {featured.publishedAt &&
                            ` · ${formatDate(featured.publishedAt)}`}
                        </span>
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading), Georgia, serif",
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: "#042147",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {featured.title}
                    </h3>
                  </a>
                )}

                {/* Secondary Stories */}
                {rest.length > 0 && (
                  <div
                    style={{
                      flex: "1 1 35%",
                      minWidth: "280px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    {rest.map((item, i) => (
                      <div key={item._id}>
                        <a
                          href={item.url || "#"}
                          target={item.url ? "_blank" : undefined}
                          rel={item.url ? "noopener noreferrer" : undefined}
                          className="media-item"
                          style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                          }}
                        >
                          {item.coverImage && (
                            <div
                              style={{
                                width: "100%",
                                aspectRatio: "16 / 9",
                                overflow: "hidden",
                                marginBottom: "16px",
                                position: "relative",
                                backgroundColor: "#042147",
                              }}
                            >
                              <Image
                                src={urlFor(item.coverImage)
                                  .width(600)
                                  .height(338)
                                  .quality(80)
                                  .url()}
                                alt={item.title}
                                fill
                                unoptimized
                                sizes="40vw"
                                style={{
                                  objectFit: "cover",
                                  transition:
                                    "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                                }}
                              />
                            </div>
                          )}
                          <span
                            style={{
                              fontFamily: "var(--font-body), system-ui, sans-serif",
                              fontSize: "11px",
                              fontWeight: 500,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#bb8b57",
                              display: "block",
                              marginBottom: "8px",
                            }}
                          >
                            {item.publisher || "Press"}
                            {item.publishedAt && ` · ${formatDate(item.publishedAt)}`}
                          </span>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading), Georgia, serif",
                              fontSize: "clamp(18px, 2vw, 22px)",
                              fontWeight: 700,
                              lineHeight: 1.25,
                              color: "#042147",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {item.title}
                          </h3>
                        </a>
                        {i < rest.length - 1 && (
                          <div
                            style={{
                              width: "60px",
                              height: "1px",
                              backgroundColor: "#bb8b57",
                              opacity: 0.3,
                              marginTop: "40px",
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .media-item:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </>
  );
}
