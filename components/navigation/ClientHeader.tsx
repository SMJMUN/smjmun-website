'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useScrolledHeader } from './hooks/useScrolledHeader';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import Link from 'next/link';
import { Headphones } from 'lucide-react';
import { InstallButton } from '@/components/pwa/InstallButton';
import { NavigationData } from '@/lib/sanity/navigation/types';

interface ClientHeaderProps {
  navigationData: NavigationData;
}

export function ClientHeader({ navigationData }: ClientHeaderProps) {
  const isScrolled = useScrolledHeader(60);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all overflow-visible duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        isScrolled
          ? "h-[66px] bg-[#0a0a0a] backdrop-blur-[8px] border-b border-white/10"
          : "h-[96px] bg-transparent border-transparent shadow-none"
      )}
    >
      <div className="max-w-[1440px] mx-auto w-full h-full px-6 md:px-10 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo isScrolled={isScrolled} />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="flex-grow text-xl!  flex justify-center">
          <DesktopNav navigationData={navigationData} />
        </div>

        {/* Right: Actions / Mobile Toggle */}
        <div className="flex-shrink-0 flex items-center gap-3 justify-end min-w-[120px]">
          {/* Contact Us — desktop only */}
                    <InstallButton isScrolled={isScrolled} />

      <Link
  href="/contact"
  aria-label="Contact Us"
  className={cn(
    "hidden lg:inline-flex rounded-md items-center justify-center p-3.5 font-body text-[13px] font-medium tracking-widest uppercase transition-all duration-300",
    isScrolled
      ? "bg-primary text-white hover:text-black hover:bg-white hover:-translate-y-0.5 shadow-sm"
      : "bg-white text-primary border border-transparent hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]"
  )}
>
  
  <Headphones className="w-4 h-4" strokeWidth={1.6} />
</Link>

          {/* CTA is hidden on mobile, available in drawer */}
          <Link
            href="/conferences"
            className={cn(
              "hidden lg:inline-flex rounded-md items-center justify-center py-3 px-6 font-body text-[13px] font-medium tracking-widest uppercase transition-all duration-300",
              isScrolled
                ? "bg-primary text-white hover:text-black hover:bg-white hover:-translate-y-0.5 shadow-sm"
                : "bg-white text-primary border border-transparent rounded-md hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]"
            )}
          >
            Register Now
          </Link>
          

          <MobileNav navigationData={navigationData} />
        </div>

      </div>
    </header>
  );
}
