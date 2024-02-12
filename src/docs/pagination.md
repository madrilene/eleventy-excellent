---
title: Pagination
---

The blog posts use [Eleventy's pagination feature](https://www.11ty.dev/docs/pagination/). The logic for this can be found in the layout `src/_layouts/blog.njk`, how many entries should be on a page can be defined in `src/pages/blog.md`.

If you do not want any pagination at all, it is easiest to specify a very high number for the pagination size, for example:

```yaml
pagination:
data: collections.posts
size: 10000
```

Now all entries are displayed under `/blog/` and there is no more pagination.

In `src/_data_/meta.js` you can set some values for the visible content and the aria labels.

You can also **hide the number fields** between the previous and next buttons by setting `paginationNumbers` to `false`.

```js
  blog: {
    // other adjustments
    pagination: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next',
    paginationNumbers: true
```
