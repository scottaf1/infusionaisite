import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiServicesOne {
      subTitle
      title
      shortDescription
      serviceImage {
        url
        alternativeText
      }
      servicesList {
        id
        text
      }
    }

    strapiServicesTwo {
      subTitle
      title
      shortDescription
      serviceImage {
        url
        alternativeText
      }
      servicesList {
        id
        text
      }
    }
  }
`

const OurServices = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const { strapiServicesOne, strapiServicesTwo } = data

  return (
    <>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img
                  src={strapiServicesOne.serviceImage.url}
                  alt={strapiServicesOne.serviceImage.alternativeText}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="starIcon" />{" "}
                    {strapiServicesOne.subTitle}
                  </span>

                  <h2>{strapiServicesOne.title}</h2>
                  <p>{strapiServicesOne.shortDescription}</p>

                  {strapiServicesOne && (
                    <ul className="about-list mb-0">
                      {strapiServicesOne.servicesList.map(service => (
                        <li key={service.id}>
                          <i className="flaticon-tick"></i>
                          {service.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="starIcon" />{" "}
                    {strapiServicesTwo.subTitle}
                  </span>

                  <h2>{strapiServicesTwo.title}</h2>
                  <p>{strapiServicesTwo.shortDescription}</p>

                  {strapiServicesTwo && (
                    <ul className="our-mission-list mb-0">
                      {strapiServicesTwo.servicesList.map(service => (
                        <li key={service.id}>
                          <i className="flaticon-tick"></i>
                          {service.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img
                  src={strapiServicesTwo.serviceImage.url}
                  alt={strapiServicesTwo.serviceImage.alternativeText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
    </>
  )
}

export default OurServices
