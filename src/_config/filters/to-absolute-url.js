import {throwIfNotType} from '../utils/throw-if-not-type.js';
import {url as site} from '../../_data/meta.js';

/** Formats the given string as an absolute url. */
export const toAbsoluteUrl = url => {
  throwIfNotType(url, 'string');
  // Replace trailing slash, e.g., site.com/ => site.com
  const siteUrl = site.url.replace(/\/$/, '');
  // Replace starting slash, e.g., /path/ => path/
  const relativeUrl = url.replace(/^\//, '');
  return `${siteUrl}/${relativeUrl}`;
};
