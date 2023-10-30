---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: collections.posts
  size: 2
permalink: 'blog/page-{{ pagination.pageNumber }}/index.html'
---

This blog has a pagination of 2 posts per page. Find the CSS in `src/assets/css/blog.css`. Current page indicator depends on the `:has()` CSS pseudo-class.
