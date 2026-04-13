# Architecture

## Overview
This document covers the architectural patterns, layers, data flow, and entry points of the project.

## Architecture Pattern
The current state of the application is a **Static Single-Page HTML Prototype**.
It implements a UI layer without any business logic, state management, or backend routing.

## Entry Points
- `design.html`: The primary and only codebase entry point. It contains all layout structure, inline CSS overrides, and semantic HTML elements (`header`, `main`, `section`, `footer`).

## Data Flow
- **Data:** All text, product names, prices (e.g., "Sandal Bliss — $240"), and imagery paths are currently hardcoded directly within the HTML payload. There is no dynamic data fetching, external API, or state management handling data flow.

## Abstractions & Components
The HTML adopts a component-like structure purely through semantic tags and unified CSS classes:
- **TopAppBar (`<header>`):** Sticky top navigation.
- **Hero Section:** Primary banner.
- **Bento Grid Categories:** Used for fragrance families.
- **Footer:** Standard navigation links.
