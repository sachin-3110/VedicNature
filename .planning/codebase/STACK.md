# Codebase Stack

## Overview
This section outlines the technology stack, languages, frameworks, and configuration used in the project.

## Core Technologies
- **HTML5:** Used as the base markup language for the single-page prototype.
- **Tailwind CSS:** Imported via CDN (`<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>`). A custom configuration is defined directly in `<script id="tailwind-config">` overriding colors related to Material Design 3 surface tokens and custom typography (`fontFamily` for `headline`, `body`, `label`).
- **Google Fonts:** Specifically `Noto Serif` and `Manrope`.
- **Google Material Symbols:** Imported via Google Fonts for icons.

## Build Tools & Runtime
- Currently a static HTML site without a Node.js build process or bundler (no `package.json`, React, Vue, or Webpack present). 

## Dependencies
All dependencies are linked via external CDNs inside `design.html`.
- Tailwind script: Tailwind 3.x CDN script.
- Google Fonts & Material Symbols CDN links.

## Configuration
- Tailwind configuration is hardcoded in the HTML head (`design.html`).
