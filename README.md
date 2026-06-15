# Lachlan Webb — Portfolio

Personal portfolio site for Lachlan Webb (Technical Product Manager). Built
with React + Vite from the `personal.pen` design.

## Develop

```bash
npm install
npm run dev      # local dev server with HMR
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Structure

- `src/App.jsx` — the whole site. Content lives in data arrays at the top
  (`NAV`, `PILLS`, `EXPERIENCE`, `WORK`, `SKILLS`, …) — edit those to update copy.
- `src/index.css` — design tokens (colours, fonts) as CSS custom properties.
- `src/App.css` — all section styles + responsive breakpoints.

## Deploy

Hosted on Vercel via its GitHub integration: every push to `main` triggers a
production deploy. Vercel auto-detects the Vite framework (build `npm run build`,
output `dist/`) — no extra config needed.
