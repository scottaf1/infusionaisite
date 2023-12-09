import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiBanner {
      title
      shortDescription
      btnText
      btnLink
      image {
        url
      }
    }
  }
`

const Banner = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiBanner: { title, shortDescription, btnText, btnLink, image },
  } = data

  return (
    <>
      <div className="it-services-banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {title}
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {shortDescription}
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to={btnLink} className="default-btn">
                    <i className="flaticon-right"></i>
                    {btnText} <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={image[0].url} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
