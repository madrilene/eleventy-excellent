// https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/
// https://github.com/sophiekoonin/localghost/blob/main/src/plugins/og-to-png.js
// converts SVG to JPEG for open graph images

const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');
const Image = require('@11ty/eleventy-img');
const ogImagesDir = './src/assets/og-images';

const svgToJpeg = async function () {
  const socialPreviewImagesDir = 'dist/assets/og-images/';
  const files = await fsPromises.readdir(socialPreviewImagesDir);
  if (files.length > 0) {
    files.forEach(function (filename) {
      const outputFilename = filename.substring(0, filename.length - 4);
      if (
        filename.endsWith('.svg') & !fs.existsSync(path.join(ogImagesDir, outputFilename))
      ) {
        const imageUrl = socialPreviewImagesDir + filename;
        Image(imageUrl, {
          formats: ['jpeg'],
          outputDir: ogImagesDir,
          filenameFormat: function (id, src, width, format, options) {
            return `${outputFilename}.${format}`;
          }
        });
      }
    });
  } else {
    console.log('⚠ No social images found');
  }
};

module.exports = {
  svgToJpeg
};
