const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Eleventy Excellent',
  siteDescription:
    "Eleventy starter based on the workflow suggested by Andy Bell's https://buildexcellentwebsit.es/.",
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Author name',
  authorEmail: 'hola@authormail.com',
  authorWebsite: 'https://www.authorsite.com',
  meta_data: {
    twitterSite: '@twitterorg',
    twitterCreator: '@twitterauthor',
    opengraph_default: '/assets/images/opengraph-default.jpg'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    firma: 'Organization name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'hola@yoursite.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
