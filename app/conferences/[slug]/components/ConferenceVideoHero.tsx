"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";

const STATUS_LABEL: Record<string, { text: string; bg: string }> = {
  upcoming: { text: "Upcoming", bg: "bg-gold" },
  live: { text: "Live Now", bg: "bg-green-600" },
  completed: { text: "Completed", bg: "bg-navy/50" },
};

export default function ConferenceVideoHero({ conference }: { conference: Conference }) {
  const status = STATUS_LABEL[conference.status] || STATUS_LABEL.upcoming;
  
  const bgUrl = conference.heroImage
    ? urlFor(conference.heroImage).width(1920).height(1080).quality(85).url()
    : null;

  return (
    <section className="relative w-full h-[75vh] min-h-[500px] max-h-[800px] overflow-hidden bg-navy flex items-end">
      {/* Background Image with Ken Burns Effect */}
      {bgUrl ? (
        <Image
          src={bgUrl}
          alt={conference.title}
          fill
          priority
          unoptimized
          className="object-cover animate-[kenBurns_20s_ease-out_infinite_alternate]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-charcoal/40" />
      )}

      {/* Premium Navy Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(4,33,71,0.95) 0%, rgba(4,33,71,0.6) 50%, rgba(4,33,71,0.2) 100%)"
        }}
      />

      {/* Content */}
      <div className="content-wide relative z-20 pb-16 lg:pb-24 w-full">
        <div className="max-w-[900px]">
          <span className={`animate-fade-in-up delay-100 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white px-4 py-2 mb-8 inline-block ${status.bg}`}>
            {status.text}
          </span>
          
          <h1 className="animate-fade-in-up delay-200 font-serif text-[clamp(48px,6vw,96px)] font-bold leading-[1.0] tracking-[-0.02em] text-white mb-8">
            {conference.title}
          </h1>

          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-x-8 gap-y-4 mb-10">
            {conference.venue && (
              <span className="font-sans text-[14px] font-medium tracking-[0.1em] uppercase text-white/80 flex items-center gap-2">
                <span className="text-gold text-[16px]">📍</span> {conference.venue}
              </span>
            )}
            {conference.capacity && (
              <span className="font-sans text-[14px] font-medium tracking-[0.1em] uppercase text-white/80 flex items-center gap-2">
                <span className="text-gold text-[16px]">👥</span> {conference.capacity}+ Delegates
              </span>
            )}
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
            {conference.registrationOpen && (
              <Link href={`/register/${conference.slug.current}`} className="btn-primary" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}>
                Register Now
              </Link>
            )}
            <Link href="#overview" className="btn-outline">
              Explore Details
            </Link>
          </div>
        </div>
      </div>
      
      {/* Custom Keyframes for Ken Burns */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
      `}} />
    </section>
  );
}
