// NOTE: Main Services & Engineering Disciplines Section for RÉVA Consulting.
// Consolidates technical expertise into 3 authoritative engineering pillars.
// Spacious, confident typography with zero icon clutter and generous whitespace.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface ServicesSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function ServicesSection({ locale = 'fr', className }: ServicesSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const dict = getDictionary(locale);

  // 3 consolidated, authoritative engineering pillars
  const pillars = dict.services.pillars;

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="services"
      aria-label="Nos expertises"
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Spacious & Editorial */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionFast}
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              {dict.services.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            {dict.services.title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-lg sm:text-xl text-[#9CA6B8] font-light leading-relaxed"
          >
            {dict.services.subtitle}
          </motion.p>
        </div>

        {/* 3 CONSOLIDATED PILLARS: Airy, Structured, Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.1 + index * 0.1 }}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-[18px] bg-[#0D0F14] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Index Number */}
                <span className="font-mono text-xs font-semibold text-[#DFC489] tracking-wider block">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#F8FAFC] leading-snug">
                  {pillar.title}
                </h3>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                  {pillar.summary}
                </p>

                {/* Scope list */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#758195] block">
                    {dict.services.scopeLabel}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#CAD0DB] font-light">
                    {pillar.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#DFC489] mt-0.5 select-none">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={`/${locale}#contact`}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFC489] hover:text-[#F6F0DB] transition-colors"
                >
                  <span>{dict.services.consultUs}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
