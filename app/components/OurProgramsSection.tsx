'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROGRAMS = [
  {
    id: 'conferences',
    tab: 'Conferences',
    heading: 'Conferences',
    body: [
      `SMJMUN Conferences represent the flagship experience of the organization, bringing together students from diverse schools, colleges, and regions to engage in meaningful dialogue on global challenges.`,
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
      `The School MUN Program introduces students to the world of diplomacy, public speaking, and international affairs through a structured and age-appropriate learning environment.`,
      `Designed specifically for school students, the program focuses on building strong foundational skills while making Model United Nations accessible, engaging, and intellectually stimulating. Participants learn research techniques, speech delivery, committee procedures, and the art of persuasive communication.`,
    ],
    image: '/images/smj-hero-7.jpeg',
    href: '/programs/school-mun-association',
  },
  {
    id: 'training',
    tab: 'Training Cell',
    heading: 'Training Cell',
    body: [
      `The SMJMUN Training Cell serves as the academic and developmental backbone of the organization. It is responsible for designing comprehensive learning frameworks that prepare students for excellence inside and outside committee rooms.`,
      `Through carefully structured workshops, bootcamps, research modules, and skill-development sessions, the Training Cell ensures that every participant receives world-class mentorship and guidance.`,
    ],
    image: '/images/student-training-2.jpeg',
    href: '/programs/training-cell',
  },
  {
    id: 'college-mun',
    tab: 'College MUN',
    heading: 'College MUN',
    body: [
      `The College MUN Program is designed for university students seeking a more advanced and intellectually demanding diplomatic experience.`,
      `These conferences and initiatives focus on complex policy discussions, strategic negotiations, and high-level committee simulations that mirror the realities of international governance and decision-making. Participants engage with pressing global issues while refining their ability to construct arguments, defend positions, and build consensus.`,
    ],
    image: '/images/moment-1.jpeg',
    href: '/programs/college-mun-association',
  },
  {
    id: 'partnerships',
    tab: 'Partnerships',
    heading: 'Partnerships',
    body: [
      `Partnerships are central to SMJMUN's mission of expanding access to quality diplomacy and leadership education. We collaborate with schools, colleges, educational organizations, corporate partners, and public institutions to create meaningful opportunities for students across India.`,
      `These partnerships allow us to extend our reach, enhance our programs, and bring innovative learning experiences to diverse communities.`,
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
      `What begins as participation in a conference often evolves into lasting relationships, mentorship opportunities, and collaborative initiatives that continue well beyond the committee room.`,
    ],
    image: '/images/community.jpeg',
    href: '/conferences',
  },
];

/* Viewport-height units consumed per program step.
 * 60vh per step → 360vh total for 6 programs.
 * Reducing from 100vh makes each step trigger with less physical scrolling. */
const SCROLL_VH_PER_STEP = 30;

/* Height of each tab row — must match the rendered row height */
const TAB_HEIGHT = 56;

