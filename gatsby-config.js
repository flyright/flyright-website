require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Flyright',
    author: 'Ty Hopp',
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
  ],
}
