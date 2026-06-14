import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { CONFERENCES_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Conferences — SMJ MUN",
  description:
    "Browse upcoming, live, and past SMJ MUN conferences. Join India's premier Model United Nations platform for diplomacy, leadership, and global engagement.",
  alternates: { canonical: "/conferences" },
  openGraph: {
    title: "Conferences — SMJ MUN",
    description:
      "Browse upcoming, live, and past SMJ MUN conferences. India's premier platform for diplomacy & leadership.",
    type: "website",
    url: "/conferences",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences — SMJ MUN",
    description:
      "Browse upcoming, live, and past SMJ MUN conferences.",
  },
};

const STATUS_LABEL: Record<string, { text: string; bg: string }> = {
  upcoming: { text: "Upcoming", bg: "#bb8b57" },
  live: { text: "Live Now", bg: "#16a34a" },
  completed: { text: "Completed", bg: "#042147" },
};

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
}

export default async function ConferencesPage() {
  const conferences = await sanityFetch<Conference[]>({
    query: CONFERENCES_QUERY,
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Header */}
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
              Our Conferences
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
              Where Leaders Convene
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
              Explore our conferences across India and beyond — shaping the next
              generation of diplomats and global leaders.
            </p>
          </div>
        </section>

        {/* Conference Grid */}
        <section
          style={{
            backgroundColor: "#f8f8f8",
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
            {conferences.length === 0 ? (
              /* Empty State */
              <div
                style={{
                  textAlign: "center",
                  padding: "80px 0",
                }}
              >
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
                  Conferences coming soon.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "40px",
                }}
              >
                {conferences.map((conf) => {
                  const status = STATUS_LABEL[conf.status] || STATUS_LABEL.upcoming;
                  const imageUrl = conf.heroImage
                    ? urlFor(conf.heroImage).width(800).height(450).quality(80).url()
                    : null;

                  return (
                    <Link
                      key={conf._id}
                      href={`/conferences/${conf.slug.current}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <article
                        className="conference-card"
                        style={{
                          backgroundColor: "#ffffff",
                          overflow: "hidden",
                          transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        }}
                      >
                        {/* Image */}
                        <div
                          style={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: "#042147",
                          }}
                        >
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt={conf.title}
                              fill
                              unoptimized
                              sizes="(max-width: 768px) 100vw, 400px"
                              style={{
                                objectFit: "cover",
                                transition: "transform 0.6s ease",
                              }}
                              className="unoptimized-image"
                            />
                          )}
                          {/* Status Badge */}
                          <span
                            style={{
                              position: "absolute",
                              top: "16px",
                              right: "16px",
                              backgroundColor: status.bg,
                              color: "#ffffff",
                              fontFamily: "var(--font-body), system-ui, sans-serif",
                              fontSize: "11px",
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              padding: "6px 14px",
                            }}
                          >
                            {status.text}
                          </span>
                        </div>

                        {/* Gold rule */}
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "#bb8b57",
                            opacity: 0.3,
                          }}
                        />

                        {/* Info */}
                        <div style={{ padding: "28px 28px 32px" }}>
                          <h2
                            style={{
                              fontFamily: "var(--font-heading), Georgia, serif",
                              fontSize: "clamp(20px, 2.5vw, 26px)",
                              fontWeight: 700,
                              lineHeight: 1.2,
                              color: "#042147",
                              marginBottom: "12px",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {conf.title}
                          </h2>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              flexWrap: "wrap",
                            }}
                          >
                            {conf.venue && (
                              <span
                                style={{
                                  fontFamily: "var(--font-body), system-ui, sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "#042147",
                                  opacity: 0.5,
                                }}
                              >
                                {conf.venue}
                              </span>
                            )}
                            {conf.venue && conf.date && (
                              <span
                                style={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  backgroundColor: "#bb8b57",
                                  display: "inline-block",
                                }}
                              />
                            )}
                            {conf.date && (
                              <span
                                style={{
                                  fontFamily: "var(--font-body), system-ui, sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "#042147",
                                  opacity: 0.5,
                                }}
                              >
                                {formatDate(conf.date)}
                              </span>
                            )}
                          </div>
                          {conf.registrationFee != null && (
                            <p
                              style={{
                                fontFamily: "var(--font-body), system-ui, sans-serif",
                                fontSize: "14px",
                                color: "#042147",
                                opacity: 0.6,
                                marginTop: "12px",
                              }}
                            >
                              ₹{conf.registrationFee.toLocaleString("en-IN")}
                            </p>
                          )}
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .conference-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }
        .conference-card:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </>
  );
}
