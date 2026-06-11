 import Image from "next/image";

export default function PartnershipsPage() {
  return (
    <main className="bg-[#f8f8f8] text-black">

      {/* HERO */}
      <section className="relative h-[75vh]! overflow-hidden!">
        <div className="absolute inset-0">
          <Image
            src="/images/partnerships/hero.jpg"
            alt="SMJ MUN Partnerships"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-8 flex items-center">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-[#bb8b57] text-sm mb-6">
              Partnerships & Collaborations
            </p>

            <h1 className="font-serif text-white text-6xl md:text-8xl leading-[0.95] mb-8">
              Building Long-Term Educational Partnerships.
            </h1>

            <p className="text-white/80 text-lg max-w-xl mb-10">
              We collaborate with schools, colleges and educational
              organisations to create meaningful leadership experiences.
            </p>

            <button className="bg-[#83090e] text-white px-8 py-4 uppercase tracking-wider text-sm">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight">
            We partner with institutions to create meaningful leadership
            experiences that last a lifetime.
          </h2>

          <div className="flex items-center">
            <p className="text-lg text-black/70 leading-relaxed">
              Our partnerships are built on trust, shared values and a vision
              for holistic student development. Together, we shape confident
              communicators, compassionate leaders and responsible global
              citizens.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="pb-40">
        <div className="max-w-6xl mx-auto px-8 space-y-24">

          <div className="border-t pt-10 grid md:grid-cols-[120px_1fr] gap-8">
            <span className="text-[#bb8b57] text-4xl font-serif">01</span>

            <div>
              <h3 className="font-serif text-4xl mb-4">
                School Partnerships
              </h3>

              <p className="max-w-2xl text-black/70">
                School MUN associations, delegate training programs,
                annual diplomacy initiatives and leadership development.
              </p>
            </div>
          </div>

          <div className="border-t pt-10 grid md:grid-cols-[120px_1fr] gap-8">
            <span className="text-[#bb8b57] text-4xl font-serif">02</span>

            <div>
              <h3 className="font-serif text-4xl mb-4">
                College Partnerships
              </h3>

              <p className="max-w-2xl text-black/70">
                Building thriving MUN ecosystems through society development,
                conference consulting and executive board mentoring.
              </p>
            </div>
          </div>

          <div className="border-t pt-10 grid md:grid-cols-[120px_1fr] gap-8">
            <span className="text-[#bb8b57] text-4xl font-serif">03</span>

            <div>
              <h3 className="font-serif text-4xl mb-4">
                Educational Organisations
              </h3>

              <p className="max-w-2xl text-black/70">
                Collaborating with NGOs and institutions to create impactful
                diplomacy and leadership programs.
              </p>
            </div>
          </div>

          <div className="border-t pt-10 grid md:grid-cols-[120px_1fr] gap-8">
            <span className="text-[#bb8b57] text-4xl font-serif">04</span>

            <div>
              <h3 className="font-serif text-4xl mb-4">
                Strategic Sponsors
              </h3>

              <p className="max-w-2xl text-black/70">
                Align your brand with future leaders through meaningful
                educational initiatives and conference partnerships.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.25em] text-[#bb8b57] text-sm mb-12">
            Partnership Process
          </p>

          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-serif text-5xl text-[#bb8b57] mb-4">
                01
              </h4>
              <p className="font-medium">Discussion</p>
            </div>

            <div>
              <h4 className="font-serif text-5xl text-[#bb8b57] mb-4">
                02
              </h4>
              <p className="font-medium">Consultation</p>
            </div>

            <div>
              <h4 className="font-serif text-5xl text-[#bb8b57] mb-4">
                03
              </h4>
              <p className="font-medium">Proposal</p>
            </div>

            <div>
              <h4 className="font-serif text-5xl text-[#bb8b57] mb-4">
                04
              </h4>
              <p className="font-medium">Launch</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#83090e] text-white py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              Let's Build The Future Together.
            </h2>

            <p className="text-white/70 max-w-md">
              Start a conversation with our team to explore partnership
              opportunities.
            </p>
          </div>

          <div className="flex items-center">
            <button className="border border-white px-8 py-4 uppercase tracking-wider text-sm">
              Request Partnership Discussion
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}