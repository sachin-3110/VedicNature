# Phase 1: Foundation & Layout Infrastructure - Technical Research

## Validation Architecture
- [ ] Next.js app correctly initialized (verify `package.json`).
- [ ] Tailwind CSS configured properly (verify `tailwind.config.ts` and `app/globals.css`).
- [ ] `app/layout.tsx` includes `<Navbar />` and `<Footer />`.
- [ ] Fonts (Noto Serif, Manrope) are incorporated using `next/font/google`.

## Implementation Details
1. **Tooling**: Use standard CLI: `npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm`
2. **Components**: The HTML `<header>` block from `design.html` will become the `Navbar` component, and the `<footer>` block will become the `Footer` component.
3. **Asset Handling**: Logos and images must point correctly to the `/public` directory or external domains listed in Next `next.config.mjs` if using `next/image`.
