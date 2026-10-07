// NOTE: Élancé ERP Section for RÉVA Consulting.
// Presents Élancé ERP as RÉVA Consulting's flagship proprietary product realization.
// Articulates a clear, intentional relationship without SaaS gimmickry or fake mockups.
// Seamlessly connects to the official product platform at https://acya.site/
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface ElanceSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function ElanceErpSection({ locale = 'fr', className }: ElanceSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };
  const dict = getDictionary(locale);

  const operationalAreas = dict.elanceErp.modules;

  return (
    <section
      id="elance-erp"
      aria-label="Élancé ERP — Solution développée par RÉVA Consulting"
      className={cn(
        // NOTE: Padding tightened (was py-24/32/40) since this is now the 2nd chapter, directly under the Hero.
        'relative bg-[#07080B] py-20 sm:py-24 lg:py-32 border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Content Grid: Clear Relationship Between RÉVA & Élancé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Product Presentation & Direct Access */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-32">
            
            {/* Clear, restrained editorial relationship indicator */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={transitionFast}
            >
              <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#60A5FA]">
                {dict.elanceErp.badge}
              </span>
            </motion.div>

            {/* Official Logo & Header */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.08 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Flagship identity lockup. */}
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="relative shrink-0">
                  {/* Soft blue halo behind the mark */}
                  <div
                    className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.28)_0%,_transparent_70%)] blur-xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative size-20 sm:size-28 rounded-[18px] sm:rounded-[24px] bg-[#0E131E] border border-[#3B82F6]/30 p-3.5 sm:p-5 flex items-center justify-center shadow-[0_8px_32px_rgba(29,78,216,0.18)]">
                    <Image
                      src="/images/logos/logo-elance.svg"
                      alt="Logo officiel Élancé ERP"
                      width={96}
                      height={96}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-none">
                    Élancé <span className="text-[#3B82F6]">ERP</span>
                  </h2>
                  <p className="text-[11px] sm:text-xs font-mono text-[#758195] tracking-wider uppercase mt-2 sm:mt-3">
                    {dict.elanceErp.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#CAD0DB] font-light leading-relaxed pt-2">
                {dict.elanceErp.description1}
              </p>

              <p className="text-sm text-[#9CA6B8] font-light leading-relaxed">
                {dict.elanceErp.description2}
              </p>
            </motion.div>

            {/* Respectful, clear CTA to https://acya.site/ */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.16 }}
              className="pt-2"
            >
              <a
                href="https://acya.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
                aria-label="Accéder au site officiel Élancé ERP sur acya.site (ouvre dans un nouvel onglet)"
              >
                <span>{dict.elanceErp.cta}</span>
                <ArrowUpRight className="size-4 shrink-0 rtl:-scale-x-100" />
              </a>
              <span className="block mt-2 text-xs font-mono text-[#758195]">
                {dict.elanceErp.portalDirect}
              </span>
            </motion.div>

          </div>

          {/* RIGHT: Operational Architecture & Core Modules */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="p-8 sm:p-10 rounded-[20px] bg-[#0E1118] border border-white/[0.08] space-y-8">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  {dict.elanceErp.scopeTitle}
                </h3>
                <p className="text-sm text-[#8E9AA8] font-light mt-1">
                  {dict.elanceErp.scopeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {operationalAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-5 rounded-[12px] bg-[#121622] border border-white/[0.06] space-y-2"
                  >
                    <h4 className="font-display font-semibold text-base text-[#F8FAFC]">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#8E9AA8] font-light leading-relaxed">
                      {area.scope}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deployment & Architecture Facts */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#8E9AA8]">
                <div>
                  <span className="text-[#CAD0DB] font-semibold block mb-0.5">{dict.elanceErp.deploymentModelLabel}</span>
                  <span>{dict.elanceErp.deploymentModelValue}</span>
                </div>
                <div>
                  <span className="text-[#CAD0DB] font-semibold block mb-0.5">{dict.elanceErp.revaSupportLabel}</span>
                  <span>{dict.elanceErp.revaSupportValue}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
