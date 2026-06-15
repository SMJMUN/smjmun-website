'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isScrolled: boolean;
}

export function Logo({ isScrolled }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50 relative">
      {/* Logo Mark */}
      <div 
        className={`relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isScrolled ? 'h-10 w-10 md:h-12 md:w-12' : 'h-12 w-12 md:h-16 md:w-16'
        }`}
      >
        <Image
          src="/images/smg-mun-logo.png"
          alt="SMG MUN Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Institution Name */}
      <div className="flex flex-col">
        <span 
          className={`font-heading font-bold text-primary tracking-tight transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isScrolled 
              ? 'text-lg md:text-xl' 
              : 'text-xl md:text-2xl'
          }`}
        >
          SMJ MUN
        </span>
        {/* We only show the full subtitle on desktop, and it fades/shrinks slightly on scroll but remains visible as requested */}
        <span 
          className={`hidden md:block font-body text-primary/70 uppercase tracking-widest transition-all duration-500 origin-left ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isScrolled 
              ? 'text-[9px] opacity-80' 
              : 'text-[11px] opacity-100'
          }`}
        >
          International Secretariat
        </span>
      </div>
    </Link>
  );
}
