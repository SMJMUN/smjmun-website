import type { ProgramData } from "@/components/program/types";

export const schoolMunProgram: ProgramData = {
  slug: "school-mun-association",

  meta: {
    title: "School Association Program — SMJMUN",
    description:
      "Bringing international-standard MUN experiences to your campus. A complete 5-day learning experience with delegate training and a professionally managed conference.",
  },

  hero: {
    badge: "School Association Program",
    heading: "Bringing International-Standard MUN Experiences to Your Campus.",
    description:
      "A comprehensive educational initiative designed to help schools provide students with a world-class Model United Nations experience — without the complexities of organising and managing an event independently.",
    videoSrc: "/conf-hero-vid.mp4",
    imageSrc: "/images/program-image-2.png",
    primaryCTA: {
      label: "Partner With Us",
      href: "/partnerships",
    },
    secondaryCTA: {
      label: "Learn More",
      href: "#introduction",
    },
  },

  intro: {
    label: "Our Philosophy",
    heading:
      "MUN Teaches You How to Speak. SMJMUN Exists to Give You Something Worth Saying.",
    body: "The SMJMUN School Association Program is a comprehensive educational initiative designed to help schools provide their students with a world-class Model United Nations experience without the complexities of organising and managing an event independently. Through a structured five-day experience comprising professional delegate training and a fully managed conference, students develop communication skills, leadership qualities, research capabilities, confidence, teamwork, and critical thinking abilities that extend far beyond the classroom.\n\nAt SMJMUN, we believe education should not simply prepare students for examinations — it should prepare them for life. As our philosophy states: MUN teaches you how to speak. SMJMUN exists to give you something worth saying.",
  },

  sections: [
    {
      title: "Phase I — Delegate Preparation",
      description:
        "Before entering committee sessions, students undergo two days of focused training designed to build confidence and familiarity with Model United Nations. Day 1 covers the foundations — Introduction to MUN, understanding committees and agendas, rules of procedure, research methodology, country portfolio preparation, position paper guidance, and conference readiness. Day 2 focuses on communication — public speaking fundamentals, committee flow and delegate strategy, motions and procedures, negotiation and lobbying, resolution drafting, and confidence building exercises.",
      image: "/images/student-training.jpeg",
      imageAlt: "Delegate training workshop in progress",
      badge: "2-Day Training",
      caption: "Structured preparation before the main conference.",
    },
    {
      title: "Phase II — Main Conference",
      description:
        "Students participate in a professionally organised Model United Nations conference conducted exclusively for their institution. The conference replicates the experience of leading international conferences while remaining accessible and engaging for school students. The experience includes committee sessions, structured debate, negotiation and collaboration, resolution drafting, leadership opportunities, opening and closing ceremonies, and an awards and recognition ceremony.",
      image: "/images/program-image-1.png",
      imageAlt: "SMJMUN conference in session",
      badge: "3-Day Conference",
      caption: "A complete international-standard conference experience.",
    },
    {
      title: "Conference Management & Advisory",
      description:
        "Already planning your own Model United Nations conference? Our team can support your institution through complete conference management and advisory services — including registration management, committee design, executive board support, delegate handling, conference operations, awards management, and on-ground execution. Whether you require full management or strategic guidance, SMJMUN can help deliver a professional and impactful conference experience.",
      image: "/images/ceremony-2.png",
      imageAlt: "Conference management team in action",
      badge: "Advisory Services",
      cta: {
        label: "Request a Consultation",
        href: "/partnerships",
      },
    },
  ],

  timeline: {
    label: "A Complete 5-Day Experience",
    title: "From Preparation to Conference",
    subtitle:
      "A structured learning journey that takes students from first introduction to confident participation.",
    steps: [
      {
        number: "01",
        title: "Foundations of MUN",
        description:
          "Introduction to Model United Nations, committees, agendas, rules of procedure, research methodology, and position paper preparation.",
      },
      {
        number: "02",
        title: "Communication & Participation",
        description:
          "Public speaking, committee strategy, motions and procedures, negotiation, lobbying, resolution drafting, and confidence building.",
      },
      {
        number: "03",
        title: "Conference Day 1",
        description:
          "Opening ceremony, committee sessions begin, structured debate, and initial negotiations between delegations.",
      },
      {
        number: "04",
        title: "Conference Day 2",
        description:
          "Advanced committee sessions, resolution drafting, collaboration across blocs, and leadership opportunities.",
      },
      {
        number: "05",
        title: "Conference Day 3",
        description:
          "Final sessions, voting procedures, closing ceremony, and awards and recognition ceremony.",
      },
    ],
  },

  benefits: {
    label: "What We Provide",
    title: "Everything Your School Needs",
    subtitle:
      "From planning to execution, every aspect of the conference is managed by the SMJMUN team.",
    items: [
      {
        icon: "Users",
        title: "Delegate Training",
        description:
          "Two days of structured preparation covering MUN fundamentals, research, public speaking, and committee strategy.",
      },
      {
        icon: "Award",
        title: "Executive Board Members",
        description:
          "Experienced chairs and vice-chairs who lead committee sessions with professionalism and fairness.",
      },
      {
        icon: "BookOpen",
        title: "Study Guides & Documentation",
        description:
          "Committee and agenda design, comprehensive study guides, delegate kits, ID cards, and placards.",
      },
      {
        icon: "GraduationCap",
        title: "Certificates & Awards",
        description:
          "Official certificates for all participants, plus awards and trophies recognising outstanding delegates.",
      },
      {
        icon: "Target",
        title: "Complete Operations",
        description:
          "Opening and closing ceremonies, conference documentation, and full operational management.",
      },
      {
        icon: "Shield",
        title: "End-to-End Execution",
        description:
          "From planning to execution, every aspect of the conference is handled by the SMJMUN team.",
      },
    ],
  },

  stats: [
    { value: 11000, suffix: "+", label: "Delegates Trained" },
    { value: 10, suffix: "+", label: "Partner Schools" },
    { value: 70, suffix: "+", label: "Cities Reached" },
    { value: 5, suffix: "+", label: "Years of Impact" },
  ],

  gallery: {
    label: "Moments",
    title: "Dare. Rise. Impact.",
    subtitle:
      "Dare to participate. Rise through learning. Create meaningful impact.",
    images: [
      {
        src: "/images/smg-hero-7.jpeg",
        alt: "SMJMUN conference opening ceremony",
        aspect: "wide",
      },
      {
        src: "/images/moment-1.jpeg",
        alt: "Student delegates in committee session",
        aspect: "normal",
      },
      {
        src: "/images/student-training-2.jpeg",
        alt: "Delegate training workshop",
        caption: "Building confidence through structured preparation",
        aspect: "tall",
      },
      {
        src: "/images/ceremony-4.png",
        alt: "Award ceremony",
        aspect: "normal",
      },
      {
        src: "/images/community.jpeg",
        alt: "SMJMUN community gathering",
        aspect: "normal",
      },
      {
        src: "/images/moment-1.jpeg",
        alt: "Delegates debating in session",
        caption: "Structured debate on global affairs",
        aspect: "normal",
      },
    ],
  },

  testimonials: {
    label: "Why Schools Choose SMJMUN",
    items: [
      {
        quote:
          "SMJMUN transformed our school's approach to co-curricular education. Students who were once hesitant to speak now lead rooms with confidence. The professionalism and care with which the team operates is genuinely unmatched.",
        name: "Dr. Meera Sharma",
        role: "Principal",
        institution: "Delhi Public School, Indore",
      },
      {
        quote:
          "Working with SMJMUN has been a privilege. They don't just run events — they build culture. Our students look forward to MUN season more than any other school activity.",
        name: "Rajesh Patel",
        role: "Vice Principal",
        institution: "St. Xavier's School, Bhopal",
      },
      {
        quote:
          "The level of detail in their conference execution is extraordinary. From study guides to award ceremonies, every element reflects world-class standards.",
        name: "Anita Desai",
        role: "MUN Faculty Coordinator",
        institution: "Choithram International School",
      },
    ],
  },

  faq: {
    label: "Common Questions",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long is the complete program?",
        answer:
          "The program spans five days — two days of focused delegate preparation followed by a three-day professionally managed conference. The timeline can be adjusted to fit your institution's academic calendar.",
      },
      {
        question: "Do schools need previous MUN experience?",
        answer:
          "Not at all. The program is designed for schools at every stage — whether starting from scratch or looking to enhance an existing MUN culture. Our two-day training ensures every student is conference-ready.",
      },
      {
        question: "How many students can participate?",
        answer:
          "Our programs are flexible. We've worked with groups as small as 30 students and as large as 500+. The program structure adapts to your school's size and ambitions.",
      },
      {
        question: "Are certificates provided to participants?",
        answer:
          "Yes. Every student receives an official SMJMUN certificate upon completion. Outstanding delegates are also recognised with awards and trophies.",
      },
      {
        question: "Can the conference theme be customised?",
        answer:
          "Absolutely. We work with your school to select committees and agendas that align with your curriculum goals, student interests, and institutional values. Every conference is bespoke.",
      },
    ],
  },

  related: [
    {
      title: "College & University Programme",
      slug: "college-mun-association",
      image: "/images/hero-2.png",
      description:
        "Transforming students into confident communicators, thinkers, and leaders through experiential learning.",
    },
    {
      title: "Training Programmes",
      slug: "training-cell",
      image: "/images/student-training.jpeg",
      description:
        "Structured delegate preparation and executive board development for institutions and students.",
    },
    {
      title: "Partnership Programme",
      slug: "partnership-program",
      image: "/images/partnerships-image.png",
      description:
        "Strategic institutional partnerships for long-term MUN ecosystem development.",
    },
  ],

  cta: {
    heading: "Ready to Bring SMJMUN to Your School?",
    description:
      "Join over 150 institutions that have partnered with us to create transformative educational experiences. Dare to participate. Rise through learning. Create meaningful impact.",
    primaryCTA: {
      label: "Become a Partner",
      href: "/partnerships",
    },
    secondaryCTA: {
      label: "Contact Us",
      href: "/partnerships#contact",
    },
    backgroundImage: "/images/hero-1.png",
  },
};
