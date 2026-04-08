# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm preview      # Preview production build locally

pnpm check        # Run svelte-check (Svelte type checking)
pnpm typecheck    # Run tsc --noEmit (TypeScript check)
pnpm lint         # Run prettier check + eslint
pnpm format       # Auto-format with prettier
pnpm spellcheck   # Run cspell

pnpm pre-build    # Full pre-flight: check + typecheck + spellcheck + format + lint
```

The CI pipeline runs `pnpm pre-build` before building. New words can be added to `cspell.json` when the spell checker flags them legitimately.

## Architecture

**Stack:** SvelteKit 5 + Svelte 5 + TypeScript + Tailwind CSS + Skeleton Labs UI, deployed to Vercel.

**Content is data-driven.** All portfolio content lives in `/src/data/`:

- `projects.ts` — exports `HIGHLIGHTED_PROJECTS`, `PROFESSIONAL_PROJECTS`, `PERSONAL_PROJECTS`
- `experience.ts` — exports work history, education, skills, and recommendations
- `about.ts` — about page content

Components import directly from these data files. There is no backend, no API, and no database — this is a fully static site.

**Routes:**

- `/` — Home (`QuickIntro`, `HighlightedProjects`, `Experience`)
- `/projects` — Full gallery with `ProjectModal` for detail view (Skeleton Labs modal system)
- `/about` — Full intro, resume download, recommendations carousel, full experience
- `/[...path]` — Catch-all 404 page

**Shared components** live in `/src/routes/components/`. Route-specific components (e.g., `ProjectModal.svelte`) are colocated under the relevant route directory.

**Static assets** in `/static/`: images, icons, fonts, and downloadable files (resume PDF).

**Styling** uses Tailwind with the Skeleton Labs plugin. Dark mode is class-based. The Inter font is configured as both the base and heading font family in `tailwind.config.ts`.

**Markdown support** is enabled via mdsvex — `.svx` files are treated as Svelte+Markdown components.
