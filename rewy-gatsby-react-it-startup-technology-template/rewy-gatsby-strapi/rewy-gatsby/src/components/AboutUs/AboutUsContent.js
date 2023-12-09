import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"
import shape1 from "../../images/shape/circle-shape1.png"

const query = graphql`
  {
    strapiAboutUs {
      aboutImg {
        url
        alternativeText
      }
      subTitle
      title
      shortDescription
      featuresList {
        id
        icon {
          url
          alternativeText
        }
        title
        shortText
      }
      aboutHistoryList {
        id
        title
        shortDescription
        goalList {
          id
          text
        }
      }
    }
  }
`

const AboutUsContent = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiAboutUs: {
      aboutImg,
      subTitle,
      title,
      shortDescription,
      featuresList,
      aboutHistoryList,
    },
  } = data

  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={aboutImg.url} alt={aboutImg.alternativeText} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    {subTitle}
                  </span>
                  <h2>{title}</h2>
                  <p>{shortDescription}</p>

                  {featuresList && (
                    <ul className="features-list">
                      {featuresList.map(feature => (
                        <li key={feature.id}>
                          <img
                            src={feature.icon.url}
                            alt={feature.icon.alternativeText}
                          />
                          <h3>{feature.title}</h3>
                          <p>{feature.shortText}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
        
        {aboutHistoryList && (
          <div className="container">
            <div className="about-inner-area">
              <div className="row justify-content-center">
                {aboutHistoryList.map(history => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={history.id}>
                    <div className="about-text">
                      <h3>{history.title}</h3>
                      <p>{history.shortDescription}</p>

                      <ul className="features-list">
                        {history.goalList.map(goal => (
                          <li key={goal.id}>
                            <i className="flaticon-tick"></i> {goal.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default AboutUsContent
