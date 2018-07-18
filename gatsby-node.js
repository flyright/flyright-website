const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const console = require(`console`)

const processBlogPosts = ({ graphql, boundActionCreators }) => {
  const { createLayout, createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlogPost {
            edges {
              node {
                id
                contentful_id
                title
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      _.each(
        _.groupBy(
          result.data.allContentfulBlogPost.edges,
          'node.contentful_id'
        ),
        (edges, contentfulId) => {
          _.each(edges, edge => {
            const pageTemplate = path.resolve(`src/templates/blog-post.js`)
            const layout = path.resolve(`src/layouts/index.js`)
            const layoutId = `layout-${edge.node.id}`

            createLayout({
              component: slash(layout),
              id: layoutId,
              context: {
                title: edge.node.title,
                slug: edge.node.slug,
              },
            })

            createPage({
              path: `/${edge.node.slug}`,
              component: slash(pageTemplate),
              context: {
                id: edge.node.id,
                contentfulId: edge.node.contentful_id,
                title: edge.node.title,
                slug: edge.node.slug,
                content: edge.node.content,
              },
              layout: layoutId,
            })
          })
        }
      )
      resolve()
    })
  })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  Promise.all([processBlogPosts({ graphql, boundActionCreators })])
}
