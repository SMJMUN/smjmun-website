'use client';

import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/program/shared/Reveal';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function FounderCTA() {
  return (
    <>
      <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-20 text-center border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Reveal>
            <h2 
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2 }}
            >
              Build the Future of Youth Leadership With Us.
            </h2>
            <p className="text-white/70 font-light text-lg mb-10 max-w-[600px] mx-auto">
              Schools, colleges, organizations, and institutions are invited to collaborate with SMJMUN. Together, we can embed world-class diplomatic thinking into your educational frameworks.
            </p>
            
            <Link 
              href="/partnerships"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#BB8B57]/50 text-white rounded-full hover:bg-[#BB8B57] transition-all duration-300 uppercase tracking-[0.1em] text-sm font-medium"
            >
              Partner With SMJMUN <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Minimal Footer for Connect Links */}
      <footer className="py-12 bg-[#050505] relative z-20 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <Reveal delay={0.1}>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
              Connect with Aarushh
            </span>
            <div className="flex justify-center items-center gap-6 md:gap-10">
              <a 
                href="https://www.linkedin.com/in/theaarushsahu" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn /> <span>LinkedIn</span>
              </a>
              <span className="text-white/20">&middot;</span>
              <a 
                href="https://www.instagram.com/theaarushhsahu?igsh=MXR6amRrYndvNnNvOA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
              <span className="text-white/20">&middot;</span>
              <a 
                href="mailto:Info@smjmun.com" 
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <MdEmail /> <span>Email</span>
              </a>
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
