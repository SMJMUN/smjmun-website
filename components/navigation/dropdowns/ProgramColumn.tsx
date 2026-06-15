import React from 'react';
import Link from 'next/link';

interface ProgramLink {
  title: string;
  href: string;
}

interface ProgramColumnProps {
  title: string;
  links: ProgramLink[];
}

export function ProgramColumn({ title, links }: ProgramColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-lg font-bold text-primary border-b border-primary/10 pb-2 mb-2">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group flex items-center w-fit"
            >
              <span className="relative font-body text-[15px] text-primary/80 transition-colors duration-300 group-hover:text-accent">
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
