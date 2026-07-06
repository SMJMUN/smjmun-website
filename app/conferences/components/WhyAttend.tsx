import React from "react";
import { Globe, GraduationCap, Handshake, Users } from "lucide-react";

const PILLARS = [
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Connect with delegates from 30+ countries, broadening your international perspective and cultural understanding.",
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    description: "Enhance your communication, critical thinking, and crisis management skills in high-stakes committee simulations.",
  },
  {
    icon: Handshake,
    title: "Diplomatic Skills",
    description: "Master the art of negotiation, public speaking, and collaborative resolution writing under expert guidance.",
  },
  {
    icon: Users,
    title: "Lifelong Network",
    description: "Build meaningful connections and friendships with passionate future leaders that last far beyond the conference.",
  },
];

export default function WhyAttend() {
  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{ backgroundColor: 'var(--ds-bg-secondary)' }}
    >
      {/* Subtle gold glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '40%',
          height: '70%',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(187,139,87,0.07), transparent 70%)',
        }}
      />

      <div className="content-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <span className="section-label block mb-6">
            Why Attend SMJ MUN?
          </span>
          <h2
            className="font-serif text-white mb-8"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Empowering the next generation<br className="hidden md:block" /> of global leaders.
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="card-ds flex flex-col group p-7"
                style={{ borderRadius: 'var(--ds-radius-md)' }}
              >
                {/* Icon container */}
                <div
                  className="mb-6 w-[52px] h-[52px] flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--ds-radius-sm)',
                    background: 'rgba(187,139,87,0.10)',
                    border: '1px solid rgba(187,139,87,0.2)',
                    transition: 'background 300ms ease, border-color 300ms ease',
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    style={{ color: 'var(--ds-gold)' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3
                  className="font-serif text-white mb-3"
                  style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="font-sans leading-[1.7]"
                  style={{
                    fontSize: '14px',
                    color: 'var(--ds-text-muted)',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
