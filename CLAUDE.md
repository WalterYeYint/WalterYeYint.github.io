# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site for Ye Yint Thu (Walter), deployed to GitHub Pages at https://WalterYeYint.github.io/. React + TypeScript + Vite, styled with Tailwind and animated with Framer Motion.

## Commands

```bash
npm run dev      # Vite dev server (hot reload)
npm run build    # tsc type-check, then vite build -> dist/
npm run preview  # serve the built dist/ locally
npm run deploy   # gh-pages -d dist (manual deploy; normally CI handles this)
```

There is no test suite, linter config, or single-test command. `npm run build` runs `tsc` first, so type errors fail the build — `strict`, `noUnusedLocals`, and `noUnusedParameters` are all on (see `tsconfig.json`).

## Architecture

The entire site is one component: [src/App.tsx](src/App.tsx). [src/main.tsx](src/main.tsx) just mounts it. There is no router, no component library, no state management beyond two `useState` hooks (scroll state + selected-project modal).

**Content vs. presentation are separated within the one file.** All site content lives in a single `cvData` object at the top of `App.tsx` (name, about, skills, experience, projects, education, certificates). The JSX below it maps over `cvData` to render sections. **To change site content, edit `cvData` — not the JSX.**

Projects (`cvData.projects`) are the most structured part. Each project is a card; clicking it opens a modal. Optional per-project fields drive what the modal renders:
- `video` / `video2` — YouTube **embed** URLs (`https://www.youtube.com/embed/...`), rendered as iframes
- `image` / `image2` — paths like `"images/foo.png"` resolved against `public/`
- `doc` — a PDF path like `"documents/foo.pdf"`, rendered via `<embed>`
- `url` / `url_txt` — an external link with its label

## Static assets — must live in `public/`

Vite serves and copies `public/` to the site root. Anything referenced at runtime by URL (the CV PDF at `/Ye_Yint_Thu_CV.pdf`, project `images/...` and `documents/...`) **must** be in `public/`, not `src/`. A recent fix moved these out of the project root for exactly this reason — don't reference assets by relative source paths.

## Deployment

Pushing to `main` (or `master`) triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `vite.config.ts` sets `base: '/'` because the site is served from the apex `*.github.io` domain (not a project subpath) — changing the base will blank the deployed page.

## Styling

Tailwind utility classes plus three custom component classes defined in [src/index.css](src/index.css): `.glass-card`, `.glass-btn`, `.primary-btn` (the frosted-glass look). Theme colors and fonts are extended in [tailwind.config.js](tailwind.config.js). `cn()` in `App.tsx` merges conditional classes via clsx + tailwind-merge. The design is dark, Apple-inspired (blue `#2997FF` accent on black).

## Legacy / ignore

`index_old.html` (old static version), `rewrite_app.py` (a one-off codegen helper that regenerated `App.tsx` while preserving `cvData`), and the committed `dist/` are not part of the active workflow.
