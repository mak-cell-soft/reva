<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BRAND IDENTITY: RÉVA CONSULTING

- **Public brand:** RÉVA Consulting
- **Technical identifier:** reva
- **Domain:** reva-consulte.com
- **Contact email:** contact@reva-consulte.com
- **Signature / Tagline:** "RÉVA Consulting — Développer. Tester. Optimiser."
- **Positioning:**
  - **RÉVA Consulting** → Software publisher / technology engineering company specializing in custom software development and IT testing / QA.
  - **Élancé** → Flagship proprietary ERP solution developed and commercialized by RÉVA Consulting.
- **Display formatting:** Always preserve accents: **RÉVA Consulting** and **Élancé ERP**.
- **Single Source of Truth:** Brand values must come from `src/lib/brand.config.ts` instead of being duplicated across components.
- **Rule:** Do not hardcode the public brand name or domain in UI components when the value can be imported from `brand.config.ts`.

# ARCHITECTURAL PHILOSOPHY (LUXAVEN ALIGNMENT)

- **Routing:** Next.js 16 App Router native localized subpaths under `src/app/[locale]/`.
- **Supported Locales:** `fr` (default), `en`. Defined in `src/lib/i18n/config.ts`.
- **Root Redirect:** `/` redirects to `/fr` via server redirects in `next.config.ts` and `src/proxy.ts`.
- **Typography:**
  - Display: Plus Jakarta Sans (`--font-display`)
  - Body: Outfit or Space Grotesk (`--font-body`)
  - Inter, Roboto, and generic Arial are strictly forbidden.
- **Content Dictionaries:** Typed per-locale dictionaries in `src/content/{fr,en}/dictionary.ts`. Loaded via `getDictionary(locale)` in `src/lib/i18n/dictionaries.ts`.
- **Data Models:** Separated in `src/data/services.ts`, `src/data/elance-erp.ts`, `src/data/partners.ts`.
- **Asset Preservation:** Source media in `public/images/logos/**` (`logo1.jpeg`–`logo6.jpeg`) and `public/images/pub/reva.mp4` must NOT be moved or deleted.
