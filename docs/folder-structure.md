# RÉVA Consulting — Folder Structure Specification

> **Project:** RÉVA Consulting (`reva-consulte.com`)  
> **Architecture Reference:** Luxaven Next.js 16 Architectural Pattern  
> **Status:** Production Specification  

```text
reva/
├── .agents/                            # Local agent rules, skills and IDE context
├── .git/                               # Version control repository
├── .gitignore                          # Standard Next.js & node ignore rules
├── AGENTS.md                           # Single source of truth for AI agents (Brand & Rules)
├── CLAUDE.md                           # Pointer to AGENTS.md
├── docs/                               # Engineering & architectural documentation
│   ├── architecture.md                 # System architecture & technical audit
│   ├── coding-rules.md                 # Strict TypeScript & component conventions
│   ├── folder-structure.md             # [This Document] Directory hierarchy guide
│   ├── state-management.md             # Multi-tier state management strategy
│   └── walkthrough.md                  # Implementation roadmap & audit findings
├── eslint.config.mjs                   # ESLint 9 Flat Config (Core Web Vitals & TypeScript)
├── next-env.d.ts                       # Next.js TypeScript declarations
├── next.config.ts                      # Next.js configuration (Turbopack root, redirects)
├── package.json                        # Dependencies, engines, and npm scripts
├── postcss.config.mjs                  # PostCSS with @tailwindcss/postcss
├── public/                             # Public static assets
│   ├── favicon.ico                     # Brand favicon
│   ├── icon.svg                        # Vector brand mark
│   └── images/                         # Static image and media assets
│       ├── logos/                      # Partner & client ecosystem logos
│       │   ├── logo1.jpeg
│       │   ├── logo2.jpeg
│       │   ├── logo3.jpeg
│       │   ├── logo4.jpeg
│       │   ├── logo5.jpeg
│       │   └── logo6.jpeg
│       └── pub/                        # Corporate media assets
│           └── reva.mp4                # Brand showcase video
├── src/
│   ├── app/                            # Next.js 16 App Router hierarchy
│   │   ├── [locale]/                   # Localized route segment (/fr, /en)
│   │   │   ├── layout.tsx              # Localized root layout (HTML tag, fonts, SEO)
│   │   │   ├── page.tsx                # Enterprise Homepage
│   │   │   ├── not-found.tsx           # 404 handler per locale
│   │   │   ├── elance-erp/
│   │   │   │   └── page.tsx            # Dedicated Élancé ERP product page
│   │   │   ├── services/
│   │   │   │   ├── page.tsx            # Comprehensive IT Services overview
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Granular service capability page
│   │   │   ├── testing-qa/
│   │   │   │   └── page.tsx            # IT Testing & QA Center of Excellence page
│   │   │   ├── a-propos/
│   │   │   │   └── page.tsx            # About RÉVA Consulting, values & team
│   │   │   └── contact/
│   │   │       └── page.tsx            # Project scoping & Élancé ERP demo request
│   │   ├── globals.css                 # Tailwind v4 theme, CSS variables & animations
│   │   ├── robots.ts                   # Search crawler directives
│   │   └── sitemap.ts                  # Multilingual XML sitemap generator
│   ├── components/                     # Modular component library
│   │   ├── motion/                     # Micro-animation wrappers
│   │   │   ├── fade-in.tsx             # Staggered reveal & viewport observer
│   │   │   └── counter.tsx             # Metric counter animation
│   │   ├── navigation/                 # Layout chrome
│   │   │   ├── footer.tsx              # Enterprise footer with legal & positioning
│   │   │   ├── language-switcher.tsx   # FR/EN toggle with route preservation
│   │   │   └── navbar.tsx              # Sticky header with navigation & CTA
│   │   ├── sections/                   # High-level section components
│   │   │   ├── contact-section.tsx     # B2B inquiry & ERP demo form
│   │   │   ├── elance-showcase.tsx     # Élancé ERP spotlight & feature breakdown
│   │   │   ├── hero-section.tsx        # High-impact split hero with signature
│   │   │   ├── logo-cloud.tsx          # Client/partner trust carousel
│   │   │   ├── services-grid.tsx       # Core software engineering services
│   │   │   ├── stats-metrics.tsx       # Key reliability & QA metrics
│   │   │   ├── testing-qa-section.tsx  # QA methodology & testing laboratory
│   │   │   └── video-showcase.tsx      # Video showcase with playback controls
│   │   ├── seo/                        # JSON-LD structured data generators
│   │   │   └── json-ld.tsx             # Organization & SoftwareApplication schemas
│   │   └── ui/                         # Atomic design UI primitives
│   │       ├── badge.tsx               # Tech stack pill badges
│   │       ├── button.tsx              # Polymorphic CVA button
│   │       ├── card.tsx                # Glassmorphic & bordered card containers
│   │       └── input.tsx               # Accessible form controls
│   ├── content/                        # Type-safe multilingual dictionaries
│   │   ├── fr/                         # French (default locale)
│   │   │   └── dictionary.ts           # Complete translated strings & labels
│   │   └── en/                         # English
│   │       └── dictionary.ts           # Complete translated strings & labels
│   ├── data/                           # Decoupled domain content & catalogs
│   │   ├── elance-erp.ts               # Élancé ERP modules, features, and capabilities
│   │   ├── partners.ts                 # Partner/client logo registry
│   │   └── services.ts                 # 10 core consulting and engineering service definitions
│   ├── hooks/                          # Reusable React hooks
│   │   ├── use-media-query.ts          # Responsive viewport hook
│   │   └── use-scroll-direction.ts     # Header hide/show on scroll
│   ├── lib/                            # Foundational utilities and configs
│   │   ├── brand.config.ts             # Single source of truth for brand data
│   │   ├── fonts.ts                    # Google font loaders (Plus Jakarta Sans, etc.)
│   │   ├── i18n/                       # Localization helpers
│   │   │   ├── config.ts               # Supported locales, default locale
│   │   │   ├── dictionaries.ts         # Static dictionary loader
│   │   │   ├── index.ts                # Public i18n barrel
│   │   │   └── types.ts                # TypeScript dictionary schema
│   │   ├── seo/                        # SEO & Metadata builders
│   │   │   └── metadata.ts             # OpenGraph, Twitter card & title templates
│   │   └── utils.ts                    # Tailwind `cn()` merge utility
│   ├── proxy.ts                        # Edge proxy for root locale redirection
│   └── types/                          # Global TypeScript interface definitions
│       └── index.ts                    # Shared domain types
└── tsconfig.json                       # TypeScript compiler configuration (strict mode)
```

---

## Directory Responsibilities

| Path | Purpose & Ownership |
| :--- | :--- |
| `src/app/[locale]/` | Only handles route layouts, page composition, and metadata injection. Contains no hardcoded business copy. |
| `src/components/sections/` | High-impact visual blocks representing page sections. Receive content props from pages or dictionaries. |
| `src/components/ui/` | Primitive, stateless UI components. Adhere strictly to design system tokens. |
| `src/content/` | Type-safe static dictionaries. Contains all localized strings. Must never be duplicated in UI files. |
| `src/data/` | Structured domain records (Élancé ERP modules, Service offerings, Partner metadata). Decoupled from markup. |
| `src/lib/brand.config.ts` | The ONLY allowed place to declare brand name, legal entity, domain, tagline, and contact channels. |
| `public/images/` | Static media assets. Source logos (`logos/`) and corporate video (`pub/reva.mp4`) are strictly preserved. |
