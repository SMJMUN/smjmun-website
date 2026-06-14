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
    <section className="section-padding-lg bg-navy text-white">
      <div className="content-wide">
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
            Delegate Experience
          </span>
          <h2 className="text-section text-white mb-8">
            Beyond the Committee Room
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon;
            return (
              <div
                key={i}
                className="flex flex-col border border-white/10 p-10 hover:border-gold/30 transition-colors duration-500 bg-white/[0.02]"
              >
                <div className="mb-8">
                  <Icon size={40} className="text-gold" strokeWidth={1} />
                </div>
                
                <h3 className="font-serif text-[28px] font-bold text-white mb-4">
                  {block.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.8] text-white/60">
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
