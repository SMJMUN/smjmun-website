'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationItemType } from './constants/navigation';

interface NavigationItemProps {
  item: NavigationItemType;
  className?: string;
  onClick?: () => void;
}

export function NavigationItem({ item, className, onClick }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

  return (
    <Link
      href={item.href}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-1 font-body text-[15px] font-medium transition-all duration-300",
        isActive ? "text-accent" : "text-white hover:text-charcoal",
        className
      )}
    >
      <span className="relative">
        {item.label}
        {/* Subtle hover underline - academic style */}
        <span 
          className={cn(
            "absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            isActive ? "w-full" : " w-0 group-hover:w-full opacity-50 group-hover:opacity-100"
          )} 
        />
      </span>
    </Link>
  );
}
