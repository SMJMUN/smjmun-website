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
    <section className="section-padding-lg bg-navy text-white">
      <div className="content-wide">
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
            Why Attend SMJ MUN?
          </span>
          <h2 className="text-section text-white mb-8">
            Empowering the next generation of global leaders.
          </h2>
          <div className="gold-rule mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="flex flex-col group">
                <div className="mb-6">
                   <Icon size={32} className="text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] font-bold tracking-[-0.01em] text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[14px] leading-[1.7] text-white/60">
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
