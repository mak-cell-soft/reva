// NOTE: Public Navigation Bar for RÉVA Consulting.
// Adheres strictly to the executive, minimal, compact, and professional design objective.
// Uses official logo asset from public/images/logos without text re-creation.
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/lib/brand.config';

interface NavbarProps {
  /** Optional active locale, defaults to 'fr' */
  locale?: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly isSpecial?: boolean;
}

export function Navbar({ locale = 'fr' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Navigation Items required by RÉVA Consulting specification
  const navItems: readonly NavItem[] = React.useMemo(
    () => [
      { label: 'Accueil', href: `/${locale}` },
      { label: 'Services', href: `/${locale}#services` },
      { label: 'Élancé ERP', href: `/${locale}#elance-erp`, isSpecial: true },
      { label: 'Expertise', href: `/${locale}#expertise` },
      { label: 'Réalisations', href: `/${locale}#realisations` },
      { label: 'À propos', href: `/${locale}#a-propos` },
      { label: 'Contact', href: `/${locale}#contact` },
    ],
    [locale]
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
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/80 shrink-0 select-none"
            aria-label={`${brandConfig.name} — Accueil`}
          >
            <Image
              src="/images/logos/logo-reva-navbar.png"
              alt={brandConfig.name}
              width={2103}
              height={748}
              className="h-[34px] sm:h-[38px] lg:h-[44px] xl:h-[46px] w-auto object-contain"
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

          {/* Right: Primary CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-3">
            {/* Desktop Primary CTA */}
            <Link
              href={`/${locale}#contact`}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#08090C] bg-[#C59B45] hover:bg-[#D4B066] active:bg-[#AA8132] rounded-[8px] transition-all duration-200 shadow-[0_2px_10px_rgba(197,155,69,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] focus-visible:ring-[#C59B45]/80 select-none cursor-pointer"
            >
              Parlons de votre projet
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden p-2 rounded-[8px] text-[#CAD0DB] hover:text-[#F8FAFC] hover:bg-[#171A20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]/70 transition-colors"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              </span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                {/* Top line */}
                <span
                  className={cn(
                    'w-full h-0.5 bg-current rounded-full transition-transform duration-250 origin-left',
                    isMobileMenuOpen && 'rotate-45 translate-x-0.5 -translate-y-0.5'
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
                    'w-full h-0.5 bg-current rounded-full transition-transform duration-250 origin-left',
                    isMobileMenuOpen && '-rotate-45 translate-x-0.5 translate-y-0.5'
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
                        {item.isSpecial && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#C59B45] px-1.5 py-0.5 rounded bg-[#C59B45]/10 border border-[#C59B45]/20">
                            ERP
                          </span>
                        )}
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
                    Parlons de votre projet
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
