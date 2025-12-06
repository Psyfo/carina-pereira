/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://carinapereira.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'yearly',
  exclude: ['/admin/**', '/api/**', '/404', '/500'],
};
