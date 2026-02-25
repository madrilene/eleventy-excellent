export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Johan Edlund';
export const siteDescription = 'Personal site of Johan Edlund';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Johan Edlund', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/avatar.webp', // path to the author's avatar.
  email: 'me@johanedlund.se', // i.e. hola@lenesaile.com - email of the author
  website: 'https://www.johanedlund.se', // i.e. https.://www.lenesaile.com - the personal site of the author
  fediverse: '@pjedlund@mastodon.social' // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
};
export const creator = {
  name: 'Johan Edlund', // i.e. Lene Saile - creator's (developer) name.
  email: 'me@johanedlund.se',
  website: 'https://www.johanedlund.se',
  mastodon: 'https://mastodon.social/@pjedlund',
  x: 'https://x.com/pjedlund'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
//Color Hunt Palette f4f4f2e8e8e8bbbfca495464.png
export const themeColor = '#495464'; // used in manifest, for example primary color value
export const themeLight = '#F4F4F2'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#bbbfca'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: An Eleventy starter with CUBE CSS, Cube CSS, Every Layout, Design Tokens and Tailwind for uitility classes. A workflow for building modern and resilient websites, introduced by Andy Bell's project buildexcellentwebsit.es"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Johan Edlund',
  description: 'Jesus Christ is the truth and the way.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [{
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Articles',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: true,
  subMenu: true
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [{
    docType: 'sustainability-page',
    url: `${url}/sustainability/`,
    domain: domain
  }],
  services: [{ domain: 'netlify.com', serviceType: 'cdn' }]
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/', '/about/', '/articles/', '/styleguide/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub',
  issuesPage: 'Report accessibility issues'
};
export const easteregg = false;
