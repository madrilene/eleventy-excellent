import {formatDate, toISOString} from './filters/dates.js';
import {escapeHtml} from './filters/escape-html.js';
import {markdownFormat} from './filters/markdown-format.js';
import {slugifyString} from './filters/slugify.js';
import {sortAlphabetically} from './filters/sort-alphabetic.js';
import {shuffleArray} from './filters/sort-random.js';
import {splitlines} from './filters/splitlines.js';
import {striptags} from './filters/striptags.js';

export default {
  toISOString,
  formatDate,
  escapeHtml,
  markdownFormat,
  splitlines,
  striptags,
  shuffleArray,
  sortAlphabetically,
  slugifyString
};
