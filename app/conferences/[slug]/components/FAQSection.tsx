"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "Who can participate in SMJ MUN?",
    answer: "SMJ MUN is open to high school and university students from across the globe. Previous MUN experience is not required, as we provide comprehensive training materials.",
  },
  {
    question: "How are committees assigned?",
    answer: "Committees and countries are assigned based on a combination of your stated preferences, previous MUN experience, and registration date.",
  },
  {
    question: "Can schools register groups?",
    answer: "Yes, we encourage school delegations. Faculty advisors can register multiple delegates at once through our delegation registration portal.",
  },
  {
    question: "What should delegates prepare?",
    answer: "Delegates are expected to research their assigned country's foreign policy regarding their committee's agenda and prepare a Position Paper prior to the conference.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "100px 0", backgroundColor: "var(--color-surface)" }}>
      <div className="content-editorial">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--color-navy)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(4,33,71,0.08)",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 32px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                }}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: "20px", color: "var(--color-gold)", transform: openIndex === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}>
                  ▼
                </span>
              </button>
              
              <div
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                  transition: "all 0.3s ease",
                  padding: openIndex === i ? "0 32px 32px" : "0 32px",
                }}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "rgba(4,33,71,0.7)", margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
