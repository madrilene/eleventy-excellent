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

Consider that the domain is a hard coded value in the front matter in `src/common/og-images.njk`.

The images are created at build time.
As of version 3.8, fonts for the OG images are now `base64` encoded and included as inlined CSS within the SVG. This makes you independent of the system executing the build.

Many thanks to [Vadim Makeev](https://pepelsbey.dev/) [who came up with that idea!](https://front-end.social/@sophie@social.lol/113373291207231296)