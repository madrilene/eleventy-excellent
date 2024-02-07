---
title: 'Post with an image '
description: "Eleventy's own build-time image transformations. Find more info on11ty.dev/docs/plugins/image/ and edit settings in config-folder."
date: 2022-10-12
tags: ['image', 'feature']
image: './src/assets/images/gallery/asturias-1.jpg'
alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
credit: Lene took this photo.
---

This starter uses Eleventy's build-time image transformations. Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/eleventyImage`.

For now there are three image sizes: 320px, 570px and 820px.
820px is the maximum size, equivalent to the width set for our content wrapper in `prose.css`: `--wrapper-width: clamp(16rem, 93vw, 55rem);`.

The `sizes` attribute is set to `sizes = '(min-width: 55rem) 820px, 100vw'`.

If you want to adjust the wrapper width you should also adjust the image size in the shortcode accordingly.

## Syntax

This is the most basic version: it contains the path to the image, alt text (can be an empty string if the image is decorative), and optionally hold a caption. It defaults to `loading = 'lazy'`, and holds no class name. The picture element gets its set of images from `widths = [440, 880, 1024, 1360]` and compares to a condition of `90vw`.

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

{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}

### Example image with all the arguments

{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", null, "lazy", "class-that-does-nothing", "(min-width:30em) 50vw, 100vw", [200, 400] %}

## Markdown sytnax

Thanks to the [markdown-it-eleventy-img](https://github.com/solution-loisir/markdown-it-eleventy-img) package markdown also has it own image syntax.
`src` is already prepended here, see `config/plugins/markdown.js`.

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg)