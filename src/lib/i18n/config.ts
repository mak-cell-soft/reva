/**
 * i18n Configuration — RÉVA Consulting
 *
 * Defines supported locales, default locale, text directions,
 * and locale metadata for the application.
 * Architecture is designed for French first, ready for Arabic and English.
 */

export const LOCALES = ['fr', 'en', 'ar'] as const;

export type Locale = (typeof LOCALES)[number];

export const ALL_LOCALES = LOCALES;

export type AllLocale = Locale;

export const DEFAULT_LOCALE: Locale = 'fr';

export type Direction = 'ltr' | 'rtl';

export interface LocaleMeta {
  readonly code: AllLocale;
  readonly name: string;
  readonly nativeName: string;
  readonly dir: Direction;
  readonly isRtl: boolean;
  readonly htmlLang: string;
}

export const LOCALE_CONFIGS: Record<AllLocale, LocaleMeta> = {
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    isRtl: false,
    htmlLang: 'fr',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    isRtl: false,
    htmlLang: 'en',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    isRtl: true,
    htmlLang: 'ar',
  },
} as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getLocaleDirection(locale: string): Direction {
  if (locale === 'ar') return 'rtl';
  return 'ltr';
}
