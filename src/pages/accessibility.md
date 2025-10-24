---
title: 'Accessibility Statement'
description: 'Commitment to digital accessibility and how to report accessibility issues.'
date: "Last Modified"
permalink: /accessibility/index.html
layout: page
---

Accessibility design is about ensuring equal access for people with disabilities. It is about removing barriers to access.

I am very committed to this principle and I continually try to improve the user experience for everyone.

## Conformance Status

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.

_Eleventy Excellent_ aims to be conformant with [ WCAG 2.1 Level AA.](https://www.w3.org/WAI/standards-guidelines/wcag/)

Compliance depends on how users implement and customize the starter for their specific content and use cases.

## Testing

[pa11y-ci](https://github.com/pa11y/pa11y-ci) is used to run automated accessibility tests, [see the Docs](/docs/tests/).

## Feedback

I very much welcome your feedback and suggestions on the accessibility of this starter project. Please let me know if you encounter any accessibility barriers:

- **GitHub Issues**: [Report accessibility issues](https://github.com/madrilene/eleventy-excellent/issues)
- **Email**: {{ meta.creator.email }}

**Response Time**: I aim to respond to feedback within one week.

---

*Last updated: {{ page.date | formatDate('MMMM D, YYYY') }}*
