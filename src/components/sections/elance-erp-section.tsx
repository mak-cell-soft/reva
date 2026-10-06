// NOTE: Élancé ERP Section for RÉVA Consulting.
// Presents Élancé ERP as RÉVA Consulting's flagship proprietary product realization.
// Articulates a clear, intentional relationship without SaaS gimmickry or fake mockups.
// Seamlessly connects to the official product platform at https://acya.site/
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ElanceSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

interface ModuleArea {
  readonly title: string;
  readonly scope: string;
}

export function ElanceErpSection({ className }: ElanceSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  const operationalAreas: readonly ModuleArea[] = [
    {
      title: 'Gestion Commerciale & Ventes',
      scope: 'Devis, commandes clients, facturation, suivi des encaissements et calcul des marges en temps réel.',
    },
    {
      title: 'Stocks, Achats & Approvisionnement',
      scope: 'Multi-dépôts, inventaires tournants, suivi des réceptions fournisseurs et alertes de réapprovisionnement.',
    },
    {
      title: 'Suivi de Chantiers & Affaires',
      scope: 'Affectation des ressources, suivi budgétaire par affaire, avancement des travaux et rentabilité d’exécution.',
    },
    {
      title: 'Pilotage & Tableaux de Bord',
      scope: 'Consolidation financière, indicateurs de performance opérationnels et exports comptables conformes.',
    },
  ];

  return (
    <section
      id="elance-erp"
      aria-label="Élancé ERP — Solution développée par RÉVA Consulting"
      className={cn(
        'relative bg-[#07080B] py-24 sm:py-32 lg:py-40 border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Content Grid: Clear Relationship Between RÉVA & Élancé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Product Presentation & Direct Access */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-32">
            
            {/* Clear, restrained editorial relationship indicator */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={transitionFast}
            >
              <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#60A5FA]">
                PRODUIT PROPRIÉTAIRE &bull; ÉDITION LOGICIELLE
              </span>
            </motion.div>

            {/* Official Logo & Header */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.08 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-[14px] bg-[#0E131E] border border-[#3B82F6]/30 p-2.5 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logos/logo-elance.svg"
                    alt="Logo officiel Élancé ERP"
                    width={48}
                    height={48}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
                    Élancé <span className="text-[#3B82F6]">ERP</span>
                  </h2>
                  <p className="text-xs font-mono text-[#758195] tracking-wider uppercase mt-0.5">
                    Développé et commercialisé par RÉVA Consulting
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#CAD0DB] font-light leading-relaxed pt-2">
                Élancé est un progiciel de gestion intégré conçu pour unifier l’ensemble des opérations de l’entreprise au sein d’une architecture unique, modulaire et souveraine.
              </p>

              <p className="text-sm text-[#9CA6B8] font-light leading-relaxed">
                Né de notre expérience du terrain et de la rigueur de nos équipes d&apos;ingénierie, Élancé répond aux besoins des structures cherchant à remplacer des outils dispersés par une solution centralisée, fiable et pérenne.
              </p>
            </motion.div>

            {/* Respectful, clear CTA to https://acya.site/ */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.16 }}
              className="pt-2"
            >
              <a
                href="https://acya.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
                aria-label="Accéder au site officiel Élancé ERP sur acya.site (ouvre dans un nouvel onglet)"
              >
                <span>Découvrir la plateforme Élancé</span>
                <ArrowUpRight className="size-4 shrink-0" />
              </a>
              <span className="block mt-2 text-xs font-mono text-[#758195]">
                Accès direct au portail produit : acya.site
              </span>
            </motion.div>

          </div>

          {/* RIGHT: Operational Architecture & Core Modules (Clean, no fake dashboard) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="p-8 sm:p-10 rounded-[20px] bg-[#0E1118] border border-white/[0.08] space-y-8">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  Périmètre fonctionnel unifié
                </h3>
                <p className="text-sm text-[#8E9AA8] font-light mt-1">
                  Les données circulent sans rupture entre les services pour une visibilité complète de l&apos;activité.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {operationalAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-5 rounded-[12px] bg-[#121622] border border-white/[0.06] space-y-2"
                  >
                    <h4 className="font-display font-semibold text-base text-[#F8FAFC]">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#8E9AA8] font-light leading-relaxed">
                      {area.scope}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deployment & Architecture Facts */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#8E9AA8]">
                <div>
                  <span className="text-[#CAD0DB] font-semibold block mb-0.5">MODÈLE DE DÉPLOIEMENT</span>
                  <span>Cloud dédié ou hébergement sur vos propres serveurs (On-premise).</span>
                </div>
                <div>
                  <span className="text-[#CAD0DB] font-semibold block mb-0.5">ACCOMPAGNEMENT RÉVA</span>
                  <span>Paramétrage métier, reprise des données et formation des utilisateurs.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
