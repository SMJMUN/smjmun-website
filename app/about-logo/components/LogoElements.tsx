'use client';

import React from 'react';
import { motion } from 'framer-motion';

const elements = [
  {
    title: 'The Shri Symbol',
    subtitle: 'Roots',
    content: [
      "Placed at the base of the emblem, the Shri symbol represents the foundation that was laid before you arrived. It is the acknowledgment of where you come from — your traditions, your culture, the values that were given to you by family, community, and the generations before you. Shri is not nostalgia. It is strength. It is the understanding that you did not start from zero. You carry centuries of wisdom, discipline, and humanity with you, whether you recognize it or not.",
      "In the context of SMJMUN, Shri represents all that is right about where we come from — our reverence for learning, our respect for others, our belief in service. These are not limitations. They are the roots from which everything meaningful grows. At SMJMUN, we do not ask you to become something foreign. We ask you to become the fullest expression of what your roots have always made possible."
    ],
    highlight: "Your roots are not behind you. They are beneath you — holding you up."
  },
  {
    title: 'The Open Book',
    subtitle: 'Knowledge',
    content: [
      "The open book in the emblem represents the foundation of everything SMJMUN stands for: the relentless, humble, lifelong pursuit of knowledge. Not degrees. Not credentials. Knowledge — the genuine understanding of the world, its people, its problems, and its possibilities.",
      "Knowledge is what separates opinion from argument. It is what makes conviction credible. You cannot lead what you do not understand. You cannot change what you have not tried to learn. The book is open, not closed — because learning has no final chapter. At SMJMUN, every committee session, every position paper, every negotiation is an act of learning. The conference is not a test of what you already know. It is an invitation to discover how much more there is to understand."
    ],
    highlight: "Knowledge is not what you carry to the room. It is what you leave the room with."
  },
  {
    title: 'The Eternal Flame',
    subtitle: 'Purpose in Motion',
    content: [
      "The flame at the center of the emblem is the synthesis of everything. It is what happens when knowledge meets wisdom, and wisdom meets passion, and all of it is placed in service of something beyond the self.",
      "The flame does not burn for competition. It does not burn for applause. It burns for the belief that the world can be made better — and that you are capable of contributing to that process. It is the symbol of a mind and heart that remain continuously oriented toward goodness, growth, and the betterment of others. A flame that never goes out not because it was never challenged, but because it was fed by purpose.",
      "In the SMJMUN tradition, the flame stands for what we want every participant to carry home — not a trophy, not a certificate, but a quiet fire. The conviction that what they do next matters."
    ],
    highlight: "The flame is not a symbol of what you know. It is a symbol of why you will keep going."
  },
  {
    title: 'The Two Wings',
    subtitle: 'Hosh & Josh',
    content: [
      "The two wings of the emblem represent the two forces that every great leader must learn to balance. They are not opposites. They are partners.",
      "Hosh (Blue Wing) — Wisdom. The ability to pause before you act. To think before you speak. To assess before you decide. Hosh is cold intellect made warm by purpose — the capacity to hold complexity without collapsing under it. It is the wing that steers.",
      "Josh (Red Wing) — Passion. The fire that makes you care. The force that gets you out of bed, into the room, and standing behind an idea even when it is uncomfortable. Josh is the energy that moves. Without it, wisdom stagnates. Without it, the right idea never finds its legs.",
      "Every individual leans naturally toward one. The work of a lifetime is learning to activate both. SMJMUN is not designed to make you purely analytical or purely passionate. It is designed to make you whole — someone who thinks with clarity and acts with fire."
    ],
    highlight: "Hosh without Josh is analysis that never becomes action. Josh without Hosh is action that creates more problems than it solves."
  },
  {
    title: 'The Globe',
    subtitle: 'The Unfinished World',
    content: [
      "The globe at the center of the emblem is not a symbol of reach or ambition. It is a symbol of responsibility. The world is there — complex, incomplete, and in need of people who choose to engage with it rather than stand apart from it.",
      "At SMJMUN, the globe represents the understanding that the conversations delegates have in committee rooms are not simulations of real problems — they are real engagements with real challenges that will outlast this conference. Climate, displacement, inequality, governance — these are not academic exercises. They are the actual condition of the world you will inherit and the world you will shape.",
      "The globe is also a symbol of universal belonging. The SMJMUN community is not defined by geography, language, or background. It is defined by the shared commitment to understand and improve the world we hold in common."
    ],
    highlight: "The world does not need observers. It needs participants."
  },
  {
    title: 'The Rising Sun',
    subtitle: 'Hope That Requires Effort',
    content: [
      "The sun in the emblem is still rising. Not fully above the horizon. This is intentional. A sun that has fully risen asks nothing of you — it simply shines. But a sun still rising is a sun that depends on what happens next. It is dawn, not midday. It is possibility, not certainty.",
      "The rising sun represents SMJMUN's belief in hope — not the passive hope that waits for things to improve on their own, but the active hope that rolls up its sleeves. The sun rises because people choose to rise with it. Because delegates choose to prepare, to engage, to learn, to lead. Because individuals decide that a better tomorrow is worth working for today.",
      "It also represents every new beginning. Every participant who walks into an SMJMUN conference is their own sunrise — bringing with them the potential for something that has not yet been seen."
    ],
    highlight: "Hope is not a feeling. It is a decision — made every morning."
  },
  {
    title: 'Gold',
    subtitle: 'The Worth You Arrived With',
    content: [
      "Gold runs through every element of the SMJMUN emblem. It is not decorative. It is deliberate — and it carries the most personal message of all.",
      "Gold, placed beside any color, remains itself. It does not dim in contrast, it does not change its nature to fit the frame. This is the message: you were valuable before you stepped into this room. Your worth is not determined by a best delegate award, a speaking time allocation, or how many other delegates agree with your position paper. You arrived with it. You will leave with it. The conference does not grant it. It can only reflect it back to you.",
      "Gold also carries the promise of what every moment can become. Every interaction here — every debate, every collaboration, every moment of genuine learning — is golden. Not metaphorically. Literally worth more than it might appear in the moment. Because these are the moments that shape who you become."
    ],
    highlight: "You did not need to earn the gold. You needed to remember it was always there."
  }
];

