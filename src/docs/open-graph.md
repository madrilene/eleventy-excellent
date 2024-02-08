---
title: Open Graph images
---

You can see a [preview of the OG images in a blog post](/blog/open-graph-images/).

They are referenced in `meta-info.njk`:

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

To change the look and behaviour of those images and replace the SVG background edit `src/common/og-images.njk`.

The implementation is based on [Bernard Nijenhuis article.](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/)

If you want to be inspired, have a look at [what Lea is doing here.](https://lea.codes/posts/2023-04-25-pseudorandom-numbers-in-eleventy/)

Previously, the images were created at build time, but this leads to not rendering the font -- if the system executing the build has not installed the font, it will not be used.

A solution would be to always build the page yourself and then place it on the server directly.
Or, as [Sophie Koonin does](https://github.com/sophiekoonin/localghost/blob/main/eleventy.config.js#L45-L47), explicitly specify the system to be used for the build, and select a font that this system has installed by default.

At the moment I have relocated the creation of the images in the development process, so that the font only needs to be installed on your own system. The images are located in `src/assets/og-images` and are comitted.

This is fine as long as you only work with markdown and the font is always installed on your system. How this works if a CMS is involved remains to be seen :sweat_smile:.

Consider that the domain is a hard coded value in the front matter in `src/common/og-images.njk`.

Let me know if you encounter any problems.
