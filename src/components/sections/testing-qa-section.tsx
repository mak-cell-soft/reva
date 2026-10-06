// NOTE: Dedicated Software Quality & Testing Section for RÉVA Consulting.
// Major competitive differentiator establishing RÉVA as a serious IT testing authority.
// Calm, authoritative engineering presentation with pure typography and zero icon clutter.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface TestingQaSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function TestingQaSection({ locale = 'fr', className }: TestingQaSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  // Core QA disciplines presented clearly without decorative icons
  const disciplines = [
    {
      title: 'Tests Fonctionnels & Métier',
      description:
        'Vérification rigoureuse de la conformité des flux applicatifs par rapport aux spécifications et aux scénarios réels d’usage.',
    },
    {
      title: 'Tests Techniques & d’API',
      description:
        'Validation des contrats d’interface, de l’intégrité des microservices et de la robustesse des échanges inter-systèmes.',
    },
    {
      title: 'Automatisation & Non-Régression',
      description:
        'Mise en place de suites automatisées intégrées au pipeline de livraison continue (CI/CD) pour sécuriser chaque mise en production.',
    },
    {
      title: 'Tests de Charge & Performance',
      description:
        'Évaluation de la stabilité des infrastructures et des temps de réponse lors des pics de trafic ou d’opérations volumineuses.',
    },
  ];

  return (
    <section
      id="expertise"
      aria-label="Assurance Qualité & Ingénierie du Test"
      className={cn(
        'relative bg-[#07090E] py-24 sm:py-32 lg:py-40 border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Major Differentiator */}
        <div className="max-w-3xl space-y-5 mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionFast}
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#60A5FA]">
              INGÉNIERIE DU TEST &amp; QA
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.14]"
          >
            Nous ne nous contentons pas de développer.{' '}
            <span className="block mt-2 text-[#CAD0DB] font-normal">
              Nous vérifions que chaque brique fonctionne.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed font-light"
          >
            Chez RÉVA Consulting, le test logiciel n’est pas une phase optionnelle en fin de projet : c’est une discipline d’ingénierie continue. Nous qualifions méthodiquement les architectures pour prévenir les régressions et protéger l’activité de nos clients.
          </motion.p>
        </div>

        {/* 4 QA DISCIPLINES: Clear, spacious grid without decorative badges or icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 sm:mb-20">
          {disciplines.map((d, index) => (
            <motion.div
              key={d.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.08 + index * 0.08 }}
              className="p-8 sm:p-10 rounded-[18px] bg-[#0E121B] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 space-y-3"
            >
              <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
                {d.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8E9AA8] font-light leading-relaxed">
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quiet, credible consultation prompt */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#CAD0DB] font-light">
            Vous lancez une application critique ou préparez un audit de vos protocoles de qualification ?
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFC489] hover:text-[#F6F0DB] transition-colors shrink-0"
          >
            <span>Échanger avec un ingénieur QA</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
