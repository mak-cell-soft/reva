/**
 * RÉVA Consulting — Centralized Brand Configuration
 *
 * NOTE: Single source of truth for brand identity, URLs, legal info,
 * positioning, and corporate signatures. All UI components and metadata
 * generators MUST consume values from this configuration instead of hardcoding strings.
 */

export const brandConfig = {
  // Brand Names
  name: 'RÉVA Consulting',
  shortName: 'RÉVA',
  legalName: 'RÉVA Consulting SARL',
  slug: 'reva',

  // Corporate Signature
  signature: 'RÉVA Consulting — Développer. Tester. Optimiser.',
  tagline: 'Développer. Tester. Optimiser.',

  // Official Approved Localized Brand Identities
  localized: {
    fr: {
      name: 'RéVA',
      tagline: 'Réaliser Votre Ambition',
      fullName: 'RéVA — Réaliser Votre Ambition',
    },
    en: {
      name: 'ACYA',
      tagline: 'AChieve Your Ambition',
      fullName: 'ACYA — AChieve Your Ambition',
    },
    ar: {
      name: 'استشارات حقق طموحك',
      tagline: 'حقق طموحك',
      fullName: 'استشارات حقق طموحك',
    },
  },

  // Strategic Positioning
  positioning: {
    primary: 'Société de développement logiciel & de test informatique',
    en: 'Software development & QA testing engineering company',
    description:
      'Société de développement logiciel et de test informatique en Tunisie, éditeur d’Élancé ERP, spécialisée dans les logiciels sur-mesure, les applications web & mobiles et l’automatisation QA.',
  },

  // Flagship Proprietary Product
  flagship: {
    name: 'Élancé ERP',
    shortName: 'Élancé',
    slug: 'elance-erp',
    tagline: 'L’ERP modulaire, agile et souverain conçu pour la performance opérationnelle.',
    relation: 'Édité, développé et commercialisé exclusivement par RÉVA Consulting.',
  },

  // Domain & Network
  domain: 'reva-consulte.com',
  url: 'https://reva-consulte.com',
  canonicalUrl: 'https://reva-consulte.com',

  // Contact & Channels
  contact: {
    email: 'contact@reva-consulte.com',
    commercialEmail: 'commercial@reva-consulte.com',
    supportEmail: 'support@reva-consulte.com',
    phone: '+33 1 00 00 00 00', // NOTE: Configurable in deployment
    address: {
      street: 'Centre d’Affaires & d’Ingénierie',
      city: 'Paris',
      country: 'France',
    },
  },

  // Core Service Pillars
  pillars: [
    {
      id: 'custom-software',
      title: 'Développement de logiciels métiers & ERP sur-mesure',
      domain: 'development',
    },
    {
      id: 'web-apps',
      title: 'Développement d’applications web performantes',
      domain: 'development',
    },
    {
      id: 'mobile-apps',
      title: 'Développement d’applications mobiles iOS & Android',
      domain: 'development',
    },
    {
      id: 'qa-testing',
      title: 'Testing logiciel & Assurance Qualité (QA)',
      domain: 'testing',
    },
    {
      id: 'functional-testing',
      title: 'Tests fonctionnels, techniques et de performance',
      domain: 'testing',
    },
    {
      id: 'test-automation',
      title: 'Automatisation des tests & pipelines CI/CD de validation',
      domain: 'testing',
    },
    {
      id: 'systems-integration',
      title: 'Intégration de systèmes et interopérabilité logicielle',
      domain: 'integration',
    },
    {
      id: 'tma-evolution',
      title: 'Maintenance applicative (TMA) & évolution continue',
      domain: 'optimization',
    },
    {
      id: 'digital-transformation',
      title: 'Transformation digitale des organisations',
      domain: 'optimization',
    },
    {
      id: 'process-optimization',
      title: 'Optimisation et automatisation des processus métiers',
      domain: 'optimization',
    },
  ],

  // Theme & Design Tokens Meta
  theme: {
    primaryColor: '#08090C',
    charcoalColor: '#111318',
    surfaceColor: '#171A20',
    goldColor: '#C59B45',
    silverColor: '#CAD0DB',
    blueColor: '#1D68F2',
  },
} as const;

export type BrandConfig = typeof brandConfig;

export function getLocalizedBrand(locale: string = 'fr') {
  if (locale === 'en') return brandConfig.localized.en;
  if (locale === 'ar') return brandConfig.localized.ar;
  return brandConfig.localized.fr;
}
