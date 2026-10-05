# RÉVA Consulting — State Management Architecture

> **Project:** RÉVA Consulting (`reva-consulte.com`)  
> **Architecture Reference:** Luxaven Next.js 16 Architectural Pattern  
> **Status:** Production Architecture Standard  

---

## 1. Architectural Philosophy

For an authoritative enterprise corporate website and software publisher showcase, **lightweight, predictable, and server-first state management** is paramount. 

Excessive client-side state libraries (e.g., Redux, heavy TanStack Query caches, or complex persistence engines) introduce unnecessary bundle bloat, hydration mismatches, and maintenance liabilities. RÉVA Consulting adopts a **multi-tiered state hierarchy** that favors the platform and the URL as the primary source of truth.

---

## 2. Multi-Tier State Hierarchy

```text
┌─────────────────────────────────────────────────────────────┐
│  Tier 1: URL & Route State (Server-Driven)                  │
│  - Locale segment (/fr, /en)                                │
│  - Active routes, canonical slugs & query parameters        │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  Tier 2: Static Content & Dictionary State (Build-Time SSG) │
│  - Typed dictionaries (src/content/{fr,en}/dictionary.ts)   │
│  - Catalog specifications (src/data/services.ts, elance.ts) │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  Tier 3: Local Component State (React Hooks)                │
│  - Mobile drawer toggle (isOpen: boolean)                   │
│  - Video player controls & modal overlay (reva.mp4)         │
│  - Interactive service tab filter & ERP module inspector    │
│  - Lead capture & Demo request form lifecycle               │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  Tier 4: Server Mutation State (Server Actions)             │
│  - Contact inquiry submission & Élancé ERP demo bookings    │
│  - Input validation via Zod, CSRF-safe execution            │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed State Tier Analysis

### 3.1 Tier 1: URL & Route State (Source of Truth)
- **Locale Resolution**: Explicitly declared via Next.js App Router dynamic route segments (`/[locale]/...`). All routing, redirects, and hreflang metadata are derived directly from the URL.
- **Benefits**: Perfect SSR compatibility, zero client-side routing state desynchronization, instant back/forward browser cache fidelity.

### 3.2 Tier 2: Static Content & Data State
- **Content Dictionaries**: Localized UI copy is imported via `getDictionary(locale)` in Server Components and passed as lightweight props.
- **Catalog Data**: High-fidelity technical specifications for RÉVA's 10 service offerings and Élancé ERP modules live in `src/data/`. They are strictly typed and statically bundled at build time.
- **Benefits**: Zero database bottlenecks, sub-millisecond Time to First Byte (TTFB), instant static page generation (SSG).

### 3.3 Tier 3: Local Interactive State (`useState` / `useReducer`)
- Confined to leaf client components:
  1. **Video Showcase (`video-showcase.tsx`)**: Controls playback state, volume/mute toggles, and full-screen modal viewing of `public/images/pub/reva.mp4`.
  2. **Mobile Navigation (`navbar.tsx`)**: Manages drawer open/close transitions and backdrop blur locks.
  3. **Élancé ERP Module Explorer (`elance-showcase.tsx`)**: Handles active module selection (e.g., Financial Engine, Supply Chain, Automated QA dashboard).
  4. **Contact / Demo Form (`contact-section.tsx`)**: Manages form field values, validation feedback, and submission loading states.

### 3.4 Tier 4: Server Mutation Bridge (Server Actions)
- When prospective enterprise clients submit an inquiry or book an Élancé ERP demo:
  - Form data is submitted to a Next.js Server Action (`submitInquiryAction`).
  - Validation is executed server-side using **Zod**.
  - Returns a type-safe discriminated union response (`{ success: true } | { error: string }`).

---

## 4. Evaluation of Global State Libraries

| Library | Included? | Architectural Assessment & Rationale |
| :--- | :--- | :--- |
| **Zustand** | ❌ Excluded / Optional | Not required for initial phase. There is no shopping cart or persistent global session. Can be introduced later only if a multi-step ERP interactive sandbox is built. |
| **TanStack Query** | ❌ Excluded | Redundant. All marketing content and product data are static or SSG. There are no frequently mutating REST API endpoints to poll or cache. |
| **Redux / MobX** | ❌ Strictly Prohibited | Over-engineered, massive bundle overhead, unnecessary complexity for a high-performance corporate presence. |
| **React Context** | ⚠️ Minimal / Restricted | Only utilized if deeply nested UI themes or global modal managers become necessary; otherwise avoided to prevent broad subtree re-renders. |

---

## 5. Form & Lead State Pattern

```tsx
// Example pattern for Élancé ERP Demo Request state
'use client';

import * as React from 'react';

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  needsERP: boolean;
  needsQA: boolean;
  message: string;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
}

export function useInquiryForm() {
  const [state, setState] = React.useState<FormState>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    needsERP: true,
    needsQA: false,
    message: '',
    status: 'idle',
  });

  const handleChange = (field: keyof FormState, value: any) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, status: 'submitting' }));
    
    // NOTE: Submits to Server Action
    // Flag contract: { name, company, email, phone, services, message }
    try {
      // Mock or call Server Action
      setState((prev) => ({ ...prev, status: 'success' }));
    } catch (err) {
      setState((prev) => ({ ...prev, status: 'error', errorMessage: 'Erreur lors de la transmission.' }));
    }
  };

  return { state, handleChange, submit };
}
```
