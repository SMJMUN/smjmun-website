"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { Conference } from "@/lib/sanity/types";

export default function RegistrationCTA({ conference }: { conference: Conference }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        zIndex: 50,
        transition: "bottom 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        backgroundColor: '#111111',
        borderTop: '1px solid rgba(187,139,87,0.35)',
        boxShadow: '0 -12px 40px rgba(0,0,0,0.5)',
        padding: "18px 0",
      }}
    >
      <div
        className="content-wide"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "3px",
            }}
          >
            Ready To Join {conference.title}?
          </h3>
          {daysRemaining !== null && (
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: "13px",
                color: 'var(--ds-gold)',
              }}
            >
              Registration closes in {daysRemaining} day{daysRemaining !== 1 ? 's' : ''}.
            </p>
          )}
        </div>

        <Link
          href={`/register/${conference.slug.current}`}
          className="btn-ds-primary"
          style={{
            padding: "14px 40px",
            fontSize: "13px",
          }}
        >
          Register Now →
        </Link>
      </div>
    </div>
  );
}
