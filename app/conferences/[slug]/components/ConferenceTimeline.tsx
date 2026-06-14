import React from "react";
import type { Conference } from "@/lib/sanity/types";
import { UserCheck, FileEdit, Users, Mic2, Award, BookOpen } from "lucide-react";

export default function ConferenceTimeline({ conference }: { conference: Conference }) {
  if (!conference.date) return null;

  const conferenceDate = new Date(conference.date);
  const closeDate = conference.registrationCloseDate ? new Date(conference.registrationCloseDate) : new Date(conferenceDate.getTime() - 7 * 24 * 60 * 60 * 1000); 
  const openDate = new Date(closeDate.getTime() - 30 * 24 * 60 * 60 * 1000); 
  const allocDate = new Date(closeDate.getTime() + 2 * 24 * 60 * 60 * 1000); 
  const day2 = new Date(conferenceDate.getTime() + 1 * 24 * 60 * 60 * 1000);
  const closing = new Date(conferenceDate.getTime() + 2 * 24 * 60 * 60 * 1000);

  const formatShort = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  const timeline = [
    { label: "Registration Opens", date: formatShort(openDate), icon: UserCheck, desc: "Early bird and standard registrations begin." },
    { label: "Registration Closes", date: formatShort(closeDate), icon: FileEdit, desc: "Final day to secure your participation." },
    { label: "Committee Allocation", date: formatShort(allocDate), icon: Users, desc: "Country and committee assignments released." },
    { label: "Preparation Phase", date: "Ongoing", icon: BookOpen, desc: "Study guides released, position paper drafting." },
    { label: "Conference Commences", date: formatShort(conferenceDate), icon: Mic2, desc: "Opening ceremony and first committee session." },
    { label: "Closing Ceremony", date: formatShort(closing), icon: Award, desc: "Awards distributed and formal conclusion." },
  ];

  return (
    <section className="section-padding-lg bg-ivory">
      <div className="content-editorial text-center mb-20">
        <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
          Key Dates
        </span>
        <h2 className="text-section text-navy mb-8">
          Conference Timeline
        </h2>
        <div className="gold-rule mx-auto" />
      </div>

      <div className="content-editorial">
        <div className="relative border-l-2 border-navy/10 ml-6 md:ml-12 lg:ml-[50%] lg:-translate-x-[1px]">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="mb-12 relative flex items-center w-full lg:justify-between group">
                
                {/* Marker */}
                <div className="absolute left-[-21px] lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-white border border-navy/20 flex items-center justify-center z-10 group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                  <Icon size={16} className="text-navy group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Desktop Left / Right positioning */}
                <div className={`w-full pl-12 lg:w-[45%] lg:px-0 ${isEven ? "lg:text-right lg:pr-12 lg:ml-0" : "lg:pl-12 lg:ml-auto"}`}>
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-gold block mb-2">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-[20px] font-bold text-navy mb-2">
                    {item.label}
                  </h3>
                  <p className="font-sans text-[14px] leading-[1.6] text-navy/60">
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
