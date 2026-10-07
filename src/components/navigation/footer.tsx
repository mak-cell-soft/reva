import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brandConfig } from '@/lib/brand.config';
import { cn } from '@/lib/utils';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

interface FooterProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function Footer({ locale = 'fr', className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const dict = getDictionary(locale as Locale);
  const t = dict.footer;

  // Navigation Links strictly conforming to localized dictionary
  const navLinks = [
    { label: dict.nav.cabinet, href: `/${locale}#a-propos` },
    { label: dict.nav.expertises, href: `/${locale}#services` },
    { label: dict.nav.elanceErp, href: `/${locale}#elance-erp`, isSpecial: true },
    { label: dict.nav.methode, href: `/${locale}#methodologie` },
    { label: dict.nav.realisations, href: `/${locale}#realisations` },
    { label: dict.nav.contact, href: `/${locale}#contact` },
  ];

  // Core Service Pillars
  const serviceLinks = [
    { label: dict.services.pillars[0]?.title ?? 'Logiciels Métier', href: `/${locale}#services` },
    { label: 'Élancé ERP', href: `/${locale}#elance-erp` },
    { label: dict.services.pillars[1]?.title ?? 'Assurance Qualité & QA', href: `/${locale}#expertise` },
    { label: dict.testingQa.disciplines[2]?.title ?? 'Automatisation des Tests', href: `/${locale}#expertise` },
    { label: dict.services.pillars[2]?.title ?? 'Intégration & TMA', href: `/${locale}#services` },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label={`${brandConfig.name} — Footer`}
      className={cn(
        'relative bg-[#06070A] text-[#CAD0DB] border-t border-white/[0.08] overflow-hidden',
        className
      )}
    >
      {/* Subtle Ambient Glows: Gold Core & Electric Blue Accent */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-[#C59B45]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[200px] bg-[#1D68F2]/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-16 sm:pt-20 lg:pt-24 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Col 1: Brand, Tagline & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Primary Official Brand Logo & Full Identity */}
            <div className="space-y-3">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] rounded-[6px]"
                aria-label={`${brandConfig.name} — Accueil`}
              >
                <Image
                  src="/images/logos/logo-reva-navbar.png"
                  alt={brandConfig.name}
                  width={2103}
                  height={748}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </Link>
              <p className="text-xs sm:text-[13px] font-medium text-[#DFC489] tracking-wide leading-snug">
                {t.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#8E9AA8] leading-relaxed max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
              {t.navTitle}
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      'transition-colors duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]',
                      item.isSpecial
                        ? 'text-[#DFC489] hover:text-[#F8FAFC] font-medium'
                        : 'text-[#8E9AA8] hover:text-[#F8FAFC]'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.isSpecial && (
                      <span className="size-1 rounded-full bg-[#C59B45]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
              {t.servicesTitle}
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs sm:text-sm">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#8E9AA8] hover:text-[#F8FAFC] transition-colors duration-150 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Élancé ERP & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Élancé ERP Statement Box */}
            <div className="p-4 rounded-[12px] bg-[#0E1118] border border-[#C59B45]/20 space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C59B45] font-semibold">
                  Élancé ERP
                </span>
                <Link
                  href={`/${locale}#elance-erp`}
                  className="text-[#758195] hover:text-[#C59B45] transition-colors"
                  aria-label={t.learnMoreElance}
                >
                  <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
                </Link>
              </div>
              <p className="text-xs text-[#CAD0DB] leading-relaxed">
                {t.elanceNotice}
              </p>
            </div>

            {/* Verified Contact Details (Strictly no invented numbers or addresses) */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
                {t.contactTitle}
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#8E9AA8]">
                <li>
                  <a
                    href={`mailto:${brandConfig.contact.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#DFC489] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
                  >
                    <Mail className="size-3.5 text-[#C59B45] shrink-0" />
                    <span>{brandConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={brandConfig.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#CAD0DB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
                  >
                    <Globe className="size-3.5 text-[#1D68F2] shrink-0" />
                    <span>{brandConfig.domain}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Disclosures Block: Mentions Légales & Confidentialité */}
        <div className="pt-10 pb-8 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] text-[#758195]">
          <div id="mentions-legales" className="space-y-2 scroll-mt-24">
            <span className="font-mono uppercase tracking-wider text-[#CAD0DB] font-semibold block">
              {t.legalTitle}
            </span>
            <p className="leading-relaxed">
              <strong>{t.legalEditor}</strong> {brandConfig.legalName} — {t.legalEditorDesc}{' '}
              {t.legalDomain} {brandConfig.domain}. {t.legalContact} {brandConfig.contact.email}.
            </p>
            <p className="leading-relaxed">
              <strong>{t.legalIp}</strong> {t.legalIpDesc}
            </p>
          </div>

          <div id="politique-confidentialite" className="space-y-2 scroll-mt-24">
            <span className="font-mono uppercase tracking-wider text-[#CAD0DB] font-semibold block">
              {t.privacyTitle}
            </span>
            <p className="leading-relaxed">
              <strong>{t.privacyData}</strong> {t.privacyDataDesc}
            </p>
            <p className="leading-relaxed">
              <strong>{t.privacyCookies}</strong> {t.privacyCookiesDesc}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#758195]">
          <div>
            <span>
              &copy; {currentYear} {brandConfig.name}. {t.copyright}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}#mentions-legales`}
              className="hover:text-[#CAD0DB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
            >
              {t.legalLink}
            </Link>
            <span className="size-1 rounded-full bg-white/[0.12]" />
            <Link
              href={`/${locale}#politique-confidentialite`}
              className="hover:text-[#CAD0DB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
            >
              {t.privacyLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
