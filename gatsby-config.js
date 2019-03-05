require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Flyright',
    author: 'Flyright, Inc.',
    siteUrl: 'https://flyright.co',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: process.env.CONTENTFUL_HOST || `cdn.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Flyright',
        short_name: 'Flyright',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#020836',
        display: 'standalone',
        icon: 'src/assets/img/logoL.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
