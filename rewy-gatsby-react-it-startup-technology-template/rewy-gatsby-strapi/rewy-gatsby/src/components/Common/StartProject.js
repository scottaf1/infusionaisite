import React from "react"
import { Link } from "gatsby"

import shape9 from "../../images/shape/vector-shape9.png"
import shape10 from "../../images/shape/vector-shape10.png"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiStartYourProject {
      image {
        url
        alternativeText
      }
      title
      shortDescription
      btnText
      btnLink
    }
  }
`

const StartProject = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiStartYourProject: {
      image,
      title,
      shortDescription,
      btnText,
      btnLink,
    },
  } = data

  return (
    <>
      <div className="project-start-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <img src={image.url} alt={image.url.alternativeText} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>{title}</h2>
                <p>{shortDescription}</p>

                <Link to={btnLink} className="default-btn">
                  <i className="flaticon-web"></i>
                  {btnText}
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape9">
          <img src={shape9} alt="about" />
        </div>
        <div className="vector-shape10">
          <img src={shape10} alt="about" />
        </div>
      </div>
    </>
  )
}

export default StartProject
