import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiOurFeature {
      subTitle
      title
      shortDescription
      featuresList {
        id
        icon {
          url
        }
        title
        shortDescription
      }
    }
  }
`

const OurFeatures = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiOurFeature: { subTitle, title, shortDescription, featuresList },
  } = data

  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          {featuresList && (
            <div className="row justify-content-center">
              {featuresList.map(feature => (
                <div className="col-lg-4 col-sm-6" key={feature.id}>
                  <div className="single-services-item-box">
                    <div className="icon">
                      <img
                        src={feature.icon.url}
                        alt={feature.icon.alternativeText}
                      />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default OurFeatures
