// NOTE: Positioning Section for RÉVA Consulting.
// Placed directly below the hero to articulate the company's core doctrine:
// "De l'idée à la solution. De la solution à la qualité."
// Follows an asymmetric visual split with large typography, pure geometry, and minimal cards.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PositioningSectionProps {
  /** Optional locale parameter for future i18n routing */
  locale?: string;
  /** Optional additional CSS classes */
  className?: string;
}

interface Principle {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly accent: 'gold' | 'blue' | 'silver';
  readonly geometry: 'square-matrix' | 'crosshair' | 'circuit-angle';
}

export function PositioningSection({ className }: PositioningSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // The 3 foundational pillars of RÉVA's signature: Développer. Tester. Optimiser.
  const principles: readonly Principle[] = [
    {
      number: '01',
      title: 'Développer',
      description: 'Des solutions métier adaptées aux besoins réels.',
      accent: 'gold',
      geometry: 'square-matrix',
    },
    {
      number: '02',
      title: 'Tester',
      description: 'Garantir fiabilité, performance et qualité.',
      accent: 'blue',
      geometry: 'crosshair',
    },
    {
      number: '03',
      title: 'Optimiser',
      description: 'Faire évoluer les systèmes et améliorer les processus.',
      accent: 'silver',
      geometry: 'circuit-angle',
    },
  ];

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="a-propos"
      aria-label="Positionnement & Principes Directeurs"
      className={cn(
        'relative bg-[#08090C] border-t border-white/[0.06] py-20 sm:py-28 lg:py-32 overflow-hidden',
        className
      )}
    >
      {/* 1. Subtle Architectural Background Geometry */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft radial gold spotlight on left side */}
        <div className="absolute -left-48 top-1/4 w-[500px] h-[500px] bg-[#C59B45]/[0.035] rounded-full blur-[140px]" />
        {/* Soft radial blue spotlight on right side */}
        <div className="absolute -right-48 bottom-1/4 w-[500px] h-[500px] bg-[#1D68F2]/[0.045] rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Large Editorial Typography */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-6 sm:space-y-8">
            
            {/* Architectural Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={transitionFast}
              className="inline-flex items-center gap-2.5"
            >
              <span className="size-1.5 rounded-full bg-[#C59B45]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#C59B45] font-semibold">
                POSITIONNEMENT STRATÉGIQUE
              </span>
            </motion.div>

            {/* Core Message — Large Typography */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.08 }}
              className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]"
            >
              De l&apos;idée à la solution.
              <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#C59B45] via-[#DFC489] to-[#CAD0DB]">
                De la solution à la qualité.
              </span>
            </motion.h2>

            {/* Geometric Accent Line: Thin Gold Gradient Separator */}
            <motion.div
              initial={shouldReduceMotion ? {} : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.15 }}
              className="h-[1.5px] w-24 sm:w-32 bg-gradient-to-r from-[#C59B45] via-[#1D68F2]/60 to-transparent origin-left"
            />

            {/* Engineering Manifest Quote */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.22 }}
              className="text-xs sm:text-sm font-mono text-[#758195] uppercase tracking-wider max-w-md pt-2"
            >
              RÉVA CONSULTING // CYCLE DE VIE DU SYSTÈME &bull; EXCELLENCE OPÉRATIONNELLE
            </motion.p>
          </div>

          {/* RIGHT COLUMN: Explanation & 3 Minimal Principle Cards */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            
            {/* Short Narrative Explanation */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-[14px] bg-[#111318]/70 border border-white/[0.06] backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg text-[#CAD0DB] font-light leading-relaxed">
                <strong className="text-[#F8FAFC] font-semibold">RÉVA</strong> accompagne les entreprises
                dans la conception, le développement, l&apos;intégration, le test et l&apos;évolution
                de leurs solutions digitales.
              </p>
            </motion.div>

            {/* The 3 Minimal Principle Cards with Thin Gold Separators */}
            <div className="space-y-5">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...transitionFast, delay: 0.15 + index * 0.1 }}
                  className="group relative rounded-[14px] bg-[#111318] p-6 sm:p-7 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.6)]"
                >
                  {/* Thin Gold Top Separator (Architectural signature) */}
                  <div
                    className={cn(
                      'absolute top-0 left-6 right-6 h-[1.5px] transition-colors duration-300',
                      principle.accent === 'gold' && 'bg-gradient-to-r from-[#C59B45] via-[#C59B45]/40 to-transparent',
                      principle.accent === 'blue' && 'bg-gradient-to-r from-[#1D68F2] via-[#1D68F2]/40 to-transparent',
                      principle.accent === 'silver' && 'bg-gradient-to-r from-[#CAD0DB]/70 via-[#CAD0DB]/20 to-transparent'
                    )}
                  />

                  <div className="flex items-start gap-5">
                    {/* Geometric Indicator (Zero Emoji — Pure Technical Geometry) */}
                    <div className="shrink-0 pt-0.5">
                      {principle.geometry === 'square-matrix' && (
                        <div className="w-8 h-8 rounded-[6px] bg-[#171A20] border border-white/[0.08] flex items-center justify-center group-hover:border-[#C59B45]/40 transition-colors">
                          {/* 2x2 Geometric Pixel Matrix */}
                          <div className="grid grid-cols-2 gap-1">
                            <span className="size-1 rounded-[0.5px] bg-[#C59B45]" />
                            <span className="size-1 rounded-[0.5px] bg-[#CAD0DB]" />
                            <span className="size-1 rounded-[0.5px] bg-[#1D68F2]" />
                            <span className="size-1 rounded-[0.5px] bg-[#C59B45]" />
                          </div>
                        </div>
                      )}

                      {principle.geometry === 'crosshair' && (
                        <div className="w-8 h-8 rounded-[6px] bg-[#171A20] border border-white/[0.08] flex items-center justify-center group-hover:border-[#1D68F2]/40 transition-colors">
                          {/* Precision QA Target Crosshair */}
                          <svg className="w-4 h-4 text-[#1D68F2]" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" />
                            <line x1="8" y1="1" x2="8" y2="4" stroke="currentColor" strokeWidth="1.2" />
                            <line x1="8" y1="12" x2="8" y2="15" stroke="currentColor" strokeWidth="1.2" />
                            <line x1="1" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="1.2" />
                            <line x1="12" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </div>
                      )}

                      {principle.geometry === 'circuit-angle' && (
                        <div className="w-8 h-8 rounded-[6px] bg-[#171A20] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.2] transition-colors">
                          {/* Optimization Arrow Loop */}
                          <svg className="w-4 h-4 text-[#CAD0DB]" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8V5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11C13 12.1046 12.1046 13 11 13H5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <polyline points="7,11 5,13 7,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-3">
                        {/* Monospace Index */}
                        <span className="font-mono text-xs font-semibold text-[#758195] tracking-wider">
                          {principle.number} —
                        </span>
                        
                        {/* Pillar Title */}
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F8FAFC]">
                          {principle.title}
                        </h3>

                        {/* Subtle Blue/Gold Accent Indicator */}
                        {principle.accent === 'gold' && (
                          <span className="size-1.5 rounded-full bg-[#C59B45] ml-auto shrink-0" />
                        )}
                        {principle.accent === 'blue' && (
                          <span className="size-1.5 rounded-full bg-[#1D68F2] ml-auto shrink-0" />
                        )}
                        {principle.accent === 'silver' && (
                          <span className="size-1.5 rounded-full bg-[#CAD0DB]/50 ml-auto shrink-0" />
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
