---
title: robots.txt and llms.txt
---

`robots.txt` (`src/common/robots.njk`) tries to tell crawlers which URLs they may fetch. We write it from `src/common/robots.njk`.

### Always included

- `User-agent: *` with `Disallow: /404.html`
- `Sitemap`

### Optional crawl blocks

In `src/_data/meta.js`, under `robots`, you can allow training / AI-search scrapers (`allowAiCrawlers`) and on-demand browsing agents (`allowAiAgents`). Both default to blocked.

### llms.txt

Template: `src/common/llms.njk`. Turn it on with `generateLlmsTxt` (off by default), then edit the sections to match what you want listed.

### Testing

Chrome’s Lighthouse can include an [Agentic browsing](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) category (newer Chrome builds). It looks for things like a valid llms.txt, layout stability, and a useful accessibility tree. This starter already prioritizes accessibility, enabling llms.txt is optional.
