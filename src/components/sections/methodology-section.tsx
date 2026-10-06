// NOTE: Engineering Methodology Section for RÉVA Consulting.
// Communicates structured operational discipline and predictable project execution.
// Clean editorial sequence prioritizing readability and transparent project governance.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

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

  // The 5-step structured engineering process
  const steps: readonly ProcessStep[] = [
    {
      number: '01',
      title: 'Comprendre',
      summary: 'Immersion métier & analyse des exigences',
      technicalDetail: 'Cartographie des flux, recueil des contraintes techniques et formalisation des critères d’acceptation.',
    },
    {
      number: '02',
      title: 'Concevoir',
      summary: 'Architecture logicielle & ergonomie',
      technicalDetail: 'Modélisation des données, choix des socles technologiques et définition des parcours utilisateurs.',
    },
    {
      number: '03',
      title: 'Développer',
      summary: 'Ingénierie logicielle & intégration',
      technicalDetail: 'Écriture du code selon les normes de l’art, tests unitaires continus et revues d’architecture régulières.',
    },
    {
      number: '04',
      title: 'Tester',
      summary: 'Campagnes de qualification & recettes',
      technicalDetail: 'Validation fonctionnelle, tests d’intégration, non-régression automatisée et recette d’acceptation.',
    },
    {
      number: '05',
      title: 'Évoluer',
      summary: 'Déploiement sécurisé & maintenance (TMA)',
      technicalDetail: 'Mise en production maîtrisée, supervision applicative et maintenance évolutive dans la durée.',
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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Engineering Discipline */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 mb-16 sm:mb-20 lg:mb-24">
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
            <span className="block mt-1 sm:mt-2 text-[#CAD0DB] font-normal">
              Des livrables prévisibles.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-base sm:text-lg text-[#9CA6B8] font-light leading-relaxed"
          >
            De l’analyse préliminaire à la maintenance en conditions opérationnelles, notre cadre d&apos;intervention garantit la transparence des jalons et la maîtrise des délais.
          </motion.p>
        </div>

        {/* 5 STEPS: Clear, readable sequential column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.06 + idx * 0.06 }}
              className="p-6 sm:p-7 rounded-[16px] bg-[#0E1015] border border-white/[0.06] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-[#DFC489] tracking-wider block">
                  ÉTAPE {step.number}
                </span>

                <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CAD0DB] font-medium leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <p className="text-xs text-[#758195] font-light leading-relaxed pt-4 border-t border-white/[0.06]">
                {step.technicalDetail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
