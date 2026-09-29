# Magic & Astonishment

An editorial information site about modern close-up, family, parlor, and stage magic. The experience uses the supplied performance photography to explain how each show format feels, with an emphasis on shared wonder and audience reactions.

## Technology

- TanStack Start and React 19
- TypeScript and Vite
- Tailwind CSS 4 with a custom responsive design system
- Netlify Image CDN for resized, cropped, optimized imagery
- Netlify deployment adapter

## Local development

Install dependencies with `pnpm install`, then run `pnpm dev`. The Vite development server starts on port 3000. For the closest production emulation, run `netlify dev --port 8889` instead.

Production output is generated with `pnpm build` and deployed through Netlify.
