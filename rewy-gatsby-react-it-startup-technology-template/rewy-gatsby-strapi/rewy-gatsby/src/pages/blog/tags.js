import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/_App/Footer"

import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiTag(sort: { strapi_id: DESC }) {
      nodes {
        id
        title
        slug
        blogs {
          id
        }
      }
    }
  }
`

const TagsPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    allStrapiTag: { nodes: tags },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Tags"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Tags"
      />

      {tags && (
        <div className="pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              {tags.map(tag => (
                <div className="col-lg-4" key={tag.id}>
                  <Link
                    to={`/tags/${tag.slug}`}
                    className="categorie-card mb-4"
                  >
                    <h3>{tag.title}</h3>

                    <p>({tag.blogs && tag.blogs.length}) Post</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Tags" />

export default TagsPage
