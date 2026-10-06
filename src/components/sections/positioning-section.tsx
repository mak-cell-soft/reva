// NOTE: Positioning Section for RÉVA Consulting.
// Editorial presentation of the company's core doctrine:
// "De l'idée à la solution. De la solution à la qualité."
// Prioritizes typography, spacious layout, and clear hierarchy over decorative cards.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PositioningSectionProps {
  /** Optional locale parameter */
  locale?: string;
  /** Optional additional CSS classes */
  className?: string;
}

interface Principle {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export function PositioningSection({ className }: PositioningSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // The 3 foundational pillars of RÉVA's signature: Développer. Tester. Optimiser.
  const principles: readonly Principle[] = [
    {
      number: '01',
      title: 'Développer',
      description: 'Concevoir des logiciels métier et des architectures logicielles sur-mesure, pensés pour les réalités opérationnelles de votre entreprise.',
    },
    {
      number: '02',
      title: 'Tester',
      description: 'Éprouver la robustesse, la sécurité et la conformité de chaque composant à travers une discipline d’ingénierie QA continue.',
    },
    {
      number: '03',
      title: 'Optimiser',
      description: 'Faire évoluer vos systèmes, supprimer les goulets d’étranglement et pérenniser vos actifs numériques face à votre croissance.',
    },
  ];

  const transitionFast = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="a-propos"
      aria-label="Positionnement & Principes Directeurs"
      className={cn(
        'relative bg-[#08090C] border-t border-white/[0.06] py-24 sm:py-32 lg:py-40 overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* LEFT COLUMN: Editorial Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 sm:space-y-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={transitionFast}
            >
              <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
                LE CABINET
              </span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.08 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15]"
            >
              De l&apos;idée à la solution.
              <span className="block mt-2 text-[#CAD0DB] font-normal">
                De la solution à la qualité.
              </span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionFast, delay: 0.16 }}
              className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed font-light"
            >
              RÉVA réunit l&apos;exigence du conseil technologique et la rigueur d&apos;un éditeur de logiciels. Nous accompagnons les organisations qui ne peuvent pas se permettre des pannes ou des approximations dans leurs outils métier.
            </motion.p>
          </div>

          {/* RIGHT COLUMN: The 3 Core Pillars (Clean Typography, No Fake SVGs) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...transitionFast, delay: 0.1 + index * 0.1 }}
                  className="py-8 sm:py-10 first:pt-6 last:pb-6 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                    {/* Index */}
                    <span className="font-mono text-sm font-semibold text-[#DFC489] tracking-wider shrink-0">
                      {principle.number}
                    </span>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC]">
                        {principle.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
