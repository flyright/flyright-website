![alt text](https://github.com/flyright-co/flyright-website/blob/master/src/assets/img/logoS.png 'Flyright Logo')

# Flyright Website

Flyright's website is built with [Gatsby](https://www.gatsbyjs.org/).

## Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/43bb381e-b194-442a-b047-af84c0017af0/deploy-status)](https://app.netlify.com/sites/flyright/deploys)

## Deployment

This site is deployed at https://flyright.co.

The content for this site comes from Contentful. When a new entry is published or unpublished on Contentful, it will trigger an automatic rebuild of the site on Netlify. This also occurs when code is pushed to `master` on Github.

## Usage
** Note - Use `yarn` with this project to avoid dependency resolution issues in Gatsby plugins.

1. `git clone https://github.com/flyright-co/flyright-website.git`
2. `cd flyright-website`
3. `yarn install`
4.  `cp .env.example .env` to create a .env file. Add the secret API keys from Contentful to this file.
5.  `npm run develop` — Gatsby will start a hot-reloading development environment accessible at localhost:8000

## Issues
- Significant dependency resolution issues with the `sharp` package in Gatsby's plugins force `npm install`s to fail. Solution is to use `yarn` and force resolve `sharp@0.22.1`.
References:
  - https://github.com/gatsbyjs/gatsby/issues/19432
  - https://github.com/gatsbyjs/gatsby/issues/13780