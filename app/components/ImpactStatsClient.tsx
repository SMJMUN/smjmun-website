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
  { value: 70, suffix: '+', label: 'National Conferences' },
  { value: 10, suffix: '+', label: 'Institutional Collaborations' },
];

export default function ImpactStatsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
      {/* Label */}
      <div className="reveal  mb-12 text-center">
        <span className="section-label text-2xl">Our Impact</span>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              px-6 py-8
              border-[rgba(255,255,255,0.08)]
              ${index < 2 ? 'border-b md:border-b-0 md:border-r' : ''}
            `}
          >
            <div
              className="mb-3 tracking-tight"
              
              style={{
                fontSize: 'clamp(32px, 3vw, 48px)',
                 fontFamily: 'var(--font-sora), sans-serif',
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
  );
}
