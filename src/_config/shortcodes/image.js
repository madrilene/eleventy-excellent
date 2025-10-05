import Image from '@11ty/eleventy-img';
import path from 'node:path';

const stringifyAttributes = attributeMap => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === 'undefined') return '';
      return `${attribute}="${value}"`;
    })
    .join(' ');
};

// This is your original async shortcode, now with 'export' added.
// It's used for the {% image %} shortcode in .njk files.
export async function imageShortcode(
  src,
  alt = '',
  caption = '',
  loading = 'lazy',
  containerClass,
  imageClass,
  widths = [650, 960, 1400],
  sizes = 'auto',
  formats = ['avif', 'webp', 'jpeg']
) {
  // Correctly handle local vs. remote URLs
  const isRemote = src.startsWith('http');
  const finalSrc = (!isRemote && !src.startsWith('./src')) ? `./src${src}` : src;

  const metadata = await Image(finalSrc, {
    widths: [...widths],
    formats: [...formats],
    urlPath: '/assets/images/',
    outputDir: './dist/assets/images/',
    filenameFormat: (id, src, width, format, options) => {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    }
  });

  const lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  const imageSources = Object.values(metadata)
    .map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
        .map(entry => entry.srcset)
        .join(', ')}" sizes="${sizes}">`;
    })
    .join('\n');

  const imageAttributes = stringifyAttributes({
    'src': lowsrc.url,
    'width': lowsrc.width,
    'height': lowsrc.height,
    alt,
    loading,
    'decoding': loading === 'eager' ? 'sync' : 'async',
    ...(imageClass && {class: imageClass}),
    'eleventy:ignore': ''
  });

  const pictureElement = `<picture> ${imageSources}<img ${imageAttributes}></picture>`;

  return caption
    ? `<figure slot="image" ${containerClass ? `class="${containerClass}"` : ''}>${pictureElement}<figcaption>${caption}</figcaption></figure>`
    : pictureElement;
}