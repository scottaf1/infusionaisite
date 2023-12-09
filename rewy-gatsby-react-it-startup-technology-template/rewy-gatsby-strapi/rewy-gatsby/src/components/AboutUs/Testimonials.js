import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"
import shape from "../../images/shape/shape1.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

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
      btnText
      btnLink
    }
  }
`

const Testimonials = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTestimonial: {
      subTitle,
      title,
      shortDescription,
      testimonial,
      btnText,
      btnLink,
    },
  } = data

  return (
    <>
      <div className="testimonials-area bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            {testimonial.map(feedback => (
              <SwiperSlide key={feedback.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-view-btn text-center">
            <Link to={btnLink} className="default-btn">
              <i className="flaticon-view"></i>
              {btnText} <span></span>
            </Link>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="testimonial" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
