---
title: Less JavaScript
---

The only "real" JavaScript dependency is **theme-toggle.js**, which is inlined.

There are two more scripts that are generated but you have to opt in:

**masonry.js**, creating the masonry effect used on the cards.
A fallback until [maybe, one day](https://caniuse.com/mdn-css_properties_grid-template-rows_masonry) we get to use `grid-template-rows: masonry;`.
Search for `masonry: true` to see where it is activated, and set to `false`, an empty string, or delete the front matter field, if you don't want to use it. The script won't be included then. Nothing breaks, the cards just won't rise up to completely fill the gaps in their grid.

The **easteregg.js** is an opt-in JS-file set in `src/_data/meta.js`.
Right to the end of the file, you can set `easteregg: false` to deactivate the loading of the script.
