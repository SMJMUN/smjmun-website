    import Image from "next/image";
import TrustSection from "../components/TrustSection";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

    export default function PartnershipsPage() {
      return (
       <main className="!bg-[#f8f8f8] !text-black">

  {/* HERO */}
  <section className="!relative !h-[75vh] !overflow-hidden">
    <div className="!absolute !inset-0">
      <Image
        src="/images/partnerships-image.png"
        alt="SMJ MUN Partnerships"
        fill
        className="!object-cover" 
      />
      <div className="!absolute !inset-0 !bg-black/65" />
    </div>

    <div className="!relative !z-10 !max-w-7xl !mx-auto !h-full !px-8 !flex !items-center">
      <div className="!max-w-3xl">
        <p className="!uppercase !tracking-[0.25em] !text-[#bb8b57] !text-sm !mb-6">
          Partnerships & Collaborations
        </p>

        <h1 className="!font-serif !text-white !text-6xl md:!text-8xl !leading-[0.95] !mb-8">
          Building Long-Term Educational Partnerships.
        </h1>

        <p className="!text-white/80 !text-lg !max-w-xl !mb-10">
          We collaborate with schools, colleges and educational
          organisations to create meaningful leadership experiences.
        </p>

        <button className="!bg-[#83090e] !text-white !px-8 !py-4 !uppercase !tracking-wider !text-sm">
          Request Consultation
        </button>
      </div>
    </div>
  </section>
        <TrustSection />

  {/* EDITORIAL STATEMENT */}
<section className="!relative !py-48 !overflow-hidden !bg-[#f8f8f8]">

  {/* LEFT FLORAL */}
  <img
    src="/images/floral-left.svg"
    alt=""
    aria-hidden="true"
    className="
      !absolute
      !left-0
      !top-1/2
      -translate-y-1/2
      !w-[240px]
      !opacity-[0.08]
      !pointer-events-none
      !select-none
    "
  />

  {/* RIGHT FLORAL */}
  <img
    src="/images/floral-right.svg"
    alt=""
    aria-hidden="true"
    className="
      !absolute
      !right-0
      !top-1/2
      -translate-y-1/2
      !w-[240px]
      !opacity-[0.08]
      !pointer-events-none
      !select-none
    "
  />

  <div className="!relative !z-10 !max-w-6xl !mx-auto !px-8">

    {/* Gold Label */}
    <div className="!text-center !mb-12">
      <p
        className="
          !uppercase
          !tracking-[0.35em]
          !text-[#bb8b57]
          !text-sm
        "
      >
        A Shared Vision
      </p>
    </div>

    {/* Main Statement */}
    <div className="!text-center">

      <h2
        className="
          !font-serif
          !text-3xl
          md:!text-5xl
          xl:!text-7xl
          !leading-[1.05]
          !max-w-5xl
          !mx-auto
          !mb-12
        "
      >
        We Partner With Institutions
        To Create Meaningful Leadership
        Experiences That Last A Lifetime.
      </h2>

      {/* Gold Divider */}
      <div
        className="
          !w-24
          !h-px
          !bg-[#bb8b57]
          !mx-auto
          !mb-12
        "
      />

      <p
        className="
          !max-w-3xl
          !mx-auto
          !text-xl
          !leading-relaxed
          !text-black/70
        "
      >
        Our partnerships are built on trust,
        shared values and a vision for holistic
        student development. Together, we nurture
        confident communicators, compassionate
        leaders and globally minded changemakers.
      </p>

    </div>

  </div>

</section>

  {/* PARTNERSHIP MODELS */}
  <section className="!pb-40">
    <div className="!space-y-16">

  {/* 01 */}
  <div className="!border-t !pt-10 !px-4 !grid md:!grid-cols-[120px_1fr_500px] !gap-12 !items-start">
    <span className="!text-[#bb8b57] !text-4xl !font-serif">01</span>

    <div className="!border-l !border-black/10 !pl-10">
      <h3 className="!font-serif !text-4xl !mb-4">
        School Partnerships
      </h3>
 
      <p className="!max-w-xl  !text-black/70 !leading-relaxed">
        End-to-end Model UN ecosystem development for schools including
        MUN associations, delegate training, annual programs and faculty support.
      </p>
      
      <Link
                href="/partnerships/school-partnerships"
                className="
    group!
    inline-flex items-center gap-2!
    border border-white/30!
    px-5! py-3!
    text-white!
    bg-black! 
    mt-2!
    uppercase!
    tracking-[0.15em]!
    text-xs!
    hover:bg-[#83090e]!
    hover:text-black!
    transition-all!
  "
              >
                learn more

                <ArrowRight
                  size={18}
                  className=" 
    transition-transform!
    duration-300!
    ease-out!
    group-hover:translate-x-1.5!
  "
                />
              </Link>
    </div>

    <div className="!h-[240px]  !overflow-hidden">
      <img
        src="/images/hero-1.png"
        alt=""
        className="!w-full !h-full !object-cover"
      />
    </div>
  </div>

  {/* 02 */}
  <div className="!border-t !px-4 !pt-10 !grid md:!grid-cols-[120px_500px_1fr] !gap-12   !items-start">
    <span className="!text-[#bb8b57] !text-4xl !font-serif">02</span>

    <div className="!h-[240px] !overflow-hidden">
      <img
        src="/images/founder-2.jpeg"
        alt=""
        className="!w-full !h-full !object-cover"
      />
    </div>

    <div className="!border-l !border-black/10 !pl-10">
      <h3 className="!font-serif !text-4xl !mb-4">
        College Partnerships
      </h3>

      <p className="!max-w-xl !text-black/70 !leading-relaxed">
        Building thriving MUN ecosystems through society development,
        conference consulting and executive board mentoring.
      </p>
      
      <Link
                href="/partnerships/college-partnerships"
                className="
    group!
    inline-flex items-center gap-2!
    border border-white/30!
    px-5! py-3!
    text-white!
    bg-black! 
    mt-2!
    uppercase!
    tracking-[0.15em]!
    text-xs!
    hover:bg-[#83090e]!
    hover:text-black!
    transition-all!
  "
              >
                learn more

                <ArrowRight
                  size={18}
                  className=" 
    transition-transform!
    duration-300!
    ease-out!
    group-hover:translate-x-1.5!
  "
                />
              </Link>
    </div>
  </div>

  {/* 03 */}
  <div className="!border-t !px-4 !pt-10 !grid md:!grid-cols-[120px_1fr_500px] !gap-12 !items-start">
    <span className="!text-[#bb8b57] !text-4xl !font-serif">03</span>

    <div className="!border-l !border-black/10 !pl-10">
      <h3 className="!font-serif !text-4xl !mb-4">
        Educational Organisations
      </h3>

      <p className="!max-w-xl !text-black/70 !leading-relaxed">
        Collaborating with NGOs, institutions and educational bodies
        to create impactful diplomacy and leadership initiatives.
      </p>
      <Link
                href="/partnerships/educational-organisations"
                className="
    group!
    inline-flex items-center gap-2!
    border border-white/30!
    px-5! py-3!
    text-white!
    bg-black! 
    mt-2!
    uppercase!
    tracking-[0.15em]!
    text-xs!
    hover:bg-[#83090e]!
    hover:text-black!
    transition-all!
  "
              >
                learn more

                <ArrowRight
                  size={18}
                  className=" 
    transition-transform!
    duration-300!
    ease-out!
    group-hover:translate-x-1.5!
  "
                />
              </Link>
    </div>

    <div className="!h-[240px] !overflow-hidden">
      <img
        src="/images/hero-3.png"
        alt=""
        className="!w-full !h-full !object-cover"
      />
    </div>
  </div>

  {/* 04 */}
  <div className="!border-t !px-4 !border-b !pb-10 !pt-10 !grid md:!grid-cols-[120px_500px_1fr] !gap-12 !items-start">
    <span className="!text-[#bb8b57] !text-4xl !font-serif">04</span>

    <div className="!h-[240px] !overflow-hidden">
      <img
        src="/images/strategic-partner.png "
        alt=""
        className="!w-full !h-full !object-cover"
      />
    </div>

    <div className="!border-l !border-black/10 !pl-10">
      <h3 className="!font-serif !text-4xl !mb-4">
        Strategic Sponsors
      </h3>

      <p className="!max-w-xl !text-black/70 !leading-relaxed">
        Align your organisation with future leaders through meaningful
        educational initiatives, conferences and long-term partnerships.
      </p>
      <Link
                href="/partnerships/strategic-sponsors"
                className="
    group!
    inline-flex items-center gap-2!
    border border-white/30!
    px-5! py-3!
    text-white!
    bg-black! 
    mt-2!
    uppercase!
    tracking-[0.15em]!
    text-xs!
    hover:bg-[#83090e]!
    hover:text-black!
    transition-all!
  "
              >
                learn more

                <ArrowRight
                  size={18}
                  className=" 
    transition-transform!
    duration-300!
    ease-out!
    group-hover:translate-x-1.5!
  "
                />
              </Link>
    </div>
  </div>

</div>
  </section>

  {/* PROCESS */}
  <section className="!bg-[#f8f8f8] !py-40">
  <div className="!max-w-7xl !mx-auto">

    {/* Header */}
    <div className="!text-center !mb-20">

      <p
        className="
          !uppercase
          !tracking-[0.3em]
          !text-[#bb8b57]
          !text-sm
          !mb-6
        "
      >
        Our Partnership Process
      </p>

      <h2
        className="
          !font-serif
          !text-5xl
          md:!text-7xl
          !leading-[1]
          !text-[#042147]
          !mb-8
        "
      >
        From First Conversation
        <br />
        to Lasting Impact.
      </h2>

      <div
        className="
          !w-20
          !h-px
          !bg-[#bb8b57]
          !mx-auto
          !mb-8
        "
      />

      <p
        className="
          !max-w-3xl
          !mx-auto
          !text-xl
          !leading-relaxed
          !text-black/65
        "
      >
        We believe meaningful partnerships are built on trust,
        clarity and a shared vision. Our process is designed to
        be collaborative, transparent and focused on creating
        long-term value for your institution.
      </p>

    </div>

    {/* Visual Story Strip */}
    <div
      className="
        !grid
        md:!grid-cols-4
        !overflow-hidden
        !mb-24
      "
    >

      {/* Card 1 */}
      <div className="!relative">

        <img
          src="/images/founder-2.jpeg"
          alt=""
          className="
            !w-full
            !h-[320px]
            !object-cover
          "
        />

        <div
          className="
            !absolute
            !bottom-0
            !left-0
            !right-0
            !bg-[#042147]
            !text-white
            !p-6
          "
        >
          <h4 className="!text-2xl text-white! !font-medium">
            Understanding
            <br />
            Your Goals
          </h4>
        </div>

      </div>

      {/* Card 2 */}
      <div className="!relative">

        <img
          src="/images/hero-1.png"
          alt=""
          className="
            !w-full
            !h-[320px]
            !object-cover
          "
        />

        <div
          className="
            !absolute
            !bottom-0
            !left-0
            !right-0
            !bg-[#042147]
            !text-white
            !p-6
          "
        >
          <h4 className="!text-2xl text-white! !font-medium">
            Designing The
            <br />
            Right Program
          </h4>
        </div>

      </div>

      {/* Card 3 */}
      <div className="!relative">

        <img
          src="/images/SHCOOL-PHOTO-1.png"
          alt=""
          className="
            !w-full
            !h-[320px]
            !object-cover
          "
        />

        <div
          className="
            !absolute
            !bottom-0
            !left-0
            !right-0
            !bg-[#042147]
            !text-white
            !p-6
          "
        >
          <h4 className="!text-2xl  text-white! !font-medium">
            Tailored
            <br />
            Proposal & Plan
          </h4>
        </div>

      </div>

      {/* Card 4 */}
      <div className="!relative">

        <img
          src="/images/hero-3.png"
          alt=""
          className="
            !w-full
            !h-[320px]
            !object-cover
          "
        />

        <div
          className="
            !absolute
            !bottom-0
            !left-0
            !right-0
            !bg-[#042147]
            !text-white
            !p-6
          "
        >
          <h4 className="!text-2xl text-white! !font-medium">
            Launching &
            <br />
            Creating Impact
          </h4>
        </div>

      </div>

    </div>

    {/* Process Timeline */}
    <div
      className="
        !grid
        lg:!grid-cols-4
        !gap-12
      "
    >

      {/* 01 */}
      <div className="!relative">

        <h3
          className="
            !font-serif
            !text-6xl
            !text-[#bb8b57]
            !mb-2
          "
        >
          01
        </h3>

        <h4
          className="
            !font-serif
            !text-4xl
            !text-[#042147]
            !mb-4
          "
        >
          Discussion
        </h4>

        <div
          className="
            !w-10
            !h-px
            !bg-[#bb8b57]
            !mb-6
          "
        />

        <p className="!text-black/70 !leading-relaxed">
          We understand your goals and explore opportunities
          for collaboration.
        </p>

      </div>

      {/* 02 */}
      <div>

        <h3
          className="
            !font-serif
            !text-6xl
            !text-[#bb8b57]
            !mb-2
          "
        >
          02
        </h3>

        <h4
          className="
            !font-serif
            !text-4xl
            !text-[#042147]
            !mb-4
          "
        >
          Consultation
        </h4>

        <div
          className="
            !w-10
            !h-px
            !bg-[#bb8b57]
            !mb-6
          "
        />

        <p className="!text-black/70 !leading-relaxed">
          A detailed consultation to design the right program
          for your institution.
        </p>

      </div>

      {/* 03 */}
      <div>

        <h3
          className="
            !font-serif
            !text-6xl
            !text-[#bb8b57]
            !mb-2
          "
        >
          03
        </h3>

        <h4
          className="
            !font-serif
            !text-4xl
            !text-[#042147]
            !mb-4
          "
        >
          Proposal
        </h4>

        <div
          className="
            !w-10
            !h-px
            !bg-[#bb8b57]
            !mb-6
          "
        />

        <p className="!text-black/70 !leading-relaxed">
          We share a tailored proposal aligned with your
          vision and objectives.
        </p>

      </div>

      {/* 04 */}
      <div>

        <h3
          className="
            !font-serif
            !text-6xl
            !text-[#bb8b57]
            !mb-2
          "
        >
          04
        </h3>

        <h4
          className="
            !font-serif
            !text-4xl
            !text-[#042147]
            !mb-4
          "
        >
          Launch
        </h4>

        <div
          className="
            !w-10
            !h-px
            !bg-[#bb8b57]
            !mb-6
          "
        />

        <p className="!text-black/70 !leading-relaxed">
          We work together to implement programs and create
          lasting impact.
        </p>

      </div>

    </div>

  </div>
</section>  

      {/* 
      
  {/* CTA */}

<section className="!bg-[#83090e] !text-white !py-32">
  <div className="!max-w-7xl !mx-auto !px-8">

    <div className="!grid lg:!grid-cols-[420px_1fr] !gap-20">

      {/* LEFT SIDE */}
      <div>
        <h2
          className="
            !font-serif
            !text-6xl
            md:!text-7xl
            !leading-[0.95]
            !mb-8
          "
        >
          Let's Build
          <br />
          The Future
          <br />
          Together.
        </h2>

        <div
          className="
            !w-20
            !h-[2px]
            !bg-[#bb8b57]
            !mb-8
          "
        />

        <p
          className="
            !text-white/70
            !max-w-sm
            !leading-relaxed
          "
        >
          Fill in your details and our team will connect
          with you to explore partnership opportunities.
        </p>
         <img
        src="/images/smg-mun-logo.png"
        alt=""
        className="h-[30vh] !object-cover"
      />
      </div>

      {/* RIGHT SIDE */}
      <form className="!space-y-5">

        <div className="!grid md:!grid-cols-2 !gap-4">

          <input
            placeholder="Institution Name *"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

          <input
            placeholder="Contact Person *"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

        </div>

        <div className="!grid md:!grid-cols-2 !gap-4">

          <input
            placeholder="Designation *"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

          <input
            placeholder="Email Address *"
            type="email"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

        </div>

        <div className="!grid md:!grid-cols-2 !gap-4">

          <input
            placeholder="Phone Number *"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

          <select
            className="
              !w-full
              !bg-black
              !border
              !border-white/20
              !px-5
              !py-4
            
              !text-white
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          >
            <option>Institution Type</option>
            <option>School</option>
            <option>College</option>
            <option>University</option>
            <option>NGO</option>
            <option>Corporate</option>
          </select>

        </div>

        <div className="!grid md:!grid-cols-2 !gap-4">

          <select
            className="
              !w-full
              
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              focus:!outline-none
              focus:!border-[#bb8b57]
            !bg-black
            "
          >
            <option>Interested In</option>
            <option>School Partnership</option>
            <option>College Partnership</option>
            <option>Sponsorship</option>
          </select>

          <input
            placeholder="Expected Number of Students"
            className="
              !w-full
              !bg-transparent
              !border
              !border-white/20
              !px-5
              !py-4
              !text-white
              placeholder:!text-white/50
              focus:!outline-none
              focus:!border-[#bb8b57]
            "
          />

        </div>

        <textarea
          rows={5}
          placeholder="Message"
          className="
            !w-full
            !bg-transparent
            !border
            !border-white/20
            !px-5
            !py-4
            !text-white
            placeholder:!text-white/50
            focus:!outline-none
            focus:!border-[#bb8b57]
          "
        />

        <button
          className="
            !w-full
            !bg-[#bb8b57]
            !text-white
            !uppercase
            !tracking-[0.2em]
            !py-5
            hover:!opacity-90
            !transition-all
            hover:!bg-black
            
          "
        >
          Request Partnership Discussion →
        </button>

        <p
          className="
            !text-center
            !text-sm
            !text-white/50
          "
        >
          We respect your privacy. Your information will only
          be used to respond to your inquiry.
        </p>

      </form>

    </div>
  </div>
</section>
</main>

      );
  
  }