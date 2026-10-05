import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LOCALES, isLocale, LOCALE_CONFIGS, type AllLocale } from '@/lib/i18n/config';
import { getFontVariables } from '@/lib/fonts';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { buildLocalizedMetadata } from '@/lib/seo/metadata';
import { StructuredData } from '@/components/seo/structured-data';

export const viewport: Viewport = {
  themeColor: '#08090C',
  colorScheme: 'dark',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return buildLocalizedMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const localeConfig = LOCALE_CONFIGS[locale as AllLocale];
  const fontClasses = getFontVariables();

  return (
    <html
      lang={localeConfig?.htmlLang ?? locale}
      dir={localeConfig?.dir ?? 'ltr'}
      className={fontClasses}
    >
      <head>
        <StructuredData />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#08090C] text-[#CAD0DB]">
        {/* WCAG Accessibility: Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C59B45] focus:text-[#08090C] focus:rounded-[8px] focus:font-semibold focus:shadow-xl focus:outline-none transition-transform"
        >
          {locale === 'en' ? 'Skip to main content' : 'Aller au contenu principal'}
        </a>
        <Navbar locale={locale} />
        <div className="flex-1 pt-16 sm:pt-20">
          {children}
        </div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
