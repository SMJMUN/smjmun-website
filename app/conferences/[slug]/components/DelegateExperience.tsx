import React from "react";
import { Scale, Globe2, BookOpen, Award } from "lucide-react";

const BLOCKS = [
  {
    icon: Scale,
    title: "Committee Sessions",
    desc: "Engage in rigorous debate and collaborative resolution writing in high-stakes simulated UN committees. Our expert chairs ensure an authentic diplomatic experience.",
  },
  {
    icon: Globe2,
    title: "Global Networking",
    desc: "Connect with like-minded future leaders from across the globe. Build friendships and professional networks that will last throughout your academic and professional career.",
  },
  {
    icon: BookOpen,
    title: "Skill Workshops",
    desc: "Participate in exclusive training sessions on public speaking, negotiation, and international law led by industry experts and experienced diplomats.",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    desc: "Outstanding delegates are recognized for their diplomatic prowess, negotiation skills, and ability to foster consensus in the face of international crises.",
  },
];

export default function DelegateExperience() {
  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{ backgroundColor: 'var(--ds-bg-primary)' }}
    >
      {/* Gold glow top-right */}
      <div
        className="absolute right-0 top-0 pointer-events-none"
        style={{
          width: '45%',
          height: '60%',
          background: 'radial-gradient(ellipse at 85% 15%, rgba(187,139,87,0.07), transparent 65%)',
        }}
      />

      <div className="content-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <span className="section-label block mb-6">Delegate Experience</span>
          <h2
            className="font-serif text-white mb-8"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Beyond the Committee Room
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        {/* Blocks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon;
            return (
              <div
                key={i}
                className="card-ds flex flex-col p-10 group"
                style={{
                  borderRadius: 'var(--ds-radius-md)',
                  transition: 'border-color 400ms ease',
                }}
              >
                {/* Icon */}
                <div className="mb-8">
                  <Icon
                    size={38}
                    strokeWidth={1}
                    style={{ color: 'var(--ds-gold)' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3
                  className="font-serif text-white mb-4"
                  style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  {block.title}
                </h3>

                <p
                  className="font-sans leading-[1.8]"
                  style={{
                    fontSize: '15px',
                    color: 'var(--ds-text-muted)',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  {block.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
