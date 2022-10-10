module.exports = {
  siteName: 'Lene Saile',
  siteDescription:
    'Frontend developer based in Madrid. I enjoy working with Jamstack, vanilla Javascript and modern CSS. I do my very best to improve in terms of accessibility and performance. ',
  siteType: 'Person', // schema
  siteURL: 'https://www.lene.dev',
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Lene Saile',
  authorEmail: 'hola@lenesaile.com',
  authorWebsite: 'https://www.lenesaile.com',
  meta_data: {
    twitterSite: '@lenesaile',
    twitterCreator: '@lenesaile',
    opengraph_default: '/_assets/images/opengraph-default.jpg'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    firma: 'Lene Saile',
    street: 'c/ Humilladero 25, 2C',
    city: 'Madrid',
    state: 'Madrid',
    zip: '28005',
    mobileDisplay: '+34 644 959496',
    mobileCall: ' +34644959496',
    email: 'hola@lenesaile.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  },
  env: process.env.ELEVENTY_ENV === 'production'
};
