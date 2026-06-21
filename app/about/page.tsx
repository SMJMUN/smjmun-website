import AboutHero from "../components/AboutSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <AboutHero />

      {/* WHY SMJMUN EXISTS */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block bg-gold px-4 py-2 text-sm font-medium text-white">
              Why SMJMUN
            </span>

            <h2 className="font-serif text-charcoal text-4xl leading-tight md:text-6xl">
              More Than A Conference
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/75 md:text-xl">
              Most organizations teach students how to speak.
              SMJMUN exists to help them discover something worth saying.
              Through diplomacy, leadership, and meaningful dialogue,
              we encourage young people to engage with the world's
              challenges and become thoughtful contributors to society.
            </p>

            <div className="mt-10 border-l-2 border-[var(--color-gold)] pl-6">
              <p className="font-serif text-2xl italic text-white/90">
                "The world is not handed to you complete.
                It is handed to you in progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFERENCES & PROGRAMS */}
      {/* <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--color-gold)]">
              What We Do
            </span>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Conferences & Programs
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group rounded-none border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:border-[var(--color-gold)]">
              <div className="mb-6 text-[var(--color-gold)]">
                01
              </div>

              <h3 className="font-serif text-3xl">
                Our Conferences
              </h3>

              <p className="mt-6 leading-8 text-white/70">
                Students engage in committee simulations,
                policy debates, diplomatic negotiations,
                and global issue discussions that develop
                confidence, communication, diplomacy,
                and critical thinking.
              </p>

              <Link
                href="/conferences"
                className="mt-8 inline-flex items-center gap-2 text-[var(--color-gold)]"
              >
                Explore Conferences
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group rounded-none border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:border-[var(--color-gold)]">
              <div className="mb-6 text-[var(--color-gold)]">
                02
              </div>

              <h3 className="font-serif text-3xl">
                Our Programs
              </h3>

              <p className="mt-6 leading-8 text-white/70">
                Beyond conferences, SMJMUN offers
                leadership development, communication
                training, and experiential learning
                opportunities that prepare students
                for life beyond the classroom.
              </p>

              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 text-[var(--color-gold)]"
              >
                Explore Programs
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* DARE RISE IMPACT */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Our Philosophy
            </span>

            <h2 className="mt-4 font-serif  text-charcoal text-4xl md:text-6xl">
              Dare • Rise • Impact
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
              Every meaningful journey begins with the courage
              to take the first step. Growth follows through
              learning and responsibility. Impact emerges when
              knowledge, wisdom, and purpose are placed in
              service of something greater than oneself.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 p-8">
              <h3 className="font-serif text-3xl text-[var(--color-gold)]">
                Dare
              </h3>

              <p className="mt-4 text-white/70">
                Step beyond comfort,
                question assumptions,
                and find the courage
                to participate.
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="font-serif text-3xl text-[var(--color-gold)]">
                Rise
              </h3>

              <p className="mt-4 text-white/70">
                Commit to continuous growth,
                deeper understanding,
                and responsible leadership.
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="font-serif text-3xl text-[var(--color-gold)]">
                Impact
              </h3>

              <p className="mt-4 text-white/70">
                Use your knowledge,
                character, and passion
                to create meaningful change.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl text-xl leading-9 text-white/85">
              SMJMUN is not about producing better delegates.
              It is about developing individuals who think
              deeply, act responsibly, and leave a positive
              impact wherever they go.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/conferences"
                className="bg-gold px-8 py-4 font-medium text-white transition hover:opacity-90"
              >
                Explore Conferences
              </Link>

              <Link
                href="/programs"
                className="border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-black"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}