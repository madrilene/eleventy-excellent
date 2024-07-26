export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Eleventy Excellent';
export const siteDescription = 'Eleventy starter for building modern, resilient websites';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Jean Ducrot', // blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'jean@jeanducrot.com', // i.e. hola@lenesaile.com - email of the author
  website: 'https://www.jeanducrot.com' // i.e. https.://www.lenesaile.com - the personal site of the author
};
export const creator = {
  name: 'Lene Saile', // template creator's (developer) name.
  email: 'hola@lenesaile.com',
  website: 'https://www.lenesaile.com',
  social: 'https://front-end.social/@lene'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#DD4462'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#FBFBFB'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: An Eleventy starter with CUBE CSS, Cube CSS, Every Layout, Design Tokens and Tailwind for uitility classes. A workflow for building modern and resilient websites, introduced by Andy Bell's project buildexcellentwebsit.es"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Jean Ducrot\'s Blog',
  description: 'Jean Ducrot\'s take on digital accessiblity, tech. life, and other randomness.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
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
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'netlify.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
