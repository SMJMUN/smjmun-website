import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const photos = [
  { src: "/images/student-training-2.jpeg", rotate: "rotate-10",   x: "translate-x-50",   y: "translate-y-10"   },
  { src: "/images/community-2.jpeg",         rotate: "rotate-10",   x: "translate-x-18",   y: "translate-y-22"   },
  { src: "/images/community.webp",            rotate: "rotate-6",    x: "-translate-x-39",  y: "-translate-y-0"   },
  { src: "/images/smj-hero-7.jpeg",           rotate: "-rotate-16",  x: "translate-x-15",   y: "-translate-y-30"  },
  { src: "/images/smj-hero-4.jpeg",           rotate: "-rotate-18",  x: "-translate-x-17",  y: "-translate-y-22"  },
  { src: "/images/student-training.jpeg",     rotate: "-rotate-11",  x: "-translate-x-24",  y: "translate-y-24"   },
  { src: "/images/moment-1.jpeg",             rotate: "-rotate-8",   x: "translate-x-48",   y: "-translate-y-21"  },
  { src: "/images/moment-2.jpeg",             rotate: "rotate-10",   x: "translate-x-30",   y: "-translate-y-5"   },
  { src: "/images/smj-hero-6.webp",           rotate: "rotate-3",    x: "-translate-x-0",   y: "-translate-y-0"   },
];

export default function MomentsCollage() {
  return (
    <section className="relative bg-[#0A0A0A] w-full overflow-hidden py-24 text-white">
      {/* Section header */}
      <div className="text-center mb-4 px-6">
        <span className="section-label">Our Moments</span>
      </div>
      <h2
        className="text-center font-serif text-white mb-12 px-6"
        style={{
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        Experiences That Stay Forever
      </h2>

      {/* Collage */}
      <div className="relative flex justify-center items-center h-[28rem] overflow-hidden">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.rotate} ${p.x} ${p.y} transition-transform duration-500 hover:scale-105`}
          >
            <div className="bg-[#1a1a1a] p-1 rounded-sm shadow-xl">
              <div className="relative w-42 h-32 md:w-48 md:h-36 overflow-hidden">
                <Image src={p.src} alt="moment"  sizes="(max-width: 1024px) 100vw, 55vw" fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote + CTA */}
      <div className="text-center mt-8 px-6 max-w-2xl mx-auto">
        <p
          className="font-serif italic text-[#BB8B57] mb-8"
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.4 }}
        >
          Some experiences end when the event does.
          <br />
          The ones that shape you stay forever.
        </p>
        <Link href="/gallery" className="btn-ds-secondary inline-flex">
          View Gallery
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}