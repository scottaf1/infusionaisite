import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

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

const TestimonialsStyleOne = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTestimonial: { subTitle, title, shortDescription, testimonial },
  } = data

  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
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
                <div className="single-testimonials-item">
                  <p>{feedback.feedbackText}</p>

                  <div className="client-info">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={feedback.image.url}
                        alt={feedback.image.alternativeText}
                      />
                      <div className="title">
                        <h3>{feedback.name}</h3>
                        <span>{feedback.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleOne
