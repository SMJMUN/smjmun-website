import { Award, Camera, Building, Globe } from "lucide-react";

const STATS = [
  { value: "30+", label: "Conferences", icon: Award },
  { value: "5,000+", label: "Moments", icon: Camera },
  { value: "100+", label: "Schools", icon: Building },
  { value: "100+", label: "Cities", icon: Globe },
];

export default function GalleryStats() {
  return (
    <section className="py-16 bg-[#131217] border-b border-white/5">
      <div className="content-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center group flex flex-col items-center">
                <Icon size={32} className="text-gold/80 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <div className="font-[family-name:var(--font-sora)] text-[clamp(36px,4.5vw,56px)] font-bold tracking-[-0.02em] text-white mb-2 group-hover:text-gold transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
