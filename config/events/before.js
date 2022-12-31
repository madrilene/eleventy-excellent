var fs = require('fs');

module.exports = eleventyConfig => {
  eleventyConfig.on('eleventy.before', async () => {
    fs.copyFile('src/assets/scripts/app.js', 'src/_includes/app-min.js', err => {
      if (err) throw err;
    });
  });
};
