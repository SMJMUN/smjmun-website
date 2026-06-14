import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { Conference } from "@/lib/sanity/types";
import { MapPin, Calendar, Users } from "lucide-react";

const STATUS_LABEL: Record<string, { text: string; bg: string }> = {
  upcoming: { text: "Upcoming", bg: "text-gold" },
  live: { text: "Live Now", bg: "text-green-600" },
  completed: { text: "Completed", bg: "text-navy/50" },
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
    <article className="group flex flex-col bg-white rounded-md border border-navy/8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 h-full">
      {/* Image */}
      <Link
        href={`/conferences/${conference.slug.current}`}
        className="block relative rounded-t-md overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
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
          <div className="w-full h-full bg-gradient-to-br from-navy to-charcoal/80 flex items-center justify-center">
            <span className="font-serif text-gold/20 text-4xl italic">SMJ</span>
          </div>
        )}

        {/* Status Badge */}
        {conference.registrationOpen && (
           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-navy/10 flex items-center gap-2 shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-navy">Open</span>
           </div>
        )}

        {/* Gold rule at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold/60 transition-all duration-500" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        
        {/* Top Meta: Status */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`font-sans text-[10px] font-semibold tracking-[0.18em] uppercase ${status.bg}`}>
            {status.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[19px] lg:text-[21px] font-bold leading-[1.25] tracking-[-0.01em] text-navy mb-4 group-hover:text-charcoal transition-colors duration-300">
          <Link href={`/conferences/${conference.slug.current}`} className="no-underline">
            {conference.title}
          </Link>
        </h3>

        {/* Meta Facts */}
        <div className="flex flex-col gap-2 mb-6">
           <div className="flex items-center gap-2 text-navy/60 font-sans text-[12px]">
             <MapPin size={14} className="text-gold/80" />
             <span className="tracking-[0.02em]">{conference.venue || "TBA"}</span>
           </div>
           <div className="flex items-center gap-2 text-navy/60 font-sans text-[12px]">
             <Calendar size={14} className="text-gold/80" />
             <span className="tracking-[0.02em]">{formattedDate}</span>
           </div>
           {conference.capacity && (
             <div className="flex items-center gap-2 text-navy/60 font-sans text-[12px]">
               <Users size={14} className="text-gold/80" />
               <span className="tracking-[0.02em]">{conference.capacity}+ Delegates</span>
             </div>
           )}
        </div>

        {/* Footer Link */}
        <div className="mt-auto pt-5 border-t border-navy/8">
          <Link
            href={`/conferences/${conference.slug.current}`}
            className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-charcoal no-underline group/link"
          >
            <span>View Details</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </article>
  );
}
