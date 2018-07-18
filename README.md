![alt text](https://github.com/tyhopp/flyright-website/raw/master/src/assets/img/icon-circle-sm.png 'Flyright Logo')

# Flyright Website

Flyright's website is built with [Gatsby, a static site generator for React](https://www.gatsbyjs.org/). This codebase is separate from the [Flyright Webapp](https://github.com/tyhopp/flyright-webapp), which is written in just React.

## Note on Gatsby

Building on Gatsby will allow us to add a CMS such as [Contentful](https://www.contentful.com/) in the future so that non-developer team members can manage the site independently. Using React as base, [Styled Components](https://www.styled-components.com/) for reusable components, and [GraphQL](https://graphql.org/) to query data, this allows the website to be very extensible for future expansion of the website.

## Usage

1.  `git clone https://github.com/tyhopp/flyright-website`
2.  `cd flyright-website`

    | If you have `npm@5.2.0` or higher, you can use `npx gatsby [command]`

    | Otherwise, install the custom CLI tool with `npm install --global gatsby-cli`

3.  `gatsby develop` — Gatsby will start a hot-reloading development environment accessible at localhost:8000
4.  `gatsby build` — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
5.  `gatsby serve` — Gatsby starts a local HTML server for testing your built site.
