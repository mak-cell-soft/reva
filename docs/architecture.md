# RÉVA Consulting — Architecture Documentation

> **Project:** RÉVA Consulting  
> **Domain:** https://reva-consulte.com  
> **Brand Signature:** *"RÉVA Consulting — Développer. Tester. Optimiser."*  
> **Positioning:** Software Publisher & IT Testing Engineering Company  
> **Flagship Product:** Élancé ERP (Proprietary ERP developed and commercialized by RÉVA Consulting)  
> **Reference Architecture:** Luxaven Next.js 16 Architectural Pattern & Engineering Discipline  
> **Status:** Architecture Technical Audit & Foundation Specification  

---

## 1. Executive Summary & Brand Positioning

RÉVA Consulting is an enterprise-grade technology engineering company and software publisher operating at the intersection of high-reliability custom software development and mission-critical IT testing / QA engineering.

### Dual Strategic Pillars
1. **Software Publisher (Éditeur de Logiciels)**: Creator, architect, and commercializer of **Élancé ERP**, a modern, integrated business management solution engineered for operational excellence, agile scalability, and seamless enterprise resource orchestration.
2. **IT Engineering & Quality Assurance Partner**: High-value consulting in custom software development (web, mobile, business applications), functional, technical and performance testing, automated QA pipelines, system integration, continuous application evolution, and digital transformation.

### Technical Alignment
Following the architectural discipline established in the **Luxaven** project, RÉVA Consulting employs a **Server-First Next.js 16 App Router architecture** with React 19, strict TypeScript, Tailwind CSS v4, and centralized type-safe brand/content configurations.

---

## 2. Current Architecture (Baseline Audit)

### 2.1 Baseline State
The target directory `reva/` was seeded with an uninitialized skeleton boilerplate. 

