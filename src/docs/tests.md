---
title: Tests
---

You can run local automated accessibility tests with [pa11y-ci](https://github.com/pa11y/pa11y-ci).

`src/common/pa11y.njk` generates a _pa11y-ci_ config file for all pages in the sitemap by default. You can also define custom paths to test in `src/_data/meta.js`, whithin `tests.pa11y.customPaths`.

To run the tests, use the following command:

```bash
npm run test:a11y
```

This command will:
1. Build the site in test environment
2. Start a preview server on `localhost:8080`
3. Run `pa11y-ci` accessibility tests against all pages in the sitemap, or the custom paths.

### Ignoring Rules

To ignore specific rules, you can add them to the front matter of a template:

```yaml
pa11yIgnore:
  - "WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail"
  - "WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail"
```

or globally in `src/_data/meta.js`, within `tests.pa11y.globalIgnore`.