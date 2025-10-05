import fs from 'fs';
import path from 'path';

// Read our custom cache file when Eleventy starts
const CACHE_PATH = path.join(process.cwd(), '.cache/unfurls.json');
let unfurlDataCache = {};
try {
  const cacheFile = fs.readFileSync(CACHE_PATH, 'utf8');
  unfurlDataCache = JSON.parse(cacheFile);
} catch (error) {
  console.log('[Unfurl Transform] Cache not found. It will be created on the next build.');
}

export default {
  unfurl: (eleventyConfig) => {
    eleventyConfig.addTransform("unfurl", function (content) {
      if (!this.page.inputPath.startsWith('./src/posts/') || !this.page.outputPath.endsWith(".html")) {
        return content;
      }

      const LINK_IN_PARAGRAPH_REGEX = /<p><a href="([^"]+)"[^>]*>[^<]+<\/a><\/p>/g;
      const matches = Array.from(content.matchAll(LINK_IN_PARAGRAPH_REGEX));

      if (matches.length === 0) return content;
      
      const createCard = (data, fallbackUrl) => {
        // Use the ogUrl if it exists, otherwise use the original URL as a fallback.
        const displayUrl = data.ogUrl || fallbackUrl;
        let hostname = '';

        try {
          // Safely create the hostname
          hostname = new URL(displayUrl).hostname;
        } catch (e) {
          console.error(`[Unfurl Transform] Could not parse URL: ${displayUrl}`);
        }

        return `
          <div class="unfurl-card">
            <a href="${displayUrl}" target="_blank" rel="noopener noreferrer">
              ${data.ogImage ? `<img src="${data.ogImage.url}" alt="">` : ''}
              <strong>${data.ogTitle || 'No Title'}</strong>
              <p>${data.ogDescription || ''}</p>
              <small>${hostname}</small>
            </a>
          </div>
        `;
      };

      let processedContent = content;
      for (const match of matches) {
        const [fullMatch, url] = match;
        const allUnfurls = unfurlDataCache; 
        const unfurlData = allUnfurls[url];
        
        if (unfurlData) {
          // Pass the original URL as a fallback
          const cardHtml = createCard(unfurlData, url);
          processedContent = processedContent.replace(fullMatch, cardHtml);
        }
      }
      return processedContent;
    });
  },
};