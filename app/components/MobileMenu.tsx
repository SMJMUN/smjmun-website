'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  navItems: {
    label: string;
    items: string[];
  }[];
}

export default function MobileMenu({
  open,
  setOpen,
  navItems,
}: Props) {
  const [expanded, setExpanded] =
    useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0
              bg-black/70
              z-[1050]
            "
          />

          <motion.div
            initial={{
              x: '100%',
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="
              fixed
              right-0
              top-0
              bottom-0
              z-[1100]
              w-[380px]
              max-w-full
              bg-black
              overflow-y-auto
              p-8
            "
          >
            <div className="flex justify-end mb-10">
  <button
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
            </div>  
            <div className="mt-16">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === item.label
                          ? null
                          : item.label
                      )
                    }
                    className="
                      w-full
                      flex
                      justify-between
                      py-5
                      text-white
                      text-xl
                    "
                  >
                    {item.label}

                    <span>
                      {expanded === item.label
                        ? '−'
                        : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {expanded === item.label && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        {item.items.map((sub) => (
                          <a
                            href="#"
                            key={sub}
                            className="
                              block
                              py-3
                              pl-5
                              text-white/60
                            "
                          >
                            {sub}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href="#partner"
                className="
                  mt-10
                  block
                  border
                  border-white/20
                  p-4
                  text-center
                  text-white
                "
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}