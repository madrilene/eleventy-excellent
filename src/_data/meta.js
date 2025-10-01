export const url = process.env.URL || 'https://fudge.org';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Fudge Factor 🤔💡🤯🤓';
export const siteDescription = 'Fudge Factor is a newsletter and blog by Jay Cuthrell';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Jay Cuthrell', 
  avatar: '/icon-512x512.png', 
  email: 'jay@cuthrell.com', 
  website: 'https://jaycuthrell.com', 
  fediverse: '@jay@cuthrell.com'
};
export const creator = {
  name: 'Jay Cuthrell', 
  email: 'jay@cuthrell.com',
  website: 'https://jaycuthrell.com',
  social: 'https://cuthrell.com/@jay'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: Fudge Factor is the on again off again blog and steady running newsletter by Jay Cuthrell published at fudge.org"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Fudge Factor is the newsletter and blog of Jay Cuthrell',
  description: 'Fudge Factor is the newsletter and blog of Jay Cuthrell',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'RSS Feed',
      url: '/rss.xml',
      type: 'application/rss+xml'
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
  paginationLabel: 'Blog',
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
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const viewSponsor = {
  allow: true,
  name: 'NexusTek',
  infoText: 'Thanks to NexusTek for sponsoring the free version of this newsletter post 🤓',
  url: 'https://nexustek.com?utm_campaign=Blog%20Promotion&utm_source=email&utm_medium=newsletter&utm_term=nexustek&utm_content=jaycuthrell',
  logo: '/assets/images/sponsors/nexustek.jpg'
};
export const easteregg = false;
