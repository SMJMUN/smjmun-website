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
    { label: "Date",       value: formattedDate,        icon: Calendar  },
    { label: "Venue",      value: conference.venue,     icon: MapPin    },
    { label: "Fee",        value: conference.registrationFee ? `₹${conference.registrationFee.toLocaleString("en-IN")}` : null, icon: CreditCard },
    { label: "Capacity",   value: conference.capacity   ? `${conference.capacity} Delegates` : null, icon: Users  },
    { label: "Deadline",   value: deadlineDate,         icon: Clock     },
    { label: "Committees", value: conference.committees?.length ? `${conference.committees.length} Committees` : null, icon: Award },
  ].filter(f => f.value);

  return (
    <section
      className="py-6"
      style={{
        backgroundColor: 'var(--ds-surface)',
        borderBottom: '1px solid var(--ds-border)',
      }}
    >
      <div className="content-wide">
        <div className="flex gap-6 overflow-x-auto py-2 lg:justify-center" style={{ scrollbarWidth: 'none' }}>
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 flex-shrink-0 px-4 py-2"
                style={{
                  borderRight: i < facts.length - 1 ? '1px solid var(--ds-border)' : 'none',
                }}
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  style={{ color: 'var(--ds-gold)', opacity: 0.85, flexShrink: 0 }}
                />
                <div>
                  <span
                    className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase block mb-0.5"
                    style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {fact.label}
                  </span>
                  <span
                    className="font-sans text-[13px] font-medium"
                    style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
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
