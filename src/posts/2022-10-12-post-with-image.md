---
title: 'Post with an image '
description: "Eleventy's own build-time image transformations. Find more info on11ty.dev/docs/plugins/image/ and edit settings in config-folder."
date: 2022-10-12
tags: ['image', 'feature']
image: './src/assets/images/gallery/asturias-1.jpg'
credit: Lene took this photo.
---

This starter uses Eleventy's build-time image transformations. Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/eleventyImage`.

For now there are three image sizes: 320px, 570px and 820px.
820px is the maximum size, equivalent to the width set for our content wrapper in `prose.css`: `--wrapper-width: clamp(16rem, 93vw, 55rem);`.

The `sizes` attribute is set to `sizes = '(min-width: 55rem) 820px, 100vw'`.

If you want to adjust the wrapper width you should also adjust the image size in the shortcode accordingly.

## Syntax

This is the most basic version: it contains the path to the image, alt text (can be an empty string if the image is decorative), and optionally hold a caption. It defaults to `loading = 'lazy'`, and holds no class name. The picture element gets its set of images from `widths = [320, 570, 880, 1024, 1248]` and compares to a condition of `90vw`.

{% raw %}

```
{% eleventyImage "path to image", "alt text", "caption - optional!" %}
```

{% endraw %}

If you want to be very specific you can pass in manually all the conditions, add `null` to skip.
The class names are passed in the outer container, the `<picture>` or `<figure>` element.

{% raw %}

```
{% eleventyImage "path to image", "alt text", "caption text", "eager", "class names", "(min-width:30em) 50vw, 100vw", [200, 400] %}
{% eleventyImage "path to image", "alt text", null, "eager" %}
```

{% endraw %}

### Example image with a caption

{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "The preview for social media", "An interesting caption text." %}

### Example image with all the arguments

{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "alt text", null, "lazy", "popout", "(min-width:30em) 50vw, 100vw", [200, 400] %}
