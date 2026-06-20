"use client";

import { motion } from "framer-motion";

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
    {/* Watermark */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <h2 className="font-serif text-[14vw] font-semibold tracking-tight text-white/[0.03] select-none">
        SMJMUN
      </h2>
    </div>

    {/* Gold Glow */}
    <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#d8b17a]/10 blur-[140px]" />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d8b17a]">
            Partner With SMJMUN
          </p> */}

          <h2
            className="
              font-serif
              text-white
              leading-[0.92]
              text-2xl
              md:text-3xl
              lg:text-5xl
              max-w-[700px]
            "
          >
            Shaping Tomorrow's
            <br />
            Leaders Starts With
            <br />
            One Conversation.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-white/70
              text-base
              leading-7
            "
          >
            For over a decade, SMJMUN has empowered future diplomats,
            policymakers, entrepreneurs and changemakers through
            world-class conferences, leadership training and
            institutional collaborations.
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-8 md:gap-12">
            {[
              ["11,000+", "Delegates"],
              ["70+", "Conferences"],
              ["10+", "International"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-serif text-[#d8b17a] text-3xl md:text-4xl">
                  {value}
                </div>
                <div className="mt-1 text-white/55 uppercase tracking-[0.18em] text-[11px]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              mt-8
              rounded-[28px]
              border
              border-white/10
              bg-black/[0.9]
              backdrop-blur-xl
              p-6
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
                "
              />

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
                "
              />

              <button
             className="
h-12
rounded-md
px-7
font-medium
uppercase
tracking-[0.15em]
text-black
transition-all
duration-300

bg-gradient-to-r
from-[#d8b17a]
to-[#bb8b57]

 
hover:bg-none
hover:bg-charcoal
hover:text-white
hover:duration-75
"
                
              >
                Start The Conversation
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            relative
            hidden
            lg:block
            h-[52vh]
            min-h-[420px]
            max-h-[520px]
            overflow-hidden
            rounded-[32px]
          "
        >
          <img
            src="/images/perparestudent.jpeg"
            alt="SMJMUN"
            className="
              h-full
              w-full
              object-cover
              scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#83090e] via-transparent to-transparent" />

          <div className="absolute bottom-10 left-10 max-w-xs">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d8b17a]">
              Since 2014
            </p>

            <h3 className="font-serif text-3xl text-white leading-tight">
              Building India's
              <br />
              Future Leaders
            </h3>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

}