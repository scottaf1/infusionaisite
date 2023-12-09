/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blogs: allStrapiBlog {
        nodes {
          slug
        }
      }

      categories: allStrapiCategorie {
        nodes {
          slug
        }
      }

      tags: allStrapiTag {
        nodes {
          slug
        }
      }

      services: allStrapiService {
        nodes {
          slug
        }
      }

      projects: allStrapiProject {
        nodes {
          slug
        }
      }

    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })

  result.data.categories.nodes.forEach(categorie => {
    createPage({
      path: `/categories/${categorie.slug}`,
      component: path.resolve(`./src/templates/categorie-template.js`),
      context: {
        slug: categorie.slug,
      },
    })
  })

  result.data.tags.nodes.forEach(tag => {
    createPage({
      path: `/tags/${tag.slug}`,
      component: path.resolve(`./src/templates/tag-template.js`),
      context: {
        slug: tag.slug,
      },
    })
  })

  result.data.services.nodes.forEach(service => {
    createPage({
      path: `/services/${service.slug}`,
      component: path.resolve(`./src/templates/service-template.js`),
      context: {
        slug: service.slug,
      },
    })
  })

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
