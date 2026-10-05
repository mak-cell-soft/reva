// NOTE: Dedicated Élancé ERP Product Spotlight Section for RÉVA Consulting.
// Establishes clear visual and strategic hierarchy:
// RÉVA Consulting (Software Publisher / Éditeur) → Élancé ERP (Flagship Solution).
// Features a high-fidelity interactive dashboard mockup and the 11 authentic conceptual capabilities.
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  TrendingUp,
  BarChart3,
  HardHat,
  Package,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Truck,
  FileCheck2,
  Workflow,
  ChevronRight,
} from 'lucide-react';

interface ElanceSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function ElanceErpSection({ className }: ElanceSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = React.useState<'overview' | 'chantiers' | 'commercial' | 'stock'>('overview');

  // The official capabilities within Élancé ERP scope
  const capabilities = [
    {
      name: 'Gestion commerciale',
      icon: TrendingUp,
      domain: 'Commerce',
      description: 'Devis, facturation, bons de commande et suivi des marges en temps réel.',
    },
    {
      name: 'Produits & services',
      icon: Layers,
      domain: 'Catalogue',
      description: 'Nomenclature articles, grilles tarifaires dynamiques et gestion des unités.',
    },
    {
      name: 'Ventes',
      icon: ArrowUpRight,
      domain: 'Facturation',
      description: 'Pipeline de conversion, gestion des encaissements et relances automatisées.',
    },
    {
      name: 'Achats',
      icon: Truck,
      domain: 'Approvisionnement',
      description: 'Commandes fournisseurs, réceptions de marchandises et contrôle facturation.',
    },
    {
      name: 'Stocks',
      icon: Package,
      domain: 'Logistique',
      description: 'Gestion multi-dépôts, inventaires tournants et alertes de réapprovisionnement.',
    },
    {
      name: 'Production',
      icon: Workflow,
      domain: 'Ateliers',
      description: 'Ordres de fabrication, gammes opératoires et suivi d’avancement des séries.',
    },
    {
      name: 'Chantiers',
      icon: HardHat,
      domain: 'Opérations',
      description: 'Suivi budgétaire, allocation de ressources, avancement et rentabilité par affaire.',
    },
    {
      name: 'Reporting',
      icon: BarChart3,
      domain: 'Pilotage',
      description: 'Tableaux de bord consolidés, KPIs de rentabilité et analyses financières.',
    },
    {
      name: 'Digitalisation des processus',
      icon: FileCheck2,
      domain: 'Automatisation',
      description: 'Suppression des ressaisies manuelles et fluidification des flux opérationnels.',
    },
  ];

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="elance-erp"
      aria-label="Élancé ERP — Solution développée et commercialisée par RÉVA Consulting"
      className={cn(
        'relative bg-[#07080B] py-24 sm:py-32 lg:py-36 border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      {/* Anchor for #elance navigation */}
      <span id="elance" className="sr-only" />

      {/* Background Visual Transition: RÉVA Near-Black into Élancé Technological Space */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-10 w-[750px] h-[750px] bg-[#1D68F2]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#C59B45]/[0.035] rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* 1. STRATEGIC POSITIONING HEADER */}
        <div className="max-w-4xl space-y-8 mb-16 sm:mb-20">
          
          {/* Explicit Corporate Architecture: RÉVA Consulting -> Éditeur de logiciels -> Élancé ERP */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionFast}
            className="p-4 sm:p-5 rounded-[16px] bg-[#0E1118]/80 border border-white/[0.08] backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Publisher Entity */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-[8px] bg-[#141822] border border-white/[0.08]">
                  <Image
                    src="/images/logos/logo-reva.jpeg"
                    alt="RÉVA Consulting"
                    width={48}
                    height={32}
                    className="h-6 w-auto aspect-[1599/1076] object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#F8FAFC]">
                    RÉVA Consulting
                  </div>
                  <div className="text-[11px] font-mono text-[#C59B45]">
                    Éditeur de logiciels
                  </div>
                </div>
              </div>

              {/* Relationship Vector */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#545F72] px-2">
                <span className="hidden sm:inline">────</span>
                <span className="text-[#3B82F6]">développe &amp; édite</span>
                <ChevronRight className="size-4 text-[#3B82F6]" />
              </div>

              {/* Flagship Product */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-[8px] bg-[#0A1224] border border-[#3B82F6]/30">
                  <Image
                    src="/images/logos/logo-elance.svg"
                    alt="Élancé ERP — logiciel de gestion développé par RÉVA Consulting"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#60A5FA]">
                    Élancé ERP
                  </div>
                  <div className="text-[11px] font-mono text-[#9CA6B8]">
                    Solution logicielle principale
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Official Élancé Logo & Headline Presentation */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              {/* Official SVG Asset */}
              <div className="relative size-16 sm:size-20 shrink-0 p-2.5 rounded-[18px] bg-[#0E131E] border border-[#3B82F6]/30 shadow-[0_4px_28px_rgba(29,104,242,0.25)]">
                <Image
                  src="/images/logos/logo-elance.svg"
                  alt="Élancé ERP — logiciel de gestion développé par RÉVA Consulting"
                  width={64}
                  height={64}
                  className="size-full object-contain"
                  priority
                />
              </div>

              <div>
                <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC]">
                  Élancé <span className="text-[#3B82F6]">ERP</span>
                </h2>
                <p className="font-display text-xl sm:text-2xl text-[#DFC489] font-medium tracking-tight mt-1">
                  L&apos;ERP développé par <span className="text-[#F8FAFC] font-semibold">RÉVA Consulting</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Strategic Message */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="space-y-3"
          >
            <p className="text-lg sm:text-xl text-[#F8FAFC] font-medium leading-snug">
              Une solution de gestion pensée pour centraliser, simplifier et digitaliser les opérations de l&apos;entreprise.
            </p>
            <p className="text-base text-[#9CA6B8] leading-relaxed max-w-3xl font-light">
              <strong className="text-[#DFC489] font-medium">Élancé ERP</strong> est le progiciel phare développé et commercialisé par <strong className="text-[#F8FAFC] font-medium">RÉVA Consulting</strong>. Conçu pour unifier la gestion commerciale, les stocks multi-dépôts, les achats, les ventes, la production, le suivi de chantiers et le reporting financier en temps réel.
            </p>
          </motion.div>

          {/* Primary CTA - Direct Link to https://acya.site/ */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="https://acya.site/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Découvrir Élancé ERP — Ouvre le site officiel dans un nouvel onglet"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_4px_20px_rgba(197,155,69,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] group cursor-pointer"
            >
              <span>Découvrir Élancé</span>
              <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-xs font-mono text-[#758195] sm:pl-2">
              <span className="text-[#60A5FA] font-medium">acya.site</span>
              <span className="hidden sm:inline text-[#545F72]">&bull;</span>
              <span>SITE OFFICIEL &bull; DÉPLOIEMENT CLOUD OU ON-PREMISE</span>
            </div>
          </motion.div>
        </div>

        {/* 2. LARGE PRODUCT VISUAL / ENTERPRISE ERP DASHBOARD MOCKUP */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...transitionFast, delay: 0.15 }}
          className="relative rounded-[22px] bg-[#0E1118] border border-white/[0.1] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden mb-20 lg:mb-28"
        >
          {/* Top Window Chrome / ERP App Bar */}
          <div className="h-14 sm:h-16 px-5 sm:px-8 bg-[#13161F] border-b border-white/[0.08] flex items-center justify-between gap-4">
            
            {/* Left: Window Controls + Élancé Brand Mark */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#384152]" />
                <span className="size-2.5 rounded-full bg-[#2A3140]" />
                <span className="size-2.5 rounded-full bg-[#1F2430]" />
              </div>

              <div className="h-4 w-[1px] bg-white/[0.08] hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/images/logos/logo-elance.svg"
                    alt="Élancé ERP"
                    width={20}
                    height={20}
                    className="size-full object-contain"
                  />
                </div>
                <span className="font-display font-bold text-sm tracking-tight text-[#F8FAFC]">
                  Élancé <span className="text-[#3B82F6]">ERP</span>
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono uppercase tracking-wider text-[#758195] px-2 py-0.5 rounded bg-[#0A0C11] border border-white/[0.06]">
                  Édité par RÉVA
                </span>
              </div>
            </div>

            {/* Center: Module View Switcher */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-[8px] bg-[#0A0C11] border border-white/[0.06] text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={cn(
                  'px-3 py-1 rounded-[6px] transition-colors',
                  activeTab === 'overview'
                    ? 'bg-[#1C202C] text-[#F8FAFC] shadow-sm'
                    : 'text-[#758195] hover:text-[#CAD0DB]'
                )}
              >
                Vue d&apos;ensemble
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('chantiers')}
                className={cn(
                  'px-3 py-1 rounded-[6px] transition-colors',
                  activeTab === 'chantiers'
                    ? 'bg-[#1C202C] text-[#F8FAFC] shadow-sm'
                    : 'text-[#758195] hover:text-[#CAD0DB]'
                )}
              >
                Chantiers &amp; Affaires
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('commercial')}
                className={cn(
                  'px-3 py-1 rounded-[6px] transition-colors',
                  activeTab === 'commercial'
                    ? 'bg-[#1C202C] text-[#F8FAFC] shadow-sm'
                    : 'text-[#758195] hover:text-[#CAD0DB]'
                )}
              >
                Ventes &amp; Facturation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('stock')}
                className={cn(
                  'px-3 py-1 rounded-[6px] transition-colors',
                  activeTab === 'stock'
                    ? 'bg-[#1C202C] text-[#F8FAFC] shadow-sm'
                    : 'text-[#758195] hover:text-[#CAD0DB]'
                )}
              >
                Stock &amp; Achats
              </button>
            </div>

            {/* Right: Simple System Status */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#34D399]">
              <span className="size-1.5 rounded-full bg-[#10B981]" />
              <span className="hidden sm:inline">Système actif</span>
            </div>
          </div>

          {/* Mockup Workspace Body */}
          <div className="p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 bg-[#090B10]">
            
            {/* Top KPI Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="p-4 sm:p-5 rounded-[14px] bg-[#11141D] border border-white/[0.06]">
                <span className="text-[10.5px] font-mono uppercase text-[#758195] block">
                  CHIFFRE D&apos;AFFAIRES MOIS
                </span>
                <div className="text-xl sm:text-2xl font-bold font-display text-[#F8FAFC] mt-1.5">
                  184 250,00 €
                </div>
                <div className="text-[11px] text-[#34D399] font-mono mt-1 flex items-center gap-1">
                  <span>+14.8%</span>
                  <span className="text-[#758195]">vs N-1</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-[14px] bg-[#11141D] border border-white/[0.06]">
                <span className="text-[10.5px] font-mono uppercase text-[#758195] block">
                  CHANTIERS &amp; AFFAIRES EN COURS
                </span>
                <div className="text-xl sm:text-2xl font-bold font-display text-[#F8FAFC] mt-1.5">
                  24 Projets
                </div>
                <div className="text-[11px] text-[#DFC489] font-mono mt-1 flex items-center gap-1">
                  <span>100% Dématérialisé</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-[14px] bg-[#11141D] border border-white/[0.06]">
                <span className="text-[10.5px] font-mono uppercase text-[#758195] block">
                  COMMANDES D&apos;ACHAT
                </span>
                <div className="text-xl sm:text-2xl font-bold font-display text-[#F8FAFC] mt-1.5">
                  48 Traitées
                </div>
                <div className="text-[11px] text-[#38BDF8] font-mono mt-1 flex items-center gap-1">
                  <span>0 rupture signalée</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-[14px] bg-[#11141D] border border-white/[0.06]">
                <span className="text-[10.5px] font-mono uppercase text-[#758195] block">
                  CONFORMITÉ COMPTABLE
                </span>
                <div className="text-xl sm:text-2xl font-bold font-display text-[#F8FAFC] mt-1.5">
                  99.9%
                </div>
                <div className="text-[11px] text-[#34D399] font-mono mt-1 flex items-center gap-1">
                  <span>Synchronisé FEC</span>
                </div>
              </div>

            </div>

            {/* Operational Table Mockup: Active Chantiers & Business Orders */}
            <div className="rounded-[16px] bg-[#11141D] border border-white/[0.06] overflow-hidden">
              <div className="p-4 sm:p-5 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#F8FAFC]">
                    Pilotage Opérationnel — Chantiers &amp; Engagements Clients
                  </h4>
                  <p className="text-xs text-[#758195] font-light mt-0.5">
                    Données centralisées en temps réel issues des modules Ventes, Achats et Chantiers.
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase text-[#C59B45] px-2.5 py-1 rounded bg-[#C59B45]/10 border border-[#C59B45]/20">
                  Vue Directrice
                </span>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0C0E14] text-[#758195] font-mono uppercase text-[10px] border-b border-white/[0.04]">
                    <tr>
                      <th className="py-3 px-4 sm:px-6">Réf. Affaire</th>
                      <th className="py-3 px-4 sm:px-6">Client / Tiers</th>
                      <th className="py-3 px-4 sm:px-6">Budget Engagé</th>
                      <th className="py-3 px-4 sm:px-6">Avancement</th>
                      <th className="py-3 px-4 sm:px-6">Statut GED</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-[#CAD0DB]">
                    <tr className="hover:bg-[#151924] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-[#DFC489]">#CH-2026-084</td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#F8FAFC]">Groupe Industriel Rhône</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono">68 400,00 €</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-[#1F2430] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#C59B45] h-full w-[85%]" />
                          </div>
                          <span className="font-mono text-[10px] text-[#C59B45]">85%</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1 text-[10.5px] font-mono text-[#34D399]">
                          <CheckCircle2 className="size-3" />
                          <span>Conforme</span>
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-[#151924] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-[#DFC489]">#CH-2026-089</td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#F8FAFC]">Alliance Logistique Est</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono">112 800,00 €</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-[#1F2430] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#1D68F2] h-full w-[60%]" />
                          </div>
                          <span className="font-mono text-[10px] text-[#60A5FA]">60%</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1 text-[10.5px] font-mono text-[#34D399]">
                          <CheckCircle2 className="size-3" />
                          <span>Conforme</span>
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-[#151924] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-[#DFC489]">#CH-2026-092</td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#F8FAFC]">Société Métallurgique SA</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono">43 200,00 €</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-[#1F2430] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#34D399] h-full w-[95%]" />
                          </div>
                          <span className="font-mono text-[10px] text-[#34D399]">95%</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1 text-[10.5px] font-mono text-[#34D399]">
                          <CheckCircle2 className="size-3" />
                          <span>Conforme</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. CAPABILITIES GRID */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Les modules unifiés pour orchestrer l&apos;entreprise
            </h3>
            <p className="text-sm text-[#9CA6B8] font-light">
              Chaque brique est pensée pour interagir nativement avec l&apos;ensemble de la suite, sans rupture de données.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {capabilities.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={cap.name}
                  className="p-5 rounded-[14px] bg-[#0E1017] border border-white/[0.06] hover:border-[#C59B45]/40 hover:bg-[#12151F] transition-all duration-200 group"
                >
                  <div className="mb-3">
                    <div className="p-2 rounded-[8px] bg-[#171A24] border border-white/[0.06] text-[#CAD0DB] w-fit group-hover:text-[#DFC489] transition-colors">
                      <IconComponent className="size-4" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#F8FAFC] group-hover:text-white transition-colors">
                    {cap.name}
                  </h4>
                  
                  <p className="text-xs text-[#8B95A5] mt-1.5 leading-relaxed font-light">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Flagship Product Showcase Footer CTA to https://acya.site/ */}
          <div className="pt-8">
            <div className="p-6 sm:p-8 rounded-[18px] bg-gradient-to-r from-[#0E131E] via-[#101420] to-[#0E1118] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3B82F6]">
                  <span className="size-2 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span>ACYA.SITE // DÉPLOIEMENT &amp; ACCÈS DIRECT</span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  Découvrez la solution complète Élancé ERP
                </h4>
                <p className="text-sm text-[#9CA6B8] max-w-xl font-light">
                  Accédez à la plateforme officielle d&apos;Élancé pour tester les modules, consulter la documentation produit ou planifier une démonstration dédiée avec l&apos;équipe RÉVA Consulting.
                </p>
              </div>

              <a
                href="https://acya.site/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accéder au site officiel Élancé sur acya.site (ouvre dans un nouvel onglet)"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] group cursor-pointer"
              >
                <span>Accéder à acya.site</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
