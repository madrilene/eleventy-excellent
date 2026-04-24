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
