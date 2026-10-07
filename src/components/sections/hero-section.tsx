// NOTE: Enterprise Homepage Hero Section for RÉVA Consulting.
// Features the official photographic glass RÉVA logo (/images/logos/logo-reva-verre.jpeg)
// as an authoritative, luminous corporate sign integrated seamlessly into the blurred office environment.
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
        'relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-[#08090C] py-12 sm:py-16 lg:py-20',
        className
      )}
      aria-label="Présentation générale"
    >
      {/* 1. Atmospheric Corporate Office & Lighting Ambiance */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft, blurred corporate office background presence on the right to ground the logo naturally */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] opacity-20 lg:opacity-30 blur-2xl overflow-hidden">
          <Image
            src="/images/logos/logo-reva-verre.jpeg"
            alt=""
            width={1440}
            height={1375}
            className="w-full h-full object-cover object-[70%_center] scale-125"
          />
          {/* Subtle gradient wash ensuring clean text legibility on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/80 via-35% to-transparent" />
        </div>

        {/* Localized warm champagne gold & electric blue ambient back-lighting focused behind the logo zone */}
        <div className="absolute top-1/2 right-[2%] lg:right-[8%] -translate-y-1/2 w-[550px] sm:w-[680px] lg:w-[840px] h-[550px] sm:h-[680px] lg:h-[840px] bg-[radial-gradient(ellipse_at_center,_rgba(223,196,137,0.18)_0%,_rgba(29,104,242,0.15)_36%,_rgba(8,9,12,0)_72%)] blur-3xl opacity-90" />

        {/* Subtle luminous core reducing darkness right behind the emblem */}
        <div className="absolute top-1/2 right-[8%] lg:right-[14%] -translate-y-1/2 w-[420px] h-[420px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_rgba(223,196,137,0.16)_32%,_transparent_68%)] blur-2xl" />

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
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
            
            {/* Clean, confident brand identifier */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
                <span className="w-2 h-2 rounded-full bg-[#C59B45] shadow-[0_0_8px_rgba(197,155,69,0.8)]" />
                RÉVA CONSULTING
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
                Ingénierie logicielle &amp; qualification des systèmes critiques.
              </h1>
            </motion.div>

            {/* Supporting Text: Calm, precise, professional */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.18 }}
              className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed max-w-2xl font-light"
            >
              Société de développement logiciel et éditeur d&apos;Élancé ERP. RÉVA accompagne les entreprises exigeantes dans la conception d&apos;applications sur-mesure et l&apos;assurance qualité de leurs plateformes opérationnelles.
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
                <span>Échanger sur votre projet</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href={`/${locale}#services`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#CAD0DB] bg-[#111318]/90 hover:bg-[#171A20] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-white/[0.18] rounded-[10px] transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-slate-400 select-none cursor-pointer"
              >
                <span>Découvrir nos activités</span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Highly Visible Metallic & Glass RÉVA Sign in Corporate Environment (Occupying ~38-42% of hero visual area) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[550px] flex items-center justify-center"
            >
              {/* Localized backlight directly behind the logo: reduces darkness around the logo, highlighting blue & gold details */}
              <div
                className="absolute inset-0 -m-8 sm:-m-12 bg-[radial-gradient(circle_at_50%_48%,_rgba(255,255,255,0.16)_0%,_rgba(223,196,137,0.32)_26%,_rgba(29,104,242,0.28)_50%,_transparent_74%)] blur-3xl pointer-events-none select-none"
                aria-hidden="true"
              />

              {/* Secondary focused ambient halo to ensure blue squares and gold underline stand out sharply */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_rgba(29,104,242,0.24)_42%,_transparent_68%)] blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Seamless feather-masked container: completely dissolves into the blurred office atmosphere with zero card or box borders */}
              <div
                className="relative w-full overflow-hidden select-none pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse 85% 80% at 50% 48%, black 35%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 80%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 50% 48%, black 35%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 80%, transparent 95%)',
                }}
              >
                <Image
                  src="/images/logos/logo-reva-verre.jpeg"
                  alt="RÉVA Consulting — Emblème officiel en environnement corporate"
                  width={1440}
                  height={1375}
                  priority
                  className="w-full h-auto object-cover scale-[1.22] brightness-[1.20] contrast-[1.18] saturate-[1.26] drop-shadow-[0_24px_50px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:scale-[1.25]"
                />
              </div>

              {/* Ultra-soft ambient highlight creating subtle physical reflection */}
              <div
                className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(ellipse_at_50%_48%,_transparent_55%,_rgba(223,196,137,0.08)_78%,_transparent_100%)]"
                aria-hidden="true"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
