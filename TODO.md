# johanedlund.se — Backlog

Last updated: 2026-04-25

---

## Active priorities

*Nothing currently in flight. Add a numbered priority below when you start work.*

<!--
Example structure:

### 1. Short priority title
One-paragraph description of what's being done and why. Reference files or skills if relevant.

**Subtasks:**
- [ ] Concrete item
- [ ] Another concrete item
-->

---

## Open questions

*Use this section for questions that block progress — design decisions, missing info, things to research.*

- Domain switch: when does the site move from `jedee.netlify.app` to `johanedlund.se`?
- Is the Soli Deo Gloria footer mark live yet, or still a plan?

---

## Brainstorming

*Ideas that aren't priorities yet but worth keeping visible.*

- Public-domain dedication — formal notice somewhere on the site?
- Consider adding a `/now` page (nownownow.com convention)
- Review and publish the two 2026-04-24 drafts (design token naming, Elena.js evaluation) once they've had a few days to settle.
- If/when an interactive feature is added (search, live reading widget, small wiki viewer), try building it on Elena.js as a first component — see the Elena.js draft for the adoption path.

---

## Completed

*Strikethrough finished items with a short note on how they resolved. Acts as recent memory.*

- ~~Tried importing the repo into Claude Design~~ — done 2026-04-24. Import failed. Concluded DTCG JSON isn't what Claude Design ingests — it extracts from rendered evidence (repo, screenshots, brand brief). Deferred to Deferred section below.
- ~~Token naming cleanup pass~~ — done 2026-04-25. Renamed `themecolor-*` palette family to `base-*` (dropped unused Mid stop) and fixed the broken `--color-themecolordark` reference in `main-nav.css`. Cleaned up dead `--color-themecolordarkest` comments in `site-logo.css`. Skipped the proposed `theme.*` DTCG nesting in favor of a flat `base-*` rename. Branch: `refactor/base-color-tokens`.
- ~~Resolved `--color-primary` theme-dependent identity~~ — done 2026-04-25. Stabilized on a single hue: dropped the forced-dark swap to `red-subdued`, so `--color-accent-orange` now points at `orange-500` across all three themes. Same commit also renamed `--color-primary/secondary/tertiary` to `--color-accent-orange/blue/green` to stop overstating their importance — the actual brand tone is the slate, not the accents.
- ~~Replaced dead `--gradient-rainbow`~~ — done 2026-04-25. The variable was referenced by the site-footer creator-link hover and the styleguide gradients list but never defined. Replaced with `--gradient-slate`, a left-to-right linear-gradient through the four `base-*` tones. The footer hover effect now actually renders.
- ~~Grouped styleguide colors by primitive type~~ — done 2026-04-25. The Colors section was a single flat list of every generated palette key. Split into four labeled groups (Base palette, Neutral shades, Vibrant shades, Accent colors) driven by a `colorGroups` frontmatter list.

---

## Deferred (low priority)

*Things parked on purpose. Surface them later without cluttering active work.*

- Migrate from `jedee.netlify.app` domain → `johanedlund.se` (pending decision on timing)
- Claude Design handoff — revisit once the site has a more substantial component surface; until then, the extraction target is too thin.
- Rename `--code-border-color` → `--color-code-border` for prefix consistency. Surfaced during the 2026-04-25 token refactor; left out of that branch since it's an unrelated naming nit.
