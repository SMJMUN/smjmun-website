import Image from 'next/image';
import { Reveal } from '@/components/program/shared/Reveal';

const partners = [
  {
    name: 'IPS',
    logo: '/images/ips-logo.jpeg',
  },
  {
    name: 'VIT',
    logo: '/images/vit-logo-2.webp',
  },
];


export default function TrustSection() {
  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-transparent py-12"
    >
      {/* Floral Left */}
      <Image
        src="/images/floral-left.svg"
        alt=""
        width={220}
        height={400}
        className="pointer-events-none absolute left-0 top-0 w-[110px] md:w-[180px] lg:w-[220px] h-auto opacity-[0.07]"
      />

      {/* Floral Right */}
      <Image
        src="/images/floral-right.svg"
        alt=""
        width={220}
        height={400}
        className="pointer-events-none absolute right-0 top-0 w-[110px] md:w-[180px] lg:w-[220px] h-auto opacity-[0.07]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-8 lg:px-20">
        {/* Label */}
        <Reveal delay={0.3} className="mb-14 text-center">
          <span className="section-label">Trusted By Leading Institutions</span>
        </Reveal>

        {/* Logos Container */}
        <div className="relative mt-10 w-full flex justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={46}
                className="object-contain opacity-90 h-[46px] w-auto"
              />
              <span
                className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.06em] text-[#B8B8B8] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
