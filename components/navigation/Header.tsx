  'use client';

  import React from 'react';
  import { cn } from '@/lib/utils';
  import { useScrolledHeader } from './hooks/useScrolledHeader';
  import { Logo } from './Logo';
  import { DesktopNav } from './DesktopNav';
  import { MobileNav } from './MobileNav';

  export function Header() {
    const isScrolled = useScrolledHeader(60);

    return (
      <header
        className={cn(
          "fixed top-0 w-full z-[100] transition-all overflow-visible duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isScrolled 
            ? "h-[66px] bg-[#18171C] backdrop-blur-[8px] border-b border-white/10" 
            : "h-[96px] bg-transparent border-transparent shadow-none"
        )}
      >
        <div className="max-w-[1440px] mx-auto w-full h-full px-6 md:px-10 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Center: Desktop Navigation */}
          <div className="flex-grow  flex justify-center">
            <DesktopNav />
          </div>

          {/* Right: Actions / Mobile Toggle */}
          <div className="flex-shrink-0 flex items-center justify-end min-w-[120px]">
            {/* CTA is hidden on mobile, available in drawer */}
            <a
              href="/register"
              className={cn(
                "hidden md:inline-flex rounded-md items-center justify-center py-3 px-6 font-body text-[13px] font-medium tracking-widest uppercase transition-all duration-300",
                isScrolled 
                  ? "bg-primary text-white hover:text-black hover:bg-white hover:-translate-y-0.5 shadow-sm" 
                  : "bg-white text-primary border border-transparent rounded-md hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]"
              )}
            >
              Register Now
            </a>
            
            <MobileNav />
          </div>
          
        </div>
      </header>
    );
  }
