---
title: 'Post with an image '
description: "Eleventy's own build-time image transformations. Find more info on11ty.dev/docs/plugins/image/ and edit settings in config-folder."
date: 2022-10-12
tags: ['image', 'feature']
image: './src/assets/images/gallery/asturias-1.jpg'
alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
credit: Lene took this photo.
---

This starter uses Eleventy's build-time image transformations.

Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/image`.

## Syntax

In the most basic version it contains the path to the image, alt text (can be an empty string if the image is decorative), and may hold a caption.

{% raw %}

```jinja2
{% eleventyImage "path to image", "alt text", "caption text" %}
```

{% endraw %}

It defaults to `loading = 'lazy'`, the picture element gets its set of images from `widths = [440, 880, 1024, 1360]` and compares to a condition of `90vw`.

If you want to be very specific, you can pass in manually all the conditions, add `null` to skip.

The class names are passed in the outer container, the `<picture>` or `<figure>` element (`<figure>` is added if you set a caption).

{% raw %}

```jinja2
{% eleventyImage "path to image", "alt text", "caption text", "eager", "class names", "(min-width:30em) 50vw, 100vw", [200, 400] %}
{% eleventyImage "path to image", "alt text", null, "eager" %}
```

{% endraw %}

### Example image with a caption

{% raw %}

```jinja2
{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}
```

{% endraw %}

{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}

### Example image with all the arguments

{% raw %}

```jinja2
{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", null, "lazy", "class-that-does-nothing", "(min-width:30em) 50vw, 100vw", [200, 400] %}
```

{% endraw %}

{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", null, "lazy", "class-that-does-nothing", "(min-width:30em) 50vw, 100vw", [200, 400] %}

## Markdown sytnax

Thanks to the [markdown-it-eleventy-img](https://github.com/solution-loisir/markdown-it-eleventy-img) package markdown also has it own image syntax. `src` is already prepended here, see `config/plugins/markdown.js`.

### Picture element

```markdown
![alt text](/path/to/image)
![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg)
```

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg)

### Figure element with caption

```markdown
![alt text](/path/to/image 'caption text')
![A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape](/assets/images/gallery/asturias-1.jpg 'Inside the Somiedo Natural Park, Asturias')
```

![A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape](/assets/images/gallery/asturias-1.jpg 'Inside the Somiedo Natural Park, Asturias')
