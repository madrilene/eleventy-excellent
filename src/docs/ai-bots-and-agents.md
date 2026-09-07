---
title: AI bots and agents
---

You can decide which AI bots (scrapers to train models or browsing agents) are allowed to visit in `src/_data/meta.js`, under `robots`, and if you want to generate an `llms.txt` file. All off by default as of my preference.

`robots.txt` is advisory, many scrapers ignore it.

### llms.txt

Template: `src/common/llms.njk`. Turn it on with `generateLlmsTxt`, edit the sections to match what you want listed.

### Testing

Chrome’s Lighthouse can include an [Agentic browsing](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) category (newer Chrome builds). It looks for things like a valid llms.txt, layout stability, and a useful accessibility tree. This starter already prioritizes accessibility, enabling llms.txt is optional.
