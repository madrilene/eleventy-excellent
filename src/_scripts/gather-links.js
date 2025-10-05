// src/_scripts/gather-links.js
import { promises as fs } from 'fs';
import fg from 'fast-glob';

const STANDALONE_LINK_REGEX = /^(?:\[(https?:\/\/[^\]\s]+)\]\(\1\)|(https?:\/\/[^\s]+))$/gm;

async function gatherLinks() {
  console.log("Gathering unique standalone links...");
  const contentFiles = await fg(['src/posts/**/*.md']);
  const uniqueLinks = new Set();

  for (const file of contentFiles) {
    const content = await fs.readFile(file, 'utf8');
    const matches = content.matchAll(STANDALONE_LINK_REGEX);
    for (const match of matches) {
      const url = match[1] || match[2];
      if (url) {
        uniqueLinks.add(url);
      }
    }
  }

  const linksArray = Array.from(uniqueLinks);
  console.log(`Found ${linksArray.length} unique standalone links.`);

  await fs.mkdir('_data', { recursive: true });
  
  await fs.writeFile('_data/unique_links.json', JSON.stringify(linksArray, null, 2));
  console.log("Unique links saved to _data/unique_links.json");
}

gatherLinks();