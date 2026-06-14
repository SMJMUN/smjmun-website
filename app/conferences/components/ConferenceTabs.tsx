"use client";

import React, { useState } from "react";
import type { Conference } from "@/lib/sanity/types";
import ConferenceCard from "./ConferenceCard";

export default function ConferenceTabs({ conferences }: { conferences: Conference[] }) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "closing_soon" | "past">("upcoming");

  const upcoming = conferences.filter(c => c.status === "upcoming" || c.status === "live");
  const past = conferences.filter(c => c.status === "completed");
  
  const closingSoon = conferences.filter(c => {
    if (!c.registrationCloseDate || !c.registrationOpen) return false;
    const daysUntilClose = (new Date(c.registrationCloseDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24);
    return daysUntilClose > 0 && daysUntilClose <= 14;
  });

  const TABS = [
    { id: "upcoming", label: "Upcoming Conferences", data: upcoming },
    { id: "closing_soon", label: "Registration Closing Soon", data: closingSoon },
    { id: "past", label: "Past Conferences", data: past },
  ] as const;

  const currentData = TABS.find(t => t.id === activeTab)?.data || upcoming;

  return (
    <section className="section-padding-md bg-ivory">
      <div className="content-editorial text-center mb-12">
         <span className="font-sans text-[12px] font-semibold tracking-[0.25em] uppercase text-gold block mb-4">
            Explore All
         </span>
         <h2 className="text-heading text-navy">Global Conferences</h2>
      </div>

      <div className="content-wide">
        {/* Tabs - Mirrored from Blog CategoryFilters styling */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16 border-b border-navy/10 pb-4">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                font-sans text-[12px] font-medium tracking-[0.1em] uppercase pb-2 relative transition-colors duration-300
                ${activeTab === tab.id ? "text-navy" : "text-navy/40 hover:text-navy/70"}
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gold animate-fade-in" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentData.length > 0 ? (
            currentData.map(conf => (
              <ConferenceCard key={conf._id} conference={conf} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="font-sans text-[15px] text-navy/50">
                No conferences found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
