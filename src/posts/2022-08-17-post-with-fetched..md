---
title: 'Post with fetched content'
description: 'Eleventy Fetch fetches and caches resources - at configurable intervals. In this example I am fetching my public repositories with a cache duration of 1 day.'
date: 2022-08-28
---

[Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/) fetches and caches resources - at configurable intervals.

This is an example of fetching external data, in this case, my public repositories with a cache duration of 1 day.
Edit in `_data/github.js.`

<ul>
  {% for repository in github %}
  <li>
    <a href="{{ repository.html_url }}">{{ repository.name }} </a>
  </li>
  {% else %}
  <li>This would display if the 'item' collection were empty</li>
  {% endfor %}
</ul>
