'use client';

import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PROGRAMS = [
  {
    id: 'conferences',
    tab: 'Conferences',
    heading: 'Conferences',
    body: [
      'SMJMUN hosts India\'s most rigorous Model United Nations conferences — from school-level summits to international assemblies. Each conference is designed to challenge delegates, build real negotiation skills, and create experiences that stay with participants for life.',
    ],
    image: '/images/hero-1.png',
    href: '/conferences',
  },
  {
    id: 'programs',
    tab: 'Programs',
    heading: 'Programs',
    body: [
      'Our training programs exist to bridge the gap between ambition and ability. From first-time delegates to seasoned chairs, every program is structured to accelerate growth in public speaking, critical thinking, and global awareness.',
    ],
    image: '/images/hero-2.png',
    href: '/programs',
  },
  {
    id: 'training',
    tab: 'Training Cell',
    heading: 'Training Cell',
    body: [
      'The SMJMUN Training Cell is the institution\'s academic backbone. It designs curriculum, runs intensive workshops, and certifies delegates before every conference season.',
    ],
    image: '/images/training.png',
    href: '/programs',
  },
  {
    id: 'institution',
    tab: 'Institution Services',
    heading: 'Institution Services',
    body: [
      'SMJMUN partners with schools and colleges across India to establish, train, and sustain their own MUN chapters. We provide end-to-end institutional support — from curriculum design to conference management.',
    ],
    image: '/images/institution.png',
    href: '/programs',
  },
  {
    id: 'partnerships',
    tab: 'Partnerships',
    heading: 'Partnerships',
    body: [
      'Strategic partnerships are how SMJMUN scales its mission. We collaborate with educational institutions, government bodies, and global organizations to bring world-class diplomacy education to more students.',
    ],
    image: '/images/partnerships-image.png',
    href: '/partnerships',
  },
  {
    id: 'community',
    tab: 'Community',
    heading: 'Community',
    body: [
      'The SMJMUN alumni network spans thousands of delegates across the country. Our community events, mentorship programs, and digital platforms keep that network active and growing.',
    ],
    image: '/images/SHCOOL-PHOTO-1.png',
    href: '/conferences',
  },
];

