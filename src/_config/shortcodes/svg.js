/**
 * Generates an optimized SVG shortcode with optional attributes.
 */

import {readFileSync} from 'node:fs';
import {optimize} from 'svgo';
import {escapeHtml} from '../filters/escape-html.js';
import {slugifyString} from '../filters/slugify.js';

const errorSrcRequired = shortcodeName => {
  throw new Error(`src parameter is required for {% ${shortcodeName} %} shortcode`);
};

// Handles SVG processing
const processSvg = async ({src, title = '', className = '', styleName = ''}) => {
  const svgData = readFileSync(`./src/assets/svg/${src}.svg`, 'utf8');
  const {data} = await optimize(svgData);

  const attrs = [];
  let titleEl = '';

  if (title) {
    // informative pattern: <svg> + role="img" + <title> + aria-labelledby="[ID]"
    const id = `svg-title-${slugifyString(title) || 'icon'}`;
    attrs.push('role="img"', `aria-labelledby="${id}"`);
    titleEl = `<title id="${id}">${escapeHtml(title)}</title>`;
  } else {
    // decorative pattern: hide from AT and keep out of tab order
    attrs.push('aria-hidden="true"', 'focusable="false"', 'tabindex="-1"');
  }

  if (className) {
    attrs.push(`class="${escapeHtml(className)}"`);
  }
  if (styleName) {
    attrs.push(`style="${escapeHtml(styleName)}"`);
  }

  return data.replace(/<svg(.*?)>/, `<svg$1 ${attrs.join(' ')}>${titleEl}`);
};

/**
 * @param {string} src - Folder/file of the SVG (without the .svg extension), e.g. "misc/star".
 * @param {string} [title=''] - Accessible name (injected as <title>); omit for decorative SVGs.
 * @param {string} [className=''] - The CSS class name for the SVG.
 * @param {string} [styleName=''] - The inline style for the SVG.
 * @returns {Promise<string>} The optimized SVG shortcode.
 */
// Positional parameters
export const svgPositionalShortcode = async (src, title = '', className = '', styleName = '') => {
  if (!src) {
    errorSrcRequired('svg');
  }
  return processSvg({src, title, className, styleName});
};

// Named parameters
export const svgKeysShortcode = async (options = {}) => {
  if (!options.src) {
    errorSrcRequired('svgKeys');
  }
  return processSvg(options);
};
