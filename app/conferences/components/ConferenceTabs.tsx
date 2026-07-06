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
    <section
      className="section-padding-md"
      style={{ backgroundColor: 'var(--ds-bg-primary)' }}
    >
      {/* Section Header */}
      <div className="content-wide mb-12">
        <span className="section-label block mb-4">Explore All</span>
        <h2
          className="font-serif text-white"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          Global Conferences
        </h2>
      </div>

      <div className="content-wide">
        {/* Tabs */}
        <div
          className="flex flex-wrap gap-1 mb-12 p-1"
          style={{
            backgroundColor: 'var(--ds-surface)',
            borderRadius: 'var(--ds-radius-md)',
            border: '1px solid var(--ds-border)',
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex-1 min-w-[120px] transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: activeTab === tab.id ? 500 : 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 20px',
                borderRadius: 'calc(var(--ds-radius-md) - 4px)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--ds-text-muted)',
                backgroundColor: activeTab === tab.id ? 'rgba(187,139,87,0.14)' : 'transparent',
                border: activeTab === tab.id ? '1px solid rgba(187,139,87,0.35)' : '1px solid transparent',
                cursor: 'pointer',
              }}
            >
              {tab.label}
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
              <p
                className="font-sans text-[15px]"
                style={{ color: 'var(--ds-text-muted)' }}
              >
                No conferences found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
