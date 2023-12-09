import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png" 

const query = graphql`
  {
    strapiWhyChooseUs {
      subTtile
      title
      shortDescription
      image {
        url
        alternativeText
      }
      reasonList {
        id
        number
        title
        shortDescription
      }
    }
  }
`

const WhyChooseUs = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiWhyChooseUs: { subTtile, title, shortDescription, image, reasonList },
  } = data

  return (
    <>
      <section className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <img src={starIcon} alt="starIcon" />
                  {subTtile}
                </span>

                <h2>{title}</h2>
                <p>{shortDescription}</p>

                <div className="inner-box">
                  {reasonList.map(reason => (
                    <div className="single-item" key={reason.id}>
                      <div className="count-box">{reason.number}</div>
                      <h3>{reason.title}</h3>
                      <p>{reason.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <img src={image.url} alt={image.alternativeText} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
