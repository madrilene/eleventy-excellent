---
title: 'Post with an image'
description: "You can use Markdown, a Nunjucks shortcode or pure HTML to add images to your posts and pages."
date: 2025-01-09
tags: ['image', 'feature']
image: './src/assets/images/gallery/asturias-1.jpg'
alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
credit: A photo I took.
---

## With HTML Transform

Transforms any `<img>` or `<picture>` tags in HTML files as a post-processing step.

```jinja2
<img src="./co-located-image.jpg" alt="alt text">
```

We can pass in overrides for every instance and use attributes like loading and decoding

```jinja2
<img src="./co-located-image.jpg" alt="alt text" eleventy:widths="200,600" loading="eager" decoding="sync">
```

<img src="./asturias-1.jpg" alt="A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape" eleventy:widths="200,600" loading="eager" decoding="sync">

More info: https://www.11ty.dev/docs/plugins/image/#html-transform

## With a shortcode

The shortcode is for situations where you need full control of the output of the image. The most basic version contains the path to the image and alt text (can be an empty string if the image is decorative).

{% raw %}

```jinja2
{% image "path to image", "alt text" %}
```

{% endraw %}

It defaults to `loading = 'lazy'`, the picture element gets its set of images from `widths = [650, 960, 1200]` and compares to a condition of `100vw`.
You can pass in manually all the conditions, add `null` to skip.
You can pass classes to the outer container ( `<picture>` or `<figure>` element), and to the `<img>` element itself.

The shortcode is stored in `src/_config/shortcodes/image.js`.

{% raw %}

```jinja2
{% image "path to image", "alt text", "caption text", "eager", "container class names", "img class names", "(min-width:30em) 50vw, 100vw", [200, 400] %}
{% image "path to image", "alt text", null, "eager" %}
```

{% endraw %}

{% image "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", "What a nice old house in black and white", "lazy", "text-center", "grayscale", "(min-width:30em) 50vw, 100vw", [200, 400] %}

## Markdown syntax

This also uses [Image HTML Transform ](https://www.11ty.dev/docs/plugins/image/#html-transform). As the usual markdown sytnax for images creates the image element the plugin is looking for, it transforms it to the rich picture format.

In `src/_config/plugins/markdown.js` I customized the Markdown rendering for images slightly. What normally would become a `title` attribute is used to create a caption.

In Markdown files like this blog post here, the Markdown syntax or plain HTML works best.

```markdown
![alt text](/path/to/image 'caption text')
![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg) 'I used a portrait lens for this one'
```

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg 'I used a portrait lens for this one')

Recommended reads:
- https://www.11ty.dev/docs/plugins/image/
- https://www.aleksandrhovhannisyan.com/blog/eleventy-image-transform/
- https://coryd.dev/posts/2024/setting-up-image-transforms-in-eleventy