// Using ES Module syntax for imports
import EleventyFetch from '@11ty/eleventy-fetch'; // Use EleventyFetch for caching
import { JSDOM } from 'jsdom';
import { URL } from 'url';

// Sleep utility function to add a delay
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Normalizes a domain by removing the 'www.' prefix
function normalizeDomain(domain) {
  return domain.startsWith('www.') ? domain.substring(4) : domain;
}

// Function to get a random number between a min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getOpenGraphData(url, cacheDir) {
  try {
    // Add a random delay to avoid overwhelming the target server
    const delay = Math.floor(Math.random() * 500) + 100; // Random delay between 100ms and 600ms
    await sleep(delay);

    console.log(`[eleventy-plugin-opengraph-unfurl] Fetching data for: ${url}`);
    
    // Set a random cache duration between 180 and 365 days
    const cacheDuration = `${getRandomInt(180, 365)}d`;

    // Use EleventyFetch to get the data, which handles caching automatically
    const html = await EleventyFetch(url, {
      duration: cacheDuration, 
      type: 'text',
      directory: '.cache/eleventy-fetch/'
      // directory: cacheDirectory // Use the configurable cache directory
    });

    const dom = new JSDOM(html);
    const meta = dom.window.document.head.querySelectorAll('meta');

    const ogData = {};
    meta.forEach(tag => {
      const property = tag.getAttribute('property');
      const content = tag.getAttribute('content');
      if (property && property.startsWith('og:')) {
        const key = property.substring(3);
        ogData[key] = content;
      }
    });

    return ogData;
  } catch (error) {
    console.error(`[eleventy-plugin-opengraph-unfurl] Error fetching data for ${url}:`, error);
    return null;
  }
}

function renderOpenGraphUnfurlCard(data, url) {
  if (!data || !data.title) {
    return `<a href="${url}">${url}</a>`;
  }
  const image = data.image ? `<div class="opengraph-unfurl-card-image"><img src="${data.image}" alt="${data.title}"></div>` : '';
  const description = data.description ? `<p>${data.description}</p>` : '';

  return `
<div class="opengraph-unfurl-card">
  ${image}
  <div class="opengraph-unfurl-card-content">
    <h3 class="opengraph-unfurl-card-title"><a href="${url}">${data.title}</a></h3>
    ${description}
  </div>
</div>
  `.trim();
}

export default function(eleventyConfig, options = {}) {
  // Set default options
  const defaultOptions = {
    allowedDomains: [],
    cacheDirectory: '.cache/opengraph-unfurl/'
  };

  const { allowedDomains, cacheDirectory } = { ...defaultOptions, ...options };

  eleventyConfig.addTransform('opengraph-unfurl', async function(content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      // Regex to find a standalone URL on its own line in markdown, rendered as HTML
      const regex = /<p>\s*<a\s+href="(https?:\/\/[^\s]+)".*?>.*?<\/a>\s*<\/p>/g;

      // Find all matches first, then process
      const matches = [...content.matchAll(regex)];

      if (matches.length > 0) {
        console.log(`[eleventy-plugin-opengraph-unfurl] Processing unfurls for: ${outputPath}`);
        console.log(`[eleventy-plugin-opengraph-unfurl] Found ${matches.length} links to unfurl.`);
        
        // Process all matches in parallel
        const promises = matches.map(async (match) => {
          const url = match[1];
          const domain = new URL(url).hostname;
          
          if (allowedDomains.includes(normalizeDomain(domain))) {
            const ogData = await getOpenGraphData(url, cacheDirectory);
            return renderOpenGraphUnfurlCard(ogData, url);
          } else {
            console.log(`[eleventy-plugin-opengraph-unfurl] Skipping unfurl for ${url}. Domain not in allowed list.`);
            return match[0]; // Return the original paragraph if the domain is not allowed
          }
        });

        // Wait for all promises to resolve
        const replacements = await Promise.all(promises);

        // Replace all matches in the content
        let i = 0;
        return content.replace(regex, () => replacements[i++]);
      }
    }
    return content;
  });
};