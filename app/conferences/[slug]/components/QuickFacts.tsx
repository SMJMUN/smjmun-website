import React from "react";
import type { Conference } from "@/lib/sanity/types";
import { Calendar, MapPin, CreditCard, Users, Clock, Award } from "lucide-react";

export default function QuickFacts({ conference }: { conference: Conference }) {
  const formattedDate = conference.date
    ? new Date(conference.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : null;

  const deadlineDate = conference.registrationCloseDate
    ? new Date(conference.registrationCloseDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : null;

  const facts = [
    { label: "Date", value: formattedDate, icon: Calendar },
    { label: "Venue", value: conference.venue, icon: MapPin },
    { label: "Fee", value: conference.registrationFee ? `₹${conference.registrationFee.toLocaleString("en-IN")}` : null, icon: CreditCard },
    { label: "Capacity", value: conference.capacity ? `${conference.capacity} Delegates` : null, icon: Users },
    { label: "Deadline", value: deadlineDate, icon: Clock },
    { label: "Committees", value: conference.committees?.length ? `${conference.committees.length} Committees` : null, icon: Award },
  ].filter(f => f.value);

  return (
    <section className="bg-white border-b border-navy/10 py-8">
      <div className="content-wide">
        <div className="flex gap-8 overflow-x-auto scrollbar-hide py-2 lg:justify-center">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="flex items-center gap-4 flex-shrink-0 px-4">
                <Icon size={24} className="text-gold/80" strokeWidth={1.5} />
                <div>
                  <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/50 block mb-1">
                    {fact.label}
                  </span>
                  <span className="font-sans text-[14px] font-medium text-navy">
                    {fact.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
