import * as fs from 'node:fs/promises';
import {join, resolve} from 'node:path';

export async function tableSawWrapper({dir}) {
  const outputDir = resolve(dir.output);
  // sm (640px)
  const breakpoint = '(max-width: 39.9375em)';

  const files = await readDirRecursive(outputDir);

  await Promise.all(
    files
      .filter(f => f.endsWith('.html'))
      .map(async file => {
        let content = await fs.readFile(file, 'utf8');

        content = content
          .replace(/(<table(?=[\s>]))/g, `<table-saw breakpoint="${breakpoint}">$1`)
          .replace(
            /(<\/table>)/g,
            `$1</table-saw>\n<is-land on:idle on:media="${breakpoint}" import="/assets/components/table-saw.js"></is-land>`
          );

        await fs.writeFile(file, content, 'utf8');
      })
  );
}

async function readDirRecursive(dir) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  const files = await Promise.all(
    entries.map(entry => {
      const res = join(dir, entry.name);
      return entry.isDirectory() ? readDirRecursive(res) : res;
    })
  );
  return files.flat();
}
