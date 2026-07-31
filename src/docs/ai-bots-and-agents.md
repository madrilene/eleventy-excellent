---
title: AI bots and agents
---

AI bots visit your site for different reasons. Some scrape your content to train models or to fill AI search indexes. Others act on behalf of a single person: assistants and browsing agents that open a page because a user asked them to.

You can decide which of them are allowed in `src/_data/meta.js`, within `robots`:

- `blockAiCrawlers` disallows training and data scraper bots in `robots.txt`.
- `blockAiAgents` disallows on-demand assistants and browsing agents (for example _ChatGPT-User_, _Claude-User_ or _Operator_). Set it to `false` if you want your site to be usable for [agentic browsing](https://developer.chrome.com/blog/agent-ready-toolkit).

Both are `true` by default, so all known AI bots are blocked until you decide otherwise. The user agent lists live in `src/common/robots.njk` and are sourced from [ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt).

### llms.txt

`src/common/llms.njk` generates an [llms.txt](https://llmstxt.org/) file at the root of your site: a markdown summary of your pages and blog posts, including their descriptions, built from your content on every build. LLMs and agents use it to understand what your site offers without crawling every page. Adjust the sections in the template if you want to highlight different content, or delete the file if you don't want to provide it.

### Testing

Lighthouse includes an [Agentic browsing](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) category from Chrome 150 on. It checks for a valid llms.txt file, visual stability and an expressive accessibility tree - the primary data model agents use to interact with a page. Since this starter takes accessibility seriously, you are already in good shape. You can also let your coding agent test your site in a real browser with [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).
