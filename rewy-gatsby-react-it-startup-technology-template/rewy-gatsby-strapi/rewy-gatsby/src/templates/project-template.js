import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const ProjectDetailsPage = ({ data }) => {
  const { title, image, projectDetails, projectInfo } = data.project

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />

      <section className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="case-studies-details-image">
                <img src={image.url} alt={image.alternativeText} />
              </div>
              <div className="case-studies-details-desc">
                <ReactMarkdown>
                  {projectDetails.data.projectDetails}
                </ReactMarkdown>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="case-studies-sidebar-sticky">
                <div className="case-studies-details-info">
                  <ul>
                    {projectInfo.map(info => (
                      <li key={info.id}>
                        <div className="icon">
                          <i className={info.iconName}></i>
                        </div>

                        <ReactMarkdown>
                          {info.content.data.content}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProject(slug: { eq: $slug }) {
      title
      image {
        url
        alternativeText
      }
      projectDetails {
        data {
          projectDetails
        }
      }
      projectInfo {
        id
        iconName
        content {
          data {
            content
          }
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Project Details" />

export default ProjectDetailsPage
