---
title: Template Languages
---

We use the following [template languages](https://www.11ty.dev/docs/languages/):
- [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/)
- [Markdown](https://www.11ty.dev/docs/languages/markdown/)
- [WebC](https://www.11ty.dev/docs/languages/webc/)

### Nunjucks

Nunjucks Docs: [https://mozilla.github.io/nunjucks/templating.html](https://mozilla.github.io/nunjucks/templating.html)

[prettier-plugin-jinja-template](https://github.com/HookyQR/prettier-plugin-jinja-template) is used for Nunjucks code formatting. It is configured in `.prettierrc`.

I use [Better Jinja](https://github.com/samuelcolvin/jinjahtml-vscode) for syntax highlighting. After installing it for your code editor, you can configure the file associations in your settings:

```
{
  "files.associations": {
    "*.njk": "jinja-html"
  }
}
```

Nunjucks was inspired by Jinja2, which is a Python templating engine. The syntax is very similar. I did not find good syntax-highlighting and formatting solutions specifically made for Nunjucks, but everything Jinja2 works just fine.

### Markdown

Eleventy uses [markdown-it](https://github.com/markdown-it/markdown-it) for markdown files (.md). The custom configuration for this starter is in `src/_config/plugins/markdown.js`.

### WebC

[WebC](https://github.com/11ty/webc) is standalone HTML serializer for generating markup for Web Components. We use the [WebC plugin](https://github.com/11ty/eleventy-plugin-webc) for Eleventy.

We combine WebC components with Nunjucks partials:

```bash
src/_includes/webc/custom-card.webc     # WebC component definition
src/_includes/partials/card-blog.njk    # Nunjucks partial with logic
src/_includes/partials/card-tag.njk     # Another partial using the same component
```
