![alt text](https://github.com/tyhopp/flyright-website/raw/master/src/assets/img/icon-circle-sm.png 'Flyright Logo')

# Flyright Website

Flyright's website is built with [Gatsby, a static site generator for React](https://www.gatsbyjs.org/). This codebase is separate from the [Flyright Webapp](https://github.com/tyhopp/flyright-webapp), which is written in just React.

## Deployment

This site is deployed via Netlify at https://flyright.netlify.com. The production site will later be deployed at https://flyright.co.

The content for this site comes from Contentful. When a new entry is published or unpublished on Contentful, it will trigger an automatic rebuild of the site on Netlify. This also occurs when code is pushed to `master` on Github.

## Usage

1.  `git clone https://github.com/tyhopp/flyright-website`
2.  `cd flyright-website`
3.  `cp .env.example .env` to create a .env file. Add the secret API keys from Contentful to this file.
4.  `npm run develop` — Gatsby will start a hot-reloading development environment accessible at localhost:8000
