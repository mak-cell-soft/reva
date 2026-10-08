// NOTE: Final Signature CTA Section for RÉVA Consulting.
// Quiet, confident, mature consulting invitation.
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/lib/brand.config';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

interface CtaSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function CtaSection({ locale = 'fr', className }: CtaSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };
  const dict = getDictionary(locale as Locale);
  const t = dict.cta;

  const mailSubject = encodeURIComponent(`${brandConfig.name} - ${t.buttonText}`);

  return (
    <section
      id="contact"
      aria-label={t.title}
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={transitionSmooth}
          className="p-8 sm:p-14 lg:p-16 rounded-[24px] bg-[#0D0F14] border border-white/[0.08] text-center space-y-8"
        >
          {/* Brand identifier */}
          <div className="inline-flex items-center gap-3">
            <div className="relative h-6 w-auto aspect-[1599/1076] overflow-hidden rounded-[4px] shrink-0">
              <Image
                src="/images/logos/logo-reva.jpeg"
                alt={dict.brand.fullName}
                width={1599}
                height={1076}
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              {dict.brand.fullName}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15]">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed font-light">
              {t.description}
            </p>
          </div>

          {/* CTA & Direct Contact */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${brandConfig.contact.email}?subject=${mailSubject}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
            >
              <span>{t.buttonText}</span>
              <ArrowRight className="size-4 shrink-0 rtl:rotate-180" />
            </a>
          </div>

          {/* Direct channels */}
          <div className="pt-8 border-t border-white/[0.06] text-xs font-mono text-[#758195] space-y-1">
            <div>
              {t.directChannel}{' '}
              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="text-[#CAD0DB] hover:text-[#DFC489] transition-colors"
              >
                {brandConfig.contact.email}
              </a>
            </div>
            <div className="text-[11px] text-[#545F72] pt-1">
              {t.signature}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
