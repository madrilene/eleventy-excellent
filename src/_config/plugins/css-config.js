import fs from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export const cssConfig = eleventyConfig => {
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (inputContent, inputPath) => {
      const paths = [];
      if (inputPath.endsWith('/src/assets/css/global/global.css')) {
        paths.push('src/_includes/css/global.css');
      } else if (inputPath.includes('/src/assets/css/local/')) {
        const baseName = path.basename(inputPath);
        paths.push(`src/_includes/css/${baseName}`);
      } else if (inputPath.includes('/src/assets/css/components/')) {
        const baseName = path.basename(inputPath);
        paths.push(`dist/assets/css/components/${baseName}`);
      } else {
        return;
      }

      return async () => {
        let result = await postcss([
          postcssImportExtGlob,
          postcssImport,
          tailwindcss,
          autoprefixer,
          cssnano
        ]).process(inputContent, {from: inputPath});

        // Write the output to all specified paths
        for (const outputPath of paths) {
          await fs.mkdir(path.dirname(outputPath), {recursive: true});
          await fs.writeFile(outputPath, result.css);
        }

        return result.css;
      };
    }
  });
};
