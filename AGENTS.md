# Project guide

## Architecture

This is a single-page informational site built with TanStack Start and React. TanStack Router supplies file-based routing and Netlify's TanStack adapter handles deployment. There is no database, server function, or client-side state because the content is intentionally editorial and static.

## Key directories

- `src/routes/index.tsx` contains the complete homepage structure and content.
- `src/routes/__root.tsx` owns the shared document shell and social metadata.
- `src/styles.css` contains the design system, responsive layout, motion, and accessibility preferences.
- `public/img` contains the supplied performance photography with descriptive filenames.

## Conventions

- Keep page sections semantic and preserve useful image alternative text.
- Use the `image()` helper in the index route for local images so assets pass through Netlify Image CDN.
- Use CSS custom properties for palette changes and keep responsive rules in the mobile breakpoint at the end of `styles.css`.
- Respect `prefers-reduced-motion` when adding animation.
- Components use PascalCase; data and helpers use camelCase.

## Design decisions

The visual direction is a modern theatrical showbill: warm paper, oxblood, brass, high-contrast editorial typography, fine rules, and asymmetrical image placement. The page deliberately avoids booking claims, testimonials, performer names, contact details, and location details that were not provided. The Google-hosted Italiana and DM Sans fonts are imported from the stylesheet, with generic serif and sans-serif fallbacks.
