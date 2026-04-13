# Codebase Structure

## Overview
This document describes the directory layout, key file locations, and naming conventions for the project.

## Directory Layout
The current directory is entirely flat with only one subdirectory for assets:
- `design.html`: The monolithic HTML document containing the entire UI, Tailwind config, and custom CSS.
- `Images/`: A dedicated folder containing local image assets referenced in the HTML document.
  - Examples: `mogra-portrait.webp`, `mogra-landscape.webp`, `lavender.webp`, `24-k-gold-oud.webp`, `real-kesar.webp`, `sandal-bliss.webp`.
- `.git/`: Git version control tracking folder.
- `.agents/` and `.planning/`: Agentic workflow state and workflow instructions.

## Key Locations
- **Tailwind Config:** Embedded directly in `design.html` inside a `<script id="tailwind-config">` tag.
- **Custom CSS:** Embedded in a `<style>` block in the head of `design.html` (e.g., `.editorial-grid`, `.material-symbols-outlined`).

## Naming Conventions
- **Assets:** Kebab-case naming for image files (e.g., `real-kesar.webp`, `sandal-bliss.webp`).
- **Files:** Lowercase HTML file naming (`design.html`).
