import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"
import shape from "../../images/shape/shape1.svg"

const query = graphql`
  {
    strapiTestimonial {
      subTitle
      title
      shortDescription
      testimonial {
        id
        image {
          url
          alternativeText
        }
        name
        designation
        feedbackText
      }
    }
  }
`

const TestimonialsStyleTwo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTestimonial: { subTitle, title, shortDescription, testimonial },
  } = data

  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          <div className="row justify-content-center">
            {testimonial.map(feedback => (
              <div className="col-lg-6 col-md-6" key={feedback.id}>
                <div className="single-testimonials-box">
                  <img
                    src={feedback.image.url}
                    alt={feedback.image.alternativeText}
                  />

                  <p>{feedback.feedbackText}</p>

                  <div className="client-info">
                    <h3>{feedback.name}</h3>
                    <span>{feedback.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="about" />
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleTwo
