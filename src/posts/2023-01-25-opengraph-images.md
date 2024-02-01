---
title: 'Open Graph images'
description: 'When you share your blog posts, a thumbnail image might appear. This starter generates these images for your blog posts automatically.'
date: 2023-01-25
tags:
  - image
  - feature
---

When you share your blog posts, a thumbnail image may appear - the image we define in our meta data as an Open Graph Image (`og:image`).

This starter generates these images for your blog posts automatically.

The fallback and default image for all other pages is the image set as `opengraph_default` in the `meta.js` global data file.

`meta-info.njk`

{% raw %}

```html
<meta
  property="og:image"
  content="{{ meta.url }}
  {% if (layout == 'post') %}/assets/og-images/{{ title | slugify }}-preview.jpeg
  {% else %}{{ meta.opengraph_default }}
  {% endif %}"
/>
```

{% endraw %}

To change the look and behaviour of those images and replace the SVG background edit `src/common/og-images.njk`. The implementation is based on [Bernard Nijenhuis article](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/).

## Recommendation

If you want to get a little more creative, have a look at[ what Lea does here](https://github.com/learosema/lea-codes/blob/main/src/opengraph-default.njk).

## v2.0 update

Previously the images were created at build time, but this leads to problems with the set font - if the system executing the build has not installed it, it will not be generated.

The solution is to always build the page yourself and then place it on the server directly. Or, as [Sophie Koonin does](https://github.com/sophiekoonin/localghost/blob/main/eleventy.config.js#L45-L47), explicitly specify the system to be used for the build and select a font that this system has installed by default.

At the moment I have relocated the creation of the images in the development process, so that the font only needs to be installed on your own system. The images are located in `src/assets/og-images` and are comitted.

This is fine as long as you only work with markdown and the font is always installed on your system, how this works with a CMS workflow remains to be seen. Please let me know if you encounter any problems.
