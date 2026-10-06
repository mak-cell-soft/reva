// NOTE: Main Services & Engineering Disciplines Section for RÉVA Consulting.
// Consolidates technical expertise into 3 authoritative engineering pillars.
// Spacious, confident typography with zero icon clutter and generous whitespace.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

interface PillarData {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly scope: readonly string[];
}

export function ServicesSection({ locale = 'fr', className }: ServicesSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // 3 consolidated, authoritative engineering pillars
  const pillars: readonly PillarData[] = [
    {
      number: '01',
      title: 'Logiciels Métier & Architectures Sur-Mesure',
      summary:
        'Conception et développement de solutions d’entreprise adaptées à vos spécificités opérationnelles : plateformes web complexes, applications mobiles de terrain et intégration de l’ERP souverain Élancé.',
      scope: [
        'Logiciels d’entreprise et portails métier',
        'Applications web & mobiles résilientes',
        'Déploiement et personnalisation d’Élancé ERP',
        'Digitalisation et automatisation des flux opérationnels',
      ],
    },
    {
      number: '02',
      title: 'Assurance Qualité & Ingénierie du Test',
      summary:
        'Discipline d’ingénierie dédiée à la fiabilité logicielle : qualification continue, validation de conformité fonctionnelle et mise en place de frameworks d’automatisation des tests.',
      scope: [
        'Plans de test fonctionnels et techniques',
        'Automatisation des tests E2E et validation d’API',
        'Contrôle systématique de non-régression (CI/CD)',
        'Audits de robustesse et tests de performance',
      ],
    },
    {
      number: '03',
      title: 'Intégration de Systèmes & Évolution Continue (TMA)',
      summary:
        'Garantie de continuité et interopérabilité de votre écosystème : interconnexion d’outils historiques, maintenance applicative préventive et accompagnement technique dans la durée.',
      scope: [
        'Interopérabilité de progiciels et flux de données sécurisés',
        'Tierce Maintenance Applicative (TMA) préventive et corrective',
        'Modernisation progressive des systèmes hérités',
        'Support technique dédié et gouvernance logicielle',
      ],
    },
  ];

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
              EXPERTISES
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            Nos domaines d&apos;intervention
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-lg sm:text-xl text-[#9CA6B8] font-light leading-relaxed"
          >
            Une ingénierie rigoureuse pour concevoir, éprouver et pérenniser les systèmes informatiques de l&apos;entreprise.
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
                    Périmètre d&apos;intervention
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
                  <span>Nous consulter</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
