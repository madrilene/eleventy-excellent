const Image = require('@11ty/eleventy-img');
const path = require('path');
const htmlmin = require('html-minifier-terser');

const imageShortcodePlaceholder = async (
  src,
  alt,
  caption,
  sizes = '(min-width: 55rem) 880px, 100vw'
) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [320, 570, 880, 1200],
    formats: ['avif', 'webp', 'jpeg'],
    urlPath: '/assets/images/',
    outputDir: './dist/assets/images/',
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    }
  });

  let lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // getting the url  to use
  let imgSrc = src;
  if (!imgSrc.startsWith('.')) {
    const inputPath = this.page.inputPath;
    const pathParts = inputPath.split('/');
    pathParts.pop();
    imgSrc = pathParts.join('/') + '/' + src;
  }

  return htmlmin.minify(
    `<figure class="flow">
      <picture>
      ${Object.values(metadata)
        .map(imageFormat => {
          return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
            .map(entry => entry.srcset)
            .join(', ')}" sizes="${sizes}">`;
        })
        .join('\n')}
        <img
          src="/assets/images/image-placeholder.png"
          data-src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}"
          loading = 'lazy'
          decoding="async">
      </picture>
    ${caption ? `<figcaption>${caption}</figcaption>` : ``}
    </figure>`,
    {collapseWhitespace: true}
  );
};

module.exports = imageShortcodePlaceholder;
