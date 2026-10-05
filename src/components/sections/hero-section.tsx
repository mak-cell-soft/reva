// NOTE: Enterprise Homepage Hero Section for RÉVA Consulting.
// Communicates sovereign software engineering, proprietary ERP publishing (Élancé), and IT testing rigor.
// Features a custom technical schematic visual representing abstract software architecture and QA verification.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Code2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Activity,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  /** Current locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function HeroSection({ locale = 'fr', className }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation timing constants: elegant, fast, purposeful (no excessive motion)
  const transitionFast = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      className={cn(
        'relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#08090C] py-16 lg:py-24',
        className
      )}
      aria-label="Présentation générale"
    >
      {/* 1. Controlled Ambient Geometry: Subdued technical grid + soft localized lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Fine-line precision coordinate grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Very subtle blue accent light concentrated on right side architecture schematic */}
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-[#1D68F2]/[0.07] rounded-full blur-[120px] pointer-events-none" />

        {/* Very subtle warm gold ambient glow under headline */}
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-[#C59B45]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial & Value Proposition (Lg: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-8">
            
            {/* Eyebrow: Professional, technical, restrained */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 self-start"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#111318] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                {/* Active pulse telemetry dot */}
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
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#CAD0DB] bg-[#111318] hover:bg-[#171A20] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-white/[0.16] rounded-[10px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-slate-400 select-none cursor-pointer"
              >
                <span>Découvrir nos expertises</span>
              </Link>
            </motion.div>

            {/* Quick Proof Metrics Strip */}
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

          {/* RIGHT COLUMN: Sophisticated Technical Architecture Schematic (Lg: 5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Desktop & Tablet: Layered Architecture System Schematic */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...transitionFast, delay: 0.2 }}
              className="relative rounded-[20px] bg-[#111318]/90 border border-white/[0.08] shadow-[0_16px_50px_-10px_rgba(0,0,0,0.85)] p-5 sm:p-7 space-y-5 overflow-hidden backdrop-blur-md"
            >
              {/* Schematic Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#1D68F2]" />
                    <span className="size-2 rounded-full bg-[#C59B45]" />
                    <span className="size-2 rounded-full bg-[#CAD0DB]/40" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#758195] ml-1">
                    SYSTEM_TOPOLOGY // V4.8
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1D68F2]/10 border border-[#1D68F2]/25 text-[10px] font-mono text-[#60A5FA]">
                  <Activity className="size-3 animate-pulse" />
                  <span>SYNCHRONIZED</span>
                </div>
              </div>

              {/* Node 1: Mission-Critical Enterprise Layer (Élancé ERP & Custom Software) */}
              <div className="p-4 rounded-[12px] bg-[#171A20] border border-white/[0.06] hover:border-[#C59B45]/40 transition-colors group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-[8px] bg-[#C59B45]/10 border border-[#C59B45]/25 text-[#DFC489]">
                      <Sparkles className="size-4 text-[#C59B45]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C59B45] block">
                        COEUR ÉDITEUR LOGICIEL
                      </span>
                      <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                        Élancé ERP &amp; Logiciels Métiers
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#758195] px-2 py-0.5 rounded bg-[#111318]">
                    MODULAR
                  </span>
                </div>
                <p className="text-xs text-[#8B95A5] mt-2.5 leading-relaxed font-light">
                  Gestion financière, supply chain, RH et briques logicielles sur-mesure résilientes.
                </p>
              </div>

              {/* Data Flow Bridge / Bus (Visual Connecting Wires) */}
              <div className="relative py-1 flex items-center justify-between px-6">
                <div className="h-6 w-[1px] bg-gradient-to-b from-[#C59B45]/50 to-[#1D68F2]/50 mx-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#111318] border border-white/[0.08] text-[9px] font-mono text-[#758195]">
                    API BUS &bull; HIGH THROUGHPUT
                  </span>
                </div>
              </div>

              {/* Node 2: Web, Mobile & Cloud Platforms Layer */}
              <div className="p-4 rounded-[12px] bg-[#171A20] border border-white/[0.06] hover:border-white/[0.14] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-[8px] bg-white/[0.05] border border-white/[0.08] text-[#CAD0DB]">
                      <Code2 className="size-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#CAD0DB] block">
                        FRONTEND &amp; MICROSERVICES
                      </span>
                      <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                        Applications Web &amp; Mobiles iOS / Android
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#758195] px-2 py-0.5 rounded bg-[#111318]">
                    CLOUD-NATIVE
                  </span>
                </div>
                <p className="text-xs text-[#8B95A5] mt-2.5 leading-relaxed font-light">
                  Expériences utilisateurs réactives, architectures découplées et interfaces métiers sécurisées.
                </p>
              </div>

              {/* Data Flow Bridge (Blue laser accent) */}
              <div className="relative py-1 flex items-center justify-between px-6">
                <div className="h-6 w-[1px] bg-gradient-to-b from-white/[0.1] to-[#1D68F2] mx-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#111318] border border-[#1D68F2]/30 text-[9px] font-mono text-[#60A5FA]">
                    CONTINUOUS QA INSPECTION
                  </span>
                </div>
              </div>

              {/* Node 3: QA Testing & Automated Verification Laboratory */}
              <div className="p-4 rounded-[12px] bg-[#171A20] border border-white/[0.06] hover:border-[#1D68F2]/50 transition-colors group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-[8px] bg-[#1D68F2]/10 border border-[#1D68F2]/25 text-[#60A5FA]">
                      <ShieldCheck className="size-4 text-[#1D68F2]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#60A5FA] block">
                        LABORATOIRE DU TEST &amp; ASSURANCE QUALITÉ
                      </span>
                      <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                        Automation CI/CD &amp; Tests de Charge
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20">
                    PASSING
                  </span>
                </div>
                
                {/* Live Verification Telemetry */}
                <div className="mt-3 pt-3 border-t border-white/[0.04] grid grid-cols-2 gap-2 text-[10.5px] font-mono text-[#758195]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-[#1D68F2]" />
                    <span>Non-régression: 100%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-[#1D68F2]" />
                    <span>Temps de réponse: &lt; 20ms</span>
                  </div>
                </div>
              </div>

              {/* Footer status line */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#545F72]">
                <span>ORCHESTRATION: RÉVA SOUVERAIN</span>
                <span>ZONE: PROD // EU-WEST</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
