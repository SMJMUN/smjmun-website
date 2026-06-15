import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { RegistrationStatus } from "@prisma/client";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import { sanityFetch } from "@/lib/sanity/client";
import { CONFERENCE_BY_SLUG_QUERY } from "@/lib/sanity/queries";
import type { Conference } from "@/lib/sanity/types";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

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
  draft: { text: "Draft", bg: "#6b7280" },
};

function isRegistrationOpen(conference: Conference): boolean {
  if (!conference.registrationOpen) return false;
  if (conference.status !== "upcoming" && conference.status !== "live") {
    return false;
  }
  if (
    conference.registrationCloseDate &&
    new Date(conference.registrationCloseDate) < new Date()
  ) {
    return false;
  }
  return true;
}

async function isCapacityReached(conference: Conference): Promise<boolean> {
  if (conference.capacity == null) return false;

  const registrationCount = await db.registration.count({
    where: {
      conferenceId: conference._id,
      status: {
        in: [RegistrationStatus.PENDING_PAYMENT, RegistrationStatus.PAID],
      },
    },
  });

  return registrationCount >= conference.capacity;
}

async function getRegistrationAvailability(conference: Conference) {
  if (!isRegistrationOpen(conference)) {
    return { open: false as const, reason: "closed" as const };
  }

  if (await isCapacityReached(conference)) {
    return { open: false as const, reason: "capacity" as const };
  }

  return { open: true as const };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
    revalidate: false,
  });

  if (!conference) {
    return { title: "Registration Not Found — SMJ MUN" };
  }

  const title = `Register — ${conference.title} — SMJ MUN`;
  const description = `Register for ${conference.title}${conference.venue ? ` at ${conference.venue}` : ""}.`;

  return {
    title,
    description,
    alternates: { canonical: `/register/${slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const conference = await sanityFetch<Conference | null>({
    query: CONFERENCE_BY_SLUG_QUERY,
    params: { slug },
    revalidate: false,
  });

  if (!conference) notFound();

  const availability = await getRegistrationAvailability(conference);
  const status = STATUS_LABEL[conference.status] || STATUS_LABEL.upcoming;

  return (
    <>
      <main>
        <section
          style={{
            backgroundColor: "#042147",
            padding: "120px 0 80px",
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
                marginBottom: "20px",
              }}
            >
              Conference Registration
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              {conference.title}
            </h1>
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
                marginBottom: "24px",
              }}
            >
              {status.text}
            </span>
            <div
              style={{
                display: "grid",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              {conference.venue && (
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span style={{ color: "#bb8b57", marginRight: "8px" }}>
                    Venue
                  </span>
                  {conference.venue}
                </p>
              )}
              {conference.date && (
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span style={{ color: "#bb8b57", marginRight: "8px" }}>
                    Date
                  </span>
                  {formatDate(conference.date)}
                </p>
              )}
              {conference.registrationFee != null && (
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span style={{ color: "#bb8b57", marginRight: "8px" }}>
                    Registration Fee
                  </span>
                  ₹{conference.registrationFee.toLocaleString("en-IN")}
                </p>
              )}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "80px 0 120px",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {!availability.open ? (
              <div style={{ textAlign: "center" }}>
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
                  Registration Closed
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(28px, 4vw, 38px)",
                    fontWeight: 700,
                    color: "#042147",
                    marginBottom: "16px",
                  }}
                >
                  {availability.reason === "capacity"
                    ? "Conference at Capacity"
                    : "Registration Is Currently Closed"}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "17px",
                    lineHeight: 1.6,
                    color: "rgba(4,33,71,0.7)",
                    marginBottom: "32px",
                    maxWidth: "520px",
                    margin: "0 auto 32px",
                  }}
                >
                  {availability.reason === "capacity"
                    ? `Registration for ${conference.title} has reached capacity. Please check back for future conferences.`
                    : `Registration for ${conference.title} is not currently open. Please visit the conference page for updates.`}
                </p>
                <Link
                  href={`/conferences/${slug}`}
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#83090e",
                    textDecoration: "none",
                  }}
                >
                  ← Back to Conference
                </Link>
              </div>
            ) : (
              <>
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
                  Delegate Information
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(28px, 4vw, 38px)",
                    fontWeight: 700,
                    color: "#042147",
                    marginBottom: "40px",
                  }}
                >
                  Complete Your Registration
                </h2>
                <RegistrationForm conference={conference} />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
