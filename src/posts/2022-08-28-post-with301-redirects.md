---
title: 'Post with 301 redirects'
description: 'Every post starts with planning. Pie tart cake halvah tiramisu macaroon chocolate marzipan pie. Jelly tootsie roll cake cake chupa chups. Shortbread tart gummi bears sweet roll!'
date: 2022-08-28
redirectFrom: ['/old-route/', '/optionally-another-old-route/']
---

URLs usually change over time, as you use another CMS or work on your structure. A 301 is used when a page has permanently changed location. Informing about this change is indispensable if you want to keep a positioning.

[Aleksandr Hovhannisyan came up with a great solution for Eleventy and Netlify](https://www.aleksandrhovhannisyan.com/blog/eleventy-netlify-redirects/). To directly cover several possible obsolete routes it is created as an array.

{% raw %}

```nunjucks
_redirects.njk:

{% for page in collections.all %}
  {% if page.url and page.data.redirectFrom %}
    {% for oldUrl in page.data.redirectFrom %}
{{ oldUrl }}  {{ page.url }}
    {% endfor %}
  {% endif %}
{% endfor %}
```

{% endraw %}
