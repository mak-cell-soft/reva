// NOTE: RÉVA Consulting "Réalisations" Section.
// Features authentic production projects: SOCOFEB Décor and Luxaven.
// Editorial, high-end presentation with large imagery, clean typography, and zero badge clutter.
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface RealisationsSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

interface ProjectData {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly image: string;
  readonly url: string;
  readonly accent: 'gold' | 'silver';
}

export function RealisationsSection({ className }: RealisationsSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  // Authentic RÉVA projects
  const projects: readonly ProjectData[] = [
    {
      id: 'socofeb-decor',
      name: 'SOCOFEB DÉCOR',
      category: 'Website / Digital Experience',
      description:
        'Conception et développement de la plateforme web de SOCOFEB Décor, valorisant l’ensemble des collections de panneaux décoratifs, bois et matériaux d’agencement intérieur à travers un catalogue digital fluide et immersif.',
      image: '/images/realisations/socofeb-decor.jpg',
      url: 'https://socofeb-decor.com/',
      accent: 'gold',
    },
    {
      id: 'luxaven',
      name: 'LUXAVEN',
      category: 'Digital Experience / Web',
      description:
        'Développement d’une vitrine numérique d’exception pour le studio LUXAVEN, mettant en scène des objets d’art sculpturaux, des pièces de mobilier architectural et des collections rares dans un écrin digital minimaliste et raffiné.',
      image: '/images/realisations/luxaven.jpg',
      url: 'https://luxaven.art/',
      accent: 'silver',
    },
  ];

  return (
    <section
      id="realisations"
      aria-label="Réalisations RÉVA Consulting"
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
        
        {/* SECTION HEADER: Clean, confident, minimal */}
        <div className="max-w-4xl space-y-4 sm:space-y-5 mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionSmooth}
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              RÉALISATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]"
          >
            Des projets concrets,{' '}
            <span className="text-[#C59B45]">des solutions pensées pour durer.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.16 }}
            className="font-sans text-base sm:text-lg text-[#9CA6B8] max-w-3xl leading-relaxed font-light"
          >
            Chaque réalisation traduit notre exigence de qualité, d’ergonomie et de robustesse technique au service de l’activité de nos clients.
          </motion.p>
        </div>

        {/* PROJECTS SHOWCASE: Large, premium, label-light */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionSmooth, delay: index * 0.1 }}
                className={cn(
                  'group relative bg-[#0D0F14] border border-white/[0.08] rounded-[24px]',
                  'p-6 sm:p-8 lg:p-12 transition-all duration-300',
                  'hover:border-white/[0.16] hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)]'
                )}
              >
                <div
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center',
                    isReversed && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  )}
                >
                  {/* Visual Preview */}
                  <div className="lg:col-span-7">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/9] w-full rounded-[16px] overflow-hidden bg-[#12151D] border border-white/[0.08] group-hover:border-white/[0.2] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} — Présentation du projet`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/40 via-transparent to-transparent pointer-events-none" />
                    </a>
                  </div>

                  {/* Editorial Text & CTA */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      {/* Single clean category identifier */}
                      <span className="text-xs font-mono tracking-wider uppercase text-[#758195]">
                        {project.category}
                      </span>

                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8FAFC]">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Découvrir le site de ${project.name} (ouvre dans un nouvel onglet)`}
                        className={cn(
                          'inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer',
                          'text-[#F8FAFC] bg-[#141822] hover:bg-[#1A202E] border border-white/[0.1] hover:border-white/[0.25]',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]'
                        )}
                      >
                        <span>Découvrir le site</span>
                        <ArrowUpRight className="size-4 text-[#C59B45] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
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
