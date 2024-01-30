---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: collections.posts
  size: 6
permalink: 'blog/page-{{ pagination.pageNumber }}/index.html'
redirectFrom: ['/blog/', '/blog/page-0/']
---

This blog has a pagination of {{ pagination.size }} posts per page.
