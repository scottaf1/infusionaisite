/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "blog",
      queryParams: {
        populate: {
          image: "*",
          authorImage: "*",

          detailsContent: {
            populate: "*",
          },

          category: "*",
          tags: "*",
        },
      },
    },
    {
      singularName: "categorie",
      queryParams: {
        populate: {
          blogs: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "tag",
      queryParams: {
        populate: {
          blogs: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "service",
      queryParams: {
        populate: {
          icon: "*",

          detailsContent: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "project",
      queryParams: {
        populate: {
          image: "*",

          projectDetails: {
            populate: "*",
          },
          projectInfo: {
            populate: "*",
          },
        },
      },
    },
  ],

  singleTypes: [
    "site-logo",
    "banner",
    "services-one",
    "services-two",
    {
      singularName: "our-feature",
      queryParams: {
        populate: {
          featuresList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "team-member",
      queryParams: {
        populate: {
          teamMember: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "testimonial",
      queryParams: {
        populate: {
          testimonial: {
            populate: "*",
          },
        },
      },
    },
    "pricing",
    {
      singularName: "partner",
      queryParams: {
        populate: {
          partnersList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "about-us",
      queryParams: {
        populate: {
          aboutImg: "*",
 
          featuresList: {
            populate: "*",
          },
          aboutHistoryList: {
            populate: "*",
          },
        },
      },
    },
    "start-your-project",
    "faq",
    {
      singularName: "our-history",
      queryParams: {
        populate: {
          historyList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "why-choose-us",
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          
          reasonList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "how-it-work",
      queryParams: {
        populate: {
          processList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "team-member-2",
      queryParams: {
        populate: {
          memberList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "contact-info",
      queryParams: {
        populate: {
          contactInfoList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "gallery",
      queryParams: {
        populate: {
          imageList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "service-sidebar-contact-info",
      queryParams: {
        populate: {
          contactInfoList: {
            populate: "*",
          },
        },
      },
    },
    "our-solutions-section-title",
    "terms-of-service",
    "privacy-policy",
  ],

  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "http://127.0.0.1:8000",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
}

module.exports = {
  siteMetadata: {
    title: `Rewy - Gatsby React IT Startup & Technology Template`,
    description: `Gatsby React IT Startup & Technology Template`,
    author: `@envytheme`,
    siteUrl: `https://rewy-gatsby.envytheme.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
