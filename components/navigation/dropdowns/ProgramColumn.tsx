import Link from "next/link";

interface ProgramLink {
  title: string;
  href: string;
}

interface ProgramColumnProps {
  title: string;
  links: ProgramLink[];
}

export function ProgramColumn({
  title,
  links,
}: ProgramColumnProps) {
  return (
    <div className="flex flex-col">
      {/* Section overline label — editorial style */}
      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
        {title}
      </p>

      <div className="h-px bg-white/10 mb-7" />

      <div className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="
              block
              group
              text-white/60
              hover:text-white
              transition-colors
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]
              text-[15px]
              font-body
              font-normal
            "
          >
            <span className="relative inline-block">
              {link.title}
              <span
                className="
                  absolute
                  left-0
                  -bottom-0.5
                  h-px
                  w-0
                  bg-[#bb8b57]
                  transition-all
                  duration-300
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:w-full
                "
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}