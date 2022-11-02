---
title: 'Post with 301 redirects'
description: 'Every post starts with planning. Pie tart cake halvah tiramisu macaroon chocolate marzipan pie. Jelly tootsie roll cake cake chupa chups. Shortbread tart gummi bears sweet roll!'
date: 2022-08-28
---

URLs usually change over time, as you use another CMS or optimiye on your file structure. A 301 is used when a page has permanently changed location. Informing about this change is indispensable if you want to keep a positioning.

Aleksandr Hovhannisyan came up with a [great solution for Eleventy and Netlify](https://www.aleksandrhovhannisyan.com/blog/eleventy-netlify-redirects/). To directly cover several possible previous routes it is created as an array. You can find the loop in `_redirects.njk`.

## Usage

{% raw %}

```yaml
Frontmatter:
---
redirectFrom: ['/old-route/', '/optionally-another-old-route/']
---
```
