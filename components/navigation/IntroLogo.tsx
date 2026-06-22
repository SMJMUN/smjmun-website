'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLogoProps {
    show: boolean;
}

export function IntroLogo({ show }: IntroLogoProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    {/* DARE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -300,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
     className="
  absolute

  top-[58%]
  left-1/2
  -translate-x-1/2

  md:left-[10%]
  md:top-1/2
  md:-translate-y-1/2
  md:translate-x-0

  text-white
  font-bold
  text-3xl
  md:text-6xl
  lg:text-7xl
"
                        style={{
                            fontFamily: 'var(--font-heading), Georgia, serif',
                        }}
                    >
                        DARE
                    </motion.div>

                    {/* RISE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 300,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 1.1,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
               className="
  absolute

  top-[68%]
  left-1/2
  -translate-x-1/2

  md:right-[10%]
  md:left-auto
  md:top-1/2
  md:-translate-y-1/2

  text-[#83090e]
  font-bold
  text-3xl
  md:text-6xl
  lg:text-7xl
"
                        style={{
                            fontFamily: 'var(--font-heading), Georgia, serif',
                        }}
                    >
                        RISE
                    </motion.div>

                    {/* IMPACT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 1.4,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                 className="
  absolute

  top-[78%]
  left-1/2
  -translate-x-1/2

  md:bottom-[12%]
  md:top-auto

  text-[#bb8b57]
  font-bold
  tracking-tight
  text-4xl
  md:text-7xl
  lg:text-8xl
"
                        style={{
                            fontFamily: 'var(--font-heading), Georgia, serif',
                        }}
                    >
                        IMPACT
                    </motion.div>

                    {/* Logo */}
                <div
  className="
    absolute
    top-[20%]
    left-1/2
    -translate-x-1/2

    md:top-1/2
    md:left-1/2
    md:-translate-x-1/2
    md:-translate-y-1/2
  "
>
                    <motion.div
                        layoutId="smjmun-logo"
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: [
                                'drop-shadow(0 0 0px rgba(187,139,87,0))',
                                'drop-shadow(0 0 40px rgba(187,139,87,.35))',
                                'drop-shadow(0 0 20px rgba(187,139,87,.15))',
                            ],
                        }}
                        transition={{
                            opacity: {
                                duration: 1,
                            },
                            scale: {
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            },
                            filter: {
                                duration: 2,
                            },
                        }}
                        className="relative   h-[42vw]
  w-[42vw]

  md:h-[65vh]
  md:w-[65vh]  "
                    >
                        <Image
                            src="/images/smg-mun-logo.png"
                            alt="SMJMUN"
                            fill
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                    </div>
                </motion.div>
                
            )}
        </AnimatePresence>
    );
}