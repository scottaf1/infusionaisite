import React from "react"
import { Link } from "gatsby"
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
      shapeImage {
        url
        alternativeText
      }
    }
  }
`

const ProjectStartArea = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiStartYourProject: {
      image,
      title,
      shortDescription,
      btnText,
      btnLink,
      shapeImage,
    },
  } = data

  return (
    <>
      <div className="project-start-area ptb-100">
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

        <div className="circle-shape1">
          <img src={shapeImage.url} alt={shapeImage.alternativeText} />
        </div>
      </div>
    </>
  )
}

export default ProjectStartArea
