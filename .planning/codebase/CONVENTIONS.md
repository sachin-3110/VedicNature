# Coding Conventions

## Overview
Code style, naming conventions, design patterns, and error handling practices found in the codebase.

## HTML & CSS Conventions
- **Tailwind Utility Classes:** Extensive use of Tailwind classes for layout (`flex`, `grid`, `absolute`, `relative`), spacing (`pt-24`, `mt-32`), typography (`font-headline`, `text-5xl`), and colors (`bg-background`, `text-primary`).
- **Semantic HTML:** Strong usage of semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` improving a bit of accessibility.
- **Inline Tailwind Config:** Colors are mapped to Material Design 3 token structures (e.g., `on-tertiary-fixed-variant`, `surface-container-high`).
- **Custom CSS:** A few custom styles augment Tailwind (`.editorial-grid`, `.material-symbols-outlined`), keeping most styling strictly utility-based.
- **Responsive Design:** Standard Tailwind breakpoints are used (e.g., `md:flex`, `sm:px-12`).

## JavaScript Conventions
- **None active.** There is no significant JavaScript code written apart from the Tailwind config object. Interaction (like button clicks or form submissions) is absent or placeholder.

## Error Handling
- **None active.** As a static HTML file, there are no runtime error handling patterns in place.
