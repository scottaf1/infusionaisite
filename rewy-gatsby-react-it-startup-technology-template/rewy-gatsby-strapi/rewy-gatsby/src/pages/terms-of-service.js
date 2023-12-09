import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    strapiTermsOfService {
      termsOfServiceContent {
        data {
          termsOfServiceContent
        }
      }
    }
  }
`

const TermsOfServicePage = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTermsOfService: { termsOfServiceContent },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Terms of Service"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Terms of Service"
      />

      <section className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="terms-of-service-content">
                <ReactMarkdown>
                  {termsOfServiceContent.data.termsOfServiceContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Terms Of Service" />

export default TermsOfServicePage
