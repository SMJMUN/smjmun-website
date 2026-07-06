import React from "react";
import type { Conference } from "@/lib/sanity/types";
import { UserCheck, FileEdit, Users, Mic2, Award, BookOpen } from "lucide-react";

export default function ConferenceTimeline({ conference }: { conference: Conference }) {
  if (!conference.date) return null;

  const conferenceDate = new Date(conference.date);
  const closeDate = conference.registrationCloseDate ? new Date(conference.registrationCloseDate) : new Date(conferenceDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const openDate  = new Date(closeDate.getTime() - 30 * 24 * 60 * 60 * 1000);
  const allocDate = new Date(closeDate.getTime() +  2 * 24 * 60 * 60 * 1000);
  const day2      = new Date(conferenceDate.getTime() + 1 * 24 * 60 * 60 * 1000);
  const closing   = new Date(conferenceDate.getTime() + 2 * 24 * 60 * 60 * 1000);

  const formatShort = (d: Date) =>
    d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  const timeline = [
    { label: "Registration Opens",   date: formatShort(openDate),       icon: UserCheck, desc: "Early bird and standard registrations begin." },
    { label: "Registration Closes",  date: formatShort(closeDate),      icon: FileEdit,  desc: "Final day to secure your participation." },
    { label: "Committee Allocation", date: formatShort(allocDate),      icon: Users,     desc: "Country and committee assignments released." },
    { label: "Preparation Phase",    date: "Ongoing",                   icon: BookOpen,  desc: "Study guides released, position paper drafting." },
    { label: "Conference Commences", date: formatShort(conferenceDate), icon: Mic2,      desc: "Opening ceremony and first committee session." },
    { label: "Closing Ceremony",     date: formatShort(closing),        icon: Award,     desc: "Awards distributed and formal conclusion." },
  ];

  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{ backgroundColor: 'var(--ds-bg-secondary)' }}
    >
      {/* Section Header */}
      <div className="content-editorial text-center mb-20 mx-auto">
        <span className="section-label block mb-6">Key Dates</span>
        <h2
          className="font-serif text-white mb-8"
          style={{
            fontSize: 'clamp(30px, 4vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Conference Timeline
        </h2>
        <div className="gold-rule mx-auto" />
      </div>

      <div className="content-editorial mx-auto">
        {/* Timeline spine */}
        <div
          className="relative ml-6 md:ml-12 lg:ml-[50%] lg:-translate-x-[1px]"
          style={{ borderLeft: '2px solid rgba(187,139,87,0.20)' }}
        >
          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="mb-12 relative flex items-center w-full lg:justify-between group">

                {/* Marker circle */}
                <div
                  className="absolute flex items-center justify-center transition-all duration-400 group-hover:-translate-y-0.5"
                  style={{
                    left: '-21px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--ds-surface)',
                    border: '1px solid var(--ds-border)',
                    zIndex: 10,
                  }}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="transition-colors duration-300 group-hover:text-[#BB8B57]"
                    style={{ color: 'var(--ds-text-muted)' }}
                  />
                </div>

                {/* Content block */}
                <div
                  className={`w-full pl-12 lg:w-[45%] lg:px-0 ${isEven ? "lg:text-right lg:pr-12 lg:ml-0" : "lg:pl-12 lg:ml-auto"}`}
                >
                  <span
                    className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase block mb-2"
                    style={{ color: 'var(--ds-gold)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {item.date}
                  </span>
                  <h3
                    className="font-serif text-white mb-2"
                    style={{ fontSize: '19px', fontWeight: 700 }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="font-sans leading-[1.65]"
                    style={{
                      fontSize: '14px',
                      color: 'var(--ds-text-muted)',
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
