const Image = require('@11ty/eleventy-img');
const path = require('path');
const htmlmin = require('html-minifier');

const imageShortcodePlaceholder = async (
	src,
	fcls,
	pcls,
	cls,
	alt,
	caption,
	sizes = '100vw'
) => {
	if (!alt) {
		throw new Error(`Missing \`alt\` on myImage from: ${src}`);
	}

	let metadata = await Image(src, {
		widths: [400, 700, 1280],
		formats: ['avif', 'webp', 'jpeg'],
		urlPath: '/_assets/images/',
		outputDir: './dist/_assets/images/',
		filenameFormat: function (id, src, width, format, options) {
			const extension = path.extname(src);
			const name = path.basename(src, extension);

			return `${name}-${width}w.${format}`;
		}
	});

	let lowsrc = metadata.jpeg[0];

	// getting the url  to use
	let imgSrc = src;
	if (!imgSrc.startsWith('.')) {
		const inputPath = this.page.inputPath;
		const pathParts = inputPath.split('/');
		pathParts.pop();
		imgSrc = pathParts.join('/') + '/' + src;
	}

	return htmlmin.minify(
		`<figure class="${fcls}">
     <picture class="${pcls}">
    ${Object.values(metadata)
			.map(imageFormat => {
				return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
					.map(entry => entry.srcset)
					.join(', ')}" sizes="${sizes}">`;
			})
			.join('\n')}
      <img
        src="/_assets/images/image-placeholder.png"
        data-src="${lowsrc.url}"
        class="${cls}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
				loading = 'lazy'
        decoding="async">
    </picture>
    ${
			caption
				? `<figcaption class="cluster font-display"><p>${caption}</p> <img
        src="/_assets/svg/arrow.svg" alt="Arrow icon" width="78" height="75" aria-hidden="true" />
	</figcaption>`
				: ``
		}
</figure>`,
		{collapseWhitespace: true}
	);
};

module.exports = imageShortcodePlaceholder;
