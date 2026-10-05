// NOTE: Official RÉVA Consulting Public Footer.
// Minimal, elegant, premium dark design.
// Contains required sections: Identity & Tagline, Navigation, Services, Élancé ERP mention,
// Verified Contact information only (no invented addresses or phone numbers), and Legal notices.
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brandConfig } from '@/lib/brand.config';
import { cn } from '@/lib/utils';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function Footer({ locale = 'fr', className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Navigation Links strictly conforming to specification
  const navLinks = [
    { label: 'Accueil', href: `/${locale}` },
    { label: 'Services', href: `/${locale}#services` },
    { label: 'Élancé ERP', href: `/${locale}#elance-erp`, isSpecial: true },
    { label: 'Expertise', href: `/${locale}#expertise` },
    { label: 'Réalisations', href: `/${locale}#realisations` },
    { label: 'À propos', href: `/${locale}#a-propos` },
    { label: 'Contact', href: `/${locale}#contact` },
  ];

  // 8 Service Categories requested by specification
  const serviceLinks = [
    { label: 'Logiciels & ERP', href: `/${locale}#services` },
    { label: 'Web', href: `/${locale}#services` },
    { label: 'Mobile', href: `/${locale}#services` },
    { label: 'QA & Tests', href: `/${locale}#services` },
    { label: 'Automatisation', href: `/${locale}#services` },
    { label: 'Intégration', href: `/${locale}#services` },
    { label: 'Maintenance', href: `/${locale}#services` },
    { label: 'Digitalisation', href: `/${locale}#services` },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Pied de page RÉVA Consulting"
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
          <div className="lg:col-span-4 space-y-6">
            {/* Primary Official Brand Logo */}
            <div className="space-y-3">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] rounded-[8px]"
                aria-label={`${brandConfig.name} — Accueil`}
              >
                <div className="relative h-12 sm:h-14 w-auto aspect-[1599/1076] rounded-[8px] overflow-hidden border border-white/[0.08] group-hover:border-[#C59B45]/60 transition-colors shadow-[0_2px_14px_rgba(0,0,0,0.7)] shrink-0 bg-[#0E1118]">
                  <Image
                    src="/images/logos/logo-reva.jpeg"
                    alt={brandConfig.name}
                    width={1599}
                    height={1076}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#C59B45] font-medium">
                {brandConfig.tagline}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8E9AA8] leading-relaxed max-w-sm">
              Éditeur de solutions logicielles et cabinet d&apos;ingénierie du test informatique. Nous
              accompagnons les organisations dans la conception, la fiabilisation et le pilotage de leurs
              systèmes critiques.
            </p>

            {/* Subtle System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1118] border border-white/[0.06] text-[11px] font-mono text-[#758195]">
              <span className="size-1.5 rounded-full bg-[#1D68F2]" />
              <span>Plateformes & Services Opérationnels</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
              Navigation
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

          {/* Col 3: Services (8 categories) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
              Services
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
                  aria-label="En savoir plus sur Élancé ERP"
                >
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <p className="text-xs text-[#CAD0DB] leading-relaxed">
                Élancé ERP est une solution développée et commercialisée par RÉVA Consulting.
              </p>
            </div>

            {/* Verified Contact Details (Strictly no invented numbers or addresses) */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F8FAFC] font-semibold block">
                Contact
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
              Mentions Légales
            </span>
            <p className="leading-relaxed">
              <strong>Éditeur :</strong> {brandConfig.legalName} — Société d’ingénierie logicielle & d’assurance qualité.
              Domaine : {brandConfig.domain}. Contact : {brandConfig.contact.email}.
            </p>
            <p className="leading-relaxed">
              <strong>Propriété intellectuelle :</strong> L’ensemble des contenus, marques, logos (notamment RÉVA Consulting et Élancé ERP)
              et architectures présentés sur ce site sont protégés par les lois en vigueur sur la propriété intellectuelle.
            </p>
          </div>

          <div id="politique-confidentialite" className="space-y-2 scroll-mt-24">
            <span className="font-mono uppercase tracking-wider text-[#CAD0DB] font-semibold block">
              Politique de Confidentialité
            </span>
            <p className="leading-relaxed">
              <strong>Données personnelles :</strong> Les informations recueillies via nos formulaires ou par échange direct
              sont strictement réservées au traitement des demandes de projets et démonstrations Élancé ERP. Aucune donnée n’est cédée à des tiers.
            </p>
            <p className="leading-relaxed">
              <strong>Cookies :</strong> Ce site n’utilise aucun traceur publicitaire intrusif. Seuls les composants strictement nécessaires
              à la navigation, à la sécurité et à la mesure d’audience anonyme sont mobilisés.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#758195]">
          <div>
            <span>
              &copy; {currentYear} {brandConfig.name}. Tous droits réservés.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}#mentions-legales`}
              className="hover:text-[#CAD0DB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
            >
              Mentions légales
            </Link>
            <span className="size-1 rounded-full bg-white/[0.12]" />
            <Link
              href={`/${locale}#politique-confidentialite`}
              className="hover:text-[#CAD0DB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B45]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
