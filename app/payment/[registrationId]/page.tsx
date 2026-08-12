import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { RegistrationStatus } from "@prisma/client";
import PaymentLayout from "@/app/payment/components/PaymentLayout";
import PaymentButton from "@/app/payment/[registrationId]/PaymentButton";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

function formatDate(date: Date | null) {
  if (!date) return null;
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ registrationId: string }>;
}): Promise<Metadata> {
  return {
    title: "Complete Payment — SMJ MUN",
  };
}

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ registrationId: string }>;
}) {
  const { registrationId } = await params;

  const registration = await db.registration.findUnique({
    where: { id: registrationId },
  });

  if (!registration) {
    notFound();
  }

  if (registration.status === RegistrationStatus.PAID) {
    redirect(
      `/payment/success?registrationId=${encodeURIComponent(registrationId)}`
    );
  }

  const payableStatuses: RegistrationStatus[] = [
    RegistrationStatus.PENDING_PAYMENT,
    RegistrationStatus.PAYMENT_FAILED,
  ];

  if (!payableStatuses.includes(registration.status)) {
    notFound();
  }

  const conferenceDate = formatDate(registration.conferenceDate);

  return (
    <PaymentLayout>
      <section
        style={{
          backgroundColor: "#f8f6f2",
          padding: "120px 0 80px",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
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
            Registration Payment
          </span>
          <h1
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#042147",
              marginBottom: "16px",
            }}
          >
            Complete Your Payment
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "16px",
              color: "rgba(4,33,71,0.7)",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Your registration is confirmed. Proceed to HDFC SmartGateway to pay
            the conference fee and finalize your spot.
          </p>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(4,33,71,0.08)",
              padding: "32px",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#042147",
                marginBottom: "24px",
              }}
            >
              Registration Summary
            </h2>

            <dl
              style={{
                display: "grid",
                gap: "16px",
                margin: 0,
              }}
            >
              <div>
                <dt
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    marginBottom: "4px",
                  }}
                >
                  Conference
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "16px",
                    color: "#042147",
                    margin: 0,
                  }}
                >
                  {registration.conferenceTitle}
                </dd>
              </div>

              {conferenceDate && (
                <div>
                  <dt
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#bb8b57",
                      marginBottom: "4px",
                    }}
                  >
                    Date
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: "16px",
                      color: "#042147",
                      margin: 0,
                    }}
                  >
                    {conferenceDate}
                  </dd>
                </div>
              )}

              <div>
                <dt
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    marginBottom: "4px",
                  }}
                >
                  Participant
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "16px",
                    color: "#042147",
                    margin: 0,
                  }}
                >
                  {registration.firstName} {registration.lastName}
                </dd>
              </div>

              <div>
                <dt
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    marginBottom: "4px",
                  }}
                >
                  Email
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "16px",
                    color: "#042147",
                    margin: 0,
                  }}
                >
                  {registration.email}
                </dd>
              </div>

              <div>
                <dt
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#bb8b57",
                    marginBottom: "4px",
                  }}
                >
                  Registration Fee
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-sora), Georgia, serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#042147",
                    margin: 0,
                  }}
                >
                  {formatCurrency(registration.conferenceFee, registration.currency)}
                </dd>
              </div>
            </dl>
          </div>

          <PaymentButton registrationId={registrationId} />

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "13px",
              color: "rgba(4,33,71,0.5)",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            Registration ID: {registration.id}
          </p>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "13px",
              color: "rgba(4,33,71,0.5)",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            <Link href="/conferences" style={{ color: "#bb8b57" }}>
              Back to Conferences
            </Link>
          </p>
        </div>
      </section>
    </PaymentLayout>
  );
}
