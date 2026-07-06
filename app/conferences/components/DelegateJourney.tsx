import React from "react";
import { UserPlus, BookOpen, Mic, Award } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Registration",
    desc: "Secure your spot as an individual delegate or school delegation. Choose your preferred committees and countries.",
  },
  {
    icon: BookOpen,
    title: "Preparation",
    desc: "Receive your country matrix and study guides. Dive deep into research and draft your initial position papers.",
  },
  {
    icon: Mic,
    title: "Conference",
    desc: "Step into the committee room. Engage in intense debate, form voting blocs, and author comprehensive resolutions.",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Celebrate achievements at the closing ceremony. Top performing delegates and delegations are honored.",
  },
];

export default function DelegateJourney() {
  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{ backgroundColor: 'var(--ds-bg-secondary)' }}
    >
      {/* Section header */}
      <div className="content-editorial mx-auto flex flex-col items-center text-center mb-20">
        <span className="section-label block mb-6">The Experience</span>

        <h2
          className="font-serif text-white mb-8"
          style={{
            fontSize: 'clamp(30px, 4vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Your journey from registration<br className="hidden md:block" /> to resolution.
        </h2>

        <div className="gold-rule" />
      </div>

      <div className="content-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute z-0"
            style={{
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(187,139,87,0.25), transparent)',
            }}
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">

                {/* Step circle */}
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-8 transition-all duration-500 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--ds-surface)',
                    border: '1px solid var(--ds-border)',
                    boxShadow: '0 0 0 6px rgba(187,139,87,0.05)',
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="transition-colors duration-500"
                    style={{ color: 'var(--ds-text-secondary)' }}
                  />
                </div>

                <h3
                  className="font-serif text-white mb-4"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  <span style={{ color: 'var(--ds-gold)', marginRight: '6px' }}>{i + 1}.</span>
                  {step.title}
                </h3>

                <p
                  className="font-sans leading-[1.7] max-w-[260px]"
                  style={{
                    fontSize: '14px',
                    color: 'var(--ds-text-muted)',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
