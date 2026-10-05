// NOTE: RÉVA Consulting "Réalisations" (Case Studies) Section.
// Reusable, premium editorial case-study architecture avoiding generic portfolio cards.
// Each project clearly articulates: Client/Project, Industry, Problem, Solution, Technologies, and Outcome.
// Uses clearly marked reference template data ready to be swapped with production projects.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CASE_STUDIES } from '@/data/case-studies';
import {
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
  ArrowUpRight,
  Database,
  GitBranch,
  Terminal,
} from 'lucide-react';

interface RealisationsSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function RealisationsSection({ className }: RealisationsSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="realisations"
      aria-label="Réalisations et études de cas RÉVA Consulting"
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      {/* Precision Ambient Blueprint Visuals */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#C59B45]/[0.02] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-[#1D68F2]/[0.025] rounded-full blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* SECTION HEADER: Editorial Case Study Presentation */}
        <div className="max-w-4xl space-y-5 sm:space-y-6 mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionSmooth}
            className="flex items-center gap-2.5"
          >
            <span className="size-1.5 rounded-full bg-[#C59B45]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#C59B45] font-semibold">
              RÉALISATIONS {'//'} ÉTUDES DE CAS
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            Des défis concrets.{' '}
            <span className="text-[#C59B45]">Des architectures durables.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.16 }}
            className="font-sans text-base sm:text-lg text-[#9CA6B8] max-w-3xl leading-relaxed"
          >
            Chaque projet est abordé sous l&apos;angle de l&apos;ingénierie rigoureuse : analyse méthodique
            du problème métier, conception architecturale sur-mesure et qualification systématique de la
            qualité logicielle.
          </motion.p>

          {/* Architecture disclaimer notice */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.22 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-[8px] bg-[#111318] border border-white/[0.08] text-xs font-mono text-[#8E9AA8]"
          >
            <Terminal className="size-3.5 text-[#C59B45] shrink-0" />
            <span>
              <strong className="text-[#CAD0DB]">Gabarits d&apos;études de cas :</strong> Architecture prête
              à la publication des réalisations de production et retours d&apos;expérience clients.
            </span>
          </motion.div>
        </div>

        {/* CASE STUDIES EDITORIAL SEQUENCE */}
        <div className="space-y-16 lg:space-y-24">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={study.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionSmooth, delay: index * 0.1 }}
                className={cn(
                  'group relative bg-[#0D0F14] border border-white/[0.08] rounded-[24px]',
                  'p-6 sm:p-8 lg:p-12 transition-all duration-300',
                  'hover:border-white/[0.16] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]',
                  study.accent === 'gold' && 'hover:border-[#C59B45]/30',
                  study.accent === 'blue' && 'hover:border-[#1D68F2]/30',
                  study.accent === 'silver' && 'hover:border-[#CAD0DB]/30'
                )}
              >
                {/* Top Dossier Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-[6px]',
                        study.accent === 'gold' && 'bg-[#C59B45]/10 text-[#C59B45] border border-[#C59B45]/20',
                        study.accent === 'blue' && 'bg-[#1D68F2]/10 text-[#60A5FA] border border-[#1D68F2]/20',
                        study.accent === 'silver' && 'bg-white/[0.06] text-[#CAD0DB] border border-white/[0.12]'
                      )}
                    >
                      DOSSIER {study.number}
                    </span>
                    <span className="text-xs text-[#758195] font-mono">{'//'}</span>
                    <span className="text-xs font-medium text-[#CAD0DB]">{study.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#758195] tracking-wider uppercase">
                      {study.referenceBadge}
                    </span>
                  </div>
                </div>

                {/* Main Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
                  {/* Content Column */}
                  <div
                    className={cn(
                      'space-y-8 lg:col-span-7',
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    )}
                  >
                    {/* Project & Client Identity */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C59B45]">
                        <span>SECTEUR :</span>
                        <span className="text-[#F8FAFC] font-semibold uppercase">{study.industry}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] leading-tight">
                        {study.clientProject}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#758195] font-mono">
                        Contexte d&apos;intervention : {study.clientType}
                      </p>
                    </div>

                    {/* The 3 Acts: Problem -> Solution -> Outcome */}
                    <div className="space-y-6 text-sm">
                      {/* 1. Problem / Friction */}
                      <div className="p-4 rounded-[12px] bg-[#12141A] border-l-2 border-[#E05252]/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87171]">
                          <AlertCircle className="size-3.5 shrink-0" />
                          <span>Problématique métier & Verrous techniques</span>
                        </div>
                        <p className="text-[#9CA6B8] leading-relaxed font-sans">{study.problem}</p>
                      </div>

                      {/* 2. Solution / Architecture */}
                      <div className="p-4 rounded-[12px] bg-[#12141A] border-l-2 border-[#C59B45]/70 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFC489]">
                          <Cpu className="size-3.5 shrink-0" />
                          <span>Solution architecturale RÉVA</span>
                        </div>
                        <p className="text-[#CAD0DB] leading-relaxed font-sans">{study.solution}</p>
                      </div>

                      {/* 3. Outcome / Operational Value */}
                      <div className="p-4 rounded-[12px] bg-[#12141A] border-l-2 border-[#10B981]/70 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                          <CheckCircle2 className="size-3.5 shrink-0" />
                          <span>Impact opérationnel & Résultats</span>
                        </div>
                        <p className="text-[#F8FAFC] leading-relaxed font-sans font-medium">
                          {study.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Technologies: Subtle and Clean */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#758195] block">
                        Technologies & Composants clés :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-[6px] bg-[#141822] border border-white/[0.06] text-xs font-mono text-[#9CA6B8] transition-colors group-hover:border-white/[0.12]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Visual Column */}
                  <div
                    className={cn(
                      'lg:col-span-5 h-full',
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    )}
                  >
                    <div className="h-full rounded-[16px] bg-[#07080B] border border-white/[0.08] p-6 flex flex-col justify-between space-y-6 relative overflow-hidden">
                      {/* Schematic Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Layers className="size-3.5 text-[#C59B45]" />
                          <span className="text-[11px] font-mono tracking-widest text-[#8E9AA8] uppercase">
                            {study.schematic.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-[#10B981] animate-pulse" />
                          <span className="text-[10px] font-mono text-[#758195]">ACTIVE</span>
                        </div>
                      </div>

                      {/* Schematic Topology Nodes */}
                      <div className="space-y-3 py-2">
                        {study.schematic.nodes.map((node, nodeIdx) => (
                          <div
                            key={node.label}
                            className={cn(
                              'relative p-3.5 rounded-[10px] border transition-colors',
                              node.status === 'primary' &&
                                'bg-[#151922] border-[#C59B45]/40 text-[#F8FAFC]',
                              node.status === 'connected' &&
                                'bg-[#0E1015] border-white/[0.08] text-[#CAD0DB]',
                              node.status === 'validated' &&
                                'bg-[#0E1015] border-[#10B981]/30 text-[#CAD0DB]'
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                {nodeIdx === 0 && <Server className="size-3.5 text-[#758195]" />}
                                {nodeIdx === 1 && <GitBranch className="size-3.5 text-[#C59B45]" />}
                                {nodeIdx === 2 && <ShieldCheck className="size-3.5 text-[#10B981]" />}
                                <span className="text-xs font-semibold tracking-wide">
                                  {node.label}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-[#758195]">
                                {node.status}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#758195] font-mono mt-1 pl-6">
                              {node.role}
                            </p>

                            {/* Connecting Line between nodes */}
                            {nodeIdx < study.schematic.nodes.length - 1 && (
                              <div className="absolute left-6 -bottom-3 w-[1px] h-3 bg-white/[0.12] z-10" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Telemetry / Highlight Indicators */}
                      <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {study.schematic.metricsOrHighlights.map((m) => (
                          <div key={m.label} className="p-2.5 rounded-[8px] bg-[#111319] border border-white/[0.04]">
                            <span className="text-[10px] font-mono text-[#758195] uppercase block">
                              {m.label}
                            </span>
                            <span className="text-xs font-mono font-semibold text-[#CAD0DB] mt-0.5 block truncate">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Footprint Monogram */}
                      <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-[#525D6F]">
                        <div className="flex items-center gap-1.5">
                          <Database className="size-3" />
                          <span>RÉVA ENGINE // SPEC v4.2</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-[#C59B45] transition-colors cursor-pointer">
                          <span>DOCUMENTATION TECHNIQUE</span>
                          <ArrowUpRight className="size-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
