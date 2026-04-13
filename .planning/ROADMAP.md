# Roadmap

## Phase 1: Foundation & Layout Infrastructure
**Goal:** Initialize the Next.js workspace and establish persistent navigation context.
- Scaffold Next.js application with TypeScript and Tailwind CSS.
- Integrate custom brand font configurations (Noto Serif, Manrope).
- Implement global `<Navbar />` and `<Footer />` components within `layout.tsx`.

## Phase 2: Componentization & Dummy Routing
**Goal:** Modularize `design.html` sections and build out navigation skeleton.
- Modularize Hero section, Categories grid, and Feature product highlights.
- Establish dummy routes (Shop, Collections, About) injecting the new components.
- Wire mock catalog data arrays for visual population.

## Phase 3: Interactive Polish & QA
**Goal:** Exact replication of `design.html` aesthetic and performance scaling.
- Analyze global CSS adjustments and visual layout.
- Final visual QA and responsivity validation on mobile endpoints against the design target.

## Phase 4: CMS & Commerce (Deferred Step)
**Goal:** Connect the real-time operational layer.
- Integrate initial Razorpay payment flow.
- Setup custom CMS schema models and begin dynamic data mapping.
