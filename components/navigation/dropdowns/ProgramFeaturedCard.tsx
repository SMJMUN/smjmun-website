import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProgramFeaturedCard() {
  return (
    <div className="pl-10 border-l border-white/10 h-full">
      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
        Featured Initiative
      </p>

      <div className="h-px bg-white/10 mb-7" />

      <h3 className="font-heading text-white text-[28px] font-normal leading-snug mb-5">
        SMJ Leadership Fellowship
      </h3>

      <p className="text-white/50 font-body text-[14px] leading-relaxed max-w-[260px] mb-8">
        An intensive leadership and diplomacy fellowship designed
        to prepare future delegates, executive board members,
        negotiators and global leaders.
      </p>

      <Link
        href="/programs/fellowship"
        className="
          inline-flex
          items-center
          gap-2
          text-[#bb8b57]
          text-[13px]
          tracking-[0.06em]
          uppercase
          hover:gap-3.5
          transition-all
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        Learn More
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}