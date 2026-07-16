import type { ProgramData } from "@/components/program/types";

export const trainingCellProgram: ProgramData = {
  slug: "training-cell",

  meta: {
    title: "Training Programmes — SMJMUN",
    description:
      "Building exceptional delegates and future committee leaders through structured delegate preparation and executive board development programmes.",
  },

  hero: {
    badge: "Training Programmes",
    heading: "Building Exceptional Delegates and Future Committee Leaders.",
    description:
      "Structured preparation for institutions and students seeking to excel in Model United Nations — whether preparing first-time delegates or developing future Executive Board members.",
    imageSrc: "/images/student-training.jpeg",
    primaryCTA: {
      label: "Request Training",
      href: "/partnerships",
    },
    secondaryCTA: {
      label: "Explore Programs",
      href: "#introduction",
    },
  },

  intro: {
    label: "The SMJMUN Difference",
    heading:
      "Communication Must Be Supported by Knowledge. Leadership Must Be Guided by Responsibility. Confidence Must Be Rooted in Character.",
    body: "SMJMUN's training programmes are designed for institutions and students seeking structured preparation before participating in Model United Nations conferences. Whether preparing first-time delegates or developing future Executive Board members, our programmes provide practical knowledge, confidence, and leadership development through expert-led sessions. All training programmes are conducted by experienced MUN professionals and may be delivered independently or alongside conference partnerships.\n\nAt SMJMUN, training extends beyond procedures and technical knowledge. We believe that the world is not handed to you complete — it is handed to you in progress. Our role is to help students develop the skills, perspective, and confidence required to contribute meaningfully to that world.",
  },

  sections: [
    {
      title: "Delegate Excellence Program",
      description:
        "Designed for students preparing to participate in Model United Nations conferences. Whether your institution is attending an external conference or simply wishes to provide MUN training, this program equips participants with the knowledge and confidence required to excel. Day 1 covers foundations — Introduction to MUN, committees and agendas, rules of procedure, research techniques, country portfolio preparation, position paper guidance, and conference readiness. Day 2 focuses on public speaking fundamentals, committee flow, motions and procedures, negotiation, lobbying, resolution drafting, delegate strategy, and effective participation techniques.",
      image: "/images/student-training.jpeg",
      imageAlt: "Delegate Excellence Program training session",
      badge: "2-Day Program · 3 Hours Per Day",
      caption: "By the conclusion, students are equipped to participate confidently in committee sessions.",
    },
    {
      title: "Executive Board Development Program",
      description:
        "Designed for experienced delegates aspiring to serve as Chairs, Vice-Chairs, Moderators, Rapporteurs, and committee leaders. Day 1 covers Executive Board fundamentals — understanding roles, committee management, rules of procedure from the Chair's perspective, delegate evaluation systems, and professional conduct and neutrality. Day 2 focuses on leadership — moderating effective debate, committee flow management, crisis handling, delegate engagement, award selection methodology, conference ethics, and leadership best practices.",
      image: "/images/hero-3.png",
      imageAlt: "Executive Board Development training",
      badge: "2-Day Program · 3 Hours Per Day",
      caption: "Participants gain practical insight into conference administration and committee leadership.",
    },
    {
      title: "Flexible Training Options",
      description:
        "Institutions may choose from multiple formats tailored to their specific needs — the Delegate Excellence Programme, Executive Board Development Programme, combined training programmes, customised institutional workshops, and online or offline delivery options. Whether you need a single focused session or a comprehensive multi-day programme, SMJMUN adapts to your institution's requirements, schedule, and student demographics.",
      image: "/images/SHCOOL-PHOTO.webp",
      imageAlt: "Customised training workshop",
      badge: "Custom Programs",
      cta: {
        label: "Discuss Your Requirements",
        href: "/partnerships",
      },
    },
  ],

  timeline: {
    label: "Delegate Excellence Programme",
    title: "Learn How to Participate with Confidence",
    subtitle:
      "A two-day structured programme covering everything a delegate needs to know.",
    steps: [
      {
        number: "01",
        title: "Introduction to MUN",
        description:
          "Understanding Model United Nations, committees, agendas, and the role of a delegate in international discourse.",
      },
      {
        number: "02",
        title: "Research & Preparation",
        description:
          "Rules of procedure, research techniques, country portfolio preparation, position paper guidance, and conference readiness.",
      },
      {
        number: "03",
        title: "Public Speaking",
        description:
          "Public speaking fundamentals, committee flow, motions, procedures, and building confidence in formal settings.",
      },
      {
        number: "04",
        title: "Negotiation & Strategy",
        description:
          "Negotiation and lobbying techniques, delegate strategy, resolution drafting, and effective participation.",
      },
      {
        number: "05",
        title: "Conference Ready",
        description:
          "Comprehensive review, mock sessions, and final preparation to ensure every delegate is fully equipped.",
      },
    ],
  },

  benefits: {
    label: "What Students Learn",
    title: "Skills That Last a Lifetime",
    subtitle:
      "Our training programmes build capabilities that extend far beyond Model United Nations.",
    items: [
      {
        icon: "Mic2",
        title: "Public Speaking",
        description:
          "Students develop confidence, clarity, and the ability to articulate complex ideas before audiences of any size.",
      },
      {
        icon: "Globe",
        title: "Global Awareness",
        description:
          "Delegates engage with real-world issues — climate, geopolitics, human rights — developing informed perspectives.",
      },
      {
        icon: "Users",
        title: "Leadership & Teamwork",
        description:
          "From committee chairs to bloc leaders, students learn to lead, collaborate, and make decisions under pressure.",
      },
      {
        icon: "BookOpen",
        title: "Research & Analysis",
        description:
          "Structured research methodology, policy analysis, and the ability to form evidence-based positions.",
      },
      {
        icon: "Handshake",
        title: "Negotiation",
        description:
          "Practical experience in diplomatic negotiation, lobbying, consensus-building, and conflict resolution.",
      },
      {
        icon: "GraduationCap",
        title: "Professional Communication",
        description:
          "Formal communication skills that translate directly to academic presentations, interviews, and careers.",
      },
    ],
  },

  stats: [
    { value: 11000, suffix: "+", label: "Delegates Trained" },
    { value: 200, suffix: "+", label: "Training Sessions" },
    { value: 10, suffix: "+", label: "Institutions" },
    { value: 40, suffix: "+", label: "Cities" },
  ],

  gallery: {
    label: "Moments",
    title: "Dare. Rise. Impact.",
    subtitle:
      "Dare to participate. Rise through learning. Create meaningful impact.",
    images: [
      {
        src: "/images/student-training.jpeg",
        alt: "SMJMUN training session",
        aspect: "wide",
      },
      {
        src: "/images/SHCOOL-PHOTO-1.webp",
        alt: "Delegates in practice session",
        aspect: "normal",
      },
      {
        src: "/images/student-training-2.jpeg",
        alt: "Workshop exercise",
        caption: "Practical exercises build lasting confidence",
        aspect: "tall",
      },
      {
        src: "/images/hero-1.webp",
        alt: "Conference preparation",
        aspect: "normal",
      },
      {
        src: "/images/community.webp",
        alt: "SMJMUN training community",
        aspect: "normal",
      },
      {
        src: "/images/moment-1.jpeg",
        alt: "Mock committee session",
        aspect: "normal",
      },
    ],
  },

  faq: {
    label: "Common Questions",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can training be provided without a conference partnership?",
        answer:
          "Yes. All training programs may be delivered independently. Institutions preparing students for external conferences or simply seeking MUN training can avail our programs without any conference commitment.",
      },
      {
        question: "What is the difference between the two programs?",
        answer:
          "The Delegate Excellence Program prepares students to participate as delegates in committee sessions. The Executive Board Development Program trains experienced delegates to serve as chairs, vice-chairs, and committee leaders.",
      },
      {
        question: "Can training be delivered online?",
        answer:
          "Yes. We offer both online and offline delivery options. The format is adapted to maintain engagement and effectiveness regardless of the medium.",
      },
      {
        question: "How many students can participate in a single session?",
        answer:
          "Our training sessions accommodate groups of all sizes — from intimate workshops of 20 students to large cohorts of 300+. The methodology adapts accordingly.",
      },
      {
        question: "Can the program be customised for our institution?",
        answer:
          "Absolutely. We offer customised institutional workshops tailored to your specific goals, student experience levels, and scheduling requirements.",
      },
    ],
  },

  related: [
    {
      title: "School Association Programme",
      slug: "school-mun-association",
      image: "/images/hero-1.webp",
      description:
        "Bringing international-standard MUN experiences to school campuses across India.",
    },
    {
      title: "College & University Programme",
      slug: "college-mun-association",
      image: "/images/hero-2.png",
      description:
        "Transforming students into confident communicators, thinkers, and leaders.",
    },
    {
      title: "Partnership Programme",
      slug: "partnership-program",
      image: "/images/partnerships-image.webp",
      description:
        "Strategic institutional partnerships for long-term MUN ecosystem development.",
    },
  ],

  cta: {
    heading: "Ready to Train Your Students?",
    description:
      "The world is not handed to you complete. It is handed to you in progress. Our role is to help students develop the skills, perspective, and confidence required to contribute meaningfully.",
    primaryCTA: {
      label: "Request Training",
      href: "/partnerships",
    },
    secondaryCTA: {
      label: "Contact Us",
      href: "/partnerships#contact",
    },
    backgroundImage: "/images/student-training-2.jpeg",
  },
};
