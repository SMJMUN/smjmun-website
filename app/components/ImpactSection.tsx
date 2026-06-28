'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, target]);

  const displayValue = target >= 1000
    ? count.toLocaleString('en-IN')
    : count.toString();

  return <>{displayValue}{suffix}</>;
}

const stats = [
  { value: 11000, suffix: '+', label: 'Delegates Trained' },
  { value: 70,    suffix: '+', label: 'National Conferences' },
  { value: 10,    suffix: '+', label: 'International Conferences' },
  { value: 55,    suffix: '+', label: 'Best Delegate Awards' },
  { value: 50,    suffix: '+', label: 'Committees Chaired' },
  { value: 100,   suffix: '+', label: 'Institutional Collaborations' },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative overflow-hidden bg-[#0A0A0A] py-24"
    >
      {/* Subtle gold circle watermark */}
      <div
        className="pointer-events-none absolute right-[-120px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.03]"
        aria-hidden
      >
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="#BB8B57" strokeWidth="8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="reveal mb-12 text-center">
          <span className="section-label">Our Impact</span>
        </div>

        {/* Stats grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                px-6 py-8
                border-[rgba(255,255,255,0.08)]
                ${index % 2 === 0 ? 'border-r' : ''}
                ${index < 4 ? 'border-b md:border-b' : ''}
                lg:border-b-0
                ${index === 5 ? 'lg:border-r-0' : ''}
              `}
            >
              <div
                className="font-serif mb-3"
                style={{
                  fontSize: 'clamp(36px, 4vw, 54px)',
                  lineHeight: 1,
                  color: '#BB8B57',
                }}
              >
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  triggered={triggered}
                />
              </div>

              <div
                className="text-sm leading-snug"
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  color: '#B8B8B8',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
