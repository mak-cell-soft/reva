/**
 * RÉVA Consulting — Design Tokens System
 *
 * NOTE: Single source of truth for color scales, typography definitions,
 * spacing, radii, subtle shadows, and transition curves.
 * Aligned with the visual identity inspired by the RÉVA brandmark.
 */

export const tokens = {
  colors: {
    // Dominant Black & Charcoal Foundation
    black: '#08090C',
    charcoal: '#111318',
    surface: '#171A20',
    surfaceHover: '#1F232B',
    surfaceElevated: '#252934',

    // Champagne Gold — Represents Expertise, Premium Quality & Leadership
    gold: {
      50: '#FBF9F2',
      100: '#F6F0DB',
      200: '#ECDDB5',
      300: '#DFC489',
      400: '#D4B066',
      500: '#C59B45', // Primary Champagne Gold from logo
      600: '#AA8132',
      700: '#876123',
      800: '#66471B',
      900: '#422D11',
      dim: 'rgba(197, 155, 69, 0.12)',
      subtleBorder: 'rgba(197, 155, 69, 0.25)',
      activeBorder: 'rgba(197, 155, 69, 0.50)',
    },

    // Metallic Silver — Represents Precision, Engineering & Reliability
    silver: {
      100: '#F8FAFC', // Pure/Bright text
      200: '#E2E6ED', // High-contrast headers
      300: '#CAD0DB', // Primary body / Metallic Silver from logo
      400: '#9CA6B8', // Secondary captions
      500: '#758195', // Muted text
      600: '#545F72', // Subtle icons
      700: '#384152', // Active border
      800: '#232935', // Surface border
      900: '#151821', // Dark contrast
    },

    // Electric Blue — Represents Technology, Innovation & Digital Systems
    blue: {
      300: '#60A5FA',
      400: '#3B82F6',
      500: '#1D68F2', // Restrained Electric Blue from logo laser & pixels
      600: '#1552C6',
      700: '#0E3E9B',
      dim: 'rgba(29, 104, 242, 0.12)',
      subtleBorder: 'rgba(29, 104, 242, 0.30)',
      activeBorder: 'rgba(29, 104, 242, 0.60)',
    },

    // Borders
    border: {
      subtle: 'rgba(255, 255, 255, 0.06)',
      default: '#222631',
      strong: '#323746',
    },
  },

  typography: {
    fontDisplay: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
    fontBody: 'var(--font-body), "Outfit", sans-serif',
    fontMono: 'var(--font-mono), "JetBrains Mono", monospace',
    tracking: {
      tighter: '-0.03em',
      tight: '-0.015em',
      normal: '0em',
      wide: '0.04em',
      widest: '0.12em',
    },
  },

  radius: {
    none: '0px',
    xs: '4px',
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    subtle: '0 1px 3px rgba(0, 0, 0, 0.6)',
    card: '0 4px 20px -2px rgba(0, 0, 0, 0.75)',
    elevated: '0 12px 36px -4px rgba(0, 0, 0, 0.85)',
    goldRestrained: '0 0 24px -6px rgba(197, 155, 69, 0.15)',
    blueRestrained: '0 0 24px -6px rgba(29, 104, 242, 0.18)',
  },

  transitions: {
    fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '400ms cubic-bezier(0.16, 1, 0.3, 1)',
    easeOutSmooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type DesignTokens = typeof tokens;
