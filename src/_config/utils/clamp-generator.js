/**
 * Credits:
 * - © Andy Bell - https://buildexcellentwebsit.es/
 */

import viewports from '../../_data/designTokens/viewports.json';

export const clampValue = (min, max) => {
  const rootSize = 16;

  if (min === max) {
    return `${min / rootSize}rem`;
  }

  const minSize = min / rootSize;
  const maxSize = max / rootSize;
  const minViewport = viewports.min / rootSize;
  const maxViewport = viewports.max / rootSize;
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const intersection = -1 * minViewport * slope + minSize;

  return `clamp(${minSize}rem, ${intersection.toFixed(2)}rem + ${(slope * 100).toFixed(2)}vw, ${maxSize}rem)`;
};

export const clampGenerator = tokens =>
  tokens.map(({name, min, max}) => ({name, value: clampValue(min, max)}));
