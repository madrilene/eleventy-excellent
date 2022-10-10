const Image = require('@11ty/eleventy-img');
const path = require('path');

const imageShortcode = async (src, pcls, cls, alt, loading, sizes = '100vw') => {
	if (!alt) {
		throw new Error(`Missing \`alt\` on Image from: ${src}`);
	}

	let metadata = await Image(src, {
		widths: [400, 700, 1280],
		formats: ['avif', 'webp', 'jpeg'],
		urlPath: '/_assets/images/',
		outputDir: './dist/_assets/images/',
		// Custom Image Filename
		filenameFormat: function (id, src, width, format, options) {
			const extension = path.extname(src);
			const name = path.basename(src, extension);

			return `${name}-${width}w.${format}`;
		}
	});

	let lowsrc = metadata.jpeg[0];

	return `<picture class="${pcls}">
    ${Object.values(metadata)
			.map(imageFormat => {
				return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
					.map(entry => entry.srcset)
					.join(', ')}" sizes="${sizes}">`;
			})
			.join('\n')}
      <img
        src="${lowsrc.url}"
        class="${cls}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
				loading="${loading}"
        decoding="async">
    </picture>`;
};

module.exports = imageShortcode;
