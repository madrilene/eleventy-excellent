---
title: SVG
---

All SVG icons used in the starter are in `src/assets/svg`. There is a directory dedicated to the dividers, the platform icons and a general folder called "misc".

### Shortcodes

The `svg.js` shortcodes, introduced in version 3, allow for the seamless inclusion of SVG files. Located in `src/_config/shortcodes/svg.js`, they require only the folder and file name of the SVG, omitting the file extension. By default, SVGs are treated as decorative (`aria-hidden="true"`, `focusable="false"`, `tabindex="-1"`). Pass a `title` for informative icons (`role="img"`, `<title>`, `aria-labelledby`). The SVGs should be stored in the `src/assets/svg` directory, and referenced using the format `"folder/svg-name"`.

There are two shortcodes: `svg` (positional parameters) and `svgKeys` (named parameters). Prefer a decorative SVG next to visible or `visually-hidden` text inside links and buttons. Use `title` for standalone icons that need their own accessible name.

{% raw %}
```jinja2
{% svg "path", "title", "class-name", "inline-style" %}
{% svg "misc/star", "A yellow star icon", "spin", "block-size: 4ex; fill: var(--color-tertiary);" %}
{% svgKeys {
  "src": "misc/star",
  "title": "A blue star icon",
  "className": "spin",
  "styleName": "block-size: 4ex; fill: var(--color-secondary);"
} %}
```
{% endraw %}

{% svg "misc/star", "A yellow star icon", "spin", "block-size: 4ex; fill: var(--color-tertiary);" %}

{% svgKeys {
  "src": "misc/star",
  "title": "A blue star icon",
  "className": "spin",
  "styleName": "block-size: 4ex; fill: var(--color-secondary);"
} %}

The star icon resolves to something like:

```html
<svg … role="img" aria-labelledby="svg-title-a-yellow-star-icon" class="spin" style="…"><title id="svg-title-a-yellow-star-icon">A yellow star icon</title><path>…</path></svg>
```
