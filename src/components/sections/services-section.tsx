// NOTE: Main Services Section for RÉVA Consulting.
// Features an expansive editorial layout covering the 8 technical disciplines.
// Designed with large typography, dark surfaces, gold details, and engineered blue hover interactions.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

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
  readonly category: string;
  readonly description: string;
  readonly tag: string;
  readonly isFlagship?: boolean;
}

export function ServicesSection({ locale = 'fr', className }: ServicesSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  // The 8 official services defined in the RÉVA Consulting specification
  const services: readonly ServiceData[] = [
    {
      id: 'custom-erp',
      number: '01',
      title: 'Logiciels métier & ERP',
      category: 'PÔLE ÉDITION & DÉVELOPPEMENT',
      description:
        'Conception et édition de plateformes d’entreprise sur-mesure et déploiement de la suite souveraine Élancé ERP pour unifier et piloter vos opérations critiques.',
      tag: 'ÉLANCÉ ERP // CORE',
      isFlagship: true,
    },
    {
      id: 'web-apps',
      number: '02',
      title: 'Applications Web',
      category: 'INGÉNIERIE CLOUD',
      description:
        'Architectures web modernes, réactives et sécurisées, conçues pour supporter des charges intensives et des règles d’affaires complexes sans compromis.',
      tag: 'NEXT.JS // RESILIENT API',
    },
    {
      id: 'mobile-apps',
      number: '03',
      title: 'Applications mobiles',
      category: 'SOLUTIONS MOBILES',
      description:
        'Applications natives et multiplateformes iOS & Android alliant ergonomie de pointe, synchronisation temps réel et résilience hors-ligne.',
      tag: 'IOS & ANDROID // OFFLINE-FIRST',
    },
    {
      id: 'qa-testing',
      number: '04',
      title: 'Tests logiciels & QA',
      category: 'CENTRE D’EXCELLENCE TEST',
      description:
        'Audit qualité exhaustif, vérification fonctionnelle, tests d’acceptation et analyses de robustesse garantissant la conformité et la pérennité de vos systèmes.',
      tag: 'QUALITÉ CONTINUE // ZERO-RÉGRESSION',
      isFlagship: true,
    },
    {
      id: 'test-automation',
      number: '05',
      title: 'Automatisation des tests',
      category: 'INGÉNIERIE DU TEST',
      description:
        'Mise en place de frameworks d’automatisation CI/CD pour éliminer les régressions, fiabiliser les déploiements et accélérer les cycles de livraison logicielle.',
      tag: 'CI/CD // AUTOMATED SUITES',
    },
    {
      id: 'systems-integration',
      number: '06',
      title: 'Intégration de systèmes',
      category: 'ARCHITECTURE SYSTÈME',
      description:
        'Interopérabilité fluide de vos outils hérités, ERP tiers et architectures modernes via des bus d’intégration performants et des protocoles sécurisés.',
      tag: 'ETL & ESB // API GATEWAYS',
    },
    {
      id: 'maintenance-evolution',
      number: '07',
      title: 'Maintenance & évolution',
      category: 'PÉRENNITÉ LOGICIELLE',
      description:
        'Tierce Maintenance Applicative (TMA) préventive, corrective et évolutive pour garantir la longévité, la sécurité et l’adéquation de vos actifs numériques.',
      tag: 'TMA // CONTINUOUS EVOLUTION',
    },
    {
      id: 'process-digitalization',
      number: '08',
      title: 'Digitalisation des processus',
      category: 'TRANSFORMATION DIGITALE',
      description:
        'Analyse approfondie de vos workflows métiers, élimination des points de friction opérationnels et automatisation intelligente des flux d’information.',
      tag: 'WORKFLOW OPTIMIZATION // EFFICIENCY',
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
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Localized subtle gold ambient glow at top */}
        <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-[#C59B45]/[0.03] rounded-full blur-[160px]" />
        {/* Localized subtle blue ambient glow at bottom */}
        <div className="absolute bottom-12 right-1/4 w-[600px] h-[600px] bg-[#1D68F2]/[0.035] rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* SECTION HEADER: Spacious & Editorial */}
        <div className="max-w-4xl space-y-5 sm:space-y-6 mb-16 sm:mb-20 lg:mb-24">
          {/* Eyebrow Index */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionFast}
            className="flex items-center gap-3"
          >
            <span className="text-[10.5px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C59B45] font-semibold">
              CATALOGUE TECHNIQUE // 08 DOMAINES D&apos;INTERVENTION
            </span>
            <span className="h-[1px] w-12 bg-[#C59B45]/40" />
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            Nos expertises
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-lg sm:text-xl lg:text-2xl text-[#9CA6B8] font-light leading-relaxed max-w-3xl"
          >
            Une expertise technologique au service de la performance des entreprises.
          </motion.p>
        </div>

        {/* EDITORIAL SERVICES DOSSIER: Asymmetric & Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.article
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...transitionFast, delay: 0.1 + (index % 4) * 0.08 }}
                className={cn(
                  'group relative rounded-[18px] bg-[#0E1015] p-7 sm:p-9 lg:p-10 border transition-all duration-300 flex flex-col justify-between overflow-hidden',
                  // Engineered border state
                  isHovered
                    ? 'border-[#1D68F2]/45 bg-[#12151D] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.85)]'
                    : 'border-white/[0.06] hover:border-white/[0.12]',
                  // Flagship spanning accent
                  service.isFlagship && 'md:border-t-2 md:border-t-[#C59B45]/50'
                )}
              >
                {/* Precision Top Engineered Accent Hairline */}
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300',
                    isHovered
                      ? 'bg-gradient-to-r from-[#1D68F2] via-[#3B82F6] to-transparent opacity-100'
                      : 'bg-transparent opacity-0'
                  )}
                />

                {/* Top Row: Monospace Index Number & Technical Category */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    {/* Number: Gold Details */}
                    <span className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#C59B45]">
                      {service.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#758195]">
                      {'//'} {service.category}
                    </span>
                  </div>

                  {/* Engineered Status Badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'size-1.5 rounded-full transition-colors duration-200',
                        isHovered ? 'bg-[#1D68F2] shadow-[0_0_8px_#1D68F2]' : 'bg-[#758195]/40'
                      )}
                    />
                    <span className="hidden sm:inline text-[9.5px] font-mono uppercase tracking-wider text-[#758195]">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Middle: Title, Description & Schematic Wireframe */}
                <div className="py-7 sm:py-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Subtle Engineered Vector Wireframe Schematic */}
                    <div className="shrink-0 pt-1 text-[#758195] group-hover:text-[#60A5FA] transition-colors">
                      {service.number === '01' && (
                        /* ERP Modular Database Nodes */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="3" y="3" width="7" height="7" rx="1.5" />
                          <rect x="14" y="3" width="7" height="7" rx="1.5" />
                          <rect x="3" y="14" width="7" height="7" rx="1.5" />
                          <rect x="14" y="14" width="7" height="7" rx="1.5" />
                          <path d="M10 6.5H14M6.5 10V14M17.5 10V14M10 17.5H14" strokeOpacity="0.5" />
                        </svg>
                      )}
                      {service.number === '02' && (
                        /* Web Cloud Node Frame */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M2 9H22" strokeOpacity="0.5" />
                          <circle cx="6" cy="6.5" r="1" fill="currentColor" />
                          <circle cx="10" cy="6.5" r="1" fill="currentColor" />
                          <path d="M7 14L10 17L17 12" strokeOpacity="0.7" />
                        </svg>
                      )}
                      {service.number === '03' && (
                        /* Mobile Dual Device */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="5" y="2" width="14" height="20" rx="3" />
                          <line x1="10" y1="18" x2="14" y2="18" strokeLinecap="round" />
                          <circle cx="12" cy="5" r="0.8" fill="currentColor" />
                        </svg>
                      )}
                      {service.number === '04' && (
                        /* QA Precision Crosshair */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <circle cx="12" cy="12" r="8" />
                          <line x1="12" y1="2" x2="12" y2="6" />
                          <line x1="12" y1="18" x2="12" y2="22" />
                          <line x1="2" y1="12" x2="6" y2="12" />
                          <line x1="18" y1="12" x2="22" y2="12" />
                          <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
                        </svg>
                      )}
                      {service.number === '05' && (
                        /* Automated Pipeline Loop */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <circle cx="6" cy="6" r="3" />
                          <circle cx="18" cy="18" r="3" />
                          <path d="M9 6H15C16.6569 6 18 7.34315 18 9V15M6 9V15C6 16.6569 7.34315 18 9 18H15" />
                        </svg>
                      )}
                      {service.number === '06' && (
                        /* Interconnected Bus Gateway */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="8" y="8" width="8" height="8" rx="1.5" />
                          <path d="M4 12H8M16 12H20M12 4V8M12 16V20" />
                          <circle cx="4" cy="12" r="1.5" />
                          <circle cx="20" cy="12" r="1.5" />
                        </svg>
                      )}
                      {service.number === '07' && (
                        /* Lifecycle Loop Heartbeat */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M4 12C4 7.58172 7.58172 4 12 4C15.8 4 19 6.7 19.8 10.3M20 12C20 16.4183 16.4183 20 12 20C8.2 20 5 17.3 4.2 13.7" />
                          <polyline points="20,7 20,11 16,11" />
                          <polyline points="4,17 4,13 8,13" />
                        </svg>
                      )}
                      {service.number === '08' && (
                        /* Workflow Optimization Gauge */
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row: Engineered Action Link */}
                <div className="pt-6 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#758195] group-hover:text-[#CAD0DB] transition-colors">
                    Dossier technique
                  </span>

                  <Link
                    href={`/${locale}#contact`}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]',
                      isHovered ? 'text-[#60A5FA]' : 'text-[#DFC489]'
                    )}
                    aria-label={`Consulter le dossier technique pour ${service.title}`}
                  >
                    <span>Explorer le périmètre</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner: Direct Bridge to Project Scoping */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...transitionFast, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-[20px] bg-[#111318] border border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C59B45] font-semibold">
              INGÉNIERIE SUR-MESURE &bull; ARCHITECTURE DÉDIÉE
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Votre projet nécessite une architecture spécifique ou une mission d’audit QA ?
            </h3>
            <p className="text-sm text-[#9CA6B8] font-light">
              Nos architectes logiciels et experts en assurance qualité interviennent dès la phase de cadrage.
            </p>
          </div>

          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]"
          >
            <span>Démarrer un cadrage technique</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
