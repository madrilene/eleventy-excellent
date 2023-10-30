---
title: 'Post with an image '
description: "Eleventy's own build-time image transformations. Find more info on11ty.dev/docs/plugins/image/ and edit settings in config-folder."
date: 2022-10-12
---

This starter uses Eleventy's build-time image transformations. Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/imagePlaceholder`.

For now there are three image sizes: 320px, 570px and 820px.
820px is the maximum size, equivalent to the width set for our content wrapper in `prose.css`: `--wrapper-width: clamp(16rem, 93vw, 55rem);`.

The `sizes` attribute is set to `sizes = '(min-width: 55rem) 820px, 100vw'`.

If you want to adjust the wrapper width you should also adjust the image size in the shortcode accordingly.

## Syntax

{% raw %}

```
{% imagePlaceholder "path to image", "alt text", "caption - optional!" %}
```

{% endraw %}

Add your own `sizes` attribute (note how I set an empty string for the caption):

{% raw %}

```
{% imagePlaceholder "path to image", "alt text", "", "(min-width:30em)  50vw, 100vw" %}
```

{% endraw %}

### Example image with a caption

{% imagePlaceholder "./src/assets/images/opengraph-default.jpg", "The preview for social media", "An interesting caption text." %}

## CSS

You can change the CSS for the page and blog post images in `./src/assets/css/blocks/page.css` and `./src/assets/css/blocks/blog.css`:

```css
.page img {
  max-inline-size: 100%;
  block-size: auto;
}

.blog img {
  max-inline-size: 100%;
  block-size: auto;
}
```
