import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png" 
import shape from "../../images/shape/circle-shape1.png"

const query = graphql`
  {
    strapiHowItWork {
      subTitle
      title
      shortDescription
      processList {
        id
        image {
          url
          alternativeText
        }
        title
        shortDescription
        number
      }
    }
  }
`

const HowItWork = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiHowItWork: { subTitle, title, shortDescription, processList },
  } = data

  return (
    <>
      <section className="process-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          <div className="row justify-content-center">
            {processList.map(process => (
              <div className="col-lg-4 col-md-6" key={process.id}>
                <div className="single-process-box">
                  <div className="number">{process.number}</div>
                  <div className="image">
                    <img
                      src={process.image.url}
                      alt={process.image.alternativeText}
                    />
                  </div>
                  <h3>{process.title}</h3>
                  <p>{process.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape} alt="about" />
        </div>
      </section>
    </>
  )
}

export default HowItWork
