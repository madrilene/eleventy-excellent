# johanedlund.se — Backlog

Last updated: 2026-04-24

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
- Should `--color-primary` keep its theme-dependent identity (orange in light + auto-dark, red in forced-dark), or stabilise on one hue? See the design-token naming article.

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

---

## Deferred (low priority)

*Things parked on purpose. Surface them later without cluttering active work.*

- Migrate from `jedee.netlify.app` domain → `johanedlund.se` (pending decision on timing)
- Claude Design handoff — revisit once the site has a more substantial component surface; until then, the extraction target is too thin.
- Token naming cleanup pass (five concrete items from the design-token naming article, listed below). Not urgent; system works today.
  - [ ] Fix live broken reference `--color-themecolordark` in `src/assets/css/global/blocks/main-nav.css:156` (should be `--color-themecolor-dark`).
  - [ ] Normalise `themeColor` casing across `colorsBase.json` and `colors.json` to a single spelling.
  - [ ] Rename `--code-border-color` → `--color-code-border` for prefix consistency.
  - [ ] Nest the `themecolor-*` palette under a `theme.*` DTCG group so it reads as one coherent brand scale.
  - [ ] Clean up the commented-out `--color-themecolordarkest` references in `src/assets/css/global/blocks/site-logo.css:18, 24` (dead code).
