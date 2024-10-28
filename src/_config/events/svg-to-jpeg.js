import fs from 'fs';
import Image from '@11ty/eleventy-img';

export const svgToJpeg = async function () {
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
