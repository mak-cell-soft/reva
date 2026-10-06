// NOTE: Final Signature CTA Section for RÉVA Consulting.
// Quiet, confident, mature consulting invitation.
// Eliminates artificial badge boxes, fake guarantee pills, and decorative icons.
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/lib/brand.config';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function CtaSection({ className }: CtaSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="contact"
      aria-label="Contact et engagement projet RÉVA Consulting"
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={transitionSmooth}
          className="p-8 sm:p-14 lg:p-16 rounded-[24px] bg-[#0D0F14] border border-white/[0.08] text-center space-y-8"
        >
          {/* Brand identifier */}
          <div className="inline-flex items-center gap-3">
            <div className="relative h-6 w-auto aspect-[1599/1076] overflow-hidden rounded-[4px] shrink-0">
              <Image
                src="/images/logos/logo-reva.jpeg"
                alt={brandConfig.name}
                width={1599}
                height={1076}
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              RÉVA CONSULTING
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15]">
              Un projet logiciel à concevoir ou à fiabiliser ?
            </h2>
            <p className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed font-light">
              Échangeons sur vos enjeux opérationnels et vos exigences techniques. Nos consultants et ingénieurs analysent vos besoins pour définir une réponse adaptée et pérenne.
            </p>
          </div>

          {/* CTA & Direct Contact */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${brandConfig.contact.email}?subject=Échange%20autour%20d'un%20projet%20logiciel%20-%20RÉVA%20Consulting`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-all duration-200 shadow-[0_2px_14px_rgba(197,155,69,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
            >
              <span>Échanger avec notre équipe</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </div>

          {/* Direct channels */}
          <div className="pt-8 border-t border-white/[0.06] text-xs font-mono text-[#758195] space-y-1">
            <div>
              Canal direct :{' '}
              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="text-[#CAD0DB] hover:text-[#DFC489] transition-colors"
              >
                {brandConfig.contact.email}
              </a>
            </div>
            <div className="text-[11px] text-[#545F72] pt-1">
              {brandConfig.name} &bull; Développer. Tester. Optimiser.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
