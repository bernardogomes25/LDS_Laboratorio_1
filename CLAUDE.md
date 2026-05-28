# Bernardo's Portfolio — Development Guide

## Project Overview

Personal portfolio website (SPA) with React 19 + Vite 6 + Tailwind CSS v4. Dark mode with green accents.

- **Live:** [https://portfolio-bernardo-gomes.vercel.app/](https://portfolio-bernardo-gomes.vercel.app/)
- **GitHub:** https://github.com/bernardogomes25/bernardo-portfolio

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.0 | UI framework |
| Vite | 6.3.5 | Build tool & dev server |
| Tailwind CSS | 4.2.0 | Styling |
| Lucide React | 0.575.0 | Icons |
| eslint-plugin-react | Latest | React/JSX linting |
| Node.js | 22.x LTS | Runtime |
| ESLint | 9.39.1 | Code quality |

**Deployment:** Vercel (auto-deploy on git push to main)

---

## Project Structure

```
bernardo-portfolio/
├── meu-portfolio/
│   ├── public/
│   │   └── dev.svg                # Favicon
│   ├── src/
│   │   ├── assets/img/            # Portfolio images (optimized WebP)
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   │   ├── DotGrid.jsx
│   │   │   │   ├── StairShape.jsx
│   │   │   │   ├── Squiggle.jsx
│   │   │   │   ├── ScrollParallax.jsx
│   │   │   │   ├── TypewriterText.jsx
│   │   │   │   ├── Badge.jsx              # Reusable badge (variants: default, secondary)
│   │   │   │   └── FormInput.jsx          # Reusable form input with validation
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ProjectsSection/
│   │   │   │   └── ProjectsSection.jsx    # Lazy loaded chunk
│   │   │   ├── ExperienceSection/
│   │   │   │   └── ExperienceSection.jsx  # Lazy loaded chunk
│   │   │   └── ContactSection/
│   │   │       └── ContactSection.jsx     # Lazy loaded chunk
│   │   ├── hooks/
│   │   │   ├── useTypewriter.js
│   │   │   └── useContactForm.js
│   │   ├── data/
│   │   │   ├── projects.js                # Project list with WebP images
│   │   │   └── parallax.js
│   │   ├── i18n/
│   │   │   └── translations.js            # EN/PT translations
│   │   ├── constants/
│   │   │   └── colors.js                  # Theme colors & constants
│   │   ├── App.jsx                        # Main layout (~35 lines)
│   │   ├── index.css                      # Tailwind config + theme variables
│   │   └── main.jsx                       # React entry point
│   ├── index.html                 # HTML root
│   ├── package.json               # Dependencies & scripts
│   ├── vite.config.js             # Vite config
│   ├── vercel.json                # Vercel SPA routing
│   └── eslint.config.js           # ESLint config with React plugin
├── README.md                      # Documentation (PT-BR)
└── CLAUDE.md                      # This file
```

---

## Quick Start

### Prerequisites
```bash
node --version    # v22.x or higher
npm --version     # v10 or higher
```

### Install & Run
```bash
cd meu-portfolio
npm install
npm run dev       # Dev server at http://localhost:5173
```

### Commands
```bash
npm run build     # Production build → dist/
npm run preview   # Preview production locally (port 4173)
npm run lint      # ESLint check
npm run lint -- --fix  # Fix linting issues
```

---

## Architecture

- **Pattern:** Single Page Application (SPA) with lazy-loaded sections & code splitting
- **Structure:** Modular React components with Tailwind styling
  - Eager-loaded: Navbar, AboutSection, Footer (above the fold)
  - Lazy-loaded: ProjectsSection, ExperienceSection, ContactSection (below the fold)
- **Code Splitting:** 3 separate chunks via React.lazy + Suspense
- **Theme:** Dark mode (bg: #1f1f1f, text: #e8e8f0) + emerald green accents (#10b981)
- **Routing:** Hash-based (Vercel rewrites all routes to index.html)
- **Image Optimization:** WebP format (96.9% smaller than original GIFs)

---

## Key Files

| File | Purpose |
|---|---|
| `App.jsx` | Layout + lazy-loaded sections (~35 lines) |
| `components/shared/` | Reusable UI components (Badge, FormInput, TypewriterText, etc.) |
| `data/projects.js` | Project list with WebP images |
| `hooks/useTypewriter.js` | Typewriter effect with proper cleanup |
| `hooks/useContactForm.js` | Contact form state & validation |
| `i18n/translations.js` | EN/PT multi-language support |
| `constants/colors.js` | Centralized theme colors |
| `index.css` | Tailwind v4 + CSS custom properties |
| `vite.config.js` | React + Tailwind plugins + code splitting |
| `vercel.json` | SPA routing configuration |
| `eslint.config.js` | ESLint + React plugin configuration |

---

## Deployment

**Automatic:** Push to main branch → Vercel builds (`npm run build`) → Live at portfolio URL

**Manual:**
```bash
npm install -g vercel
cd meu-portfolio
vercel --prod
```

Build output: `dist/` directory (static files)

---

## Development Notes

- **HMR enabled** — Changes to .jsx/.css auto-refresh in browser
- **Tailwind v4** — CSS-first config, no separate tailwind.config.js needed
- **Code splitting** — ProjectsSection, ExperienceSection, ContactSection are lazy-loaded
- **Image optimization** — All GIFs converted to WebP (76 KB from 3.8 MB)
- **Component reuse** — Badge and FormInput components available in `src/components/shared/`
- **Linting** — ESLint with React plugin enforces:
  - `no-unused-vars` — Detects unused imports/variables (pattern: `^_`)
  - `no-console` — Warns on `console.log` (allows `warn`/`error`)
  - `prefer-const` — Suggests `const` over `let`
  - React rules: `jsx-uses-vars`, custom rules for React 19+
- **Browser support** — Chrome 90+, Firefox 88+, Safari 14+, all modern mobile browsers

---

**Author:** Bernardo Gomes | [GitHub](https://github.com/bernardogomes25) | be.gpereira25@gmail.com
