import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PortableTextRenderer from "@/app/components/PortableTextRenderer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  CONFERENCE_BY_SLUG_QUERY,
  CONFERENCES_QUERY,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

// ─── Static Params ─────────────────────────────────────────────────
export async function generateStaticParams() {
  const conferences = await sanityFetch<Conference[]>({
    query: CONFERENCES_QUERY,
    revalidate: 3600,
  });
  return conferences.map((c) => ({ slug: c.slug.current }));
}

// ─── Dynamic Metadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!conference) {
    return { title: "Conference Not Found — SMJ MUN" };
  }

  const title = conference.seoTitle || `${conference.title} — SMJ MUN`;
  const description =
    conference.seoDescription ||
    `${conference.title} at ${conference.venue || "SMJ MUN"}. Join India's premier Model United Nations conference.`;
  const imageUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/conferences/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/conferences/${slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

// ─── Helpers ───────────────────────────────────────────────────────
function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const STATUS_LABEL: Record<string, { text: string; bg: string }> = {
  upcoming: { text: "Upcoming", bg: "#bb8b57" },
  live: { text: "Live Now", bg: "#16a34a" },
  completed: { text: "Completed", bg: "#042147" },
};

// ─── Page ──────────────────────────────────────────────────────────
export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!conference) notFound();

  const heroUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1600).height(700).quality(85).url()
    : null;
  const status = STATUS_LABEL[conference.status] || STATUS_LABEL.upcoming;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            minHeight: "500px",
            overflow: "hidden",
            backgroundColor: "#042147",
          }}
        >
          {heroUrl && (
            <Image
              src={heroUrl}
              alt={conference.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          )}
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(4,33,71,0.95) 0%, rgba(4,33,71,0.5) 50%, rgba(0,0,0,0.3) 100%)",
            }}
          />
          {/* Hero Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 8vw",
              paddingBottom: "60px",
              maxWidth: "1000px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: status.bg,
                color: "#ffffff",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                marginBottom: "20px",
                alignSelf: "flex-start",
              }}
            >
              {status.text}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              {conference.title}
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {conference.venue && (
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {conference.venue}
                </span>
              )}
              {conference.venue && conference.date && (
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
              {conference.date && (
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {formatDate(conference.date)}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ── Overview ────────────────────────────────────────── */}
        {conference.overview && conference.overview.length > 0 && (
          <section
            style={{
              backgroundColor: "#ffffff",
              padding: "100px 0",
            }}
          >
            <div
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                padding: "0 8vw",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#bb8b57",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                Overview
              </span>
              <PortableTextRenderer value={conference.overview} />
            </div>
          </section>
        )}

        {/* ── Quick Facts ─────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#f8f8f8",
            padding: "80px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "0 8vw",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
            }}
          >
            {conference.date && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Date
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#042147",
                  }}
                >
                  {formatDate(conference.date)}
                </p>
              </div>
            )}
            {conference.venue && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Venue
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#042147",
                  }}
                >
                  {conference.venue}
                </p>
              </div>
            )}
            {conference.registrationFee != null && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Registration Fee
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#042147",
                  }}
                >
                  ₹{conference.registrationFee.toLocaleString("en-IN")}
                </p>
              </div>
            )}
            {conference.capacity != null && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Capacity
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#042147",
                  }}
                >
                  {conference.capacity} Delegates
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── Committees ──────────────────────────────────────── */}
        {conference.committees && conference.committees.length > 0 && (
          <section
            style={{
              backgroundColor: "#ffffff",
              padding: "100px 0",
            }}
          >
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "0 8vw",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#bb8b57",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Committees
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#042147",
                  marginBottom: "48px",
                  letterSpacing: "-0.01em",
                }}
              >
                Simulations
              </h2>
              <div
                style={{
                  display: "grid",
                  gap: "0",
                }}
              >
                {conference.committees.map((committee, i) => (
                  <div
                    key={committee.name}
                    style={{
                      padding: "32px 0",
                      borderTop: "1px solid rgba(4,33,71,0.08)",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "32px",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading), Georgia, serif",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#bb8b57",
                        opacity: 0.4,
                        lineHeight: 1,
                        minWidth: "48px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading), Georgia, serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#042147",
                          marginBottom: "8px",
                        }}
                      >
                        {committee.name}
                      </h3>
                      {committee.agenda && (
                        <p
                          style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            fontSize: "15px",
                            lineHeight: 1.6,
                            color: "#042147",
                            opacity: 0.6,
                            marginBottom: "4px",
                          }}
                        >
                          {committee.agenda}
                        </p>
                      )}
                      {committee.chairperson && (
                        <p
                          style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#bb8b57",
                            marginTop: "8px",
                          }}
                        >
                          Chair: {committee.chairperson}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Agenda ──────────────────────────────────────────── */}
        {conference.agenda && conference.agenda.length > 0 && (
          <section
            style={{
              backgroundColor: "#f8f8f8",
              padding: "100px 0",
            }}
          >
            <div
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                padding: "0 8vw",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#bb8b57",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                Agenda
              </span>
              <PortableTextRenderer value={conference.agenda} />
            </div>
          </section>
        )}

        {/* ── Gallery ─────────────────────────────────────────── */}
        {conference.gallery && conference.gallery.length > 0 && (
          <section
            style={{
              backgroundColor: "#ffffff",
              padding: "100px 0",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 8vw",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#bb8b57",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Gallery
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#042147",
                  marginBottom: "48px",
                  letterSpacing: "-0.01em",
                }}
              >
                Moments
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "16px",
                }}
              >
                {conference.gallery.map((img, i) => {
                  const imgUrl = urlFor(img).width(600).height(400).quality(80).url();
                  return (
                    <div
                      key={i}
                      style={{
                        aspectRatio: "3 / 2",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={imgUrl}
                        alt={img.alt || `${conference.title} gallery image ${i + 1}`}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Registration CTA ────────────────────────────────── */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #83090e 0%, #5b0207 100%)",
            padding: "100px 0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#bb8b57",
                display: "block",
                marginBottom: "20px",
              }}
            >
              {conference.registrationOpen ? "Registration Open" : "Registration"}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              {conference.registrationOpen
                ? "Secure Your Seat"
                : "Stay Updated"}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "40px",
                maxWidth: "520px",
                margin: "0 auto 40px",
              }}
            >
              {conference.registrationOpen
                ? `Join ${conference.title}${conference.venue ? ` in ${conference.venue}` : ""}. Limited to ${conference.capacity ? `${conference.capacity} delegates` : "limited seats"}.`
                : `Registration for ${conference.title} is currently closed. Check back soon for updates.`}
            </p>
            {conference.registrationOpen ? (
              <Link
                href={`/register/${slug}`}
                className="btn-primary"
                style={{
                  padding: "18px 48px",
                  fontSize: "14px",
                  backgroundColor: "#ffffff",
                  color: "#83090e",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Register Now →
              </Link>
            ) : (
              <Link
                href="/conferences"
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                ← Browse All Conferences
              </Link>
            )}
            {conference.registrationCloseDate && conference.registrationOpen && (
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "20px",
                }}
              >
                Registration closes{" "}
                {new Date(conference.registrationCloseDate).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
