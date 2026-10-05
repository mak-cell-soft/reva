// NOTE: Engineering Methodology Section for RÉVA Consulting.
// Communicates structured operational discipline and predictable project execution.
// Features a responsive timeline: horizontal engineering timeline on desktop, vertical on mobile.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface MethodologySectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly technicalDetail: string;
}

export function MethodologySection({ className }: MethodologySectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  // The 5-step methodology defined in the RÉVA Consulting specification
  const steps: readonly ProcessStep[] = [
    {
      number: '01',
      title: 'Comprendre',
      summary: 'Analyse des besoins et des objectifs.',
      technicalDetail: 'Immersion métier, cartographie des flux et définition des critères d’acceptation.',
    },
    {
      number: '02',
      title: 'Concevoir',
      summary: 'Architecture, UX et stratégie technique.',
      technicalDetail: 'Modélisation des données, design des interfaces et choix des stacks résilientes.',
    },
    {
      number: '03',
      title: 'Développer',
      summary: 'Développement logiciel et intégration.',
      technicalDetail: 'Écriture du code selon les normes de l’art, tests unitaires et revues systématiques.',
    },
    {
      number: '04',
      title: 'Tester',
      summary: 'Validation fonctionnelle, technique et performance.',
      technicalDetail: 'Campagnes de qualification, tests de charge, non-régression et recette client.',
    },
    {
      number: '05',
      title: 'Évoluer',
      summary: 'Déploiement, maintenance et amélioration continue.',
      technicalDetail: 'Mise en service sécurisée, TMA proactive, monitoring et adaptations régulières.',
    },
  ];

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="methodologie"
      aria-label="Méthode d'ingénierie RÉVA"
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      {/* Precision Ambient Blueprint Visuals */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1D68F2]/[0.025] rounded-full blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Engineering Discipline */}
        <div className="max-w-3xl space-y-5 sm:space-y-6 mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionFast}
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              MÉTHODOLOGIE
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            Une méthode claire.{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#CAD0DB] to-[#C59B45]">
              Des résultats maîtrisés.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-base sm:text-lg text-[#9CA6B8] font-light leading-relaxed"
          >
            De l’analyse préliminaire à la maintenance en conditions opérationnelles, notre démarche
            structurée garantit la prévisibilité des jalons, la rigueur d’exécution et la pérennité technique.
          </motion.p>
        </div>

        {/* 1. DESKTOP VIEWPORT: HORIZONTAL ENGINEERING TIMELINE (>= 1024px) */}
        <div className="hidden lg:block">
          
          {/* Continuous Circuit Connecting Line */}
          <div className="relative mb-10">
            <div className="absolute top-6 left-8 right-8 h-[1.5px] bg-white/[0.08]" />
            <motion.div
              className="absolute top-6 left-8 h-[1.5px] bg-gradient-to-r from-[#C59B45] via-[#1D68F2] to-[#3B82F6]"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Stepper Nodes */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="flex flex-col items-start cursor-pointer group"
                  >
                    {/* Node Dot / Indicator */}
                    <div
                      className={cn(
                        'size-12 rounded-[10px] border transition-all duration-200 flex items-center justify-center font-mono font-bold text-sm select-none',
                        isActive
                          ? 'bg-[#121824] border-[#1D68F2] text-[#60A5FA] shadow-[0_0_16px_rgba(29,104,242,0.3)]'
                          : isPassed
                          ? 'bg-[#111318] border-[#C59B45]/40 text-[#DFC489]'
                          : 'bg-[#0E1015] border-white/[0.08] text-[#758195] group-hover:border-white/[0.2]'
                      )}
                    >
                      <span className={cn(isActive ? 'text-[#60A5FA]' : 'text-[#C59B45]')}>
                        {step.number}
                      </span>
                    </div>

                    {/* Step Card Content */}
                    <div
                      className={cn(
                        'mt-6 p-6 rounded-[14px] border transition-all duration-200 w-full space-y-3 h-full flex flex-col justify-between',
                        isActive
                          ? 'bg-[#111622] border-[#1D68F2]/50 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.8)]'
                          : 'bg-[#0E1015] border-white/[0.06] hover:border-white/[0.12] hover:bg-[#111318]'
                      )}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-lg text-[#F8FAFC]">
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className="size-1.5 rounded-full bg-[#1D68F2] animate-pulse" />
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#CAD0DB] font-medium leading-relaxed">
                          {step.summary}
                        </p>
                      </div>

                      <p className="text-xs text-[#758195] font-light leading-relaxed pt-3 border-t border-white/[0.04]">
                        {step.technicalDetail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 2. MOBILE & TABLET VIEWPORT: VERTICAL TIMELINE (< 1024px) */}
        <div className="lg:hidden relative">
          
          {/* Vertical Thin Circuit Line */}
          <div className="absolute top-4 bottom-8 left-6 w-[1.5px] bg-white/[0.08]" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex items-start gap-4 sm:gap-6 group cursor-pointer"
                >
                  {/* Step Node Dot */}
                  <div
                    className={cn(
                      'size-12 rounded-[10px] border shrink-0 transition-all duration-200 flex items-center justify-center font-mono font-bold text-sm select-none',
                      isActive
                        ? 'bg-[#121824] border-[#1D68F2] text-[#60A5FA] shadow-[0_0_16px_rgba(29,104,242,0.3)]'
                        : 'bg-[#0E1015] border-[#C59B45]/30 text-[#DFC489]'
                    )}
                  >
                    <span className={isActive ? 'text-[#60A5FA]' : 'text-[#C59B45]'}>
                      {step.number}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div
                    className={cn(
                      'p-5 sm:p-6 rounded-[14px] border transition-all duration-200 flex-1 space-y-2.5',
                      isActive
                        ? 'bg-[#111622] border-[#1D68F2]/50 shadow-[0_4px_20px_rgba(0,0,0,0.7)]'
                        : 'bg-[#0E1015] border-white/[0.06]'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#F8FAFC]">
                        {step.title}
                      </h3>
                      {isActive ? (
                        <span className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-wider px-2 py-0.5 rounded bg-[#1D68F2]/10 border border-[#1D68F2]/25">
                          Actif
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-[#758195]">
                          Jalon {step.number}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#CAD0DB] font-medium leading-relaxed">
                      {step.summary}
                    </p>

                    <p className="text-xs text-[#758195] font-light leading-relaxed pt-2 border-t border-white/[0.04]">
                      {step.technicalDetail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Commitment Badge Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#758195]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#C59B45]" />
            <span className="text-[#CAD0DB]">LIVRABLES STRUCTURÉS // GOUVERNANCE AGILE OU CYCLE EN V</span>
          </div>
          <span className="text-[11px] text-[#545F72]">
            RÉVA CONSULTING &bull; PROTOCOLE D&apos;ASSURANCE QUALITÉ INTÉGRÉ
          </span>
        </div>

      </div>
    </section>
  );
}