export default function OurProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  // Tracks the scroll-driven canonical index (separate from hover previews)
  const scrollIdx = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Switch immediately — no artificial delay ───────────────────── */
  const switchTo = useCallback((index: number) => {
    scrollIdx.current = index;
    setActiveIndex(index);
  }, []);

  /* ── Primary driver: scroll position maps to activeIndex ──────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = sectionRef.current.offsetHeight - window.innerHeight;

      if (scrolled <= 0) { switchTo(0); return; }
      if (scrolled >= total) { switchTo(PROGRAMS.length - 1); return; }

      const progress = scrolled / total;
      const next = Math.min(Math.floor(progress * PROGRAMS.length), PROGRAMS.length - 1);
      switchTo(next);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [switchTo]);

  /* ── Scroll the page so the section shows the target program ────────────── *
   * This keeps the scroll driver and the displayed index in sync.           *
   * Without this, clicking tab 5 while scroll is at program 1 causes the   *
   * scroll handler to immediately snap back to program 1 on next scroll.    */
  const scrollToProgram = useCallback((index: number) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;
    // Use (index / PROGRAMS.length) so Math.floor lands cleanly on `index`
    const target = sectionTop + (index / PROGRAMS.length) * scrollableHeight + 4;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }, []);

  /* ── Tab hover: lightweight visual preview (scroll will override on next move) */
  const handleTabHover = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveIndex(index), 80);
  }, []);

  /* ── Tab click: scroll the section to the matching position ───────────── */
  const handleTabClick = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    scrollToProgram(index);
  }, [scrollToProgram]);

  const active = PROGRAMS[activeIndex];

  return (
    /*
     * Outer div is PROGRAMS.length × 100vh tall.
     * This creates the scroll real-estate that drives the section.
     * The inner sticky container stays pinned while user scrolls through it.
     */
    <div
      ref={sectionRef}
      id="programs"
      style={{ height: `${PROGRAMS.length * SCROLL_VH_PER_STEP}vh` }}
      className="relative"
    >
   
      {/* ── Sticky viewport — fixed in place while outer div scrolls ── */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: '100vh', minHeight: '700px', backgroundColor: '#0A0A0A' }}
      >
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
        />
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
        />

        {/* ── Crossfading background images ─────────────────────────── */}
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
            <Image
              src={prog.image}
              alt={prog.heading}
              fill
              sizes="100vw"
              quality={80}
              className="absolute inset-0"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(5,14,24,0.58)' }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to right, rgba(4,10,18,0.96) 0%, rgba(4,10,18,0.88) 22%, rgba(4,10,18,0.52) 42%, transparent 72%)',
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to left, rgba(4,10,18,0.78) 0%, rgba(4,10,18,0.38) 25%, transparent 55%)',
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 35%)',
            }} />
          </div>
        ))}

        {/* ── Foreground ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col h-full" style={{ minHeight: '100vh' }}>
          <div className="flex flex-col lg:flex-row flex-1 h-full">

            {/* ── LEFT: heading + body + CTA (desktop) ──────────────── */}
            <div
              className="hidden lg:flex flex-col justify-center tablet-programs-left"
              style={{ flex: '0 0 auto', width: 'min(900px, 100%)', padding: '64px 100px' }}
            >
              <div>
                {/* Section label */}
                <div className="flex items-center gap-3 mb-8">
                  <Image
                    src="/images/smg-mun-logo.webp"
                    alt=""
                    width={44}
                    height={44}
                    style={{ width: '44px', height: '44px' }}
                  />
                  <span className="section-label" style={{ fontSize: '13px', letterSpacing: '0.22em' }}>
                    Our Programs
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="font-serif text-white"
                  style={{
                    fontWeight: 400,
                    fontSize: 'clamp(52px, 6.5vw, 96px)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    marginBottom: '28px',
                  }}
                >
                  {active.heading}
                </h2>

                {/* Body */}
                <div style={{ maxWidth: '460px' }}>
                  {active.body.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-[#B8B8B8]"
                      style={{
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.1vw, 17px)',
                        lineHeight: 1.75,
                        fontWeight: 400,
                        margin: idx < active.body.length - 1 ? '0 0 16px' : '0',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <Link href={active.href} className="btn-ds-secondary mt-10">
                  <span>Read More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block flex-1" />

            {/* ── RIGHT: tab list with sliding gold indicator ────────── */}
            <div className="flex flex-col justify-start pt-20 lg:justify-center lg:pt-0 w-full h-screen lg:h-auto lg:w-[30vw] px-6 lg:px-0 programs-tablet-panel">

              {/* Mobile label */}
              <div className="flex items-center gap-3 mb-2 lg:hidden">
                <Image src="/images/smg-mun-logo.webp" alt="" width={36} height={36} style={{ width: '36px', height: '36px' }} />
                <span className="section-label" style={{ fontSize: '11px' }}>Our Programs</span>
              </div>

              {/* Tab rows + sliding indicator */}
              <div className="relative">

                {/* ── Sliding gold indicator bar ── */}
                <div
                  className="absolute left-0 right-0 h-[2px] bg-[#BB8B57] pointer-events-none"
                  style={{
                    top: `${(activeIndex + 1) * TAB_HEIGHT - 2}px`,
                    transition: 'top 480ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />

                {PROGRAMS.map((prog, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={prog.id}
                      onMouseEnter={() => handleTabHover(i)}
                      onClick={() => handleTabClick(i)}
                      className="group flex items-center justify-between w-full text-left px-6"
                      style={{
                        height: `${TAB_HEIGHT}px`,
                        background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                        borderTop: isActive ? '1px solid rgba(255,255,255,0.12)' : 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.10)',
                        cursor: 'pointer',
                        transition: 'background 200ms ease',
                      }}
                    >
                      <span
                        className="font-sans"
                        style={{
                          fontFamily: 'var(--font-body), system-ui, sans-serif',
                          fontSize: 'clamp(12px, 1.1vw, 14px)',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: isActive ? '#ffffff' : '#7A7A7A',
                          fontWeight: isActive ? 500 : 400,
                          transition: 'color 180ms ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {prog.tab}
                      </span>

                      {isActive && (
                        <Link
                          href={prog.href}
                          className="
                            lg:hidden flex items-center justify-center
                            h-8 w-8 rounded-full
                            border border-[#BB8B57] text-[#BB8B57]
                            transition-all duration-300 hover:bg-[rgba(187,139,87,0.12)]
                          "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={16} />
                        </Link>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mobile content block — active program summary */}
              <div className="lg:hidden mt-6 pb-8">
                <h3
                  className="font-serif text-white mb-3 programs-mobile-heading-tablet"
                  style={{
                    fontSize: 'clamp(22px, 6vw, 30px)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {active.heading}
                </h3>
                <p
                  className="text-[#B8B8B8] mb-5"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.75,
                  }}
                >
                  {active.body[0]}
                </p>
                <Link href={active.href} className="btn-ds-secondary inline-flex" style={{ fontSize: '12px', padding: '10px 20px' }}>
                  Read More
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>{/* end right panel */}
              <motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 1.8 }}
  className="absolute bottom-30 left-1/2 -translate-x-1/2 z-10000000 flex flex-col gap-1"
>
{[0, 1, 2].map((i) => (
  <motion.div
    key={i}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      delay: i * 0.2,
    }}
    className="h-4 w-4 rotate-45 border-b-2 border-r-2 border-white/60"
  />
))}
</motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
