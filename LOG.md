# johanedlund.se — Work log

Append-only, dated, short. Answers "what happened on this project, and why" — not "what code changed." Entries are the size of a tweet, not an essay.

---

## 2026-04-22

- Adopted the shared project template (`/Users/johanedlund/Projects/PROJECT-TEMPLATE.md`). Added TODO.md and LOG.md at the project root.
- Moved CLAUDE.md from `.claude/` to the project root for consistency with the template.

---

## 2026-04-24

- Evaluated Claude Design (Anthropic Labs) as a potential design-system target. Repo import failed. Concluded its extraction-based model doesn't consume DTCG JSON, so a proper handoff needs a bundle of rendered evidence (repo link + screenshots + brand brief) rather than tokens. Deferred.
- Audited the token system end-to-end. Format is DTCG-compliant; semantic aliases already exist in `src/assets/css/global/base/variables.css` (I'd assumed they didn't); naming is internally inconsistent (`themeColor-Darkest` vs `themecolor-darkest`); one live broken reference to `--color-themecolordark` in `main-nav.css:156`.
- Drafted two articles in `src/posts/articles/2026/` — one on design token naming conventions (survey + audit), one evaluating Elena.js for this site. Both `draft: true`, neither ships yet.
- Reinstalled `node_modules` (was missing, `cross-env` not found on `npm start`).

---

## 2026-04-25

- Acted on the token-naming audit. Renamed the palette family `themecolor-*` → `base-*` (dropped unused Mid stop), and renamed semantic colors `--color-primary/secondary/tertiary` → `--color-accent-orange/blue/green` to stop implying a brand-color hierarchy that doesn't exist — the actual brand tone is the slate, not the accents. Stabilized `--color-accent-orange` across all themes (the forced-dark theme used to swap it to `red-subdued`; now consistently `orange-500`). Replaced the dead `--gradient-rainbow` reference with a defined `--gradient-slate` using the four base tones — the footer creator-link hover effect now actually renders. Also grouped the styleguide colors by primitive type. Four commits on `refactor/base-color-tokens`. The design-token-naming article draft is now factually out of date in its "currently" sections and will need an editorial pass before publishing.
