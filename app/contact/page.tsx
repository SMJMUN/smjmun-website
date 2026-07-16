import {
  Phone,
  Mail,
  MessageCircle,
  GraduationCap,
  School,
  Users,
  Briefcase,
  UserCheck,
  Building2,
} from 'lucide-react';
import { FadeIn } from '@/components/program/shared/FadeIn';
import { ContactCard, FaqList, AudienceLink, HeroWhatsAppCTA, StatItem } from './ContactInteractive';

// ─── Contact details — edit these ────────────────────────────────────────────
const PHONE_NUMBER = '+91 93024 70974';
const PHONE_DISPLAY = '+91 93024 70974';
const EMAIL = 'info@smjmun.com';
const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, '');

function waLink(message: string) {
  return `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_URL = waLink('Hello SMJMUN! I would like to know more about your programs and conferences.');
const CALL_URL = `tel:${PHONE_NUMBER}`;
const MAIL_URL = `mailto:${EMAIL}`;

const BODY_FONT = { fontFamily: 'var(--font-body), system-ui, sans-serif' };
const GOLD = '#BB8B57';

// ─── "I am a..." quick paths ──────────────────────────────────────────────────
const AUDIENCES = [
  { label: 'Student', icon: <GraduationCap className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm a student and I'd like to know more about registering for a conference." },
  { label: 'Teacher / Faculty', icon: <UserCheck className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm a faculty advisor and I'd like to know more about bringing my students to a conference." },
  { label: 'School', icon: <School className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm reaching out on behalf of a school interested in partnering or attending." },
  { label: 'Delegate', icon: <Users className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm a delegate and I have a question about an upcoming conference." },
  { label: 'Executive Board', icon: <Briefcase className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm interested in applying for an Executive Board position." },
  { label: 'Sponsor / Partner', icon: <Building2 className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />, message: "Hi SMJMUN, I'm interested in exploring a sponsorship or partnership opportunity." },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'How do I register for a conference?',
    a: 'Registration opens on our Conferences page for each upcoming session. Select your conference, choose your delegate type, and complete the registration form. You\u2019ll receive a confirmation email within 24 hours.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, net banking, major debit/credit cards, and bank transfers for school or group registrations. Payment links are shared after your registration is confirmed.',
  },
  {
    q: 'Do you offer group rates for schools?',
    a: 'Yes. Schools registering five or more delegates receive discounted group pricing along with a dedicated coordinator. Reach out via email or WhatsApp with your delegate count for a custom quote.',
  },
  {
    q: 'How are committees and country allocations decided?',
    a: 'Allocations are based on registration order, prior experience, and preference forms submitted after registration. The Secretariat finalizes and shares allocations two to three weeks before the conference.',
  },
  {
    q: 'Is accommodation arranged for outstation delegates?',
    a: 'For select conferences, we partner with nearby hotels to offer discounted accommodation packages. Details are shared in your confirmation email if applicable to your conference.',
  },
  {
    q: 'When are certificates issued?',
    a: 'Certificates of participation and awards are issued digitally within two to three weeks of the conference closing ceremony, sent to the email used during registration.',
  },
];

// ─── Trust indicators ─────────────────────────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Conferences Hosted' },
  { value: '5,000+', label: 'Delegates Represented' },
  { value: '100+', label: 'Partner Institutions' },
  { value: '15+', label: 'Countries Reached' },
];

// ─── Section label ────────────────────────────────────────────────────────────
function Eyebrow({ children, color = GOLD }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-[0.28em]"
      style={{ color, ...BODY_FONT }}
    >
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient background system */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #BB8B57 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #6e8ef7 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-36">
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <FadeIn direction="up" delay={0.0}>
            <Eyebrow>Contact</Eyebrow>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h1
              className="font-serif text-white leading-[0.98] tracking-tight mt-8 mb-10"
              style={{ fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 700 }}
            >
              Let&apos;s start
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #BB8B57 0%, #e8b97a 50%, #BB8B57 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                a conversation.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.18}>
            <p
              className="text-[#8A8A8A] max-w-lg mx-auto leading-relaxed"
              style={{ ...BODY_FONT, fontSize: '17px' }}
            >
              Whether you&apos;re a student, school, university, delegate, or partner &mdash;
              our Secretariat is ready to help.
            </p>
          </FadeIn>

          <FadeIn direction="none" delay={0.35}>
            <div
              className="mx-auto mt-14 origin-center"
              style={{ width: '60px', height: '1px', backgroundColor: GOLD }}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── General Enquiries — editorial info block ─────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-px w-full bg-white/[0.08] mb-12" />
            <Eyebrow>General Enquiries</Eyebrow>
            <a
              href={MAIL_URL}
              className="block font-serif text-white font-semibold mt-5 mb-12 hover:text-[#e8b97a] transition-colors duration-300"
              style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              {EMAIL}
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 max-w-xl mx-auto">
              <div>
                <Eyebrow color="#7A7A7A">Available</Eyebrow>
                <p className="text-white mt-3" style={{ fontSize: '17px', ...BODY_FONT }}>
                  Monday &mdash; Saturday
                  <br />
                  10:00 AM &mdash; 6:00 PM IST
                </p>
              </div>
              <div>
                <Eyebrow color="#7A7A7A">Average Response</Eyebrow>
                <p className="text-white mt-3" style={{ fontSize: '17px', ...BODY_FONT }}>
                  Within 24 hours
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-white/[0.08] mt-12" />
          </div>
        </FadeIn>
      </section>

      {/* ── Contact Cards ─────────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            href={WHATSAPP_URL}
            icon={<MessageCircle className="w-6 h-6" strokeWidth={1.6} />}
            label="WhatsApp"
            value={PHONE_DISPLAY}
            cta="Open chat"
            note="Typically replies within 15 minutes"
            accent="#25D366"
            delay={0}
          />
          <ContactCard
            href={CALL_URL}
            icon={<Phone className="w-6 h-6" strokeWidth={1.6} />}
            label="Call Us"
            value={PHONE_DISPLAY}
            cta="Call now"
            note="Mon &mdash; Sat, 10 AM to 6 PM IST"
            accent={GOLD}
            delay={0.1}
          />
          <ContactCard
            href={MAIL_URL}
            icon={<Mail className="w-6 h-6" strokeWidth={1.6} />}
            label="Email"
            value={EMAIL}
            cta="Send email"
            note="Comprehensive reply within 24 hours"
            accent="#6e8ef7"
            delay={0.2}
          />
        </div>
      </section>

      {/* ── "I am a..." quick paths ──────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-14">
              <Eyebrow>I Am A...</Eyebrow>
              <h2 className="font-serif text-white font-bold mt-4" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>
                Tell us who you are
              </h2>
              <p className="text-[#7A7A7A] mt-3 max-w-md mx-auto" style={{ ...BODY_FONT, fontSize: '15px' }}>
                We&apos;ll open WhatsApp with a message already tailored to you.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AUDIENCES.map((a, i) => (
              <AudienceLink
                key={a.label}
                href={waLink(a.message)}
                label={a.label}
                icon={a.icon}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── WhatsApp Hero CTA ─────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <HeroWhatsAppCTA href={WHATSAPP_URL} />
        </div>
      </section>

      {/* ── Trust Indicators ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="h-px w-full bg-white/[0.08] mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((s, i) => (
              <StatItem
                key={s.label}
                value={s.value}
                label={s.label}
                delay={i * 0.08}
              />
            ))}
          </div>
          <div className="h-px w-full bg-white/[0.08] mt-14" />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="pb-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-14">
              <Eyebrow>Frequently Asked</Eyebrow>
              <h2 className="font-serif text-white font-bold mt-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                Questions, answered.
              </h2>
            </div>
          </FadeIn>

          <FaqList faqs={FAQS} />
        </div>
      </section>

      {/* ── Footer divider ─────────────────────────────────────────────────── */}
      <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
    </main>
  );
}