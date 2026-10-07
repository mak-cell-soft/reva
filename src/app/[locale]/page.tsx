// NOTE: Official Homepage for RÉVA Consulting (reva-consulte.com).
// Production-quality presentation adhering to semantic HTML, accessibility,
// and high-performance server rendering with zero unneeded client overhead.
import * as React from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { BrandClipSection } from '@/components/sections/brand-clip-section';
import { PositioningSection } from '@/components/sections/positioning-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ElanceErpSection } from '@/components/sections/elance-erp-section';
import { TestingQaSection } from '@/components/sections/testing-qa-section';
import { MethodologySection } from '@/components/sections/methodology-section';
import { RealisationsSection } from '@/components/sections/realisations-section';
import { CtaSection } from '@/components/sections/cta-section';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative min-h-screen bg-[#08090C] text-[#CAD0DB] selection:bg-[#C59B45]/20 selection:text-[#DFC489] focus:outline-none"
    >
      {/* 1. Official Homepage Hero Section */}
      <HeroSection locale={locale} />

      {/* 2. Visual Storytelling & Brand Identity Clip: Executive cinematic showcase (reva-clip.mp4) */}
      <BrandClipSection locale={locale} />

      {/* 3. Flagship Product Section: Élancé ERP (Proprietary solution developed by RÉVA Consulting). */}
      <ElanceErpSection locale={locale} />

      {/* 3. Positioning Section: De l'idée à la solution. De la solution à la qualité. */}
      <PositioningSection locale={locale} />

      {/* 4. Main Services Section: Nos domaines d'intervention */}
      <ServicesSection locale={locale} />

      {/* 5. Differentiator Section: Software Quality & Testing */}
      <TestingQaSection locale={locale} />

      {/* 6. Methodology Section: Une méthode claire. Des résultats maîtrisés. */}
      <MethodologySection locale={locale} />

      {/* 7. Réalisations Section: Études de cas éditoriales */}
      <RealisationsSection locale={locale} />

      {/* 8. Final Signature CTA Section: Un projet logiciel ? Construisons-le ensemble. */}
      <CtaSection locale={locale} />
    </main>
  );
}
