import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

import { graphql } from "gatsby"
import { Link } from "gatsby"

const CategoriePage = ({ data }) => {
  const { title, blogs } = data.categorie

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={title}
        homePageText="Categories"
        homePageUrl="/blog/categories"
        activePageText={title}
      />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {blogs.length > 0 ? (
              blogs.map(blog => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="single-blog-post bg-fffbf5">
                    <div className="post-image">
                      <Link to={`/blogs/${blog.slug}`}>
                        <img
                          src={blog.image.url}
                          alt={blog.image.alternativeText}
                        />
                      </Link>
                    </div>

                    <div className="post-content">
                      <ul className="post-meta d-flex justify-content-between align-items-center">
                        <li>
                          <div className="post-author d-flex align-items-center">
                            <img
                              src={blog.authorImage.url}
                              className="rounded-circle"
                              alt={blog.authorImage.alternativeText}
                            />
                            <span>{blog.authorName}</span>
                          </div>
                        </li>
                        <li>
                          <i className="flaticon-calendar"></i> {blog.date}
                        </li>
                      </ul>
                      <h3>
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p className="fs-5 text-center mb-4">
                  Not Available Post! Go to <Link to="/blog">Blog</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($slug: String) {
    categorie: strapiCategorie(slug: { eq: $slug }) {
      title
      blogs {
        id
        title
        image {
          url
          alternativeText
        }
        title
        slug
        date
        authorImage {
          url
          alternativeText
        }
        authorName
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Categories" />

export default CategoriePage
