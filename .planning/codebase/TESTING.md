# Testing

## Overview
This document details the testing framework, structure, mocking strategies, and code coverage in the project.

## Current State
- **No tests exist.** The project is a static HTML prototype (`design.html`).
- **No frameworks installed.** Jest, Cypress, Vitest, Playwright, or equivalents are not present in the environment.

## Visual Quality Assurance
- **Manual Verification:** Testing is currently limited to visual inspection of the rendered HTML in a browser to verify Tailwind class applications and responsive behavior.
- **Browser Output:** Relies entirely on correct CSS rendering across viewports.

## Recommendations for Future
- Once transitioned to a component-driven framework (like React or Vue), consider introducing component unit tests.
- End-to-end tests (e.g., Cypress or Playwright) for critical flows such as checkout or newsletter subscription will be beneficial going forward.
