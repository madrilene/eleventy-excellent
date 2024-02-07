---
title: Theme (dark / light mode)
---

With version 2.0 I introduced dark and light mode. This is not intended to be a gimmick, but to support the accessibility of the site. And I tend to read blog posts at night, and if there is no dark mode then I leave the tab for later, and we all know how that ends.

Dark and light mode respects the user agent or operating system settings using the `prefers-color-scheme` CSS media feature. But there is also a switch in the `<footer>`.

If you want to change something here, for example replace the button with a classic sun/moon icon, make sure to preserve accessibility. The accessible name ("Theme dark" or "Theme light") results from two IDs:

`aria-labelledby="theme-switcher-label theme-switcher-value"`

If you remove the text content of the `<button>`, the value for `theme-switcher-value` must therefore be obtained differently.