const LogoElements = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-12 h-px bg-[#BB8B57] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            The Emblem
          </h2>
          <p className="text-[#BB8B57] uppercase tracking-[0.2em] text-sm font-medium">
            Element by Element
          </p>
        </motion.div>

        {/* The Journey Layout */}
        <div className="space-y-32">
          {elements.map((el, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Left Side: Title & Subtitle */}
              <div className="lg:col-span-4 flex flex-col pt-2 border-t border-[#BB8B57]/20 lg:border-none">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 group-hover:text-[#BB8B57] transition-colors">
                  {el.title}
                </h3>
                <p className="text-[#BB8B57] text-sm md:text-base uppercase tracking-widest font-medium mb-6">
                  {el.subtitle}
                </p>
              </div>

              {/* Right Side: Content & Highlight */}
              <div className="lg:col-span-8 space-y-6">
                {el.content.map((paragraph, pIndex) => {
                  // Bold specific keywords if they match
                  const formattedParagraph = paragraph.split(/(Hosh \(Blue Wing\) — Wisdom\.|Josh \(Red Wing\) — Passion\.)/g).map((part, i) => {
                    if (part === "Hosh (Blue Wing) — Wisdom." || part === "Josh (Red Wing) — Passion.") {
                      return <strong key={i} className="text-white font-medium">{part}</strong>;
                    }
                    return part;
                  });

                  return (
                    <p key={pIndex} className="text-white/70 leading-relaxed font-light text-justify md:text-left text-base md:text-lg">
                      {formattedParagraph}
                    </p>
                  );
                })}
                
                {/* Highlight / Key Takeaway */}
                <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-[#BB8B57]/10 to-transparent border-l-2 border-[#BB8B57]">
                  <p className="font-serif text-lg md:text-xl italic text-[#BB8B57] leading-relaxed">
                    {el.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoElements;
