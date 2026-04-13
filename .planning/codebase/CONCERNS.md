# Areas of Concern

## Overview
Technical debt, bugs, security issues, performance bottlenecks, and fragile areas identified in the codebase.

## Technical Debt
- **HTML Monolith:** `design.html` is 600+ lines long. If the project expands, maintaining a monolithic HTML file will become cumbersome. It begs for a transition to a templating engine or component-based framework (Next.js, Vue, etc.).
- **Hardcoded State:** Products, categories, and "Top Notes" are hardcoded. A data layer or CMS integration will be necessary for a real storefront.
- **Inline Tailwind Config:** The Tailwind theme is defined via an inline script targeting the CDN. For production, a build step (e.g., Vite/Webpack/PostCSS) parsing a `tailwind.config.js` is required to minimize CSS bundle size and improve load performance.

## Performance Risks
- **Unoptimized Assets:** Some images are loaded directly from a local `Images/` folder without explicit responsive sizes (`srcset`), while one logo is served from Cloudfront. Relying entirely on raw .webp files might impact LCP (Largest Contentful Paint) without proper lazy loading (`loading="lazy"`) and explicit dimensions.
- **Tailwind CDN:** Using `cdn.tailwindcss.com` is strictly for development. It impacts parsing performance on page load and shouldn't be deployed to production.

## Security
- No immediate physical security vulnerabilities detected in static markup, but the newsletter form lacks CSRF or sanitization protections since it isn't wired to a backend yet.
