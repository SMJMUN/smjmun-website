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
      <main className="bg-[#0A0A0A] relative">
        <section className="py-20 lg:py-32 border-b border-white/10 relative">
          {/* Subtle gradient glow to make it match the conferences hero slightly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0A0A0A] opacity-50 pointer-events-none" />
          <div className="content-editorial mx-auto px-6 lg:px-[8vw] relative z-10">
            <span className="section-label mb-5 block text-gold">
              Conference Registration
            </span>
            <h1 className="text-heading text-white mb-4">
              {conference.title}
            </h1>
            <span
              className="inline-block text-white font-body text-[11px] font-semibold tracking-[0.12em] uppercase py-1.5 px-4 mb-6 rounded-sm shadow-sm"
              style={{ backgroundColor: status.bg }}
            >
              {status.text}
            </span>
            <div className="grid gap-4 mt-2">
              {conference.venue && (
                <p className="text-body text-white/70">
                  <span className="text-gold mr-2 font-medium">
                    Venue
                  </span>
                  {conference.venue}
                </p>
              )}
              {conference.date && (
                <p className="text-body text-white/70">
                  <span className="text-gold mr-2 font-medium">
                    Date
                  </span>
                  {formatDate(conference.date)}
                </p>
              )}
              {conference.registrationFee != null && (
                <p className="text-body text-white/70">
                  <span className="text-gold mr-2 font-medium">
                    Registration Fee
                  </span>
                  ₹{conference.registrationFee.toLocaleString("en-IN")}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-20 lg:py-32 relative">
          <div className="content-editorial mx-auto px-6 lg:px-[8vw] relative z-10">
            {!availability.open ? (
              <div className="text-center">
                <span className="section-label mb-5 block text-gold">
                  Registration Closed
                </span>
                <h2 className="text-subheading text-white mb-4">
                  {availability.reason === "capacity"
                    ? "Conference at Capacity"
                    : "Registration Is Currently Closed"}
                </h2>
                <p className="text-body text-white/70 mb-8 max-w-[520px] mx-auto">
                  {availability.reason === "capacity"
                    ? `Registration for ${conference.title} has reached capacity. Please check back for future conferences.`
                    : `Registration for ${conference.title} is not currently open. Please visit the conference page for updates.`}
                </p>
                <Link
                  href={`/conferences/${slug}`}
                  className="btn-ds-secondary"
                >
                  <span className="btn-ds-arrow">←</span> Back to Conference
                </Link>
              </div>
            ) : (
              <>
                <span className="section-label mb-4 block text-gold">
                  Delegate Information
                </span>
                <h2 className="text-subheading text-white mb-10">
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
