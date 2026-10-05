// NOTE: Final Signature CTA Section for RÉVA Consulting.
// Features large, commanding typography, subtle champagne gold light, very subtle electric blue accent,
// and the RÉVA logo mark as an architectural background watermark.
// Communicates partnership, engineering rigor, and sober corporate authority.
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/lib/brand.config';
import { ArrowRight, Mail, ShieldCheck, Clock, Terminal } from 'lucide-react';

interface CtaSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function CtaSection({ locale = 'fr', className }: CtaSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="contact"
      aria-label="Contact et engagement projet RÉVA Consulting"
      className={cn(
        'relative bg-[#08090C] py-24 sm:py-32 lg:py-44 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      {/* 1. Precision Ambient Lights: Champagne Gold & Subtle Electric Blue */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft Champagne Gold Core Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full blur-[170px]"
          style={{
            background:
              'radial-gradient(circle, rgba(197, 155, 69, 0.08) 0%, rgba(197, 155, 69, 0.02) 45%, transparent 70%)',
          }}
        />

        {/* Very Subtle Electric Blue Peripheral Accent */}
        <div
          className="absolute bottom-10 right-1/4 w-[500px] h-[350px] rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, rgba(29, 104, 242, 0.04) 0%, transparent 70%)',
          }}
        />

        {/* Precision Coordinate Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Architectural Card Container: The Final Website Signature */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transitionSmooth}
          className={cn(
            'relative rounded-[28px] sm:rounded-[36px] bg-[#0A0C11] border border-white/[0.08]',
            'p-8 sm:p-12 lg:p-20 text-center overflow-hidden',
            'shadow-[0_24px_64px_rgba(0,0,0,0.7)]'
          )}
        >
          {/* Subtle RÉVA Vector Mark Watermark in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] sm:opacity-[0.045] transition-opacity">
            <svg
              className="w-[380px] sm:w-[560px] h-[380px] sm:h-[560px]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer geometric shield */}
              <polygon
                points="50,5 92,26 92,74 50,95 8,74 8,26"
                stroke="#C59B45"
                strokeWidth="1.2"
              />
              {/* Internal diagonal architectural laser lines */}
              <line x1="20" y1="35" x2="80" y2="65" stroke="#1D68F2" strokeWidth="1.2" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#CAD0DB" strokeWidth="0.8" />
              {/* Distinctive stylized R contour */}
              <path
                d="M32 28 H58 C68 28 72 34 72 42 C72 50 66 55 56 55 H42 V72"
                stroke="#C59B45"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52 55 L74 72"
                stroke="#C59B45"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Foreground Content Stack */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-8 sm:space-y-10">
            {/* Professional Brand Eyebrow with Official Studio Emblem */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#12151D] border border-white/[0.08] shadow-inner">
              <div className="relative size-5 rounded-full overflow-hidden border border-[#C59B45]/40 shrink-0">
                <Image
                  src="/images/logos/logo1.jpeg"
                  alt={brandConfig.name}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C59B45] font-medium">
                ENGAGEMENT & PARTENARIAT // RÉVA CONSULTING
              </span>
            </div>

            {/* Primary Headline: Large typography */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
              Un projet logiciel ?{' '}
              <span className="text-[#C59B45]">Construisons-le ensemble.</span>
            </h2>

            {/* Supporting Text: Respectful, partner-oriented */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#9CA6B8] max-w-2xl mx-auto leading-relaxed">
              Parlez-nous de votre besoin. Nous vous aiderons à définir une solution adaptée à vos
              objectifs, votre organisation et votre évolution.
            </p>

            {/* CTAs: Primary & Secondary */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4">
              {/* Primary CTA */}
              <a
                href={`mailto:${brandConfig.contact.email}?subject=Échange%20autour%20d'un%20projet%20logiciel%20-%20RÉVA%20Consulting`}
                className={cn(
                  'w-full sm:w-auto inline-flex items-center justify-center gap-2.5',
                  'px-7 sm:px-9 py-4 rounded-[12px] text-sm font-semibold tracking-wide',
                  'text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132]',
                  'transition-all duration-200 shadow-[0_4px_20px_rgba(197,155,69,0.28)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#C59B45]'
                )}
              >
                <span>Parlons de votre projet</span>
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Secondary CTA */}
              <Link
                href={`/${locale}#contact`}
                className={cn(
                  'w-full sm:w-auto inline-flex items-center justify-center gap-2.5',
                  'px-7 sm:px-8 py-4 rounded-[12px] text-sm font-medium tracking-wide',
                  'text-[#CAD0DB] hover:text-[#F8FAFC] bg-[#12151D] hover:bg-[#181C26]',
                  'border border-white/[0.12] hover:border-white/[0.24]',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#CAD0DB]'
                )}
              >
                <Mail className="size-4 text-[#CAD0DB] shrink-0" />
                <span>Nous contacter</span>
              </Link>
            </div>

            {/* Engineering Commitments & Reassurance Bar */}
            <div className="pt-8 sm:pt-10 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {/* Commitment 1 */}
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-4 text-[#C59B45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#F8FAFC] block">
                    Confidentialité & Rigueur
                  </span>
                  <span className="text-[11px] text-[#758195] font-mono leading-tight block mt-0.5">
                    Échange direct avec des ingénieurs d&apos;expérience
                  </span>
                </div>
              </div>

              {/* Commitment 2 */}
              <div className="flex items-start gap-3">
                <Clock className="size-4 text-[#1D68F2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#F8FAFC] block">
                    Réactivité sous 24h
                  </span>
                  <span className="text-[11px] text-[#758195] font-mono leading-tight block mt-0.5">
                    Prise en charge rapide de votre demande
                  </span>
                </div>
              </div>

              {/* Commitment 3 */}
              <div className="flex items-start gap-3">
                <Terminal className="size-4 text-[#CAD0DB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#F8FAFC] block">
                    Cadrage Technique
                  </span>
                  <span className="text-[11px] text-[#758195] font-mono leading-tight block mt-0.5">
                    Audit architectural & Démonstration Élancé ERP
                  </span>
                </div>
              </div>
            </div>

            {/* Final Signature Monogram */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#525D6F]">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[#8E9AA8]">
                  Canal direct :{' '}
                  <a
                    href={`mailto:${brandConfig.contact.email}`}
                    className="text-[#DFC489] hover:underline"
                  >
                    {brandConfig.contact.email}
                  </a>
                </span>
              </div>
              <span className="tracking-widest uppercase">
                {brandConfig.legalName} {'//'} {brandConfig.tagline}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
