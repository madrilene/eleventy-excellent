# CLAUDE.md — Project Context for johanedlund.se

## About me

I'm a webdesigner, or as my CV states: UX/UI designer and front-end developer. I've been making websites since the year 2000, when I lived in New York City. Nowadays I live in Malmö in the southern part of Sweden. 

I'm was born the 22nd of July 1969 at Östra Sjukhuset in Gothenburg in Sweden. I grew up in Gothenburg and in a town called Kungälv. I stayed for while up in the north of Sweden, in Själevad, outside Örnsköldsvik where I attended preschool and grades one through three. That was a happy time.

## Project goals

To create an [indieweb](https://indieweb.org/) website with clean semantic html. It should have fast loading times and be able to perform four 100 scores in Lighthouse. 

I'd like the content I produce to be dedicated to the public domain since I don't believe in private property and ownership. Perhaps using the term SDG, Soli Deo Gloria, in the site footer to indicate my belief in GOD and that everything on this earth is created by him.

## How I Like to Work

- I enjoy a friendly soft tone
- Ask me clarifying questions instead of making assumptions
- Remind me to take breaks if we've been working for a while

## Project Overview

Personal website for Johan Edlund, built with [Eleventy (11ty) v3](https://www.11ty.dev) and the [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) starter theme. The site is deployed on Netlify and will eventually live at **johanedlund.se**. Currently published at **jedee.netlify.app** but hidden from search engines.

- **GitHub:** https://github.com/pjedlund/jedee
- **Netlify:** https://app.netlify.com/projects/jedee

## Tech Stack

- **Static site generator:** Eleventy 3.x (ESM, Node ≥ 20)
- **Templating:** Nunjucks (`.njk`), WebC (`.webc`), Markdown
- **CSS:** PostCSS + Tailwind CSS (used to generate CSS custom properties from design tokens — not a utility-class framework)
- **Bundling:** esbuild (JS), PostCSS CLI (CSS)
- **Deployment:** Netlify (build: `npm run build`, publish dir: `dist`)
- **Markdown extensions:** markdown-it with footnotes, wikilinks, attributes, abbr, anchors, emoji, syntax highlight
- **Wikilinks / backlinks:** `@photogabble/eleventy-plugin-interlinker` + `markdown-it-wikilinks-plus`

## Commands

```bash
npm start                  # Dev server (http://localhost:8080)
npm run build              # Production build → dist/
npm run clean              # Remove dist and compiled CSS/JS
npm run clean:og           # Remove pre-generated OG images
npm run colors             # Generate colors.json from colorsBase.json
npm run screenshots        # Generate OG images / built-with screenshots
npm run favicons           # Generate favicons
npm run fallback-font-style  # Generate fallback font CSS
npm run test:a11y          # Accessibility tests with pa11y-ci
```

## Directory Structure

```
src/
  _config/         # Eleventy config modules (collections, filters, plugins, shortcodes, events, setup)
  _data/           # Global data (meta.js = site metadata, social links, theme colors; personal.yaml = personal details and social media)
  _includes/       # Partials, CSS, JS, WebC components, head fragments, schemas
  _layouts/        # Nunjucks layouts: base, page, post, note, reading, listening, tags
  _obsidian/       # Obsidian vault source files (notes written here before being moved to posts)
  assets/          # Fonts, images, SVGs, OG images
  common/          # Shared pages (pa11y test config, service worker, etc.)
  pages/           # Static pages (about, articles index, notes index, reading, etc.)
  posts/           # All content, organised by type:
    articles/      # Long-form articles (organised by year: 2022–2026)
    notes/         # Short notes / digital garden entries
    reading/       # Reading log
    listening/     # Listening log
    watching/      # Watching log
    docs/          # Documentation / reference pages
dist/              # Build output (git-ignored)
```

## Content Types & Frontmatter

Each content folder has a `<type>.json` directory data file that sets defaults. Typical per-post frontmatter:

**Article** (`src/posts/articles/YYYY/`):
```yaml
---
title: "Post Title"
description: "Short description"
date: 2025-01-15
tags:
  - topic
  - another-topic
---
```
Layout: `post` | Category: `article` | Permalink: `/articles/{{ title | slugify }}/`

**Note** (`src/posts/notes/`):
```yaml
---
title: "Note Title"
date: 2025-01-15
---
```
Layout: `note` | Category: `note` | Permalink: `/notes/{{ title | slugify }}/`

**Reading** (`src/posts/reading/`):
Layout: `reading` | Category: `reading` | Permalink: `/reading/{{ title | slugify }}/`

**Listening** (`src/posts/listening/`):
Layout: `post` | Category: `listening` | Permalink: `/listening/{{ title | slugify }}/`

## Design Tokens

All tokens live in `src/_data/designTokens/*.json` and are consumed by the Tailwind config to generate CSS custom properties and utility classes.

**Colors** (`colorsBase.json` → `npm run colors` → `colors.json`):
- `palette`: Base family — `darkest` `#495464`, `dark` `#bbbfca`, `light` `#dddee8`, `lightest` `#f4f4f2`. Composed into the semantic accent variables (`--color-accent-orange/blue/green`) in `src/assets/css/global/base/variables.css`.
- `shades_neutral`: Gray `#495464` → generates a 100–900 palette
- `shades_vibrant`: Orange `#EF7E40` → generates a 100–900 palette
- `light_dark`: Red, Blue, Green — each gets a `subdued` variant for dark themes
- `standalone`: gray-250 `#C8CACC` — a single fixed value

**Fonts** (`fonts.json`) — JEDEE uses Adobe Source fonts, not the upstream Atkinson Hyperlegible:
- `display`: Source Serif 700 (fallback: Source Serif Fallback, serif)
- `base`: Source Sans 3 VF (fallback: Source Sans Fallback, sans-serif)
- `mono`: Source Code Pro (extensive monospace fallbacks)

**Spacing** (`spacing.json`) — Utopia fluid scale (320px → 1360px viewport):
- Fixed steps: `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`
- Fluid pairs: `xs-s`, `s-m`, `m-l`, `l-xl`, `l-2xl`, `xl-2xl`, `2xl-3xl`

**Text sizes** (`textSizes.json`) — Utopia fluid type scale: `step-min-2` through `step-6` (base: 19px @ 320px → 28px @ 1350px)

**Text leading** (`textLeading.json`): `flat` (1), `extrafine` (1.1), `fine` (1.2), `standard` (1.4), `fibonacci` (1.612)

**Text weights** (`textWeights.json`): `regular` (400), `bold` (700), `extra-bold` (900)

**Border radius** (`borderRadius.json`): `small` (0.1875rem), `medium` (0.3rem)

**Viewports** (`viewports.json`): min 320, sm 640, navigation 662, md 1000, max 1360

## Site Metadata

Site metadata is split across two files: `src/_data/meta.js` (site-wide config, theme colors, OG defaults) and `src/_data/personal.yaml` (personal details and social media links). Key values from `meta.js`:
- `siteName`: Johan Edlund
- `author.email`: me@johanedlund.se
- `author.fediverse`: @pjedlund@mastodon.social
- `creator.mastodon`: https://mastodon.social/@pjedlund
- `creator.x`: https://x.com/pjedlund
- `blog.description`: "Jesus Christ is the truth and the way."
- `themeColor`: #495464 (dark slate)
- `themeLight`: #F4F4F2 | `themeDark`: #bbbfca

## Key Conventions

- **ESM only** — all JS files use `import`/`export`, no CommonJS
- **Markdown wikilinks** are supported: `[[Page Title]]` will create backlinks between notes
- **Drafts** are excluded from builds via the drafts plugin (`src/posts/articles/-drafts/`)
- **Images** are processed by `@11ty/eleventy-img` with three approaches: (1) **HTML Transform** — processes any `<img>` tag as a post-processing step, supports co-located images; (2) **`image` shortcode** — positional parameters; (3) **`imageKeys` shortcode** — named parameters (easier, order-independent). Default formats are `['avif', 'webp', 'jpeg']`, lazy loaded by default. Shortcodes are defined in `src/_config/shortcodes/image.js`.
- **Tailwind** is used to generate CSS custom properties from design tokens — not a utility class framework. CUBE CSS methodology drives base styles. Do not treat this as a standard Tailwind utility-class project.
- **CSS files** live in `src/assets/css/` — always read the `cube-css` skill before writing any CSS. Read the `eleventy-excellent` skill before modifying templates, layouts, or config. The global CSS bundle uses **cascade layers** (reset, compositions, etc.); the "local" per-page/component bundle does not use layers and therefore has higher specificity than global styles regardless of selector specificity.
- **JS source files** live in `src/assets/scripts/bundle/` (readable) — `src/_includes/scripts/` contains the minified build output. Always edit the source, not the minified version.
- **backlinks.njk** is part of the `@photogabble/eleventy-plugin-interlinker` integration, not core Eleventy Excellent — freer to modify than core EE templates.
- **OG images** are pre-generated; run `npm run screenshots` if needed
- **Accessibility** is a priority — run `npm run test:a11y` before major changes

## Netlify Configuration

`netlify.toml` sets:
- Security headers (CSP, X-Frame-Options, X-XSS-Protection, etc.) on all routes
- Long-term cache headers for fonts and JS components
- Cache plugin caches `.cache/` between builds (speeds up Eleventy Fetch + image processing)
