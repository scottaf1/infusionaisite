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
    strapiPrivacyPolicy {
      PrivacyPolicyContent {
        data {
          PrivacyPolicyContent
        }
      }
    }
  }
`

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPrivacyPolicy: { PrivacyPolicyContent },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <ReactMarkdown>
                  {PrivacyPolicyContent.data.PrivacyPolicyContent}
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
export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
