'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LogoIdentity = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Dare · Rise · Impact Sequence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Dare · Rise · Impact
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light px-4 text-justify md:text-center">
              The SMJMUN tagline is not a slogan. It is a sequence — three words describing three different stages of a human journey. They operate across different time horizons. Dare begins here. Rise takes years. Impact may take a lifetime. Understanding this sequence is understanding what SMJMUN is actually trying to do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* DARE */}
            <div className="space-y-6">
              <h3 className="text-[#BB8B57] text-2xl font-serif tracking-wide border-b border-[#BB8B57]/20 pb-4">DARE</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
                Every meaningful journey begins with a first step taken before you feel completely ready. To Dare is to move forward despite uncertainty — to act on conviction when comfort would counsel you to wait.
              </p>
              <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base list-disc list-outside ml-4">
                <li><span className="text-white/90">The courage to participate</span> — when silence would have been easier and safer.</li>
                <li><span className="text-white/90">The courage to speak for the first time</span> — in a room full of strangers, in a language that may not be your own, about a problem bigger than yourself.</li>
                <li><span className="text-white/90">The courage to question</span> — not just others, but your own assumptions, your own positions, the ideas you arrived with.</li>
                <li><span className="text-white/90">The courage to listen deeply</span> — to a perspective that challenges everything you believe.</li>
                <li><span className="text-white/90">The courage to say, 'I was wrong,'</span> — in a world that treats certainty as strength.</li>
                <li><span className="text-white/90">The courage to believe that your voice matters</span> — even when no one has told you so yet.</li>
                <li><span className="text-white/90">The courage to show up fully</span> — not performing confidence, but practising it.</li>
              </ul>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base italic pt-4 border-t border-white/10">
                Dare is not the absence of fear. It is what you do in spite of it.
              </p>
            </div>

            {/* RISE */}
            <div className="space-y-6">
              <h3 className="text-[#BB8B57] text-2xl font-serif tracking-wide border-b border-[#BB8B57]/20 pb-4">RISE</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
                The first step is not the whole journey. Dare sets you in motion. Rise is what happens next — the sustained, difficult, lifelong process of becoming. Rise is not about achievement. It is about growth. It means:
              </p>
              <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base list-disc list-outside ml-4">
                <li><span className="text-white/90">Rising above fear</span> — not by eliminating it, but by refusing to be governed by it.</li>
                <li><span className="text-white/90">Rising above indifference</span> — choosing to care when it would be easier not to.</li>
                <li><span className="text-white/90">Rising above selfishness</span> — learning to measure your success by the growth of those around you.</li>
                <li><span className="text-white/90">Rising above prejudice</span> — dismantling the assumptions that limit both your understanding and your empathy.</li>
                <li><span className="text-white/90">Rising above the version of yourself that arrived</span> — continuously becoming someone with more wisdom, more discipline, more compassion, and more capacity to serve.</li>
                <li><span className="text-white/90">Rising together</span> — because no meaningful ascent in life is made entirely alone.</li>
              </ul>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base italic pt-4 border-t border-white/10">
                Rise is not a destination. It is a direction — chosen daily.
              </p>
            </div>

            {/* IMPACT */}
            <div className="space-y-6">
              <h3 className="text-[#BB8B57] text-2xl font-serif tracking-wide border-b border-[#BB8B57]/20 pb-4">IMPACT</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
                Impact is not an award. It is not a trophy... It is the long-term result of consistently choosing responsibility over indifference, solutions over complaints, and people over comfort.
              </p>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base mb-2">True impact is created when:</p>
              <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base list-disc list-outside ml-4">
                <li><span className="text-white/90">Knowledge is used not for personal gain alone</span>, but to understand and solve real problems.</li>
                <li><span className="text-white/90">Wisdom is applied</span> not just to succeed, but to serve.</li>
                <li><span className="text-white/90">Passion is directed not inward, but outward</span> — toward the lives of others.</li>
                <li><span className="text-white/90">The individual does not ask</span>, 'What can this world give me?' but 'What do I owe this world?'</li>
                <li><span className="text-white/90">A leader chooses stewardship over authority</span> — recognizing that position is not a reward, but a responsibility.</li>
              </ul>
              <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base italic pt-4 border-t border-white/10">
                Impact is not what you do at SMJMUN. It is what you become because of it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Organizational Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Organizational Identity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold">Mission Statement</h4>
              <p className="text-white/80 font-light leading-relaxed">
                SMJMUN exists not to create leaders, but to develop stewards — individuals who understand that every position of knowledge, influence, or power is a temporary trusteeship over something built by others and owed to those who come next.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold">Vision Statement</h4>
              <p className="text-white/80 font-light leading-relaxed">
                A future in which no generation inherits a world worse than the one before it — because enough people chose responsibility over indifference, wisdom over impulse, and stewardship over ownership.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold">Core Purpose</h4>
              <p className="text-white/80 font-light leading-relaxed">
                To awaken in every participant the understanding that they are a steward of an unfinished world — and to give them the roots, knowledge, wisdom, and courage to be worthy of that responsibility.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold">Organizational Promise</h4>
              <p className="text-white/80 font-light leading-relaxed">
                SMJMUN will give you something more durable than a skill: the conviction that your life is meant for something — and the beginning of knowing what.
              </p>
            </div>
          </div>

          {/* 50-Year Aspiration */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm mt-16 text-center">
            <h4 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold mb-6">The 50-Year Aspiration</h4>
            <p className="text-white/80 font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              In 2074, SMJMUN will be known not as the conference that produced the most winners, but as the institution that understood — before others did — that the world's most serious problems are not solved by people who know how to argue, but by people who know what to argue for, and who spent their lives becoming worthy of the argument.
              <br/><br/>
              Its graduates will be found in every field of consequence: not because they are the most celebrated, but because they are the most responsible. They will be people who rose and remained grounded, who led and remembered they were stewards, who measured every year of their lives not by what they accumulated but by what improved because they were present.
            </p>
          </div>
        </motion.div>

        {/* Brand Philosophy & The Three Sacred Sentences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Brand Philosophy</h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#BB8B57]">The Defining Statement</h3>
              <blockquote className="text-xl md:text-2xl font-serif text-white italic pl-6 border-l-2 border-[#BB8B57]">
                "MUN teaches you how to speak. SMJMUN exists to give you something worth saying."
              </blockquote>
              <p className="text-white/70 font-light leading-relaxed mt-4">
                This is not a positioning line. It is a declaration of philosophical difference. The MUN ecosystem broadly, and competitively, trains for performance — speaking, procedure, presence. These are valuable. But SMJMUN's premise is that skill is only meaningful when it is animated by substance, values, and a genuine desire to engage with the world. We do not teach people to sound like leaders. We help them become ones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h4 className="text-lg font-serif text-white mb-2"><span className="text-[#BB8B57]">I.</span> Roots Before Reach</h4>
                <p className="text-white/70 font-light text-sm">Know where you come from before you decide where you are going. Whatever your tradition, your values, your community — they are not limitations to transcend. They are the foundation from which all meaningful reach begins.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif text-white mb-2"><span className="text-[#BB8B57]">II.</span> Knowledge Before Action</h4>
                <p className="text-white/70 font-light text-sm">Act from understanding, not from impulse. In a world that rewards speed, SMJMUN cultivates deliberateness — the discipline to know before you speak, to learn before you lead.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif text-white mb-2"><span className="text-[#BB8B57]">III.</span> Character Before Credentials</h4>
                <p className="text-white/70 font-light text-sm">You are not your best delegate award. You are not your school's MUN ranking. You are what you choose to do when no one is grading you. Character is not a line on a résumé. It is what remains when the résumé is set aside.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif text-white mb-2"><span className="text-[#BB8B57]">IV.</span> Service Before Recognition</h4>
                <p className="text-white/70 font-light text-sm">The goal of leadership is not admiration. It is impact — the quiet, lasting difference made by someone who chose responsibility over comfort, and people over praise. Recognition may follow. But it cannot be the reason.</p>
              </div>
            </div>

            <div className="bg-[#BB8B57]/10 border border-[#BB8B57]/20 p-8 md:p-12 text-center mt-16">
              <h3 className="text-2xl font-serif text-[#BB8B57] mb-4">The Founder's Principle: Stewardship</h3>
              <p className="text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
                SMJMUN trains leaders who think like stewards. A steward is someone who understands that their position — whatever it is — belongs first to those they are responsible for, and only secondarily to themselves. They exercise authority not as a right but as a trust. This is what separates SMJMUN from conferences that train participants to compete. Competition asks: 'How can I win?' Stewardship asks: 'What is this for — and am I using my position to fulfil it?' The world already has enough people trying to win. It needs more people willing to serve.
              </p>
            </div>
          </div>

          {/* The Three Sacred Sentences */}
          <div className="mt-32 pb-32 text-center">
            <h3 className="text-[#BB8B57] uppercase tracking-widest text-sm font-semibold mb-12">The Three Sacred Sentences</h3>
            <div className="space-y-12">
              <blockquote className="text-2xl md:text-4xl font-serif text-white italic">
                "MUN teaches you how to speak. SMJMUN exists to give you something worth saying."
              </blockquote>
              <blockquote className="text-2xl md:text-4xl font-serif text-white italic">
                "The world is not handed to you complete. It is handed to you in progress."
              </blockquote>
              <blockquote className="text-2xl md:text-4xl font-serif text-white italic">
                "Gold placed beside any colour remains itself. So do you."
              </blockquote>
            </div>
            
            <div className="mt-20">
              <p className="text-[#BB8B57] tracking-[0.3em] uppercase text-sm font-medium">SMJMUN · Dare · Rise · Impact</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default LogoIdentity;
