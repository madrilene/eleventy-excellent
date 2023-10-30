---
title: Gallery Demo
permalink: /gallery/index.html
description: Websites built with this starter
layout: page
gallery:
  - image: ./src/assets/images/gallery/asturias-1.jpg
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/gallery/asturias-2.jpg
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: ./src/assets/images/gallery/asturias-3.jpg
    alt: "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains"
    caption: 'Traditional houses in Santullano, Somiedo Natural Park, Asturias'
  - image: ./src/assets/images/gallery/asturias-4.jpg
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
---

Gallery popups usting the `<dialog>` element:

{% include "components/gallery.njk" %}

A direct link to the optimized image with it's original dimensions:
{% imageLink "./src/assets/images/gallery/asturias-1.jpg", "asdf" %}

Loop through images without additional interactivity:

<ul class="gallery"
  role="list" style="padding: 0;">
{%- for item in gallery -%}
  <li>
    {% imagePlaceholder item.image, item.alt %}
  </li>
{%- endfor -%}
</ul>
