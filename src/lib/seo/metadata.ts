// NOTE: Centralized SEO Architecture for RÉVA Consulting (reva-consulte.com).
// Primary positioning: Société de développement logiciel & de test informatique.
// Target topics:
// - développement logiciel Tunisie
// - développement ERP Tunisie
// - logiciel de gestion
// - développement web
// - développement mobile
// - tests logiciels
// - QA software
// - automatisation des tests
// - intégration de systèmes
// - transformation digitale
// - Élancé ERP

import type { Metadata } from 'next';
import { brandConfig } from '@/lib/brand.config';

export const TARGET_KEYWORDS_FR = [
  'développement logiciel Tunisie',
  'développement ERP Tunisie',
  'société de développement informatique Tunisie',
  'logiciel de gestion Tunisie',
  'logiciel de gestion',
  'Élancé ERP',
  'développement web Tunisie',
  'développement mobile Tunisie',
  'tests logiciels Tunisie',
  'QA software',
  'assurance qualité logicielle',
  'automatisation des tests',
  'intégration de systèmes',
  'transformation digitale Tunisie',
  'génie logiciel',
  'éditeur de logiciel Tunisie',
] as const;

export const TARGET_KEYWORDS_EN = [
  'software development Tunisia',
  'ERP development Tunisia',
  'software engineering company',
  'business management software',
  'Élancé ERP',
  'web development Tunisia',
  'mobile app development',
  'software testing Tunisia',
  'QA software engineering',
  'test automation',
  'systems integration',
  'digital transformation',
] as const;

export interface StructuredDataOptions {
  locale: string;
}

/**
 * Builds localized, high-authority metadata for pages.
 */
export function buildLocalizedMetadata(locale: string): Metadata {
  const isEn = locale === 'en';
  const baseUrl = brandConfig.url;

  const titleDefault = isEn
    ? 'RÉVA Consulting — Software Development & QA Testing Engineering'
    : 'RÉVA Consulting — Société de développement logiciel & de test informatique';

  const description = isEn
    ? 'RÉVA Consulting is a software engineering company and publisher of Élancé ERP in Tunisia. Specialized in custom software development, web & mobile applications, software testing, and QA automation.'
    : 'RÉVA Consulting est une société d’ingénierie logicielle et éditeur d’Élancé ERP en Tunisie. Spécialiste du développement logiciel sur-mesure, des applications web & mobiles, des tests logiciels et de l’automatisation QA.';

  const keywords = isEn ? [...TARGET_KEYWORDS_EN] : [...TARGET_KEYWORDS_FR];

  return {
    title: {
      default: titleDefault,
      template: `%s | ${brandConfig.name}`,
    },
    description,
    keywords,
    authors: [{ name: 'RÉVA Consulting', url: baseUrl }],
    creator: 'RÉVA Consulting',
    publisher: 'RÉVA Consulting',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title: titleDefault,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: brandConfig.name,
      locale: isEn ? 'en_US' : 'fr_FR',
      alternateLocale: isEn ? ['fr_FR'] : ['en_US'],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/logos/logo-reva.jpeg`,
          width: 1599,
          height: 1076,
          alt: `${brandConfig.name} — Développer. Tester. Optimiser.`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleDefault,
      description,
      images: [`${baseUrl}/images/logos/logo-reva.jpeg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    category: 'technology',
  };
}

/**
 * Returns Schema.org Organization structured data for RÉVA Consulting.
 * Strictly adheres to verified corporate data without fabricating statistics or awards.
 */
export function getOrganizationStructuredData() {
  const baseUrl = brandConfig.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: brandConfig.name,
    legalName: brandConfig.legalName,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logos/logo-reva.jpeg`,
      caption: brandConfig.name,
    },
    slogan: brandConfig.tagline,
    description:
      'Société d’ingénierie logicielle et éditeur de solutions de gestion d’entreprise en Tunisie. Spécialiste du développement logiciel sur-mesure, de l’assurance qualité et de l’intégration de systèmes.',
    email: brandConfig.contact.email,
    areaServed: [
      {
        '@type': 'Country',
        name: 'Tunisie',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'International',
      },
    ],
    knowsAbout: [
      'Développement logiciel Tunisie',
      'Développement ERP Tunisie',
      'Logiciel de gestion',
      'Tests logiciels',
      'QA Software Engineering',
      'Automatisation des tests',
      'Développement web',
      'Développement mobile',
      'Élancé ERP',
      'Intégration de systèmes',
      'Transformation digitale',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement de logiciels métiers & ERP sur-mesure',
          description: 'Conception et développement de solutions logicielles d’entreprise adaptées aux processus réels.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tests logiciels & Assurance Qualité (QA)',
          description: 'Validation fonctionnelle, technique, tests de charge et automatisation des tests logiciels.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Élancé ERP',
          description: 'Solution ERP de gestion d’entreprise éditée et commercialisée par RÉVA Consulting.',
        },
      },
    ],
  };
}

/**
 * Returns Schema.org SoftwareApplication structured data for Élancé ERP.
 * Strictly describes known factual product features without fabricated ratings or reviews.
 */
export function getElanceErpStructuredData() {
  const baseUrl = brandConfig.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/#elance-erp`,
    name: 'Élancé ERP',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, Web, On-Premise',
    image: `${baseUrl}/images/logos/logo-elance.svg`,
    description:
      'Élancé ERP est une solution de gestion d’entreprise développée et commercialisée par RÉVA Consulting, conçue pour centraliser et optimiser la gestion commerciale, les stocks, les achats, les ventes et les chantiers.',
    publisher: {
      '@type': 'Organization',
      name: brandConfig.name,
      url: baseUrl,
    },
    creator: {
      '@type': 'Organization',
      name: brandConfig.name,
      url: baseUrl,
    },
    featureList: [
      'Gestion commerciale & Devis/Factures',
      'Gestion des stocks multi-dépôts',
      'Gestion des achats & Fournisseurs',
      'Suivi de chantiers & Affaires',
      'Reporting & Tableaux de bord décisionnels',
      'Digitalisation des processus d’entreprise',
    ],
  };
}
