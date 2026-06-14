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
    <section className="section-padding-lg bg-ivory">
      <div className="content-editorial text-center mb-20">
        <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 block">
          The Experience
        </span>
        <h2 className="text-section text-navy mb-8">
          Your journey from registration to resolution.
        </h2>
        <div className="gold-rule mx-auto" />
      </div>

      <div className="content-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-navy/10 z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[56px] h-[56px] rounded-full bg-white border border-navy/10 flex items-center justify-center mb-8 shadow-sm group-hover:border-gold group-hover:-translate-y-1 transition-all duration-500">
                  <Icon size={24} className="text-navy group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-[20px] font-bold text-navy mb-4">
                  <span className="text-gold mr-2">{i + 1}.</span> {step.title}
                </h3>
                
                <p className="font-sans text-[14px] leading-[1.7] text-navy/60 max-w-[280px]">
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
