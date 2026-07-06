import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";
import { MapPin, Calendar, Users } from "lucide-react";

const STATUS_LABEL: Record<string, { text: string; color: string }> = {
  upcoming: { text: "Upcoming", color: 'var(--ds-gold)' },
  live: { text: "Live Now", color: 'rgba(74,222,128,0.9)' },
  completed: { text: "Completed", color: 'var(--ds-text-muted)' },
};

export default function ConferenceCard({ conference }: { conference: Conference }) {
  const coverUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(800).height(500).quality(85).url()
    : null;

  const status = STATUS_LABEL[conference.status] || STATUS_LABEL.upcoming;
  const formattedDate = conference.date
    ? new Date(conference.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "TBA";

  return (
    <article
      className="card-ds group flex flex-col h-full"
      style={{ borderRadius: 'var(--ds-radius-md)' }}
    >
      {/* Image */}
      <Link
        href={`/conferences/${conference.slug.current}`}
        className="block relative overflow-hidden"
        style={{
          aspectRatio: "16 / 10",
          borderRadius: 'var(--ds-radius-md) var(--ds-radius-md) 0 0',
        }}
        tabIndex={-1}
        aria-hidden="true"
      >
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={conference.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--ds-surface), rgba(187,139,87,0.06))' }}
          >
            <span className="font-serif italic" style={{ fontSize: 48, color: 'rgba(187,139,87,0.15)' }}>SMJ</span>
          </div>
        )}

        {/* Bottom image gold rule on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500"
          style={{
            background: 'var(--ds-gold)',
            opacity: 0,
          }}
        />

        {/* Registration Open badge */}
        {conference.registrationOpen && (
          <div
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5"
            style={{
              backgroundColor: 'rgba(10,10,10,0.85)',
              border: '1px solid rgba(74,222,128,0.4)',
              borderRadius: 'var(--ds-radius-sm)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span
              className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase"
              style={{ color: 'rgba(74,222,128,0.9)' }}
            >
              Open
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">

        {/* Status */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: status.color }}
          >
            {status.text}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif font-bold mb-4 transition-colors duration-300 group-hover:text-[#BB8B57]"
          style={{
            fontSize: 'clamp(17px, 1.6vw, 21px)',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            color: '#ffffff',
          }}
        >
          <Link
            href={`/conferences/${conference.slug.current}`}
            className="no-underline"
            style={{ color: 'inherit' }}
          >
            {conference.title}
          </Link>
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2" style={{ color: 'var(--ds-text-muted)' }}>
            <MapPin size={13} style={{ color: 'var(--ds-gold)', opacity: 0.8, flexShrink: 0 }} />
            <span
              className="font-sans text-[12px] tracking-[0.02em]"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              {conference.venue || "TBA"}
            </span>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--ds-text-muted)' }}>
            <Calendar size={13} style={{ color: 'var(--ds-gold)', opacity: 0.8, flexShrink: 0 }} />
            <span
              className="font-sans text-[12px] tracking-[0.02em]"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              {formattedDate}
            </span>
          </div>
          {conference.capacity && (
            <div className="flex items-center gap-2" style={{ color: 'var(--ds-text-muted)' }}>
              <Users size={13} style={{ color: 'var(--ds-gold)', opacity: 0.8, flexShrink: 0 }} />
              <span
                className="font-sans text-[12px] tracking-[0.02em]"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {conference.capacity}+ Delegates
              </span>
            </div>
          )}
        </div>

        {/* Footer link */}
        <div
          className="mt-auto pt-5"
          style={{ borderTop: '1px solid var(--ds-border)' }}
        >
          <Link
            href={`/conferences/${conference.slug.current}`}
            className="btn-ds-text no-underline"
          >
            <span>View Details</span>
            <span className="btn-ds-arrow">→</span>
          </Link>
        </div>

      </div>
    </article>
  );
}
