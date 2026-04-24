---
title: 'Elena.js: is a progressive web components library a good fit for JEDEE?'
description: "An evaluation of Elena.js — a 2.9kB progressive-enhancement web components library — against the actual component needs of a static content site built on Eleventy."
eleventyExcludeFromCollections: true
excludeFromSitemap: true
date: 2026-04-24
draft: true
tags:
  - web-components
  - design-systems
  - eleventy
  - progressive-enhancement
---

## Why I looked at this

I came across [Elena.js](https://elenajs.com/) while thinking about where my token system should live, which I wrote about [earlier today](/articles/design-token-naming-conventions-what-the-standard-actually-says-and-what-jedee-does/). The tagline caught me — *"Progressive Web Components"* — because it lines up almost exactly with the values I try to hold this site to: HTML first, CSS next, JavaScript only when it earns its seat. So I spent a couple of hours reading the docs, the repo, and the surrounding conversation, and then I sat with an uncomfortable question. *Do I actually need a component framework at all?*

This post is the answer to that question — with enough of Elena itself for you to decide the same for your own site.

## What Elena.js actually is

Elena is a small JavaScript library for building custom elements. It is published by Salminen (the creator bills herself as an enterprise design systems veteran) at [elenajs.com](https://elenajs.com/), with source at [github.com/getelena/elena](https://github.com/getelena/elena). The runtime weighs **2.9kB minified and compressed**, has zero runtime dependencies, is MIT-licensed, and as of April 2026 sits at about 270 GitHub stars with a stable `core` package and a couple of experimental adjacent packages (SSR, MCP).

The positioning matters. Elena is not trying to be React-for-the-web-platform (that is Lit, roughly), and it is not trying to be a zero-config tutorial library (that is Minze, roughly). Its stated audience is *"teams creating component libraries and design systems"* who need their components to work across framework boundaries — drop the same `<my-thing>` into React, Vue, Angular, Next.js, Svelte, or a plain HTML file, and have it work.

The three philosophical commitments it makes, distilled from the docs:

1. **HTML and CSS render before JavaScript loads.** This is the "progressive" part of "progressive web components" — components should look right, be accessible, and be semantically meaningful even if the JS never arrives or fails to execute.
2. **Semantic HTML over Shadow DOM isolation.** Shadow DOM is supported (as one of three component modes) but it is not the default. Elena's bias is toward the light DOM so that screen readers, developer tools, and CSS inheritance keep working without workarounds.
3. **Standards-based, not framework-flavoured.** Everything compiles down to a plain `customElements.define()` call. There is no virtual DOM, no JSX, no proprietary template syntax that compiles away — just custom elements with a thin reactive mixin on top.

## The three component models

Elena supports three ways to author a component, and the split is one of the more interesting design decisions in the library.

### Composite components

A *composite* component wraps whatever HTML is slotted inside it and enhances that HTML. It does not render any markup of its own. It is the perfect pattern for layout primitives (think [Every Layout](https://every-layout.dev/)'s Stack, Cluster, Sidebar) where the component's job is to set CSS custom properties on a container and let the children style themselves.

```js
import { Elena } from "@elenajs/core";

export default class Stack extends Elena(HTMLElement) {
  static tagName = "elena-stack";
  static props = ["direction"];
  direction = "column";
}

Stack.define();
```

Used as `<elena-stack direction="row"><div>a</div><div>b</div></elena-stack>`, this adds no extra HTML. It just provides a styling and behaviour seam around content that already works without JavaScript.

### Primitive components

A *primitive* component renders its own HTML using a tagged-template `html\`\`` function, with auto-escaping to prevent XSS.

```js
import { Elena, html } from "@elenajs/core";

export default class Button extends Elena(HTMLElement) {
  static tagName = "my-button";
  static props = ["variant"];
  variant = "default";

  render() {
    return html`<button class="my-button">${this.text}</button>`;
  }
}

Button.define();
```

This is the closest pattern to how Lit components are usually written. The notable helper is `this.text`, which captures the text content of the element before hydration — Elena's answer to the classic custom-element layout-shift problem where the tag renders empty until the JS upgrade completes.

### Declarative components

A *declarative* component uses [Declarative Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) — a `<template shadowrootmode="open">` inside the element's markup. The shadow root attaches during HTML parsing, before JavaScript runs, which means shadow-DOM-encapsulated styles render correctly on the first frame of the first paint. This is the hybrid pattern for teams who want Shadow DOM's isolation without paying the FOUC tax.

## The philosophy, stated plainly

Progressive enhancement is usually a design principle — a thing you *try* to do. Elena elevates it to a product feature, one the library's API is specifically shaped around. That is the unusual part.

Most custom element libraries treat the JavaScript upgrade as the moment the component becomes real. Before that moment, you typically see an empty tag, or a tag styled with unstyled slot fallback, or (worst case) layout shift as the JS finally runs and the element rearranges the DOM around itself. Elena's three component models are each a different answer to the question *"what does the user see before the JS loads?"* — and in all three cases the answer is "something correct and accessible."

For composite components, it is simple: the slotted HTML is already rendered and styled. The component adds behaviour on upgrade, it does not *create* the UI.

For primitive components, `this.text` preserves the initial text content across re-renders, so a `<my-button>Save</my-button>` shows the word *Save* immediately, not after a round-trip.

For declarative components, the shadow root and its styles arrive with the HTML itself, courtesy of the browser's HTML parser — no JavaScript needed to reach the first visible frame.

The result is an API where "working without JavaScript" is not a rehearsed afterthought but the default path. If you want to opt out of that — if you truly need JavaScript to render your component — Elena lets you, but you have to reach for it.

## The feature surface

The stable packages are [`@elenajs/core`](https://www.npmjs.com/package/@elenajs/core) (the runtime mixin and templating), `@elenajs/components` (a demo set), [`@elenajs/bundler`](https://www.npmjs.com/package/@elenajs/bundler) (for component library authors), and [`@elenajs/cli`](https://www.npmjs.com/package/@elenajs/cli) (scaffolding). The experimental ones are `@elenajs/ssr` (server-side render helpers) and `@elenajs/mcp` (a Model Context Protocol server, presumably for AI-assisted component work). There are 13 packages in the monorepo in total, which is both a sign of ambition and a warning about the amount of surface area the project is trying to hold up.

Key capabilities of interest, gathered from docs and README:

- **Reactive props** declared as a `static props` array, updated through attribute changes, with batched re-renders.
- **Scoped styles via the native CSS `@scope` rule** — no Shadow DOM required, no BEM suffixes, no CSS-in-JS. This works in all Chromium browsers and Safari today; Firefox support [landed in 2024](https://caniuse.com/css-cascade-scope) but is still worth checking against your user base.
- **Custom Elements Manifest** generated at build time, which means tooling (IDE autocomplete, docs sites, design tools) can introspect your components without ad-hoc parsing.
- **TypeScript declarations** emitted from the bundler.
- **Framework integration** is the story — the docs include first-party snippets for React, Vue, Svelte, Angular, and Next.js.

There is no opinion about theming, tokens, or visual design built into the library itself. Elena gives you the *mechanism* for a design system; the design part is yours.

## How it compares to the alternatives

For a site like mine, the realistic competition looks like this:

- **Vanilla custom elements.** Free, no dependency, but you write the lifecycle, the reactive props, the templating, the SSR story, and the testing harness yourself. Fine for one or two components. Tedious at ten. A trap at fifty.
- **[Lit](https://lit.dev/).** The mature option. \~5kB gzipped, ships a real reactive templating system, excellent docs, Google-backed. Strong adoption. The mental model defaults to Shadow DOM, which is a feature for some teams and a friction point for others.
- **[Minze](https://minze.dev/).** A Vue-adjacent custom element framework, opinionated and pleasant to write, about 3kB. Built around Shadow DOM. Lower adoption than Lit.
- **Framework components** (React, Vue, Svelte). Irrelevant for a statically-rendered Eleventy site unless you want to pay for hydration. I do not.
- **[WebC](https://github.com/11ty/webc)** — already in use here, because Eleventy. WebC is a build-time single-file custom-element syntax: `.webc` files compile to HTML during the Eleventy build, and optionally register a runtime custom element. Not really a runtime library at all — more like a template format.

Elena's niche sits between *vanilla* and *Lit*. Smaller, less opinionated, more progressive-enhancement-shaped than Lit; more structured and batteries-included than vanilla.

## What JEDEE actually needs

Here is where the theory meets the grass. JEDEE's current interactive-component inventory is small, and that is not an accident — it is the point of the site.

### JavaScript modules in `src/assets/scripts/bundle/`

| File | What it does | Complexity |
|---|---|---|
| `details.js` | Progressive enhancement for `<details>` elements | trivial |
| `dialog.js` | `<dialog>` wrapper | trivial |
| `is-land.js` | Eleventy's `is-land` lazy-loading island runtime | external, unchanged |
| `nav-drawer.js` | Mobile nav drawer | small |
| `nav-sub.js` | Submenu behaviour | small |
| `theme-toggle.js` | Light/dark theme switcher | small |

### WebC custom elements in `src/_includes/webc/`

| File | What it does |
|---|---|
| `custom-svg.webc` | Inline an SVG at build time |
| `custom-youtube.webc` | Wrap a YouTube embed |
| `custom-peertube.webc` | Wrap a PeerTube embed |
| `custom-masonry.webc` | Masonry layout for the gallery |

### Layout primitives

Composition classes from the [Every Layout](https://every-layout.dev/) family (Stack, Cluster, Sidebar, Grid, Switcher, Cover, Frame, Reel, Icon, Imposter, Container) live in `src/assets/css/global/compositions/`. Most are pure CSS classes today, with a handful of `-l` web component versions that set the CSS custom properties from attributes.

The total runtime JavaScript surface is well under 10kB gzipped, and most pages on the site don't require most of it. The `<details>` enhancement and the theme toggle run on almost every page; everything else is opportunistic.

This is the context Elena has to earn its keep inside.

## The case for adopting Elena.js on JEDEE

Genuinely good reasons, in order:

**1. Philosophical alignment is near-perfect.** Elena's progressive-enhancement bias matches the site's bias exactly. There is no other custom element library I know of whose defaults align this well with a Lighthouse-100, HTML-first, content-heavy Eleventy project. If I were adopting a component framework today, the philosophy fit would put Elena ahead of Lit.

**2. The Every Layout primitives are Elena's composite-component pattern, almost verbatim.** `<stack-l>`, `<cluster-l>`, `<sidebar-l>` — these are already custom elements that wrap children, apply CSS variables, and do no rendering of their own. They are composite components by Elena's own definition. Rewriting them on top of Elena would give me reactive prop handling, a standard manifest, TypeScript declarations, and SSR hooks — for about 3kB of runtime.

**3. Cross-framework portability as a latent benefit.** I am not planning to ship these components to anyone, but the option of doing so is nice. If a component I build here is useful somewhere else, it travels without surgery.

**4. Cost of adoption is low.** 2.9kB is small enough that I don't have to justify it against a performance budget. Zero runtime deps means no supply-chain worry.

## The case against

Also genuinely good, and — for this site, today — stronger:

**1. The component surface is small and mostly solved.** I have about ten interactive components total, and most of them are thin progressive-enhancement wrappers around native HTML (`<details>`, `<dialog>`) that do not need a library to exist. A framework's value scales with component count, and I am nowhere near the point where that math favours adoption.

**2. Build toolchain divergence.** JEDEE uses [esbuild](https://esbuild.github.io/) directly, driven by [`package.json`](https://github.com/pjedlund/jedee/blob/main/package.json) scripts. Elena ships its own bundler (`@elenajs/bundler`) that expects a specific project layout and emits a specific output shape (Custom Elements Manifest, TS declarations, etc.). I could either (a) adopt the Elena bundler alongside esbuild, making the build graph more complex, or (b) bundle Elena-authored components with my existing esbuild pipeline, losing the manifest and TS declaration benefits that are most of the library's non-runtime value. Either path is a step backwards from what I have.

**3. WebC is already doing the build-time custom element job.** WebC is an Eleventy-native authoring format that compiles to plain HTML at build time. For things like `custom-youtube.webc` or `custom-svg.webc`, it is a better fit than any runtime library — the element exists *in the HTML*, it does not need to upgrade. Elena's declarative-component pattern is the closest equivalent, and even that asks for a runtime.

**4. Library maturity and single-maintainer risk.** 270 stars, recent release cadence, one named maintainer, and a couple of experimental packages. None of that is a red flag for an experimental side-project — but for a long-term foundation under a personal site, I want to think about what happens if the author moves on. Vanilla custom elements and WebC both have effectively zero dependency risk. Elena carries some.

**5. The "layout primitive" argument cuts both ways.** Yes, Every Layout's `-l` components map to Elena's composite pattern — but they already work. Replacing something that works is a debt I pay today for a value I collect later. The right time to rewrite them is when I want to add a feature (reactive prop updates? TS types? SSR manifests?) that I don't currently need.

**6. CSS `@scope` is compelling but not necessary.** My CSS uses [CUBE CSS](https://cube.fyi/) with cascade layers, and it works. `@scope` would be a different, possibly cleaner, model — but it would be a parallel mechanism to what I already have, not a replacement, unless I rewrite the whole CSS architecture. I am not going to do that.

## Verdict

Not a good fit for JEDEE *right now*. The pros are real but the cons are bigger, because the site's value is in its content and its typographic layout, not in its component sophistication. Adopting Elena would add a build-step, a dependency, and a mental model, in exchange for capabilities I do not currently need.

It is a good fit for *future-JEDEE* under one condition: if the site grows a genuinely interactive surface — a search that filters notes, a live reading/listening widget, a proper theme manager, a small wiki reader — then rebuilding that surface on Elena would be a sensible choice. Better than vanilla (more ergonomic), better than Lit (better philosophical fit), and small enough not to hurt the performance budget.

## What adoption would look like, if I ever did it

For my own future reference:

1. **Start with one new component, not a rewrite.** Build the next interactive thing in Elena, keep the existing six scripts as they are, and see whether Elena's ergonomics actually pay for themselves.
2. **Keep esbuild as the bundler.** Do not adopt `@elenajs/bundler` unless the manifest and TS declarations become genuinely useful — for now, just import `@elenajs/core` and let esbuild handle everything.
3. **Author composite components before primitives.** Elena's composite pattern is where its progressive-enhancement story is strongest, and it is the best match for the Every Layout primitives.
4. **Treat the experimental packages as experimental.** `@elenajs/ssr` would be interesting with Eleventy, but I would not bet a shipping feature on it today.
5. **Revisit in 12 months.** Check the star count, release cadence, and maintainer continuity. Library fit assessments made against a young project need a recheck once the project is two or three releases older.

For now: no change. The article mostly served to clarify *why* I am not adopting it, which is arguably more useful than adopting it would have been.

---

### Sources

- [Elena — Progressive Web Components (official site)](https://elenajs.com/)
- [Elena — Quick start](https://elenajs.com/start/)
- [getelena/elena on GitHub](https://github.com/getelena/elena)
- [@elenajs/core on npm](https://www.npmjs.com/package/@elenajs/core)
- [@elenajs/bundler on npm](https://www.npmjs.com/package/@elenajs/bundler)
- [Nick Simson's bookmark on Elena](https://www.nicksimson.com/notes/2026-03-27-elena-progressive-web-components.html)
- [Every Layout](https://every-layout.dev/)
- [CUBE CSS](https://cube.fyi/)
- [WebC (Eleventy)](https://github.com/11ty/webc)
- [Lit](https://lit.dev/)
- [Minze](https://minze.dev/)
- [MDN — Declarative Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html)
- [Can I use — CSS `@scope`](https://caniuse.com/css-cascade-scope)
