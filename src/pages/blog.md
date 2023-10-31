---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: collections.posts
  size: 2
permalink: 'blog/page-{{ pagination.pageNumber }}/index.html'
redirectFrom: ['/blog/', '/blog/page-0/']
---

This blog has a pagination of 2 posts per page. Find the CSS in `src/assets/css/blog.css`.

Current page indicator and next/previous buttons depend on the not yet (as of November 2023) fully supported `:has()` CSS pseudo-class to work correctly.
