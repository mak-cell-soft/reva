// NOTE: Dedicated Software Quality & Testing Section for RÉVA Consulting.
// Major competitive differentiator establishing RÉVA as a serious IT testing authority.
// Focuses strictly on QA methodology, the 8 core testing disciplines, and the 5-stage testing pipeline.
// Strictly avoids fake statistics, unverified certifications, or invented client results.
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  ShieldCheck,
  CheckCircle2,
  Workflow,
  ArrowRight,
  Cpu,
  Layers,
  Flame,
  GitBranch,
  Repeat,
} from 'lucide-react';

interface TestingQaSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function TestingQaSection({ locale = 'fr', className }: TestingQaSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = React.useState<number>(1);

  // The 5-stage Software Testing Pipeline required by RÉVA specification
  const pipelineStages = [
    {
      id: 0,
      phase: '01',
      name: 'Development',
      subtitle: 'Conception & Intégration',
      detail: 'Analyse statique, tests unitaires et vérification de la structure du code dès l’écriture.',
      checkpoints: ['Contrats d’interface définis', 'Couverture unitaire vérifiée', 'Validation des types'],
    },
    {
      id: 1,
      phase: '02',
      name: 'Test',
      subtitle: 'Tests Fonctionnels & Techniques',
      detail: 'Exécution des scénarios métiers, vérification des cas d’erreur et validation des flux d’API.',
      checkpoints: ['Scénarios nominaux & limites', 'Validation des réponses API', 'Gestion des exceptions'],
    },
    {
      id: 2,
      phase: '03',
      name: 'Validate',
      subtitle: 'Validation & Non-Régression',
      detail: 'Contrôle d’intégrité des parcours de bout en bout et vérification des impacts sur l’existant.',
      checkpoints: ['Tests E2E multi-navigateurs', 'Non-régression des modules', 'Contrôle des flux métier'],
    },
    {
      id: 3,
      phase: '04',
      name: 'Automate',
      subtitle: 'Automatisation CI/CD',
      detail: 'Intégration des suites de tests au cycle de livraison continu pour un contrôle systématique.',
      checkpoints: ['Suites de tests automatisées', 'Rapports d’exécution CI/CD', 'Alerting en cas d’anomalie'],
    },
    {
      id: 4,
      phase: '05',
      name: 'Release',
      subtitle: 'Déploiement Qualifié',
      detail: 'Validation finale pré-production, tests de fumée (smoke tests) et mise en service sécurisée.',
      checkpoints: ['Smoke tests post-déploiement', 'Contrôle d’intégrité système', 'Feu vert opérationnel'],
    },
  ];

  // The 8 official QA disciplines
  const qaExpertises = [
    {
      title: 'Tests fonctionnels',
      code: 'QA_FN',
      description: 'Vérification méticuleuse de la conformité des fonctionnalités métier vis-à-vis des spécifications et des règles d’affaires.',
      icon: CheckCircle2,
    },
    {
      title: 'Tests techniques',
      code: 'QA_TC',
      description: 'Validation de l’architecture interne, de la robustesse des exceptions, de la sécurité des échanges et de la gestion de mémoire.',
      icon: Cpu,
    },
    {
      title: 'Tests de non-régression',
      code: 'QA_RG',
      description: 'Détection systématique des effets de bord involontaires lors de l’ajout de fonctionnalités ou de la mise à jour des environnements.',
      icon: Repeat,
    },
    {
      title: 'Tests de performance',
      code: 'QA_PF',
      description: 'Évaluation de la scalabilité et du comportement sous charge pour identifier et éliminer les goulots d’étranglement.',
      icon: Flame,
    },
    {
      title: 'Tests d’API',
      code: 'QA_API',
      description: 'Validation rigoureuse des contrats d’interface, des schémas de payload JSON/REST et de la résilience des microservices.',
      icon: GitBranch,
    },
    {
      title: 'Tests de bout en bout',
      code: 'QA_E2E',
      description: 'Simulation complète des parcours utilisateurs critiques à travers l’ensemble des briques de l’écosystème applicatif.',
      icon: Layers,
    },
    {
      title: 'Automatisation des tests',
      code: 'QA_AUT',
      description: 'Conception et maintenance de frameworks de tests automatisés intégrés à vos pipelines d’intégration et livraison continues.',
      icon: Workflow,
    },
    {
      title: 'Assurance qualité (QA)',
      code: 'QA_GOV',
      description: 'Gouvernance globale de la qualité logicielle, élaboration de plans de test stratégiques et traçabilité des anomalies.',
      icon: ShieldCheck,
    },
  ];

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="expertise"
      aria-label="Assurance Qualité & Ingénierie du Test"
      className={cn(
        'relative bg-[#07090E] py-24 sm:py-32 lg:py-40 border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      {/* Precision Ambient Blueprint Visuals: Electric Blue & Metallic Cyan Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Localized technical blue glow */}
        <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] bg-[#1D68F2]/[0.055] rounded-full blur-[170px]" />
        <div className="absolute bottom-1/4 -left-20 w-[550px] h-[550px] bg-[#0284C7]/[0.035] rounded-full blur-[170px]" />
        {/* Fine-line Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* 1. SECTION HEADER: Major Differentiator */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20">
          
          {/* Clean section eyebrow */}
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

          {/* Differentiating Headline */}
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.14]"
          >
            Nous ne nous contentons pas de développer.{' '}
            <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1D68F2] via-[#60A5FA] to-[#CAD0DB]">
              Nous vérifions que ça fonctionne.
            </span>
          </motion.h2>

          {/* Methodological Context */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionFast, delay: 0.14 }}
            className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed max-w-3xl font-light"
          >
            Chez <strong className="text-[#F8FAFC] font-medium">RÉVA Consulting</strong>, le test logiciel n&apos;est pas
            un contrôle a posteriori mais une discipline d&apos;ingénierie intégrée. Nous déployons des protocoles
            méthodologiques stricts pour éprouver vos architectures, sécuriser vos déploiements et garantir
            la continuité opérationnelle de vos systèmes.
          </motion.p>
        </div>

        {/* 2. SOPHISTICATED SOFTWARE TESTING PIPELINE VISUAL */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...transitionFast, delay: 0.15 }}
          className="rounded-[22px] bg-[#0B0E15] border border-[#1E2638] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-8 lg:p-10 mb-20 lg:mb-24 backdrop-blur-md"
        >
          {/* Pipeline Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-4">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-[#1D68F2] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#CAD0DB] font-semibold">
                PIPELINE DE VÉRIFICATION CONTINUE
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10.5px] font-mono text-[#758195]">
              <span>MÉTHODOLOGIE : QUALITÉ INTÉGRÉE</span>
              <span>&bull;</span>
              <span className="text-[#60A5FA]">5 ÉTAPES DE CONTRÔLE</span>
            </div>
          </div>

          {/* Pipeline Flow Stepper (Desktop & Tablet Horizontal Bus) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-6 sm:pt-8">
            {pipelineStages.map((stage) => {
              const isSelected = activeStage === stage.id;
              return (
                <button
                  key={stage.phase}
                  type="button"
                  onClick={() => setActiveStage(stage.id)}
                  className={cn(
                    'p-4 rounded-[12px] text-left transition-all duration-200 border relative group cursor-pointer',
                    isSelected
                      ? 'bg-[#121824] border-[#1D68F2] shadow-[0_0_20px_rgba(29,104,242,0.18)]'
                      : 'bg-[#0E121B] border-white/[0.05] hover:border-white/[0.12] hover:bg-[#111621]'
                  )}
                >
                  {/* Top indicator bar */}
                  <div
                    className={cn(
                      'absolute top-0 left-3 right-3 h-[2px] transition-colors',
                      isSelected ? 'bg-[#1D68F2]' : 'bg-transparent group-hover:bg-white/[0.1]'
                    )}
                  />

                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={cn('font-bold', isSelected ? 'text-[#60A5FA]' : 'text-[#758195]')}>
                      {stage.phase}
                    </span>
                    <span className={cn('text-[9px] uppercase tracking-wider', isSelected ? 'text-[#CAD0DB]' : 'text-[#545F72]')}>
                      PHASE
                    </span>
                  </div>

                  <div className="font-display font-bold text-sm sm:text-base text-[#F8FAFC]">
                    {stage.name}
                  </div>
                  
                  <div className="text-[11px] text-[#758195] font-light mt-0.5 truncate">
                    {stage.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pipeline Stage Deep-Dive Display */}
          <div className="mt-6 p-6 sm:p-7 rounded-[14px] bg-[#0E121B] border border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D68F2] font-semibold">
                  ÉVALUATION DÉTAILLÉE // {pipelineStages[activeStage].name.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC]">
                {pipelineStages[activeStage].subtitle}
              </h3>
              <p className="text-sm text-[#9CA6B8] font-light leading-relaxed">
                {pipelineStages[activeStage].detail}
              </p>
            </div>

            {/* Stage Checkpoints */}
            <div className="space-y-2 pt-2 lg:pt-0 shrink-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] lg:pl-8">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#758195] block mb-2">
                POINTS DE CONTRÔLE CRITIQUES
              </span>
              {pipelineStages[activeStage].checkpoints.map((cp) => (
                <div key={cp} className="flex items-center gap-2 text-xs font-mono text-[#CAD0DB]">
                  <CheckCircle2 className="size-3.5 text-[#1D68F2] shrink-0" />
                  <span>{cp}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. THE 8 QA EXPERTISE DISCIPLINES */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              8 disciplines d’ingénierie du test
            </h3>
            <p className="text-sm text-[#9CA6B8] font-light">
              Des protocoles spécialisés pour chaque dimension de la fiabilité de vos applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qaExpertises.map((qa, index) => {
              const IconComp = qa.icon;
              return (
                <motion.div
                  key={qa.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...transitionFast, delay: 0.08 + (index % 4) * 0.06 }}
                  className="p-6 rounded-[16px] bg-[#0E121B] border border-white/[0.06] hover:border-[#1D68F2]/45 hover:bg-[#111622] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="p-2 rounded-[8px] bg-[#161B28] border border-white/[0.06] text-[#60A5FA] w-fit group-hover:border-[#1D68F2]/40 transition-colors">
                      <IconComp className="size-4 text-[#1D68F2]" />
                    </div>

                    <h4 className="font-display font-bold text-base text-[#F8FAFC] group-hover:text-white transition-colors">
                      {qa.title}
                    </h4>

                    <p className="text-xs text-[#8B95A5] leading-relaxed font-light">
                      {qa.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. METHODOLOGY ACTION BANNER */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...transitionFast, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-[20px] bg-[#0E121B] border border-[#1E2638] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D68F2] font-semibold">
              DIAGNOSTIC &amp; PLAN D’ASSURANCE QUALITÉ
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Vous préparez un lancement critique ou souhaitez auditer vos suites de test ?
            </h3>
            <p className="text-sm text-[#9CA6B8] font-light">
              Échangez avec nos ingénieurs QA pour cadrer votre stratégie de qualification logicielle.
            </p>
          </div>

          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#1D68F2] hover:bg-[#3B82F6] active:bg-[#1552C6] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(29,104,242,0.25)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D68F2]"
          >
            <span>Auditer la qualité de votre système</span>
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
