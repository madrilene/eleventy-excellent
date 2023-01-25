---
title: 'Open Graph images'
description: 'When you share your blog posts, a thumbnail image appears - the image we define as an Open Graph Image. This starter generates these images for your blog posts automatically.'
date: 2023-01-25
---

When you share your blog posts, a thumbnail image appears - the image we define as an Open Graph Image.

Eleventy Excellent generates these images for your blog posts automatically.

`meta-info.njk`

```html
<meta
  property="og:image"
  content="{{ meta.url }}
  {% if (layout == 'post') %}/assets/images/social-preview/{{ title | slugify }}-preview.jpeg
  {% else %}{{ meta.meta_data.opengraph_default }}
  {% endif %}"
/>
```

To change the look and behaviour of those images and replace the SVG background edit `src/social-preview.njk`. The implementation is based on [Bernard Nijenhuis article](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/).
