// https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/
// concerts SVG to JPEG for open graph images

const fs = require('fs');
const Image = require('@11ty/eleventy-img');

const svgToJpeg = function () {
  const ogImagesDir = 'dist/assets/og-images/';
  fs.readdir(ogImagesDir, (err, files) => {
    if (!!files && files.length > 0) {
      files.forEach(fileName => {
        if (fileName.endsWith('.svg')) {
          let imageUrl = ogImagesDir + fileName;
          Image(imageUrl, {
            formats: ['jpeg'],
            outputDir: './' + ogImagesDir,
            filenameFormat: function (id, src, width, format, options) {
              let outputFileName = fileName.substring(0, fileName.length - 4);
              return `${outputFileName}.${format}`;
            }
          });
        }
      });
    } else {
      console.log('⚠ No social images found');
    }
  });
};

module.exports = {
  svgToJpeg
};
