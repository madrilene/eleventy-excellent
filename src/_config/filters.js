import { categoryFilter } from './filters/category-filter.js';
import { toISOString, formatDate } from './filters/dates.js';
import { dtcgItems } from './filters/dtcg-items.js';
import { markdownFormat } from './filters/markdown-format.js';
import { shuffleArray } from './filters/sort-random.js';
import { sortAlphabetically } from './filters/sort-alphabetic.js';
import { splitlines } from './filters/splitlines.js';
import { striptags } from './filters/striptags.js';
import { slugifyString } from './filters/slugify.js';

export default {
  categoryFilter,
  toISOString,
  formatDate,
  dtcgItems,
  markdownFormat,
  splitlines,
  striptags,
  shuffleArray,
  sortAlphabetically,
  slugifyString
};