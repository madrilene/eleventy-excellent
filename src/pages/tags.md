---
layout: page
title: Tags
permalink: /tags/index.html
---

<div class="my-s-m cluster">
{% for tag in collections.tagList %}
<a href="/tags/{{ tag }}" class="button">
{{ tag }}
</a>
{% endfor %}
</div>
