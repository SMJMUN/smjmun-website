'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DesktopDropdown from './DesktopDropdown';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    {
      label: 'About',
      items: [
        'History',
        'Leadership',
        'Newsroom',
        'Events',
        'Contact',
      ],
    },
    {
      label: 'Services',
      items: [
        'School MUN Association Membership',
        'College MUN Association Membership',
        'Full Conference Execution Services',
        'Executive Board Curation',
        'Secretariat Support',
        'Advisory & Consulting',
      ],
    },
    {
      label: 'Conferences',
      items: [
        'SMJ MUN 2026',
        'Committees',
        'Secretariat',
        'Partners',
      ],
    },
    {
      label: 'Programs',
      items: [
        'Workshops',
        'Training',
        'Leadership',
      ],
    },
    {
      label: 'Media',
      items: [
        'Gallery',
        'Press',
        'Videos',
      ],
    },
    {
      label: 'Resources',
      items: [
        'Reports',
        'Documents',
        'Downloads',
      ],
    },
    {
      label: 'Contact',
      items: [
      ],
    },
  ];

  return (
    <>
      <nav
        className={`
fixed top-0 left-0 right-0 z-50
transition-all duration-500
${scrolled
            ? 'py-3 bg-black/85 backdrop-blur-xl'
            : 'py-8 bg-transparent'
          }
`}
      >
        <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
          <div className="flex items-center justify-between">
            {/* LOGO */}

            <motion.a
              href="/"
              className="flex items-center gap-4"
              animate={{
                x: scrolled ? -1 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <motion.img
                src="/images/smg-mun-logo.png"
                alt="logo"
                animate={{
                  width: scrolled ? 56 : 96,
                  height: scrolled ? 56 : 96,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              />


              <AnimatePresence>
                {!scrolled && (
                  <motion.div
                    animate={{
                      opacity: scrolled ? 0 : 1,
                      x: scrolled ? -30 : 0,
                      scale: scrolled ? 0.9 : 1,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <p className="text-[#c9a56d]! text-xs uppercase tracking-[0.2em]">
                      TAS PRESENTS
                    </p>

                    <h2 className="text-white! text-4xl font-serif">
                      SMJ MUN
                    </h2>

                    <p className="text-white/70! text-sm">
                      Shri Seth Mangilalji Sahu
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>

            {/* DESKTOP */}

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    className="
                    text-white/90
                    uppercase
                    tracking-[0.15em]
                    text-[12px]
                    hover:text-white
                    transition
                  "
                  >
                    {item.label}
                  </button>

                  <DesktopDropdown
                    open={openDropdown === item.label}
                    items={item.items}
                  />
                </div>
              ))}

              <Link
                href="/partnerships"
                className="
    group!
    inline-flex items-center gap-2!
    border border-white/30!
    px-5! py-3!
    text-white!
    uppercase!
    tracking-[0.15em]!
    text-xs!
    hover:bg-white!
    hover:text-black!
    transition-all!
  "
              >
                Partner With Us

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

            {/* MENU ICON */}

            <button
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              className="lg:hidden text-white"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-7 h-[2px] bg-white"></span>
                <span className="w-7 h-[2px] bg-white"></span>
                <span className="w-7 h-[2px] bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
        navItems={navItems}
      />
    </>
  );
}