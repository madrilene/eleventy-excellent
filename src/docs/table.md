---
title: Tables
---

Tables use a local stylesheet and [table-saw](https://github.com/zachleat/table-saw) for a stacked layout below the `sm` breakpoint. I currently don't keep the tables in the global styles, so you have to import it where you might need it:

{% raw %}

```jinja2
{% css "local" %}
  {% include "css/table.css" %}
{% endcss %}
```

{% endraw %}

An after-build step wraps every `<table>` in `<table-saw>` and loads the script via `<is-land>`. Stacked labels come from `<thead>` column headers, so markdown header rows (or a real `<thead>`) are required for that enhancement.

Only HTML that contains a `<table>` gets an `<is-land>` import. It loads with `on:idle` and `on:media` for the `sm` max-width, so wide viewports do not fetch it until those conditions allow. Pages without tables never include it.