import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Conference } from "@/lib/sanity/conference/types";

export default function ConferenceSidebar({ conference }: { conference: Conference }) {
  return (
    <div className="sticky top-[120px] flex flex-col gap-6">

      {/* Authority Card */}
      <div
        className="card-ds p-7"
        style={{ borderRadius: 'var(--ds-radius-md)' }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/images/smg-mun-logo.webp"
            alt="SMJ MUN Logo"
            width={44}
            height={44}
            className="object-contain"
            unoptimized
          />
          <div>
            <h3
              className="font-serif text-white"
              style={{ fontSize: '17px', fontWeight: 700 }}
            >
              SMJ MUN Secretariat
            </h3>
            <p
              className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase mt-0.5"
              style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Organizing Body
            </p>
          </div>
        </div>

        <p
          className="font-sans leading-[1.75] mb-7"
          style={{
            fontSize: '14px',
            color: 'var(--ds-text-muted)',
            fontFamily: 'var(--font-body), system-ui, sans-serif',
          }}
        >
          India&apos;s premier platform for diplomacy and leadership, dedicated to empowering youth through rigorous debate and collaborative solutions.
        </p>

        <div
          className="grid grid-cols-2 gap-5 pt-6"
          style={{ borderTop: '1px solid var(--ds-border)' }}
        >
          <div>
            <span
              className="block font-serif font-bold"
              style={{ fontSize: '26px', color: 'var(--ds-gold)' }}
            >
              10+
            </span>
            <span
              className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Years Exp
            </span>
          </div>
          <div>
            <span
              className="block font-serif font-bold"
              style={{ fontSize: '26px', color: 'var(--ds-gold)' }}
            >
              5K+
            </span>
            <span
              className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Alumni
            </span>
          </div>
        </div>
      </div>

      {/* Registration Action Card */}
      {conference.registrationOpen && (
        <div
          className="p-7 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(187,139,87,0.06)',
            border: '1px solid rgba(187,139,87,0.25)',
            borderRadius: 'var(--ds-radius-md)',
          }}
        >
          {/* Gold glow */}
          <div
            className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(187,139,87,0.18), transparent 70%)' }}
          />

          <h3
            className="font-serif text-white mb-4 relative z-10"
            style={{ fontSize: '19px', fontWeight: 700 }}
          >
            Ready to Participate?
          </h3>

          <ul className="flex flex-col gap-3 mb-7 relative z-10">
            {[
              "Individual & Delegation Registration",
              "Comprehensive Study Guides",
              "Official Certificate of Participation",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-2 font-sans"
                style={{
                  fontSize: '13px',
                  color: 'var(--ds-text-muted)',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
              >
                <span style={{ color: 'var(--ds-gold)', fontWeight: 700 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={`/register/${conference.slug.current}`}
            className="btn-ds-primary w-full text-center relative z-10"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
}
