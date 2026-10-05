# RÉVA Consulting — Coding Rules & Standards

> **Project:** RÉVA Consulting (`reva-consulte.com`)  
> **Architecture Reference:** Luxaven Next.js 16 Architectural Pattern & Engineering Discipline  
> **Status:** Production Standard  

---

## 1. General Engineering Rules

- ✅ **Strict TypeScript**: TypeScript strict mode is enforced. The use of `any` is strictly prohibited; use `unknown`, generics, or define explicit types.
- ✅ **Absolute Imports**: Always use the path alias `@/*` (e.g. `@/components/ui/button`, `@/lib/brand.config`). Relative path traversals (`../../`) are forbidden.
- ✅ **Naming Conventions**:
  - Files and directories: `kebab-case.ts` / `kebab-case.tsx`
  - React components: `PascalCase`
  - React hooks: `useCamelCase`
  - Constants: `UPPER_SNAKE_CASE` or `camelCase` object maps
  - Types & Interfaces: `PascalCase` (e.g. `ServiceItem`, `Dictionary`)
- ✅ **Zero Dead Code**: Unused imports, unused variables, and console statements (`console.log`) must not be committed to the repository.

---

## 2. Brand Identity & Single Source of Truth

- ✅ **Centralized Brand Abstraction**:
  - The public brand name `RÉVA Consulting`, signature `"RÉVA Consulting — Développer. Tester. Optimiser."`, domain `reva-consulte.com`, and flagship product `Élancé ERP` MUST always be imported from `@/lib/brand.config`.
  - ❌ **Strict Prohibition**: Never hardcode `"RÉVA Consulting"` or `"reva-consulte.com"` directly inside UI strings, layouts, or component templates.
- ✅ **Positioning Discipline**:
  - **RÉVA Consulting** = Software publisher & IT engineering / QA company.
  - **Élancé ERP** = Proprietary ERP software developed, maintained, and commercialized by RÉVA Consulting.

---

## 3. Server-First & Client Boundary Rules

- ✅ **Server Components First**: All page layouts, route endpoints, and static presentational components are Server Components by default.
- ✅ **Push `'use client'` to the Leaves**: Only apply the `'use client'` directive to isolated leaf components that genuinely require React hooks (`useState`, `useEffect`), event listeners (`onClick`, `onScroll`), or browser-only APIs.
- ❌ **Prohibition**: Never mark an entire page or root layout as `'use client'`.

---

## 4. Typography & Visual Aesthetics Standards

- ✅ **No Generic Fonts**: The use of default fonts such as *Inter*, *Roboto*, or *Arial* is strictly prohibited.
- ✅ **Approved Font System**:
  - **Display / Headers**: *Plus Jakarta Sans* (`--font-display`) — geometric, authoritative, modern engineering.
  - **Body / Technical**: *Outfit* or *Space Grotesk* (`--font-body`) — crisp readability, refined technical tone.
- ✅ **Color System via CSS Custom Properties**:
  - Deep Navy Obsidian (`--bg-primary: #0B1120`, `--bg-surface: #0F172A`)
  - Enterprise Electric Sapphire (`--accent-blue: #2563EB`, `--accent-glow: #3B82F6`)
  - Precision QA Emerald / Cyan (`--accent-emerald: #10B981`, `--accent-cyan: #06B6D4`)
  - High-Contrast Text (`--text-primary: #F8FAFC`, `--text-muted: #94A3B8`)
- ✅ **Micro-Animations**: Use Framer Motion or CSS keyframes for staggered reveals, hover micro-interactions, and active state transitions. Avoid jarring or performance-degrading continuous animations.

---

## 5. Commenting Standards

Every file and component must include meaningful comments following these rules:
- **Why, not just what**: Document the architectural intent and design rationale, not merely what the code syntax does.
- **Flag Backend & API Contracts**: Whenever frontend models or forms interact with backend services (e.g. Élancé ERP API, lead capture endpoints, or C#/.NET microservices), clearly document the payload contract and assumptions.
- **Future-Proofing**: Consistently use `// NOTE:` for architectural context and `// TODO:` for planned iterations.

### Example Component Pattern
```tsx
// NOTE: Client component required for interactive tab switching and Framer Motion layout animation.
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandConfig } from '@/lib/brand.config';
import { cn } from '@/lib/utils';
import type { ServiceItem } from '@/types';

interface ServicesGridProps {
  /** Localized array of services derived from getDictionary() */
  services: ServiceItem[];
  /** Optional container CSS class */
  className?: string;
}

/**
 * ServicesGrid displays RÉVA Consulting's core technical pillars.
 * Uses CSS Grid with responsive columns and fluid gap scaling.
 */
export function ServicesGrid({ services, className }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  return (
    <section className={cn('relative py-24 bg-slate-950', className)}>
      {/* Visual architecture: ambient blue glow reflects software engineering precision */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {brandConfig.signature}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Expertise & Solutions Logicielles
          </h2>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 6. Accessibility & SEO Standards

- ✅ **Heading Hierarchy**: Exactly one `<h1>` per page. Subsections follow strict `<h2>` → `<h3>` ordering without skipping levels.
- ✅ **Semantic Elements**: Mandatorily use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- ✅ **Alt Text & Media**: All images must provide descriptive, localized `alt` attributes. Decorative images must have `aria-hidden="true"`.
- ✅ **Interactive Touch Targets**: All clickable buttons and links must have a minimum interactive target size of 44×44px with explicit focus visible rings (`focus-visible:ring-2`).
