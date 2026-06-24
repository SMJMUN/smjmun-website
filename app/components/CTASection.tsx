"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="
  relative
  overflow-hidden
  bg-gradient-to-b
  from-[#5b0207]
  via-[#73060b]
  to-[#83090e]
  py-24
  lg:h-[78vh]
  lg:min-h-[760px]
  flex
  items-center
"
    >
      {/* Top Gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
        }}
      />
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="font-serif text-[14vw] font-semibold tracking-tight text-white/[0.03] select-none">
          SMJMUN
        </h2>
      </div>

      {/* Gold Glow */}
      <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#d8b17a]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">

          {/* Left Side — Heading + Stats + Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            <h2
              className="
          font-serif
          text-white
          leading-[0.92]
          text-2xl
          md:text-3xl
          lg:text-5xl
          max-w-full
        "
            >
              Shaping Tomorrow's
              Leaders Starts With
              One Conversation.
            </h2>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-8 md:gap-12">
              {[
                ["11,000+", "Delegates"],
                ["70+", "Conferences"],
                ["10+", "International"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-serif text-white text-3xl md:text-4xl">
                    {value}
                  </div>
                  <div className="mt-1 text-white/55 uppercase tracking-[0.18em] text-[11px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="
          relative
          hidden
          lg:block
          mt-8
          h-[32vh]
          min-h-[220px]
          max-h-[300px]
          overflow-hidden
          rounded-[28px]
          flex-shrink-0
        "
            >
              <img
                src="/images/perparestudent.jpeg"
                alt="SMJMUN"
                className="h-full w-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#83090e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-8 max-w-xs">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d8b17a]">
                  Since 2023
                </p>
                <h3 className="font-serif text-2xl text-white leading-tight">
                  Building India's
                  <br />
                  Future Leaders
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
            className="
        rounded-[14px]
        border
        border-white/10
        bg-[#0A0A0A]
        backdrop-blur-xl
        p-8 
        h-[60vh]
        "
          >
            <div className="space-y-3">

              <input
                placeholder="Your Name"
                className="
            h-12
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-4
            text-white
            placeholder:text-white/40
            outline-none
            focus:border-[#d8b17a]
            transition-colors
          "
              />

              <input
                placeholder="Email Address"
                className="
            h-12
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-4
            text-white
            placeholder:text-white/40
            outline-none
            focus:border-[#d8b17a]
            transition-colors
          "
              />

              {/* Partnership Type Select */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#0A0A0A]
              px-4
              text-white
              outline-none
              focus:border-[#d8b17a]
              transition-colors
              appearance-none
              cursor-pointer
            "
                >
                  <option value="" disabled className="text-white/40 bg-[#0A0A0A]">
                    inquiry type
                  </option>
                  <option value="school" className="bg-[#0A0A0A] text-white">
                    School
                  </option>
                  <option value="college" className="bg-[#0A0A0A] text-white">
                    College
                  </option>
                  <option value="business" className="bg-[#0A0A0A] text-white">
                    University
                  </option>
                  <option value="business" className="bg-[#0A0A0A] text-white">
                    Students
                  </option>
                  <option value="business" className="bg-[#0A0A0A] text-white">
                    Sponsor
                  </option>
                </select>
                {/* Chevron icon */}
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
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
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
            text-white
            placeholder:text-white/40
            outline-none
            focus:border-[#d8b17a]
            transition-colors
            resize-none
          "
              />

              <button
                type="submit"
                className="
            group
            mt-2
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#bb8b57]
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_0_30px_rgba(187,139,87,0.4)]
          "
              >
                <Send
                  size={22}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );

}