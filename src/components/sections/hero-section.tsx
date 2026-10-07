// NOTE: Enterprise Homepage Hero Section for RÉVA Consulting.
// Features the official photographic glass RÉVA logo (/images/logos/logo-reva-verre.jpeg)
// as an immersive, full-bleed atmospheric BACKGROUND (not a separate card/visual block).
// Communicates sovereign software engineering, proprietary ERP publishing (Élancé), and QA rigor.
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface HeroSectionProps {
  /** Current locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function HeroSection({ locale = 'fr', className }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionFast = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };
  const dict = getDictionary(locale);

  return (
    <section
      className={cn(
        'relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-[#08090C] py-12 sm:py-16 lg:py-20',
        className
      )}
      aria-label="Présentation générale"
    >
      {/* 1. Full-bleed Atmospheric Background: Photographic Glass RÉVA Logo Asset */}
      {/* NOTE: The image is intentionally a background layer (fill + object-cover) so it is felt
          across the entire Hero rather than reading as a separate rectangular content block. */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/logos/logo-reva-verre.jpeg"
          alt=""
          fill
          sizes="100vw"
          quality={92}
          priority
          className={cn(
            'object-cover',
            // Desktop: emblem pushed right (or left in RTL) so it shines in the negative space beside the headline
            'lg:object-[86%_center] rtl:lg:object-[14%_center] lg:opacity-80',
            // Mobile & Tablet: calibrated opacity keeps the emblem perceptible while text stays readable
            'object-[65%_35%] rtl:object-[35%_35%] opacity-45 sm:opacity-55'
          )}
        />

        {/* Desktop readability overlay: deep black on the text side fading to transparent over the emblem */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r rtl:bg-gradient-to-l from-[#08090C] via-[#08090C]/85 via-45% to-transparent" />

        {/* Mobile/Tablet readability overlay: balanced vertical dark wash */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#08090C]/85 via-[#08090C]/75 to-[#08090C]/90" />

        {/* Subtle warm gold & electric blue ambient glow over the emblem zone (keeps brand atmosphere) */}
        <div className="absolute top-1/2 right-[2%] lg:right-[8%] rtl:right-auto rtl:left-[2%] rtl:lg:left-[8%] -translate-y-1/2 w-[550px] sm:w-[680px] lg:w-[840px] h-[550px] sm:h-[680px] lg:h-[840px] bg-[radial-gradient(ellipse_at_center,_rgba(223,196,137,0.10)_0%,_rgba(29,104,242,0.10)_36%,_rgba(8,9,12,0)_72%)] blur-3xl" />

        {/* Subtle architectural coordinate grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Top edge fade for smooth navbar blend and bottom edge fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08090C] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08090C] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial & Strategic Value Proposition (Lg: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-start">
            
            {/* Clean, confident brand identifier */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
                <span className="w-2 h-2 rounded-full bg-[#C59B45] shadow-[0_0_8px_rgba(197,155,69,0.8)]" />
                {dict.hero.brandTag}
              </span>
            </motion.div>

            {/* Primary Headline: Authoritative, consulting-grade */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.12 }}
              className="space-y-2"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
                {dict.hero.title}
              </h1>
            </motion.div>

            {/* Supporting Text: Calm, precise, professional */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.18 }}
              className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed max-w-2xl font-light"
            >
              {dict.hero.description}
            </motion.p>

            {/* CTAs: Primary & Secondary */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              {/* Primary CTA */}
              <Link
                href={`/${locale}#contact`}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] hover:shadow-[0_4px_20px_rgba(197,155,69,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#C59B45] select-none cursor-pointer"
              >
                <span>{dict.hero.primaryCta}</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href={`/${locale}#services`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#CAD0DB] bg-[#111318]/90 hover:bg-[#171A20] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-white/[0.18] rounded-[10px] transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-slate-400 select-none cursor-pointer"
              >
                <span>{dict.hero.secondaryCta}</span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Intentional negative space — the background emblem commands this area.
              NOTE: No separate image/card here by design (see background layer above). */}
          <div className="lg:col-span-5 hidden lg:block pointer-events-none select-none" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}
