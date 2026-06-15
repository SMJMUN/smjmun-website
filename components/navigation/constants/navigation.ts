export type NavigationItemType = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export const MAIN_NAVIGATION: NavigationItemType[] = [
  { label: 'Home', href: '/' },
  // Conferences and Programs are dropdowns, handled separately in the UI, but here are their base paths
  { label: 'Conferences', href: '/conferences' },
  { label: 'Programs', href: '/programs' }, // The route itself might not exist, but it's a structural item
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const CALL_TO_ACTION = {
  label: 'Register Now',
  href: '/register',
};

// Data for the Conferences Mega Menu
export const CONFERENCES_DATA = {
  featured: {
    title: 'SMJ MUN Global Summit 2026',
    venue: 'United Nations Headquarters, New York',
    date: 'August 14 - 17, 2026',
    registrationStatus: 'Registration Open',
    href: '/conferences/smj-mun-global-summit-2026',
    image: '/images/hero-1.png', // Fallback to an existing image
  },
  links: [
    { label: 'All Conferences', href: '/conferences' },
    // If we had sub-routes we'd add them here, but we only have /conferences
  ]
};

// Data for the Programs Mega Menu
export const PROGRAMS_MENU = {
  associations: [
    {
      title: "School MUN Association",
      href: "/programs/school-mun-association"
    },
    {
      title: "College MUN Association",
      href: "/programs/college-mun-association"
    }
  ],
  development: [
    {
      title: "Executive Board Program",
      href: "/programs/executive-board"
    },
    {
      title: "Delegate Training Program",
      href: "/programs/delegate-training"
    },
    {
      title: "Training Cell",
      href: "/programs/training-cell"
    },
    {
      title: "Public Speaking & Diplomacy",
      href: "/programs/public-speaking"
    }
  ],
  partnerships: [
    {
      title: "Partnership Program",
      href: "/partnerships"
    },
    {
      title: "Institution Services",
      href: "/programs/institution-services"
    }
  ]
};
