"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/community-3.png"
          alt="Founder"
          className="h-full w-full object-center object-cover md:object-right"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left Fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/70
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-8
          lg:px-12
        "
      >
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              inline-flex
              bg-gold
              px-4
              py-2
              text-sm
              font-medium
              text-white
            "
          >
            About SMJMUN
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              mt-6
              font-serif
              text-3xl
              font-semibold
              leading-tight
              text-white
              md:text-5xl
            "
          > 
           We are SMJMUN
           
          
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-10
              border-l-2
              border-[#d8b17a]
              pl-6
            "
          >
            <p
              className="
                max-w-xl
                text-lg
                leading-8
                text-white/80
              "
            >
              Since 2014, SMJMUN has empowered
              thousands of students through
              Model United Nations conferences,
              leadership programs and global
              engagement initiatives.
              <br />
             <span className="text-charcoal"> IGNITE , INNOVATE , IMPACT</span>
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
          absolute
          bottom-10
          right-10
          flex
          flex-col
          gap-1
        "
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              h-5
              w-5
              rotate-45
              border-b-2
              border-r-2
              border-white
              opacity-80
            "
          />
        ))}
      </motion.div>
    </section>
  );
}