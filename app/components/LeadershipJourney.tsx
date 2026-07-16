'use client';


import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Milestone {
  number: string;
  title: string;
  description: string;
  image: string;
  layout: 'full-overlay' | 'image-right' | 'charcoal-band' | 'image-left' | 'full-gradient';
}

const milestones: Milestone[] = [
  {
    number: '01',
    title: 'Delegate Training',
    description: 'Master the fundamentals of parliamentary procedure, resolution drafting, and committee dynamics that form the foundation of every great diplomat.',
    image: '/images/training.webp',
    layout: 'full-overlay',
  },
  {
    number: '02',
    title: 'Public Speaking',
    description: 'Develop the presence, clarity, and conviction to command any room — from intimate negotiations to packed general assemblies.',
    image: '/images/hero-2.webp',
    layout: 'image-right',
  },
  {
    number: '03',
    title: 'Leadership',
    description: 'Learn to lead with empathy, build coalitions, and drive consensus on the most complex global challenges.',
    image: '/images/hero-1.webp',
    layout: 'charcoal-band',
  },
  {
    number: '04',
    title: 'Diplomacy',
    description: 'Navigate the art of strategic compromise — finding solutions where others see only deadlock.',
    image: '/images/hero-3.webp',
    layout: 'image-left',
  },
  {
    number: '05',
    title: 'Negotiation',
    description: 'Transform conflict into opportunity. Master the frameworks used by the world\'s most effective negotiators.',
    image: '/images/institution.webp',
    layout: 'full-gradient',
  },
];

export default function LeadershipJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="leadership" style={{ overflow: 'hidden' }}>
      {/* Section Header */}
      <div
        style={{
          backgroundColor: '#f8f8f8',
          padding: '160px 0 80px',
          textAlign: 'center' as const,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 8vw' }}>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading), Georgia, serif',
              fontSize: 'clamp(48px, 7vw, 84px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#042147',
              marginBottom: '28px',
            }}
          >
            The Leadership
            <br />
            Journey
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#042147',
              opacity: 0.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            From your first committee session to chairing international conferences —
            every step of the journey transforms how you think, speak, and lead.
          </p>
        </div>
      </div>

      {/* Milestones */}
      {milestones.map((milestone) => (
        <div key={milestone.number}>
          {milestone.layout === 'full-overlay' && (
            <div
              className="reveal"
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '500px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={milestone.image}
                alt={milestone.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(4,33,71,0.85) 0%, rgba(4,33,71,0.4) 60%, transparent 100%)' }} />
              {/* Decorative number */}
              <span
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '8vw',
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: '120px',
                  fontWeight: 700,
                  color: '#bb8b57',
                  opacity: 0.1,
                  lineHeight: 1,
                }}
              >
                {milestone.number}
              </span>
              <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(60px, 8vw, 120px) 8vw', maxWidth: '680px' }}>
                <span style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#bb8b57', display: 'block', marginBottom: '16px' }}>
                  Step {milestone.number}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  {milestone.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: '480px' }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          )}

          {milestone.layout === 'image-right' && (
            <div
              className="reveal"
              style={{
                backgroundColor: '#ffffff',
                padding: '140px 0',
              }}
            >
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8vw', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' as const }}>
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <span style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: '96px', fontWeight: 700, color: '#bb8b57', opacity: 0.1, lineHeight: 1, display: 'block', marginBottom: '-20px' }}>
                    {milestone.number}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, color: '#042147', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: '#042147', opacity: 0.7, maxWidth: '440px' }}>
                    {milestone.description}
                  </p>
                </div>
                <div style={{ flex: '0 0 50%', maxWidth: '50%', overflow: 'hidden' }} className="journey-img">
                  <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                    <Image src={milestone.image} alt={milestone.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}  fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {milestone.layout === 'charcoal-band' && (
            <div
              className="reveal"
              style={{
                backgroundColor: '#83090e',
                padding: '100px 0',
              }}
            >
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8vw', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' as const }}>
                <div style={{ flex: '0 0 45%', maxWidth: '45%', overflow: 'hidden' }} className="journey-img">
                  <div style={{ aspectRatio: '3 / 2', overflow: 'hidden' }}>
                    <Image src={milestone.image} alt={milestone.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}  fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <span style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: '96px', fontWeight: 700, color: '#bb8b57', opacity: 0.15, lineHeight: 1, display: 'block', marginBottom: '-20px' }}>
                    {milestone.number}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: '440px' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {milestone.layout === 'image-left' && (
            <div
              className="reveal"
              style={{
                backgroundColor: '#f8f8f8',
                padding: '140px 0',
              }}
            >
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8vw', display: 'flex', alignItems: 'center', gap: '60px', flexDirection: 'row-reverse' as const, flexWrap: 'wrap' as const }}>
                <div style={{ flex: '1', minWidth: '280px', textAlign: 'right' as const }}>
                  <span style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: '96px', fontWeight: 700, color: '#bb8b57', opacity: 0.1, lineHeight: 1, display: 'block', marginBottom: '-20px' }}>
                    {milestone.number}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, color: '#042147', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: '#042147', opacity: 0.7, maxWidth: '440px', marginLeft: 'auto' }}>
                    {milestone.description}
                  </p>
                </div>
                <div style={{ flex: '0 0 50%', maxWidth: '50%', overflow: 'hidden' }} className="journey-img">
                  <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                    <Image src={milestone.image} alt={milestone.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}  fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {milestone.layout === 'full-gradient' && (
            <div
              className="reveal"
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '500px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={milestone.image}
                alt={milestone.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,33,71,0.9) 0%, rgba(4,33,71,0.5) 50%, rgba(4,33,71,0.2) 100%)' }} />
              <span
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  right: '8vw',
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: '120px',
                  fontWeight: 700,
                  color: '#bb8b57',
                  opacity: 0.1,
                  lineHeight: 1,
                }}
              >
                {milestone.number}
              </span>
              <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(60px, 8vw, 120px) 8vw', display: 'flex', flexDirection: 'column' as const, justifyContent: 'flex-end', minHeight: '500px' }}>
                <span style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#bb8b57', display: 'block', marginBottom: '16px' }}>
                  Step {milestone.number}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  {milestone.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: '480px' }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .journey-img {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
