// NOTE: Main Services Section for RÉVA Consulting.
// Clean editorial presentation of the 8 technical disciplines.
// Minimal, confident, and premium — strictly avoiding badge clutter and decorative tags.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServicesSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

interface ServiceData {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // The 8 official services of RÉVA Consulting
  const services: readonly ServiceData[] = [
    {
      id: 'custom-erp',
      number: '01',
      title: 'Logiciels métier & ERP',
      description:
        'Conception de plateformes d’entreprise sur-mesure et déploiement de la suite Élancé ERP pour unifier et piloter l’ensemble des opérations.',
    },
    {
      id: 'web-apps',
      number: '02',
      title: 'Applications Web',
      description:
        'Applications modernes, performantes et évolutives, conçues pour supporter des logiques métier complexes avec une fluidité optimale.',
    },
    {
      id: 'mobile-apps',
      number: '03',
      title: 'Applications mobiles',
      description:
        'Expériences mobiles natives et multiplateformes pensées pour les usages réels, alliant ergonomie de pointe et résilience hors-ligne.',
    },
    {
      id: 'qa-testing',
      number: '04',
      title: 'QA & Tests',
      description:
        'Validation fonctionnelle, technique et performance. Qualification rigoureuse garantissant la fiabilité et la conformité de vos systèmes.',
    },
    {
      id: 'test-automation',
      number: '05',
      title: 'Automatisation des tests',
      description:
        'Mise en place de frameworks d’automatisation et pipelines CI/CD pour éliminer les régressions et accélérer les cycles de livraison.',
    },
    {
      id: 'systems-integration',
      number: '06',
      title: 'Intégration de systèmes',
      description:
        'Interopérabilité fluide de vos outils hérités, progiciels de gestion et architectures modernes via des API et connecteurs sécurisés.',
    },
    {
      id: 'maintenance-evolution',
      number: '07',
      title: 'Maintenance & évolution',
      description:
        'Tierce Maintenance Applicative (TMA) préventive, corrective et évolutive pour garantir la pérennité et la sécurité de vos actifs numériques.',
    },
    {
      id: 'process-digitalization',
      number: '08',
      title: 'Digitalisation des processus',
      description:
        'Analyse des workflows d’entreprise, élimination des tâches redondantes et automatisation fluide des flux opérationnels.',
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
      {/* Precision Ambient Grid Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-[#C59B45]/[0.025] rounded-full blur-[160px]" />
        <div className="absolute bottom-12 right-1/4 w-[600px] h-[600px] bg-[#1D68F2]/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Spacious & Editorial */}
        <div className="max-w-4xl space-y-4 sm:space-y-5 mb-16 sm:mb-20 lg:mb-24">
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
            Nos expertises
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-lg sm:text-xl text-[#9CA6B8] font-light leading-relaxed max-w-3xl"
          >
            Une expertise technologique au service de la performance des entreprises.
          </motion.p>
        </div>

        {/* EDITORIAL SERVICES DOSSIER: Clean, Spacious, Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.06 + (index % 4) * 0.06 }}
              className="group relative rounded-[18px] bg-[#0E1015] p-7 sm:p-9 lg:p-10 border border-white/[0.06] hover:border-white/[0.14] hover:bg-[#11141B] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Index Number */}
                <span className="font-mono text-xs font-semibold text-[#C59B45] tracking-wider block">
                  {service.number}
                </span>

                {/* Service Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
