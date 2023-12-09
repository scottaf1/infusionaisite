import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/_App/Footer"

import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiCategorie(sort: { strapi_id: DESC }) {
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

const CategoriesPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    allStrapiCategorie: { nodes: categories },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Categories"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Categories"
      />

      {categories && (
        <div className="pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              {categories.map(categorie => (
                <div className="col-lg-4" key={categorie.id}>
                  <Link
                    to={`/categories/${categorie.slug}`}
                    className="categorie-card mb-4"
                  >
                    <h3>{categorie.title}</h3>

                    <p>({categorie.blogs && categorie.blogs.length}) Post</p>
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
export const Head = () => <Seo title="categories" />

export default CategoriesPage
