# Phase 1: Foundation & Layout Infrastructure - Context

**Status:** Ready for planning
**Source:** User explicitly provided `design.html` reference

<domain>
## Phase Boundary
Scaffold Next.js App Router application and implement the global structure (Navbar and Footer) mirroring `design.html`.
</domain>

<decisions>
## Implementation Decisions

### Technical Stack
- Next.js (App Router required)
- React
- TypeScript (TSX)
- Tailwind CSS

### Architecture
- Persistent global layout wrapped in `layout.tsx` (acting as Outlet).
- Navbar and Footer logic mapped strictly from `design.html`.
- Fonts: `Noto Serif` and `Manrope`, imported natively or configured in Tailwind mapping to Next.js font optimizers.

</decisions>

<canonical_refs>
## Canonical References
- `design.html` (Baseline for static layout mapping)
- `.planning/PROJECT.md`
</canonical_refs>
