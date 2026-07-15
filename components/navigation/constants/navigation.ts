export type NavigationItemType = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export const MAIN_NAVIGATION: NavigationItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // Conferences and Programs are dropdowns, handled separately in the UI, but here are their base paths
  { label: 'Conferences', href: '/conferences' },
  { label: 'Programs', href: '/programs' }, // The route itself might not exist, but it's a structural item
  // { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  // Contact is rendered as the headphone icon button in the header actions area
];


export const CALL_TO_ACTION = {
  label: 'Register Now',
  href: '/register',
};

// Data for the Conferences Mega Menu
export const CONFERENCES_DATA = {
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
    // {
    //   title: "Executive Board Program",
    //   href: "/programs/executive-board"
    // },
    {
      title: "Delegate Training Program",
      href: "/programs/training-cell"
    },
   
    {
      title: "Public Speaking & Diplomacy",
      href: "/programs/training-cell"
      
    }
  ],
  partnerships: [
    {
      title: "Partnership Program",
      href: "/partnerships"
    },
    // {
    //   title: "Institution Services",
    //   href: "/programs/institution-services"
    // }
  ]
};
