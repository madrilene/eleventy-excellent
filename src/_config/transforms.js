// src/_config/transforms.js
export default {
  unfurl: (eleventyConfig) => {
    eleventyConfig.addTransform("unfurl", async function (content) {
      if (!this.page.inputPath.startsWith('./src/posts/')) {
        return content;
      }
      if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
        return content;
      }

      const LINK_IN_PARAGRAPH_REGEX = /<p><a href="(.+?)">\1<\/a><\/p>/g;

      const createCard = (data) => {
        return `
        <div class="unfurl-card">
          <a href="${data.ogUrl}" target="_blank" rel="noopener noreferrer">
            ${data.ogImage ? `<img src="${data.ogImage.url}" alt="">` : ''}
            <strong>${data.ogTitle || 'No Title'}</strong>
            <p>${data.ogDescription || ''}</p>
            <small>${new URL(data.ogUrl).hostname}</small>
          </a>
        </div>
        `;
      };

      let processedContent = content;
      const matches = Array.from(content.matchAll(LINK_IN_PARAGRAPH_REGEX));

      for (const match of matches) {
        const [fullMatch, url] = match;
        const allUnfurls = this.ctx.unfurls;
        const unfurlData = allUnfurls[url];

        if (unfurlData) {
          const cardHtml = createCard(unfurlData);
          processedContent = processedContent.replace(fullMatch, cardHtml);
        }
      }
      return processedContent;
    });
  },
};