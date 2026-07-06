"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Who can participate in SMJ MUN?",
    answer: "SMJ MUN is open to high school and university students from across the globe. Previous MUN experience is not required, as we provide comprehensive training materials and guidance for first-time delegates.",
  },
  {
    question: "How are committees assigned?",
    answer: "Committees and countries are assigned based on delegate preferences, previous experience, and availability. We strive to ensure a balanced and rewarding committee experience for all participants.",
  },
  {
    question: "Can schools register groups?",
    answer: "Yes. Faculty advisors can register school delegations through our delegation registration process. Special benefits and support are available for institutional delegations.",
  },
  {
    question: "What should delegates prepare?",
    answer: "Delegates should research their assigned country's position on the committee agenda and prepare a position paper before the conference. Study guides will be provided before the event.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--ds-bg-secondary)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(187,139,87,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="section-label block mb-6">Frequently Asked Questions</span>

          <h2
            className="font-serif text-white"
            style={{
              fontSize: 'clamp(38px, 6vw, 68px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 700,
            }}
          >
            Everything You Need<br /> To Know
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto leading-[1.8]"
            style={{
              fontSize: '16px',
              color: 'var(--ds-text-muted)',
              fontFamily: 'var(--font-body), system-ui, sans-serif',
            }}
          >
            Find answers to common questions about registration, committees, delegate preparation, and conference participation.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: '16px',
                  border: isOpen ? '1px solid rgba(187,139,87,0.30)' : '1px solid var(--ds-border)',
                  backgroundColor: isOpen ? 'rgba(187,139,87,0.05)' : 'var(--ds-surface)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-7 py-6 flex items-center justify-between text-left"
                >
                  <h3
                    className="font-sans text-lg md:text-xl font-semibold pr-6"
                    style={{
                      color: isOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.82)',
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                    }}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderRadius: '10px',
                      backgroundColor: 'rgba(187,139,87,0.12)',
                      border: '1px solid rgba(187,139,87,0.20)',
                    }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: 'var(--ds-gold)' }}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7">
                      <div
                        className="mb-5"
                        style={{ height: '1px', backgroundColor: 'rgba(187,139,87,0.15)' }}
                      />
                      <p
                        className="font-sans leading-[1.85]"
                        style={{
                          fontSize: '15px',
                          color: 'var(--ds-text-muted)',
                          maxWidth: '720px',
                          fontFamily: 'var(--font-body), system-ui, sans-serif',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom contact CTA */}
        <div className="mt-12 text-center">
          <p
            className="font-sans mb-4"
            style={{ color: 'var(--ds-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
          >
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
            style={{ color: 'var(--ds-gold)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
          >
            Contact Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}