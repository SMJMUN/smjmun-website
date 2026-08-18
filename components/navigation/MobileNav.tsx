'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MobileDrawer } from './mobile/MobileDrawer';
import MenuTwoLineIcon from './constants/MenuIcon';
import { NavigationData } from '@/lib/sanity/navigation/types';

interface MobileNavProps {
  navigationData: NavigationData;
  onRegisterClick: () => void;
}

export function MobileNav({ navigationData, onRegisterClick }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center gap-3 z-100">
      <button
        onClick={onRegisterClick}
        className="rounded-md flex items-center justify-center py-2 px-4 font-body text-[12px] font-semibold tracking-widest uppercase transition-all duration-300 bg-[#bb8b57] text-black hover:bg-white shadow-sm"
      >
        Register
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger aria-label="Open navigation menu"  className="p-2 -mr-2 text-white/70 hover:text-white focus:outline-none transition-colors duration-200" >
            
            
          <MenuTwoLineIcon color="white" size={36} />
          </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full z-500 sm:w-[360px] p-0 border-none bg-[#0a0a0a] [&>button]:hidden"
        >
          {/* Accessibility */}
          <div className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Main navigation for the SMJ MUN website</SheetDescription>
          </div>

          <MobileDrawer onClose={() => setOpen(false)} navigationData={navigationData} onRegisterClick={onRegisterClick} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
