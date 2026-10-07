// NOTE: Centralized Dictionary Loader for RÉVA Consulting.
// Strictly loads typed per-locale dictionaries in src/content/{fr,en,ar}/dictionary.ts.

import { type Locale, DEFAULT_LOCALE } from './config';
import { fr, type Dictionary } from '@/content/fr/dictionary';
import { en } from '@/content/en/dictionary';
import { ar } from '@/content/ar/dictionary';

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en,
  ar,
};

/**
 * Returns the typed dictionary for the given locale.
 * Falls back to DEFAULT_LOCALE ('fr') if the requested locale is not found.
 */
export function getDictionary(locale?: string): Dictionary {
  if (locale && locale in dictionaries) {
    return dictionaries[locale as Locale];
  }
  return dictionaries[DEFAULT_LOCALE];
}

export type { Dictionary };
