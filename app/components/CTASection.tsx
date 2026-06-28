"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:min-h-[78vh] flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #5b0207, #73060b, #83090e)',
      }}
    >
      {/* Top gradient edge */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
      />

      {/* Bottom gradient edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
      />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2
          className="font-serif select-none"
          style={{
            fontSize: '14vw',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.03)',
          }}
        >
          SMJMUN
        </h2>
      </div>

      {/* Gold glow left */}
      <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#BB8B57]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            {/* Section label */}
            <span
              className="section-label mb-6"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Get In Touch
            </span>

            <h2
              className="font-serif text-white leading-[0.92] mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Shaping Tomorrow&apos;s
              Leaders Starts With
              One Conversation.
            </h2>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap gap-8 md:gap-12">
              {[
                ["11,000+", "Delegates"],
                ["70+", "Conferences"],
                ["10+", "International"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div
                    className="font-serif text-white"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1 }}
                  >
                    {value}
                  </div>
                  <div
                    className="mt-1 uppercase tracking-[0.18em] text-[11px]"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block mt-10 overflow-hidden flex-shrink-0"
              style={{
                height: 'clamp(180px, 28vh, 280px)',
                borderRadius: '20px',
              }}
            >
              <img
                src="/images/perparestudent.jpeg"
                alt="SMJMUN"
                className="h-full w-full object-cover scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(131,9,14,0.8), transparent)' }}
              />
              <div className="absolute bottom-7 left-8 max-w-xs">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#BB8B57]">Since 2023</p>
                <h3 className="font-serif text-2xl text-white leading-tight">
                  Building India&apos;s<br />Future Leaders
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side — Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-ds p-8"
            style={{
              background: '#0A0A0A',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="space-y-4">
              <input
                placeholder="Your Name"
                className="
                  h-12 w-full
                  rounded-[16px]
                  border border-[rgba(255,255,255,0.08)]
                  bg-white/[0.03]
                  px-4
                  text-white text-sm
                  placeholder:text-[#7A7A7A]
                  outline-none
                  focus:border-[#BB8B57]
                  transition-colors duration-200
                "
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              />

              <input
                placeholder="Email Address"
                className="
                  h-12 w-full
                  rounded-[16px]
                  border border-[rgba(255,255,255,0.08)]
                  bg-white/[0.03]
                  px-4
                  text-white text-sm
                  placeholder:text-[#7A7A7A]
                  outline-none
                  focus:border-[#BB8B57]
                  transition-colors duration-200
                "
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              />

              {/* Inquiry type select */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="
                    h-12 w-full
                    rounded-[16px]
                    border border-[rgba(255,255,255,0.08)]
                    bg-[#0A0A0A]
                    px-4
                    text-[#7A7A7A] text-sm
                    outline-none
                    focus:border-[#BB8B57]
                    transition-colors duration-200
                    appearance-none cursor-pointer
                  "
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  <option value="" disabled className="text-[#7A7A7A] bg-[#0A0A0A]">Inquiry type</option>
                  <option value="school"   className="bg-[#0A0A0A] text-white">School</option>
                  <option value="college"  className="bg-[#0A0A0A] text-white">College</option>
                  <option value="uni"      className="bg-[#0A0A0A] text-white">University</option>
                  <option value="student"  className="bg-[#0A0A0A] text-white">Students</option>
                  <option value="sponsor"  className="bg-[#0A0A0A] text-white">Sponsor</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <textarea
                rows={3}
                placeholder="Tell us about your inquiry..."
                className="
                  w-full
                  rounded-[16px]
                  border border-[rgba(255,255,255,0.08)]
                  bg-white/[0.03]
                  p-4
                  text-white text-sm
                  placeholder:text-[#7A7A7A]
                  outline-none
                  focus:border-[#BB8B57]
                  transition-colors duration-200
                  resize-none
                "
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              />

              <button
                type="submit"
                className="btn-ds-primary w-full justify-center mt-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}