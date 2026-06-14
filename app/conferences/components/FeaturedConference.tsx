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
    <section id="upcoming-conferences" className="section-padding-sm bg-white">
      <div className="content-editorial text-center mb-16">
        <h2 className="text-heading text-navy">Featured Conference</h2>
        <div className="gold-rule mx-auto mt-6" />
      </div>

      <div className="content-wide">
        <Link
          href={`/conferences/${conference.slug.current}`}
          className="group block border-[1px] border-gold/30 rounded-sm p-2 lg:p-3 no-underline h-full transition-colors duration-500 hover:border-gold"
          aria-label={`Featured conference: ${conference.title}`}
        >
        <article className="relative rounded-xl overflow-hidden bg-white flex flex-col lg:flex-row min-h-[460px] border border-stone-200">
            
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto">
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
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-charcoal/80 flex items-center justify-center">
                   <span className="font-serif text-gold/20 text-6xl italic">SMJ</span>
                </div>
              )}
              
              {/* Overlay shadow for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80 lg:hidden" />
              
              {/* "Featured" pill top-left over image */}
              <div className="absolute top-6 left-6 z-10">
             <span className="
text-[10px]
font-semibold
tracking-[0.18em]
uppercase
text-gold
bg-[#FFF8EE]
border
border-gold/30
px-4
py-2
rounded-full
">
Featured Conference
</span>
              </div>
            </div>

            {/* Content Side */}
           <div className="relative z-10 w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-white">
              
              <div className="flex items-center gap-4 mb-6">
                 {conference.registrationOpen && (
                    <span className="flex items-center gap-2 font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Registration Open
                    </span>
                 )}
              </div>

            <h3 className="
font-serif
text-[clamp(32px,3vw,48px)]
font-bold
leading-[1.1]
tracking-[-0.02em]
text-navy
mb-6
group-hover:text-gold
transition-colors
duration-500
">
                {conference.title}
              </h3>

              <div className="flex text-navy    flex-col gap-3 mb-8 font-sans text-[13px] tracking-[0.1em] uppercase  font-medium">
                {conference.venue && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold opacity-80 text-[14px]">📍</span>
                    {conference.venue}
                  </div>
                )}
                {formattedDate && (
                  <div className="flex items-center gap-3">
                    <span className="text-gold opacity-80 text-[14px]">📅</span>
                    {formattedDate}
                  </div>
                )}
              </div>

              {/* Excerpt logic using overview */}
              {conference.overview && conference.overview.length > 0 && (
                 <p className="font-sans text-[15px] leading-[1.7] text-stone-600 mb-10 line-clamp-3">
                   {/* Extracting pure text from portable text block 0 for the excerpt */}
                   {conference.overview[0]?.children?.[0]?.text || "Join us for an immersive diplomatic experience."}
                 </p>
              )}

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-gold group-hover:gap-4 transition-all duration-300">
                  Explore Details
                  <span className="text-[16px]">→</span>
                </span>
              </div>
            </div>

          </article>
        </Link>
      </div>
    </section>
  );
}