export default function OurProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingIdx = useRef<number>(0);

  const switchTo = useCallback((index: number) => {
    pendingIdx.current = index;
    if (activeIndex === index) return;
    setAnimating(true);
    if (animTimer.current) clearTimeout(animTimer.current);
    animTimer.current = setTimeout(() => {
      setActiveIndex(pendingIdx.current);
      setAnimating(false);
    }, 200);
  }, [activeIndex]);

  const handleTabHover = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => switchTo(index), 80);
  }, [switchTo]);

  const handleTabClick = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    switchTo(index);
  }, [switchTo]);

  const active = PROGRAMS[activeIndex];

  return (
    <>
      <style>{`
        /* ─── Read-more pill ─────────────────────────────── */
        .prog-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
          padding: 12px 26px;
          border-radius: 50px;
          border: 1.5px solid rgba(255,255,255,0.50);
          color: #fff;
          font-family: system-ui, sans-serif;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-decoration: none;
          background: transparent;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 300ms ease, color 300ms ease;
        }
        .prog-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50px;
          background: #bb8b57;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 320ms cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .prog-btn:hover::before  { transform: scaleX(1); }
        .prog-btn:hover          { border-color: #bb8b57; }
        .prog-btn span,
        .prog-btn svg            { position: relative; z-index: 1; }

        /* ─── Tab button base ────────────────────────────── */
        .prog-tab {
          display: flex;
          align-items: center;
          width: 100%;
          min-width: 260px;
          padding: 20px 24px;
          text-align: left;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          outline: none;
          box-sizing: border-box;
          cursor: pointer;
          transition: background 200ms ease;
        }
        .prog-tab:last-child {
          border-bottom: none;
        }
        .prog-tab:not(.active):hover {
          background: rgba(255,255,255,0.05);
        }

        /* ─── Active tab: white rect box + gold bottom ───── */
        .prog-tab.active {
          border-top:    1px solid rgba(255,255,255,0.50);
          border-left:   1px solid rgba(255,255,255,0.50);
          border-right:  1px solid rgba(255,255,255,0.50);
          border-bottom: 4px solid #bb8b57;
          background:    rgba(255,255,255,0.05);
        }
        .prog-tab.active:last-child {
          border-bottom: 3px solid #bb8b57;
        }

        /* ─── Tab label ──────────────────────────────────── */
        .prog-tab-label {
          font-family: system-ui, sans-serif;
          font-size: clamp(12px, 1.1vw, 15px);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 180ms ease;
        }
        
  .prog-tab-label {
  transition: transform 300ms ease;
}

.prog-tab:hover .prog-tab-label {
  transform: scale(1.10);
}
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: '100vh', backgroundColor: '#0a1520' }}
      >

        {/* ── LAYER 1: Crossfading background images ──────────── */}
        {PROGRAMS.map((prog, i) => (
          <div
            key={prog.id}
            aria-hidden
            className="absolute inset-0"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transition: 'opacity 800ms cubic-bezier(0.22,1,0.36,1)',
              pointerEvents: 'none',
            }}
          >
            <img
              src={prog.image}
              alt=""
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />

            {/* ── Overlay stack — matches Reliance exactly ── */}

            {/* 1. Uniform dark teal base — tones the whole image into editorial slate */}
            {/* Base Editorial Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'rgba(5,14,24,0.58)',
              }}
            />

            {/* Left Editorial Panel */}
            <div
              className="absolute inset-0"
              style={{
                background: `
      linear-gradient(
        to right,
        rgba(4,10,18,0.96) 0%,
        rgba(4,10,18,0.88) 22%,
        rgba(4,10,18,0.52) 42%,
        transparent 72%
      )
    `,
              }}
            />

            {/* Right Panel */}
            <div
              className="absolute inset-0"
              style={{
                background: `
      linear-gradient(
        to left,
        rgba(4,10,18,0.78) 0%,
        rgba(4,10,18,0.38) 25%,
        transparent 55%
      )
    `,
              }}
            />

            {/* Bottom Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 35%)',
              }}
            />
          </div>
        ))}

        {/* ── FOREGROUND ──────────────────────────────────────── */}
        <div
          className="relative z-10 flex flex-col"
          style={{ minHeight: '100vh' }}
        >

          {/* Overline — top-left, detached */}
          <div
            className="flex items-center gap-3"
            style={{ padding: '36px 80px 0' }}
          >
            <span
              style={{
                width: '9px', height: '9px',
                background: '#bb8b57',
                transform: 'rotate(45deg)',
                flexShrink: 0, display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#bb8b57',
                fontWeight: 600,
              }}
            >
              Our Programs
            </span>
          </div>

          {/* Main content row */}
          <div
            className="flex flex-col md:flex-row flex-1"
            style={{ padding: '0' }}
          >

            {/* ── LEFT: heading + body + cta ─── */}
            <div
              style={{
                flex: '0 0 auto',
                width: 'min(600px, 100%)',
                maxWidth: '100%',
                padding: '48px 80px 64px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(12px)' : 'translateY(0)',
                  transition: 'opacity 200ms ease, transform 200ms ease',
                }}
              >
                {/* Heading — Reliance size: large serif, tight tracking */}
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontWeight: 400,
                    fontSize: 'clamp(64px, 7.5vw, 11px)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    margin: '0 0 28px 0',
                  }}
                >
                  {active.heading}
                </h2>

                {/* Body — Reliance uses ~15-16px, weight 400, NOT 300 */}
                <div style={{ maxWidth: '420px' }}>
                  {active.body.map((para, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.15vw, 16px)',
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.88)',
                        fontWeight: 400,
                        margin: idx < active.body.length - 1 ? '0 0 16px' : '0',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <Link href={active.href} className="prog-btn">
                  <span>read more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block flex-1" />

            {/* ── RIGHT: tab list ─────────────── */}
            <div
              className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible justify-start md:justify-center"
              style={{
                flexShrink: 0,
                padding: '0 80px 0 0',
              }}
            >
              {PROGRAMS.map((prog, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={prog.id}
                    onMouseEnter={() => handleTabHover(i)}
                    onClick={() => handleTabClick(i)}
                    className={`prog-tab${isActive ? ' active' : ''}`}
                  >
                    <span
                      className="prog-tab-label "
                      style={{
                        // fontWeight: isActive ? 700 : 400,
                        color: '#ffffff',
                      }}
                    >
                      {prog.tab}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}