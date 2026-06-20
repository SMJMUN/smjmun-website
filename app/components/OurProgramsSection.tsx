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
      `SMJMUN Conferences represent the flagship experience of the organization, bringing together students from diverse schools, colleges, and regions to engage in meaningful dialogue on global challenges.  `,
      `Every conference is designed to simulate the workings of international institutions, allowing delegates to step into the roles of diplomats, policymakers, and world leaders. Through committee sessions, negotiations, moderated debates, and resolution drafting, participants gain firsthand exposure to the complexities of international decision-making.`,

    ],
    image: '/images/smj-hero-5.jpeg',
    href: '/conferences',
  },

  {
    id: 'school-mun',
    tab: 'School MUN',
    heading: 'School MUN',
    body: [
      `The School MUN Program introduces students to the world of diplomacy, public speaking, and international affairs through a structured and age-appropriate learning environment. `,
      ` Designed specifically for school students, the program focuses on building strong foundational skills while making Model United Nations accessible, engaging, and intellectually stimulating. Participants learn research techniques, speech delivery, committee procedures, and the art of persuasive communication.`,

    ],
    image: '/images/smj-hero-7.jpeg',
    href: '/School MUN',
  },

  {
    id: 'training',
    tab: 'Training Cell',
    heading: 'Training Cell',
    body: [
      `The SMJMUN Training Cell serves as the academic and developmental backbone of the organization. It is responsible for designing comprehensive learning frameworks that prepare students for excellence inside and outside committee rooms.  `,
      `Through carefully structured workshops, bootcamps, research modules, and skill-development sessions, the Training Cell ensures that every participant receives world-class mentorship and guidance.`,

    ],
    image: '/images/student-training-2.jpeg',
    href: '/programs',
  },

  {
    id: 'collage-mun',
    tab: 'College MUN',
    heading: 'College MUN',
    body: [
      `The College MUN Program is designed for university students seeking a more advanced and intellectually demanding diplomatic experience. ` , 
      ` These conferences and initiatives focus on complex policy discussions, strategic negotiations, and high-level committee simulations that mirror the realities of international governance and decision-making. Participants engage with pressing global issues while refining their ability to construct arguments, defend positions, and build consensus.`,

    ],
    image: '/images/moment-1.jpeg',
    href: '/programs',
  },

  {
    id: 'partnerships',
    tab: 'Partnerships',
    heading: 'Partnerships',
    body: [
      `Partnerships are central to SMJMUN’s mission of expanding access to quality diplomacy and leadership education. We collaborate with schools, colleges, educational organizations, corporate partners, and public institutions to create  meaningful opportunities for students across India. `,
      ` These partnerships allow us to extend our reach, enhance our programs, and bring innovative learning experiences to diverse communities.`,

    ],
    image: '/images/smj-hero-4.jpeg',
    href: '/partnerships',
  },

  {
    id: 'community',
    tab: 'Community',
    heading: 'Community',
    body: [
      `The SMJMUN Community is a growing network of delegates, chairs, organizers, educators, and alumni united by a shared passion for diplomacy, leadership, and lifelong learning.`,
      ` What begins as participation in a conference often evolves into lasting relationships, mentorship opportunities, and collaborative initiatives that continue well beyond the committee room. The community serves as a space where members support, inspire, and learn from one another.`
    ],
    image: '/images/community.jpeg',
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
        border-top:   1px solid rgba(255,255,255,0.8);
border-left:  1px solid rgba(255,255,255,0.8);
border-right: 1px solid rgba(255,255,255,0.8);
          border-bottom: 4px solid #bb8b57;
          background:    rgba(255,255,255,0.05);
          transform: scale(1.10);
           transition: transform 300ms ease;
        }
        .prog-tab.active:last-child {
          border-bottom: 3px solid #bb8b57;
        }

        /* ─── Tab label ──────────────────────────────────── */
        .prog-tab-label {
          font-family: system-ui, sans-serif;
          font-size: clamp(12px, 1.1vw, 30px);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 180ms ease;
        }
        
  .prog-tab-label {
  transition: transform 300ms ease;
}

.prog-tab:hover .prog-tab-label {
   
}
      `}</style>

      <section
        className="relative w-full overflow-hidden "
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
          className="relative z-10 flex flex-col mr-10"
          style={{ minHeight: '100vh', alignItems: '' }}
        >

          {/* Overline — top-left, detached */}


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
                padding: '48px 100px 64px',
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
                <div
                  className="flex items-center gap-3"
                  style={{ marginBottom: '26px' }}
                >
                    <img
                     src={'/images/smg-mun-logo.png'}
                   alt=""
                    style={{
                      width: '50px', height: '50px',
                      // background: '#bb8b57',
                      // transform: 'rotate(45deg)',
                      // flexShrink: 0, display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '20px',
                      letterSpacing: '0.26em',
                      textTransform: 'uppercase',
                      color: '#bb8b57',
                      fontWeight: 600,
                    }}
                  >
                    Our Programs
                  </span>
                </div>
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
              className="flex w-[30vw] flex-row md:flex-col overflow-x-auto md:overflow-visible justify-start md:justify-center"
              style={{
                flexShrink: 0,
                padding: '0 0px 0 0',
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
                      className="prog-tab-label font-inter! "
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