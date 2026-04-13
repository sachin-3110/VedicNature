# Vedic Nature E-commerce Application

## What This Is

A premium e-commerce web application for selling luxury perfumes. It serves as a modern, dynamic Next.js React storefront tailored for customers seeking high-end botanical fragrances.

## Core Value

A visually stunning, seamless shopping experience that deeply encapsulates luxury and speed while converting effectively.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Migrate the current static `design.html` to a fully componentized Next.js frontend using React and TypeScript (TSX).
- [ ] Implement global layout architecture (persistent navbar and footer with content outlet approach).
- [ ] Establish initial static routing to dummy placeholder pages (Shop, Collections, About).
- [ ] Hardcode immediate product and category data for core visual testing and QA.
- [ ] Integrate Custom CMS for managing premium perfume catalog and orders (Phase 2).
- [ ] Integrate Razorpay as the checkout and payment processor (Phase 2).

### Out of Scope

- [ ] Transitioning to alternative frontend frameworks (locked into Next.js/React).

## Context

- The design foundation is currently defined entirely in a monolithic 600+ line `design.html` utilizing utility-based rendering via Tailwind CSS (CDN).
- Expected standard is high-end UI/UX representing "silent luxury."

## Constraints

- **Tech Stack**: Next.js (App Router), React, TSX, Tailwind CSS — Modern ecosystem required for future scalability.
- **Phased Approach**: Must transition sequentially. First phase must rely on mock data before moving to backend integration.
- **Payments**: Razorpay must be used for payment processing.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router | Offers server components & robust routing out of the box | — Pending |
| Razorpay Gateway | Native capabilities fitting the target market requirements | — Pending |
| Progressive Data Evolution | Shipping static first allows rapid validation of UI/UX | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone**:
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-13 after initialization*
