import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

export default function FeaturedConference({ conference }: { conference: Conference | undefined }) {
  if (!conference) return null;

  const coverUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1200).height(800).quality(85).url()
    : null;

  const formattedDate = conference.date
    ? new Date(conference.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <section
      id="upcoming-conferences"
      className="section-padding-sm"
      style={{ backgroundColor: 'var(--ds-bg-secondary)' }}
    >
      {/* Section Header */}
      <div className="content-editorial text-center mb-16 mx-auto">
        <span className="section-label">Featured Conference</span>
        <h2
          className="font-serif text-white mt-4"
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Next on the Stage
        </h2>
        <div className="gold-rule mx-auto mt-6" />
      </div>

      <div className="content-wide">
        <Link
          href={`/conferences/${conference.slug.current}`}
          className="group block no-underline"
          aria-label={`Featured conference: ${conference.title}`}
        >
          {/* Card */}
          <article
            className="card-ds relative flex flex-col lg:flex-row overflow-hidden"
            style={{
              minHeight: '480px',
              borderRadius: 'var(--ds-radius-lg)',
            }}
          >
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={conference.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--ds-surface), rgba(187,139,87,0.08))' }}
                >
                  <span className="font-serif italic" style={{ fontSize: 80, color: 'rgba(187,139,87,0.15)' }}>SMJ</span>
                </div>
              )}

              {/* Left-to-right gradient — blends image into card content */}
              <div
                className="absolute inset-0 hidden lg:block"
                style={{ background: 'linear-gradient(to right, transparent 60%, var(--ds-surface) 100%)' }}
              />

              {/* Mobile bottom fade */}
              <div
                className="absolute inset-0 lg:hidden"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)' }}
              />

              {/* "Featured" pill */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  className="section-label px-4 py-2"
                  style={{
                    background: 'rgba(10,10,10,0.82)',
                    border: '1px solid rgba(187,139,87,0.35)',
                    borderRadius: 'var(--ds-radius-sm)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Featured
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div
              className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-10 lg:p-14"
              style={{ backgroundColor: 'var(--ds-surface)' }}
            >
              {/* Registration badge */}
              {conference.registrationOpen && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span
                    className="section-label"
                    style={{ color: 'rgba(74,222,128,0.9)', letterSpacing: '0.2em' }}
                  >
                    Registration Open
                  </span>
                </div>
              )}

              {/* Title */}
              <h3
                className="font-serif text-white mb-6 transition-colors duration-500 group-hover:text-[#BB8B57]"
                style={{
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {conference.title}
              </h3>

              {/* Meta */}
              <div
                className="flex flex-col gap-3 mb-8"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {conference.venue && (
                  <div className="flex items-center gap-3">
                    <span style={{ color: 'var(--ds-gold)', fontSize: 14 }}>📍</span>
                    <span
                      className="font-sans text-[13px] uppercase tracking-[0.1em] font-medium"
                      style={{ color: 'var(--ds-text-secondary)' }}
                    >
                      {conference.venue}
                    </span>
                  </div>
                )}
                {formattedDate && (
                  <div className="flex items-center gap-3">
                    <span style={{ color: 'var(--ds-gold)', fontSize: 14 }}>📅</span>
                    <span
                      className="font-sans text-[13px] uppercase tracking-[0.1em] font-medium"
                      style={{ color: 'var(--ds-text-secondary)' }}
                    >
                      {formattedDate}
                    </span>
                  </div>
                )}
              </div>

              {/* Excerpt */}
              {conference.overview && conference.overview.length > 0 && (
                <p
                  className="mb-10 line-clamp-3 leading-[1.75]"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '15px',
                    color: 'var(--ds-text-muted)',
                  }}
                >
                  {conference.overview[0]?.children?.[0]?.text || "Join us for an immersive diplomatic experience."}
                </p>
              )}

              {/* CTA arrow */}
              <div className="mt-auto">
                <span className="btn-ds-text group-hover:text-[#BB8B57]">
                  Explore Details
                  <span className="btn-ds-arrow">→</span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
