// NOTE: Enterprise Homepage Hero Section for RÉVA Consulting.
// Features the official photographic glass RÉVA logo (/images/logos/logo-reva-verre.jpeg)
// as an immersive, cinematic background with intelligent responsive positioning.
// Communicates sovereign software engineering, proprietary ERP publishing (Élancé), and QA rigor.
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  /** Current locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function HeroSection({ locale = 'fr', className }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionFast = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      className={cn(
        'relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#08090C] py-20 lg:py-28',
        className
      )}
      aria-label="Présentation générale"
    >
      {/* 1. Large Atmospheric Background: Photographic Glass RÉVA Logo Asset */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Full-bleed responsive image container */}
        <div className="relative w-full h-full">
          <Image
            src="/images/logos/logo-reva-verre.jpeg"
            alt="RÉVA Consulting Physical Brand Emblem"
            fill
            sizes="100vw"
            quality={92}
            priority
            className={cn(
              'object-cover transition-all duration-700',
              // Desktop: positioned toward the right so the glass logo shines in negative space
              'lg:object-[86%_center] lg:opacity-80',
              // Mobile & Tablet: centered with calibrated opacity for high readability
              'object-[65%_35%] opacity-45 sm:opacity-55'
            )}
          />

          {/* Sophisticated Dark Cinematic Overlays */}
          {/* Desktop: gradient vignette from deep black on left (text side) to transparent on right (logo side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/85 via-45% to-transparent hidden lg:block" />

          {/* Mobile: balanced dark wash protecting editorial text while keeping glass logo perceptible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/85 via-[#08090C]/75 to-[#08090C]/90 lg:hidden" />

          {/* Top edge fade for smooth navbar blend and bottom edge fade */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090C] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090C] to-transparent" />

          {/* Subdued architectural coordinate grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial & Strategic Value Proposition (Lg: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-8">
            
            {/* Eyebrow: Professional, technical, restrained */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 self-start"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#111318]/90 border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D68F2] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D68F2]" />
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-[#CAD0DB]">
                  RÉVA CONSULTING — SOFTWARE &amp; QUALITY ENGINEERING
                </span>
              </div>
            </motion.div>

            {/* Primary Headline: Bold, commanding, split for readability */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.12 }}
              className="space-y-2"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
                Nous développons les solutions{' '}
                <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E6ED] to-[#C59B45]">
                  qui font avancer votre entreprise.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.18 }}
              className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed max-w-2xl font-light"
            >
              Logiciels métier, ERP, applications web et mobiles, tests logiciels et automatisation :{' '}
              <strong className="text-[#CAD0DB] font-medium">RÉVA</strong> accompagne votre transformation digitale de l&apos;idée au déploiement.
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
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#C59B45] select-none cursor-pointer"
              >
                <span>Parlons de votre projet</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href={`/${locale}#services`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#CAD0DB] bg-[#111318]/90 hover:bg-[#171A20] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-white/[0.16] rounded-[10px] transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-slate-400 select-none cursor-pointer"
              >
                <span>Découvrir nos expertises</span>
              </Link>
            </motion.div>

            {/* Strategic Proof Pillars Strip */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transitionFast, delay: 0.32 }}
              className="pt-6 sm:pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-4 sm:gap-8 max-w-xl"
            >
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                  Éditeur ERP
                </div>
                <div className="text-[11px] sm:text-xs text-[#758195] font-light mt-0.5">
                  Solution Élancé propriétaire
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                  Ingénierie QA
                </div>
                <div className="text-[11px] sm:text-xs text-[#758195] font-light mt-0.5">
                  Qualification continue
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                  Sur-Mesure
                </div>
                <div className="text-[11px] sm:text-xs text-[#758195] font-light mt-0.5">
                  Architectures pérennes
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Clear visual space allowing the Glass RÉVA Logo to be prominently visible */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end h-full min-h-[420px] pointer-events-none select-none pr-4 pb-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transitionFast, delay: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111318]/70 border border-white/[0.08] backdrop-blur-md text-[10.5px] font-mono text-[#8E9AA8] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <span className="size-1.5 rounded-full bg-[#C59B45]" />
              <span>EMBLÈME OFFICIEL // VERRE &amp; OR CHAMPAGNE</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
