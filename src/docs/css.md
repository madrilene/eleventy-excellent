---
title: CSS
---

Add and delete your globally available custom block stylesheets in `src/assets/css/global/blocks/*.css`.

The methodology used is [CUBE CSS.](https://cube.fyi/)

The CSS system of this starter was invented by Andy Bell. If you want to know exactly how it all works, and have a look at the (further elaborated) original, [read this article on piccalil.li](https://piccalil.li/blog/a-css-project-boilerplate/).

### Inline CSS and bundles

The main CSS file is now inline in production to improve performance, see `.src/_includes/head/css-inline.njk`.

You can add per-page or component bundles of CSS. Instead of adding your CSS file to the `src/assets/css/global/blocks/` directory, you can place them in `src/assets/css/local/`. All CSS files in there will be stored alongside `global.css` in `.src/_includes/css/`. You can now include them in the "local" bundle only on pages or components where you need them:

{% raw %}

```jinja2
{% css "local" %}
  {% include "css/your-stylesheet.css" %}
{% endcss %}
```

{% endraw %}

### Component CSS

All CSS files placed in `src/assets/css/components/` will be sent to the output folder, where components can reference them: `/assets/css/components/*.css`.

### Debugging CSS

In `src/assets/css/global.css` you can decomment `@import-glob 'tests/*.css';` to include CSS for debugging.

It makes visible when your code[ wrapped in `<is-land>` elements](https://github.com/11ty/is-land) is being hydrated, where things might overflow and many other warnings and errors [that Heydon Pickering came up with](https://heydonworks.com/article/testing-html-with-modern-css/).

### Cascade layers

We now use cascade layers! Up until now, I used the `:where()` pseudo-class to create low specificity selectors for the reset and compositions. [Mayank inspired me](https://mayank.co/blog/css-reset-layer/) to change to cascade layers. We have two major bundles of CSS: everything included in "global" In `src/assets/css/global/global.css` is now organized in cascade layers. The "local" bundle is for per-page or component CSS, and does not use cascade layers - it has thus a higher specificity, independent of any selector specificity in the global CSS.

### Tailwind CSS

You will find that Tailwind CSS does not work as you might expect here. I explain this in [one of the blog posts](/blog/what-is-tailwind-css-doing-here/).

If you are working with **VS Code** I recommend installing the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) addon, as it works also for the custom utility classes.

If the IntelliSense does not seem to work in Nunjucks files, try adding this to your VS Code settings:
```json
  "tailwindCSS.includeLanguages": {
    "jinja-html": "html",
    "jinja": "html",
    "njk": "html"
  },
```

