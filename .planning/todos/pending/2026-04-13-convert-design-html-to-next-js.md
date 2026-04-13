---
created: 2026-04-13T13:24:46+05:30
title: Convert design.html to explicit Next.js framework
area: ui
files:
  - design.html
---

## Problem

The website currently consists of a monolithic hardcoded implementation in `design.html`. The project needs to migrate this static design into a fully dynamic Next.js application using React components (TSX). It requires a consistent global layout pattern (navbar and footer present on all pages, like an outlet) while implementing basic routing towards dummy/placeholder pages until the sub-pages are complete.

## Solution

1. Initialize a Next.js App Router project.
2. Break down `design.html` into independent functional React components (Navbar, Footer, Hero, Categories).
3. Create a root `layout.tsx` that includes the `<Navbar />` and `<Footer />`, rendering `children` in between (forming the standard layout outlet).
4. Implement routing and configure dummy placeholder pages (e.g., Shop, Collections, About) to demonstrate the navigation mechanics.
5. Translate the embedded Tailwind configuration into an explicit `tailwind.config.ts`.
