---
title: 'Design token naming conventions: what the standard actually says, and what JEDEE does'
description: "A survey of how the major design systems name their tokens, what the DTCG format does and does not standardise, and an audit of the JEDEE token system against that backdrop."
eleventyExcludeFromCollections: true
excludeFromSitemap: true
date: 2026-04-24
draft: true
tags:
  - design-systems
  - css
  - design-tokens
---

## Why I wrote this

I recently tried to import this repo into Claude Design (Anthropic Labs' new research-preview tool for generating designs from a brand system). The import failed. That raised a broader question I had been avoiding: *how idiomatic is the token vocabulary I inherited from [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent)?*

The short answer turned out to be: the **format** is standards-compatible, the **names** are a personal mix, and there is no shortage of opinions about how names *should* look. This post is a survey of the field, a walk through what is actually specified versus what is only idiomatic, and an honest audit of the JEDEE token set against the state of the art.

## What is actually standardised?

There is no W3C "design system" standard. There is the **Design Tokens Community Group (DTCG)** working draft, hosted under the W3C Community Groups programme. It is a community specification, not a formal W3C Recommendation, and the latest version is [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/drafts/format/).

You can recognise a DTCG file by its reserved keys: `$type`, `$value`, `$description`, `$extensions`. The spec tells you how a token is **structured**. It says very little about what a token should be **called**. The only hard rules on names are:

- A token or group name **MUST NOT** begin with `$` (the prefix is reserved for spec-defined properties).
- A token or group name **MUST NOT** contain `{`, `}`, or `.` anywhere (those characters are reserved for the alias-reference syntax, e.g. `{color.brand.primary}`).
- Names are case-sensitive, so `font-size` and `Font-Size` are distinct. The spec warns that tools "MAY display a warning when token names differ only by case," because some export targets normalise case.

That is it. The specification is deliberately silent on whether you should use `kebab-case`, `camelCase`, flat hyphenated names, or hierarchical nesting. Its examples use kebab-case (`color-text-primary`) and nested groups (`color.brand.primary`), but those are illustrative, not normative.

> "The specification provides no prescriptive guidance on naming conventions."

In other words: the *format* is standardised, the *vocabulary* is not. Everything past those three rules is convention, and the conventions come from the design systems that wrote them down first.

## The three-tier model everyone converges on

Even though naming is not standardised, the **structure** of a mature token system has converged into a widely adopted three-tier model. You will find it under slightly different names in every design system, but the layers are the same:

### Tier 1 — Primitive tokens (aka reference, global, base, option)

Raw values with no semantic meaning. "This is gray 500." "This is spacing step 3." Primitives are not meant to be used directly in components; they are the palette you build from.

```
color.gray.500       → #606368
spacing.step-3       → clamp(0.875rem, …, 1.3125rem)
```

### Tier 2 — Semantic tokens (aka alias, decision, theme, system)

Intent, not value. "This is the background colour of the page." "This is the body text colour." Semantic tokens point at primitives, and they are where *theming* happens — a light theme and a dark theme can swap the underlying primitive without the semantic name ever changing.

```
color.text           → {color.gray.900}   /* light */
color.text           → {color.gray.100}   /* dark */
```

### Tier 3 — Component tokens

Scoped to a single component. "The background of a primary button in its hover state." Component tokens usually point at semantic tokens, not primitives, so the component inherits theming for free.

```
button.primary.background.hover → {color.brand.primary-hover}
```

Primitives say *what it is*. Semantics say *why it is used*. Component tokens say *where it is used*. This layering is the single most important convention in modern token work, and it is what lets you change a brand colour in one place and watch it ripple correctly through an entire product.

## The anatomy of a token name

Within each tier, naming patterns also converge. Nathan Curtis ([*Naming Tokens in Design Systems*](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676), EightShapes, 2020) catalogued the slots that show up across the industry. I find his taxonomy the clearest:

| Slot | Purpose | Examples |
|---|---|---|
| Namespace | System/theme/brand prefix | `esds`, `slds`, `md`, `acme`, `ocean` |
| Object | Component group or element | `input`, `button`, `card` |
| Category | Visual property family | `color`, `font`, `space`, `size`, `border` |
| Concept | Role at semantic level | `feedback`, `action`, `surface`, `brand` |
| Property | Specific CSS-like property | `background`, `foreground`, `weight` |
| Variant | Peer alternative | `primary`, `secondary`, `danger` |
| State | Interaction state | `hover`, `focus`, `disabled` |
| Mode | Contextual swap | `on-light`, `on-dark` |
| Scale | Sequential step | `100–900`, `xs–xl`, `1–6` |

Tokens combine these slots in a fixed order — broadest concept to most specific — so that the same kind of token always reads the same way across the system.

```
$esds-color-feedback-background-error
 │    │     │        │          │
 ns   cat   concept  property   variant
```

The universal advice is: **pick your slots, fix their order, and never violate it**. A design system becomes unscannable the moment `button.hover.background.primary` and `button.primary.background.hover` coexist.

## How the big systems do it

No two large design systems use identical naming, and this is where personal taste (and political debate) enters the picture. A quick tour:

### Amazon Style Dictionary — CTI (Category, Type, Item)

[Style Dictionary](https://styledictionary.com/info/tokens/) from Amazon is the most widely used token-build tool. It ships with a default convention called CTI — Category / Type / Item / Sub-item / State.

```
color.background.button.primary.hover
│     │          │      │       │
cat   type       item   sub     state
```

CTI is strict and hierarchical. The docs are explicit that you do not *have* to use it, but many of the transforms only light up if you do.

### Adobe Spectrum — three-part (context · common unit · clarification)

[Spectrum](https://spectrum.adobe.com/page/design-tokens/) names tokens in three positional parts: a broad context (component, colour family, system constant), a common unit (property or element), and a clarification (variant, state, scale). Colour primitives are named with a family and a numeric brightness scale (`blue-500`, `gray-800`). Spectrum distinguishes three tiers it calls **global**, **alias**, and **component**.

### Salesforce SLDS 2 — styling hooks with a long slot list

[SLDS 2 styling hooks](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-design-tokens.html) follow the most elaborate pattern I encountered:

```
--[namespace]-g-[category]-[property]-[pairing]-[role]-[attribute]-[state]-[range]
```

SLDS commits to every slot. It is verbose but unambiguous — you can read any SLDS variable from left to right and know exactly what it is for.

### IBM Carbon v11 — adjectives over numbers

[Carbon v11](https://carbondesignsystem.com/elements/color/tokens/) moved away from numeric-suffix tokens (`text-01`, `text-02`) toward adjective-based role names. Primitives kept their numeric layering (`layer-01`, `layer-02`) but semantic tokens now read `text-primary`, `text-secondary`, `background-inverse`. The stated reason: numbered tokens were intuitive for designers inside IBM but meaningless to new adopters.

### Material Design 3 — roles with a namespace prefix

[Material 3](https://m3.material.io/foundations/design-tokens) names everything by *role*, and every system token is prefixed `--md-sys-`:

```
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-surface
--md-sys-color-on-surface
```

Material uses the `on-X` pattern to indicate "a colour that goes *on top of* X" — so `on-primary` is the foreground text colour that sits on a `primary` background. This pairing is one of the most copied conventions in the field.

### The common advice across all of them

When you strip away the cosmetic differences, the guidance collapses to six items that every major system and most of the written literature agrees on. [Always Twisted's *Design Token Naming Conventions: A Practical Guide*](https://www.alwaystwisted.com/articles/design-token-naming-conventions) summarises them well:

1. **Consistency beats perfection.** The best naming system is the one the whole team actually follows.
2. **Optimise for clarity over brevity.** `button-background-primary-hover` beats `btn-bg-pri-hvr` every time.
3. **Keep semantics semantic.** At the alias/component level, name for *why*, not *what*. `color-text-error` survives a palette change; `color-text-red` does not.
4. **Order broad-to-specific.** Names are easier to scan when they narrow down as you read them.
5. **Make names self-explanatory.** A new developer should be able to guess what a token is without a colleague or a legend.
6. **Design for growth.** Numbered scales (`100–900`) absorb new entries better than `small/smaller/smallest`, which hits a ceiling.

## What JEDEE has today

Against that backdrop, here is what this site is actually doing.

### Primitive layer — DTCG-shaped, mostly idiomatic

Primitives live in [`src/_data/designTokens/*.json`](https://github.com/pjedlund/jedee/tree/main/src/_data/designTokens) and use DTCG syntax (`$type`, `$value`, `$description`, `$extensions`). The palette splits into:

- `gray` — 100–900 scale, generated from a single base colour
- `orange` — 100–900 scale, same mechanism
- `red`, `blue`, `green` — single values with a `subdued` dark-mode variant each
- `themecolor-darkest`, `themecolor-dark`, `themecolor-mid`, `themecolor-light`, `themecolor-lightest` — five named shades inherited from the upstream theme

The numeric scales (`gray`, `orange`) align cleanly with Spectrum/Carbon/Material conventions. The `themecolor-*` family does not — it is a parallel five-step scale with word labels rather than numbers, and it is a little oddly ordered: `Dark` (`#bbbfca`) is visually lighter than `Mid` (`#9ba3b4`), which suggests the labels reflect the upstream author's intent more than their luminance.

Spacing and type use Utopia fluid scales stored as `{min, max}` pairs inside `$extensions` — not strict DTCG (the format's `dimension` type expects a single value or a reference), but it is a well-formed *extension* which the spec explicitly allows. The Tailwind plugin flattens these to `clamp()` at build time.

### Semantic layer — exists, lives in CSS

This was the part I almost missed on first audit. The semantic tokens are not in the DTCG JSON — they are defined by hand in [`src/assets/css/global/base/variables.css`](https://github.com/pjedlund/jedee/blob/main/src/assets/css/global/base/variables.css):

```css
:root,
:root[data-theme='light'] {
  --color-text:        var(--color-themecolor-darkest);
  --color-headline:    var(--color-themecolor-darkest);
  --color-bg:          var(--color-themecolor-lightest);

  --color-primary:     var(--color-orange-500);
  --color-secondary:   var(--color-blue);
  --color-tertiary:    var(--color-green);

  --color-text-accent: var(--color-gray-700);
  --color-bg-accent:   white;
  --color-bg-accent-2: var(--color-gray-300);

  --color-border-top:  var(--color-themecolor-light);
  --color-logo-icon:   var(--color-themecolor-dark);

  --color-link-underline:       var(--color-orange-600);
  --color-link-underline-hover: var(--color-red-subdued);
}
```

There is a dark theme block that overrides the same aliases with different primitives, which is exactly how Tier 2 is supposed to work. The conventional names (`primary`, `secondary`, `tertiary`, `text`, `bg`, `text-accent`, `bg-accent`) are recognisable to anyone who has worked in Bootstrap, Tailwind, or any mainstream system. That is the good news.

### Component tokens — a handful, scattered

`--nav-item-decoration-color`, `--color-code-bg`, `--code-border-color` — a small number of component-scoped tokens exist, named inconsistently. Some respect the `--color-*` prefix, some do not.

## Where JEDEE aligns, and where it drifts

Against the industry consensus, the system scores better than a first-glance audit suggests. The three tiers are all present. DTCG format compliance is solid. The semantic names are conventional. The spacing and typography scales follow Utopia's well-known fluid pattern.

The drifts are smaller and more specific:

**1. Same concept, three spellings.** The theme palette appears as:

- `themeColor-Darkest` in `colorsBase.json` (camelCase + PascalCase)
- `themecolor-darkest` in `colors.json` (lowercased, hyphenated)
- `--color-themecolor-darkest` in compiled CSS (correct)
- `--color-themecolordarkest` in `site-logo.css:18, 24` — **commented out**, harmless but a sign of past drift
- `--color-themecolordark` in `main-nav.css:156` — **live code**, references a variable that does not exist, so the rule silently does nothing

The first line is a cosmetic inconsistency that does not affect the build. The commented-out lines are dead code. The live reference in `main-nav.css` is the only one that actually misbehaves — but it is a genuine bug.

**2. No consistent tier boundary.** The primitive layer sits in JSON, the semantic layer sits in CSS, and component tokens are scattered between block-level CSS files. It works, but the seam is invisible to newcomers — a reader cannot tell from the folder structure that there is a layered token system at all. Most mature systems either keep every tier in JSON (and generate CSS) or keep every tier in CSS (and forget the JSON). JEDEE straddles.

**3. `--color-primary` is theme-dependent in meaning, not just in value.** In light mode and the automatic dark mode, `--color-primary` points at `orange-500`. In the forced dark theme (`data-theme='dark'`), it points at `red-subdued`. Normally, the *name* `primary` holds stable across themes and only the *shade* shifts. Having the identity of "primary" change between themes is unusual — it may be intentional, but it is a footgun for anyone reading the CSS without knowing the history.

**4. Minor prefix inconsistency.** `--code-border-color` breaks the `--color-*` prefix convention that every other colour token follows. Small thing; still noticeable.

**5. `themecolor-*` as a parallel scale.** The five-step themed palette does not fit the `100–900` convention used by `gray` and `orange`. This is a philosophical choice, not a bug — the themed palette is intentionally *not* an algorithmic scale, it is a curated set of brand colours. But it creates two mental models for how colours are organised, and the one with word labels is harder to reason about than the one with numbers. A nested group rename (Option A from my earlier audit: `theme.darkest`, `theme.dark`, `theme.mid`, `theme.light`, `theme.lightest`) would keep the intent while at least aligning the grouping style.

## Where the DTCG format runs out and Claude Design picks up

Claude Design, the tool that started me down this road, is worth a note in closing. It does not consume DTCG JSON. According to [its setup documentation](https://support.anthropic.com/en/articles/set-up-your-design-system-in-claude-design), it *extracts* a design system from the artefacts you give it — a codebase, a slide deck, screenshots, brand guidelines. It then generates its own internal UI kit (colour palette, typography, components, layout patterns) for you to review and publish to your team.

That is the opposite of how DTCG works. DTCG is a **specification for exchanging design decisions**. Claude Design is an **inference engine that fabricates them from evidence**. The two don't compete; they sit at different levels of the stack. But the practical consequence is that uploading DTCG JSON to Claude Design will not make the extraction more accurate — uploading rendered pages, the live site, and the semantic layer from `variables.css` as a plain readable reference, will.

For my own handoff, the path forward is probably: point Claude Design at the GitHub repo, add a short brand brief with explicit role assignments (`brand.primary = themecolor-darkest` — my personal claim, which is nowhere in the current tokens), and provide page screenshots. The DTCG JSON can come along as a reference for humans reviewing the extraction, not as a feed.

## Where this leaves me

I am not going to rename anything today. The system works, it is in good shape by the objective measure of a three-tier model with DTCG primitives, and the drifts I identified are small, isolated, and fixable in an afternoon whenever I decide they are worth the churn.

If and when I do a naming pass, the cheapest, most leveraged changes look like this:

1. Fix the two broken `--color-themecolordark*` references in `main-nav.css` and `site-logo.css`.
2. Normalise the `themeColor` casing across `colorsBase.json` and `colors.json` to a single spelling.
3. Rename `--code-border-color` → `--color-code-border` to preserve the `--color-*` prefix convention.
4. Decide whether `--color-primary` should keep its theme-dependent identity or stabilise on one hue across themes.
5. If the full rename is worth doing, nest the theme palette under a `theme.*` group in DTCG JSON so it reads as a single coherent brand scale, not five parallel tokens.

None of that is a standards issue. DTCG would accept the system as it stands today. It is an *ergonomics* problem — a question of whether the token vocabulary reads clearly to a human who has never seen it before, and, a little further down the road, whether a generative tool can extract the right roles from the right slots without a human pointing at them. Those are two different audiences and they answer the same question differently. Something to come back to.

---

### Sources

- [Design Tokens Community Group — Format Module 2025.10](https://www.designtokens.org/tr/drafts/format/)
- [DTCG Glossary](https://www.designtokens.org/glossary/)
- Nathan Curtis — [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) (EightShapes, 2020)
- Nathan Curtis — [Tokens in Design Systems: 10 Tips to Architect & Implement](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Style Dictionary — Design Tokens documentation](https://styledictionary.com/info/tokens/)
- [Style Dictionary — DTCG support](https://styledictionary.com/info/dtcg/)
- [Adobe Spectrum — Design tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Salesforce SLDS — Styling Hooks naming](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-design-tokens.html)
- [IBM Carbon — Color tokens](https://carbondesignsystem.com/elements/color/tokens/)
- [Material Design 3 — Design tokens](https://m3.material.io/foundations/design-tokens)
- [Material Design 3 — Color roles](https://m3.material.io/styles/color/roles)
- [Always Twisted — Design Token Naming Conventions: A Practical Guide](https://www.alwaystwisted.com/articles/design-token-naming-conventions)
- Smashing Magazine — [Best Practices For Naming Design Tokens, Components And Variables](https://www.smashingmagazine.com/2024/05/naming-best-practices/)
