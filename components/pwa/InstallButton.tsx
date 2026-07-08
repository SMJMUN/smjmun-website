'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { usePWAInstall } from './usePWAInstall';
import { Check, Download } from 'lucide-react';

interface InstallButtonProps {
  isScrolled?: boolean;
  className?: string;
  variant?: 'desktop' | 'mobile-drawer' | 'mobile-header';
}

export function InstallButton({ isScrolled = false, className, variant = 'desktop' }: InstallButtonProps) {
  const { isInstallable, isInstalled, installPWA } = usePWAInstall();

  // Do not render anything if neither installable nor installed,
  // to avoid flashing on unsupported browsers.
  if (!isInstallable && !isInstalled) {
    return null;
  }

  if (variant === 'mobile-drawer') {
    if (isInstalled) {
      return (
        <div
          className={cn(
            "flex items-center justify-center w-full py-4 bg-white/5 text-white/50 font-body text-[12px] font-semibold tracking-[0.2em] uppercase transition-all duration-300",
            className
          )}
        >
          <Check className="w-4 h-4 mr-2" />
          Installed
        </div>
      );
    }

    return (
      <button
        onClick={installPWA}
        className={cn(
          "flex items-center justify-center w-full py-4 bg-transparent border border-white/20 text-white font-body text-[12px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10",
          className
        )}
      >
        Install SMJMUN
      </button>
    );
  }

  if (variant === 'mobile-header') {
    if (isInstalled) {
      return (
        <div className={cn("p-2 text-white/40", className)}>
          <Check className="w-5 h-5" strokeWidth={1.5} />
        </div>
      );
    }

    return (
      <button
        onClick={installPWA}
        aria-label="Install App"
        className={cn("p-2 text-white/70 hover:text-white transition-colors duration-200", className)}
      >
        <Download className="w-5 h-5" strokeWidth={1.5} />
      </button>
    );
  }

  // Desktop variant
  if (isInstalled) {
    return (
      <div
        className={cn(
          "hidden lg:inline-flex rounded-md items-center justify-center p-3 font-body text-[13px] font-medium tracking-widest uppercase transition-all duration-300 opacity-70",
          isScrolled
            ? "bg-transparent text-white/70 border border-white/20"
            : "bg-transparent text-primary/70 border border-primary/20",
          className
        )}
      >
        <Check className="w-4 h-4" strokeWidth={1.6} />
      </div>
    );
  }

  return (
    <button
      onClick={installPWA}
      aria-label="Install App"
      className={cn(
        "hidden lg:inline-flex rounded-md items-center justify-center p-3 font-body text-[13px] font-medium tracking-widest uppercase transition-all duration-300",
        isScrolled
          ? "bg-transparent text-white border border-white/30 hover:bg-white hover:text-black hover:-translate-y-0.5 shadow-sm"
          : "bg-transparent text-white border border-white/50 hover:bg-white hover:text-black hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]",
        "animate-in fade-in duration-500", // fade in when available
        className
      )}
    >
      <Download className="w-4 h-4" strokeWidth={1.6} />
    </button>
  );
}
