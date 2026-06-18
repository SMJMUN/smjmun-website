'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from './constants/navigation';
import { ConferencesMenu } from './dropdowns/ConferencesMenu';
import { ProgramsMenu } from './dropdowns/ProgramsMenu';
import { NavigationItem } from './NavigationItem';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu
      className="
    hidden
    md:flex
    mx-auto
    z-50
    static 
  "
    >
      <NavigationMenuList className="gap-8 ">
        {MAIN_NAVIGATION.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          // Special handling for Conferences and Programs to render the Mega Menu
          if (item.label === 'Conferences' || item.label === 'Programs') {
            const MenuComponent = item.label === 'Conferences' ? ConferencesMenu : ProgramsMenu;
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                    "font-body text-[15px] font-medium p-0 h-auto",
                    "group flex items-center gap-1 transition-all duration-300",
                    isActive ? "text-white" : "text-accent hover:text-charcoal",
                    // Custom override for the generic shadcn styling
                    "[&>svg]:w-3 [&>svg]:h-3 [&>svg]:ml-1.5 [&>svg]:opacity-60 [&>svg]:transition-transform [&>svg]:duration-300",
                    "data-[state=open]:[&>svg]:rotate-180 data-[state=open]:text-accent"
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                        isActive ? "w-full" : "w-0 group-hover:w-full group-data-[state=open]:w-full opacity-50 group-hover:opacity-100"
                      )}
                    />
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="
    mt-0
    p-0
    border-none
    shadow-none
    bg-transparent
  "
                >
                  <MenuComponent />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          // Standard links
          return (
            <NavigationMenuItem key={item.label}>
              <NavigationItem item={item} />
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
