'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, UserPlus, Users, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const registrationOptions = [
    {
      title: "Register for Executive Board Member",
      description: "Shape the committee's direction and guide delegates.",
      icon: <BadgeCheck className="w-5 h-5 text-[#bb8b57]" />,
      href: "https://forms.gle/FH5tf1HmABoYRxdx8",
      external: true,
    },
    {
      title: "Join as Organising Committee Member",
      description: "Help bring the conference to life behind the scenes.",
      icon: <Users className="w-5 h-5 text-[#bb8b57]" />,
      href: "https://forms.gle/XeidWE43Hrjdefoe8",
      external: true,
    },
    {
      title: "Register as a Delegate",
      description: "Represent a nation and participate in debate.",
      icon: <UserPlus className="w-5 h-5 text-[#bb8b57]" />,
      href: "/conferences",
      external: false,
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 sm:rounded-2xl rounded-t-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-10">
                <h2 className="font-heading text-xl text-white tracking-wide">
                  Choose Your Role
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
                {registrationOptions.map((option, index) => {
                  const content = (
                    <div className="group relative flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#bb8b57]/50 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#bb8b57]/10 flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-white font-medium text-[15px] group-hover:text-[#bb8b57] transition-colors duration-300">
                          {option.title}
                        </h3>
                        <p className="text-white/50 text-[13px] mt-0.5">
                          {option.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#bb8b57] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  );

                  return option.external ? (
                    <a
                      key={index}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="block focus:outline-none"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      href={option.href}
                      onClick={onClose}
                      className="block focus:outline-none"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
