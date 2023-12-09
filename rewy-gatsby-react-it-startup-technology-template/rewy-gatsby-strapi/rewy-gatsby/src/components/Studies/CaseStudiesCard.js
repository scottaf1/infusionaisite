import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProject(sort: { strapi_id: DESC }) {
      nodes {
        id
        image {
          url
          alternativeText
        }
        title
        slug
        subTitle
        projectDetails {
          data {
            projectDetails
          }
        }
        projectInfo {
          id
          iconName
          content {
            data {
              content
            }
          }
        }
      }
    }
  }
`

const CaseStudiesCard = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <div className="projects-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {projects.map(project => (
              <div className="col-lg-6 col-md-6" key={project.id}>
                <div className="single-projects-box">
                  <div className="image">
                    <img
                      src={project.image.url}
                      alt={project.image.alternativeText}
                    />

                    <Link className="link-btn" to={`/projects/${project.slug}`}>
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>

                  <div className="content">
                    <h3>
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <span>{project.subTitle}</span>
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

export default CaseStudiesCard
