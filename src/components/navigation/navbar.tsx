// NOTE: Public Navigation Bar for RÉVA Consulting.
// Adheres strictly to executive, minimal, compact, and professional design.
// Supports multi-language switching (FR, EN, AR), complete RTL flow, and localized dictionaries.
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/lib/brand.config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { LOCALES } from '@/lib/i18n/config';

interface NavbarProps {
  /** Optional active locale, defaults to 'fr' */
  locale?: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly isSpecial?: boolean;
}

/**
 * Compact, accessible language selector component.
 * Integrates seamlessly with the header height and preserves current page path.
 */
function LanguageSwitcher({
  currentLocale,
  className,
}: {
  currentLocale: string;
  className?: string;
}) {
  const pathname = usePathname();

  // Helper to switch the locale segment in the current pathname while preserving route & subpath
  const getTargetUrl = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    if (segments.length > 1 && (LOCALES as readonly string[]).includes(segments[1])) {
      segments[1] = targetLocale;
      return segments.join('/') || `/${targetLocale}`;
    }
    return `/${targetLocale}`;
  };

  return (
    <div
      role="group"
      aria-label="Sélection de langue / Language selector / اختيار اللغة"
      className={cn(
        'inline-flex items-center rounded-full bg-[#111318]/90 border border-white/[0.08] p-0.5',
        className
      )}
    >
      <Link
        href={getTargetUrl('fr')}
        aria-label="Français"
        aria-current={currentLocale === 'fr' ? 'true' : undefined}
        className={cn(
          'px-2 py-0.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 select-none',
          currentLocale === 'fr'
            ? 'bg-[#C59B45] text-[#08090C] font-bold shadow-[0_1px_6px_rgba(197,155,69,0.3)]'
            : 'text-[#9CA6B8] hover:text-[#F8FAFC]'
        )}
      >
        FR
      </Link>
      <Link
        href={getTargetUrl('en')}
        aria-label="English"
        aria-current={currentLocale === 'en' ? 'true' : undefined}
        className={cn(
          'px-2 py-0.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 select-none',
          currentLocale === 'en'
            ? 'bg-[#C59B45] text-[#08090C] font-bold shadow-[0_1px_6px_rgba(197,155,69,0.3)]'
            : 'text-[#9CA6B8] hover:text-[#F8FAFC]'
        )}
      >
        EN
      </Link>
      <Link
        href={getTargetUrl('ar')}
        aria-label="العربية"
        aria-current={currentLocale === 'ar' ? 'true' : undefined}
        className={cn(
          'px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium transition-colors duration-200 select-none',
          currentLocale === 'ar'
            ? 'bg-[#C59B45] text-[#08090C] font-bold shadow-[0_1px_6px_rgba(197,155,69,0.3)]'
            : 'text-[#9CA6B8] hover:text-[#F8FAFC]'
        )}
      >
        العربية
      </Link>
    </div>
  );
}

