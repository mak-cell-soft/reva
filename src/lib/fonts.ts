import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from 'next/font/google';

/**
 * Display Typography: Plus Jakarta Sans
 * Purpose: Authoritative, geometric, modern engineering headline presentation.
 */
export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

/**
 * Body Typography: Outfit
 * Purpose: Clean, highly readable technical body copy with refined proportion.
 */
export const fontBody = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

/**
 * Monospace Typography: JetBrains Mono
 * Purpose: Metrics, QA telemetry, code representations, and technical tags.
 */
export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

/**
 * Helper to bundle font CSS variables for root layout injection.
 */
export function getFontVariables(): string {
  return `${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`;
}
