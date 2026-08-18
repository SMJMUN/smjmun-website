"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/conference/types";

const STATUS_STYLES: Record<string, { text: string; color: string; bg: string; border: string }> = {
  upcoming: { text: "Upcoming", color: 'var(--ds-gold)', bg: 'rgba(187,139,87,0.12)', border: 'rgba(187,139,87,0.35)' },
  live:     { text: "Live Now", color: 'rgba(74,222,128,0.9)', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.35)' },
  completed:{ text: "Completed", color: 'var(--ds-text-muted)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)' },
};

export default function ConferenceVideoHero({ conference }: { conference: Conference }) {
  let statusKey = conference.status;
  if (conference.date && new Date().getTime() > new Date(conference.date).getTime()) {
    statusKey = 'completed';
  }
  const status = STATUS_STYLES[statusKey] || STATUS_STYLES.upcoming;

  const bgUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1920).height(1080).quality(85).url()
    : null;

  return (
    <section
      className="relative w-full overflow-hidden flex items-end"
      style={{
        height: '90vh',
        minHeight: '650px',
        maxHeight: '860px',
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* Background Video with Ken Burns */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover animate-[kenBurns_20s_ease-out_infinite_alternate]"
        poster={bgUrl || '/images/students-training-2.jpeg'}
      >
        <source src="/conf-hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark editorial overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.25) 100%)',
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(187,139,87,0.10), transparent 55%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(187,139,87,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="content-wide relative z-20 pt-32 pb-16 lg:pt-40 lg:pb-24 w-full mt-auto">
        <div className="max-w-[900px]">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/conferences"
              className="font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Conferences
            </Link>
            <span style={{ color: 'var(--ds-text-muted)', fontSize: 10 }}>›</span>
            <span
              className="font-sans text-[11px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--ds-text-secondary)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              {conference.title}
            </span>
          </div>

          {/* Status pill */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2"
              style={{
                color: status.color,
                backgroundColor: status.bg,
                border: `1px solid ${status.border}`,
                borderRadius: '4px',
                fontFamily: 'var(--font-body), system-ui, sans-serif',
              }}
            >
              {conference.status === 'live' && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              )}
              {status.text}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {conference.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-6 mb-10">
            {conference.venue && (
              <span
                className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase flex items-center gap-2"
                style={{ color: 'var(--ds-text-secondary)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <span style={{ color: 'var(--ds-gold)' }}>📍</span>
                {conference.venue}
              </span>
            )}
            {conference.capacity && (
              <span
                className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase flex items-center gap-2"
                style={{ color: 'var(--ds-text-secondary)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <span style={{ color: 'var(--ds-gold)' }}>👥</span>
                {conference.capacity}+ Delegates
              </span>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            {conference.registrationOpen && (!conference.registrationCloseDate || new Date().getTime() <= new Date(conference.registrationCloseDate).getTime()) && (
              <Link href={`/register/${conference.slug.current}`} className="btn-ds-primary">
                Register Now
              </Link>
            )}
            <Link href="#overview" className="btn-ds-secondary">
              Explore Details
            </Link>
          </div>
        </div>
      </div>

      {/* Ken Burns keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
      `}} />
    </section>
  );
}
