 
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Use alternate darker background (#171717) */
  alternate?: boolean;
  /** Make section background transparent (for parallax wrapper) */
  transparent?: boolean;
  /** HTML id for anchor linking */
  id?: string;
}

export function Section({
  children,
  className,
  alternate = false,
  transparent = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        transparent
          ? "bg-transparent"
          : alternate
          ? "bg-[#171717]"
          : "bg-[#0B0B0B]",
        className
      )}
    >
      {children}
    </section>
  );
}
 
