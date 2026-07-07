// ============================================
// Program Landing Page — Data Interfaces
// Every section is optional so ProgramLanding
// only renders what's present in the data.
// ============================================

/** Call-to-action link */
export interface CTALink {
  label: string;
  href: string;
}

/** Hero section — full viewport with video/image background */
export interface HeroData {
  badge: string;
  heading: string;
  description: string;
  videoSrc?: string;
  imageSrc: string;
  imageAlt?: string;
  primaryCTA?: CTALink;
  secondaryCTA?: CTALink;
}

/** Editorial introduction — large centered paragraph */
export interface EditorialIntroData {
  label?: string;
  heading: string;
  body: string;
}

/** Editorial section — image + content, auto-alternating */
export interface EditorialSectionData {
  title: string;
  description: string;
  caption?: string;
  image: string;
  imageAlt?: string;
  cta?: CTALink;
  badge?: string;
  link?: string;
}

/** Timeline step */
export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

/** Timeline section */
export interface TimelineData {
  label?: string;
  title: string;
  subtitle?: string;
  steps: TimelineStep[];
}

/** Single benefit item */
export interface BenefitItem {
  /** Lucide icon name (e.g. "Award", "Users", "Globe") */
  icon: string;
  title: string;
  description: string;
}

/** Benefits section */
export interface BenefitsData {
  label?: string;
  title: string;
  subtitle?: string;
  items: BenefitItem[];
}

/** Single stat */
export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

/** Gallery image */
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  /** "tall" | "wide" | "normal" — controls masonry span */
  aspect?: "tall" | "wide" | "normal";
}

/** Gallery section */
export interface GalleryData {
  id?:string;
  label?: string;
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

/** Single testimonial */
export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  institution: string;
  logo?: string;
}

/** Testimonials section */
export interface TestimonialsData {
  label?: string;
  title?: string;
  items: TestimonialItem[];
}

/** Single FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQ section */
export interface FAQData {
  label?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

/** Related program card */
export interface RelatedProgramItem {
  title: string;
  slug: string;
  image: string;
  description: string;
}

/** Closing CTA section */
export interface CTAData {
  heading: string;
  description: string;
  primaryCTA: CTALink;
  secondaryCTA?: CTALink;
  backgroundImage?: string;
}

/** Top-level program data — drives the entire page */
export interface ProgramData {
  /** URL slug, e.g. "school-mun-association" */
  slug: string;

  /** SEO metadata */
  meta: {
    title: string;
    description: string;
  };

  /** Required */
  hero: HeroData;

  /** Optional sections — omit to skip rendering */
  intro?: EditorialIntroData;
  sections?: EditorialSectionData[];
  timeline?: TimelineData;
  benefits?: BenefitsData;
  stats?: StatItem[];
  gallery?: GalleryData;
  testimonials?: TestimonialsData;
  faq?: FAQData;
  related?: RelatedProgramItem[];
  cta?: CTAData;
}
