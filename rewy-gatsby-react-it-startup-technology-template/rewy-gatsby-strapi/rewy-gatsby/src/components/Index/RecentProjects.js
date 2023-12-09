import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

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

const RecentProjects = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <section className="projects-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="project" /> Recent Projects
            </span>
            <h2>Check Some Of Our Recent Work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          {projects && (
            <div className="row justify-content-center">
              {projects.slice(0, 6).map(project => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="single-projects-box">
                    <div className="image">
                      <img
                        src={project.image.url}
                        alt={project.image.alternativeText}
                      />

                      <Link
                        className="link-btn"
                        to={`/projects/${project.slug}`}
                      >
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
          )}
        </div>
      </section>
    </>
  )
}

export default RecentProjects
