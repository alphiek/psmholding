module.exports = {
  siteMetadata: {
    title: `Paphos Stone Masons - Decorative Stonework and Landscape Masonry`,
    description: `Specialists for Traditional Decorative Stonework, Landscape Masonry and Stone Paving in Paphos. Have a project? Contact us +357 955 337 25`,
    siteUrl: `https://www.paphosstonemasons.com`,
    facebook: 'https://www.facebook.com/paphosstonemasons/',
    twitter: 'https://twitter.com/paphosstonemas1/',
    insta: 'https://www.instagram.com/paphosstone/',
    handle: `@paphosstonemas1`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.paphosstonemasons.com',
        sitemap: 'https://www.paphosstonemasons.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'paphosstonemasons.com',
      },
    },
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.paphosstonemasons.com`,
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paphos Stone Masons`,
        short_name: `PSM`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/faviconIcon.png`, // This path is relative to the root of the site.
      },
    },
   `gatsby-plugin-offline`,
  ],
}
