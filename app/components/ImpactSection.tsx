'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  size: 'hero' | 'large' | 'medium';
  align: 'left' | 'right';
}

const stats: Stat[] = [
  {
    value: 11000,
    suffix: '+',
    label: 'Delegates Trained',
    size: 'hero',
    align: 'left',
  },
  {
    value: 70,
    suffix: '+',
    label: 'National Conferences',
    size: 'large',
    align: 'right',
  },
  {
    value: 10,
    suffix: '+',
    label: 'International Conferences',
    size: 'large',
    align: 'left',
  },
  {
    value: 55,
    suffix: '+',
    label: 'Best Delegate Awards',
    size: 'medium',
    align: 'right',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Committees Chaired',
    size: 'medium',
    align: 'left',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Institutional Collaborations',
    size: 'medium',
    align: 'left',
  },
];
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
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)',
        padding: '80px 0',
      }}
    >

      {/* Subtle laurel watermark */}
      <div
        style={{
          position: 'absolute',
          right: '-120px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '420px',
          height: '420px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 400 400" fill="none">
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="#bb8b57"
            strokeWidth="8"
          />
        </svg>
      </div>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {/* Label */}
        <div
          className="reveal"
          style={{
            marginBottom: '36px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#d8b17a',
            }}
          >
            Our Impact
          </span>
        </div>

        {/* Stats Row */}
        {/* Stats Row */}
        {/* Top Gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
          }}
        />

        {/* Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
          }}
        />
        <div
          className="
    reveal
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-6
  "
        >
          {[
            {
              value: 11000,
              suffix: '+',
              label: 'Delegates Trained',
            },
            {
              value: 70,
              suffix: '+',
              label: 'National Conferences',
            },
            {
              value: 10,
              suffix: '+',
              label: 'International Conferences',
            },
            {
              value: 55,
              suffix: '+',
              label: 'Best Delegate Awards',
            },
            {
              value: 50,
              suffix: '+',
              label: 'Committees Chaired',
            },
            {
              value: 100,
              suffix: '+',
              label: 'Institutional Collaborations',
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`
        px-4 py-6 md:px-6 lg:px-7

        border-[#d8b17a]/25

        ${index % 2 === 0
                  ? 'border-r lg:border-r'
                  : ''
                }

        ${index < 4
                  ? 'border-b md:border-b'
                  : ''
                }

        lg:border-b-0

        ${index === 5
                  ? 'lg:border-r-0'
                  : ''
                }
      `}
            >
              <div
                style={{
                  fontFamily:
                    'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(36px, 4vw, 54px)',
                  lineHeight: 1,
                  color: '#d8b17a',
                  marginBottom: '14px',
                }}
              >
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  triggered={triggered}
                />
              </div>

              <div
                style={{
                  fontFamily:
                    'var(--font-body), system-ui, sans-serif',
                  fontSize: 'clamp(14px, 1.2vw, 17px)',
                  lineHeight: 1.5,
                  color: '#f8f8f8',
                  opacity: 0.92,
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
