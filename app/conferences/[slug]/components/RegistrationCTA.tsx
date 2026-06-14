"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { Conference } from "@/lib/sanity/types";

export default function RegistrationCTA({ conference }: { conference: Conference }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 50% of the page
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      if (scrolled / (docHeight - winHeight) > 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!conference.registrationOpen) return null;

  let daysRemaining = null;
  if (conference.registrationCloseDate) {
    const diff = new Date(conference.registrationCloseDate).getTime() - new Date().getTime();
    daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: isVisible ? "0" : "-100%",
        left: 0,
        right: 0,
        backgroundColor: "var(--color-navy)",
        borderTop: "2px solid var(--color-gold)",
        padding: "20px 0",
        zIndex: 50,
        transition: "bottom 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        boxShadow: "0 -10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <div className="content-wide" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 700, color: "var(--color-white)", marginBottom: "4px" }}>
            Ready To Join {conference.title}?
          </h3>
          {daysRemaining !== null && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-gold)" }}>
              Registration closes in {daysRemaining} days.
            </p>
          )}
        </div>
        
        <Link
          href={`/register/${conference.slug.current}`}
          className="btn-white"
          style={{
            padding: "16px 48px",
            fontSize: "14px",
            backgroundColor: "var(--color-white)",
            color: "var(--color-navy)",
          }}
        >
          Register Now →
        </Link>
      </div>
    </div>
  );
}