export function Navbar({ locale = 'fr' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Load centralized dictionary for the active locale
  const dict = getDictionary(locale);

  // Streamlined navigation destinations localized via dictionary
  const navItems: readonly NavItem[] = React.useMemo(
    () => [
      { label: dict.nav.cabinet, href: `/${locale}#a-propos` },
      { label: dict.nav.expertises, href: `/${locale}#services` },
      { label: dict.nav.elanceErp, href: `/${locale}#elance-erp`, isSpecial: true },
      { label: dict.nav.methode, href: `/${locale}#methodologie` },
      { label: dict.nav.realisations, href: `/${locale}#realisations` },
      { label: dict.nav.contact, href: `/${locale}#contact` },
    ],
    [locale, dict]
  );

  // Scroll listener for sticky transition (minimal, compact)
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and trap focus when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          toggleButtonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route or hash change
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on screen resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.6)] py-3'
            : 'bg-[#08090C]/40 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Dedicated RÉVA Navbar Brand Logo */}
          <Link
            href={`/${locale}`}
            className="group relative flex items-center self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/80 shrink-0 select-none py-1 transition-transform duration-200 hover:scale-[1.01]"
            aria-label={`${brandConfig.name} — ${dict.nav.cabinet}`}
          >
            {/* Very subtle localized soft glow behind navbar logo for enhanced contrast */}
            <div
              className="absolute -inset-x-3 -inset-y-2 bg-[radial-gradient(ellipse_at_center,_rgba(29,104,242,0.12)_0%,_rgba(197,155,69,0.08)_50%,_transparent_75%)] rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <Image
              src="/images/logos/logo-reva-navbar.png"
              alt={brandConfig.name}
              width={2103}
              height={748}
              className="relative h-[44px] sm:h-[48px] lg:h-[54px] xl:h-[58px] w-auto object-contain drop-shadow-[0_2px_12px_rgba(29,104,242,0.22)] brightness-[1.12] contrast-[1.10] transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/70',
                    item.isSpecial
                      ? 'text-[#DFC489] hover:text-[#F6F0DB]'
                      : 'text-[#CAD0DB] hover:text-[#F8FAFC]',
                    isCurrent && 'text-[#F8FAFC]'
                  )}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {/* Subtle active / hover indicator */}
                  <span
                    className={cn(
                      'absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full transition-transform duration-200 origin-center scale-x-0 group-hover:scale-x-100',
                      item.isSpecial ? 'bg-[#C59B45]' : 'bg-[#CAD0DB]',
                      isCurrent && 'scale-x-100'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Language Selector, Primary CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Desktop Language Switcher */}
            <LanguageSwitcher currentLocale={locale} className="hidden sm:inline-flex" />

            {/* Desktop Primary CTA */}
            <Link
              href={`/${locale}#contact`}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[8px] transition-all duration-200 shadow-[0_2px_10px_rgba(197,155,69,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#C59B45]/80 select-none cursor-pointer"
            >
              {dict.common.contactUs}
            </Link>

            {/* Mobile Language Switcher (Compact visible on smaller screens) */}
            <LanguageSwitcher currentLocale={locale} className="sm:hidden" />

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? dict.common.closeMenu : dict.common.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden p-2 rounded-[8px] text-[#CAD0DB] hover:text-[#F8FAFC] hover:bg-[#171A20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/70 transition-colors"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? dict.common.closeMenu : dict.common.openMenu}
              </span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                {/* Top line */}
                <span
                  className={cn(
                    'w-full h-0.5 bg-current rounded-full transition-transform duration-250 origin-center',
                    isMobileMenuOpen && 'rotate-45 translate-y-1.5'
                  )}
                />
                {/* Middle line */}
                <span
                  className={cn(
                    'w-full h-0.5 bg-current rounded-full transition-opacity duration-200',
                    isMobileMenuOpen && 'opacity-0'
                  )}
                />
                {/* Bottom line */}
                <span
                  className={cn(
                    'w-full h-0.5 bg-current rounded-full transition-transform duration-250 origin-center',
                    isMobileMenuOpen && '-rotate-45 -translate-y-1.5'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              onClick={handleNavClick}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Container */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation mobile"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed top-[64px] sm:top-[72px] left-0 right-0 z-50 lg:hidden px-4 pb-6 pt-2"
            >
              <div className="bg-[#111318] border border-white/[0.08] rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.85)] p-5 space-y-4 max-w-md mx-auto">
                {/* Mobile Drawer Brand Anchor & Language Switcher */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <Link
                    href={`/${locale}`}
                    onClick={handleNavClick}
                    className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/80 select-none"
                    aria-label={`${brandConfig.name} — Accueil`}
                  >
                    <Image
                      src="/images/logos/logo-reva-navbar.png"
                      alt={brandConfig.name}
                      width={2103}
                      height={748}
                      className="h-[38px] sm:h-[44px] w-auto object-contain drop-shadow-[0_2px_10px_rgba(29,104,242,0.22)] brightness-[1.12] contrast-[1.10]"
                    />
                  </Link>
                  <LanguageSwitcher currentLocale={locale} />
                </div>

                {/* Nav Links List */}
                <nav className="flex flex-col space-y-1" aria-label="Liens du menu mobile">
                  {navItems.map((item) => {
                    const isCurrent = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className={cn(
                          'flex items-center justify-between px-4 py-3 rounded-[8px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/70',
                          item.isSpecial
                            ? 'text-[#DFC489] hover:bg-[#171A20] hover:text-[#F6F0DB]'
                            : 'text-[#CAD0DB] hover:bg-[#171A20] hover:text-[#F8FAFC]',
                          isCurrent && 'bg-[#171A20] text-[#F8FAFC]'
                        )}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-2 border-t border-white/[0.06]">
                  <Link
                    href={`/${locale}#contact`}
                    onClick={handleNavClick}
                    className="flex w-full items-center justify-center py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[10px] transition-colors shadow-[0_2px_12px_rgba(197,155,69,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/80"
                  >
                    {dict.common.contactUs}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