| Layer / Asset | Current State | Audit Finding |
| :--- | :--- | :--- |
| **Configuration** | Absent | No `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, or `postcss.config.mjs`. |
| **`src/` Directory** | Empty subdirectories | Directories `app/`, `components/`, `hooks/`, `lib/`, `services/`, `store/` exist with zero files. |
| **Routing** | Absent | No pages, layouts, error boundaries, or sitemap generators implemented. |
| **Styling** | Absent | No CSS files, no design tokens, no theme definitions. |
| **Assets** | Seeded in `public/images/` | 6 partner/client logos in `logos/` (`logo1.jpeg`–`logo6.jpeg`) and corporate video showcase in `pub/reva.mp4`. |
| **Documentation** | Generic boilerplate | Generic docs referencing TanStack Query, Zustand e-commerce carts, and unused demo routes. |

---

## 3. Recommended Architecture (Target Specification)

Following the Luxaven engineering philosophy, the architecture prioritizes **zero-runtime overhead**, **server-first data rendering**, **type-safe content dictionaries**, and **centralized brand configuration**.

```text
src/
├── app/
│   ├── [locale]/                      # Native App Router localized subpaths (/fr, /en)
│   │   ├── layout.tsx                 # Root localized layout (dir, lang, metadata, fonts)
│   │   ├── page.tsx                   # Enterprise Homepage (Hero, Services, Élancé ERP, QA, Proof, Contact)
│   │   ├── elance-erp/
│   │   │   └── page.tsx               # Dedicated Flagship Élancé ERP Product Page
│   │   ├── services/
│   │   │   ├── page.tsx               # Comprehensive IT Services & Testing Overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Deep-dive Service Pillar Pages
│   │   ├── testing-qa/
│   │   │   └── page.tsx               # Dedicated IT Testing, Automation & QA Center of Excellence
│   │   ├── a-propos/
│   │   │   └── page.tsx               # Company Vision, Methodology & Leadership
│   │   ├── contact/
│   │   │   └── page.tsx               # Project Scoping & Élancé ERP Demo Inquiries
│   │   └── not-found.tsx              # Localized 404 handler
│   ├── globals.css                    # Tailwind CSS v4 theme, enterprise tokens & keyframes
│   ├── icon.svg                       # Scalable vector brand mark
│   ├── robots.ts                      # App Router automated robots.txt
│   └── sitemap.ts                     # Dynamic multilingual XML sitemap generator
├── components/
│   ├── motion/                        # Framer Motion animation primitives (FadeIn, Reveal, Stagger)
│   ├── navigation/                    # Header, Footer, LanguageSwitcher, MobileNav
│   ├── sections/                      # High-impact enterprise landing sections
│   │   ├── hero-section.tsx           # Split layout hero with video spotlight & brand signature
│   │   ├── elance-showcase.tsx        # High-impact Élancé ERP software publisher feature
│   │   ├── services-grid.tsx          # Development, Integration & Optimization pillars
│   │   ├── testing-qa-section.tsx     # QA, Functional/Performance Testing & Automation focus
│   │   ├── video-showcase.tsx         # Responsive player for public/images/pub/reva.mp4
│   │   ├── logo-cloud.tsx             # Partner & technology ecosystem (logo1.jpeg–logo6.jpeg)
│   │   ├── stats-metrics.tsx          # Key metrics (quality score, uptime, test coverage)
│   │   └── contact-section.tsx        # Consultation & Élancé ERP demo request
│   ├── seo/                           # Structured data (Organization, SoftwareApplication, WebSite)
│   └── ui/                            # Radix/CVA UI primitives (Button, Badge, Card, Input)
├── content/                           # Typed internationalization dictionaries
│   ├── fr/dictionary.ts               # Primary language (French)
│   └── en/dictionary.ts               # Secondary language (English)
├── data/                              # Structured domain data
│   ├── services.ts                    # 10 core capability definitions
│   ├── elance-features.ts             # Élancé ERP module architecture & specifications
│   └── partners.ts                    # Media metadata for logo1.jpeg–logo6.jpeg
├── lib/
│   ├── brand.config.ts                # Single Source of Truth for brand constants
│   ├── fonts.ts                       # Typography definitions (display + body)
│   ├── i18n/                          # Locale resolution, dictionaries loader & types
│   ├── seo/                           # Metadata factories & OpenGraph helpers
│   └── utils.ts                       # Tailwind class variance & merge utility
└── proxy.ts                           # Next 16 Edge proxy for root locale redirection
```

---

## 4. Key Architectural Decisions

### 4.1 Single Source of Truth (`brand.config.ts`)
Hardcoding brand names, domains, and contact emails across components is strictly forbidden.
All components consume `@/lib/brand.config`:
- **Legal Brand:** RÉVA Consulting
- **Domain:** `reva-consulte.com`
- **Signature:** *"RÉVA Consulting — Développer. Tester. Optimiser."*
- **Positioning:** Software Publisher & IT Testing Engineering Company
- **Flagship ERP:** Élancé ERP

### 4.2 App Router Localized Routing (`src/app/[locale]/`)
- Native URL-based internationalization: `/fr` (default) and `/en`.
- Root path `/` redirects cleanly to `/fr` via Next.js server redirects in `next.config.ts` and `src/proxy.ts`.
- Content loaded via zero-runtime-overhead static dictionaries (`getDictionary(locale)`).

### 4.3 Design System & Aesthetic Direction
- **Identity:** High-tech enterprise, authoritative engineering, sovereign software publishing.
- **Palette:**
  - Deep Navy Obsidian (`#0B1120`, `#0F172A`)
  - Enterprise Electric Sapphire (`#2563EB`, `#3B82F6`)
  - Precision QA Emerald / Cyan (`#10B981`, `#06B6D4`)
  - Clean High-Contrast Slate / Pure White surfaces
- **Typography:**
  - Display Font: *Plus Jakarta Sans* or *Outfit* (clean, geometric, commanding)
  - Refined Body Font: *Inter Tight* or *Space Grotesk*
  - (Inter, Roboto, and generic Arial defaults are avoided)

### 4.4 Data Separation & SSG
- Data models for Services and Élancé ERP modules are strictly decoupled from UI markup in `src/data/`.
- All pages are statically generated at build time (SSG) with `generateStaticParams`.

---

## 5. Security, Infrastructure & Performance Standards

1. **No External CMS / Fragile API Dependencies**: Content resides in source control for instant sub-millisecond delivery, zero network latency, and maximum security.
2. **Next.js 16 Compatibility**: Strictly respects React 19 asynchronous params (`await params`), Turbopack root declarations, and modern proxy conventions.
3. **Optimized Media Delivery**: Static logos and video assets served natively from `public/images/` with Next.js Image optimizations and HTML5 video streaming best practices.
