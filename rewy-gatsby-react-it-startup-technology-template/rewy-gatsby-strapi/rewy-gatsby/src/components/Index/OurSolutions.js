import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiOurSolutionsSectionTitle {
      subTitle
      title
      shortDescription
    }

    allStrapiService(sort: { strapi_id: DESC }) {
      nodes {
        id
        icon {
          url
          alternativeText
        }
        title
        slug
        shortDescription
        detailsContent {
          data {
            detailsContent
          }
        }
      }
    }
  }
`

const OurSolutions = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiService: { nodes: services },
    strapiOurSolutionsSectionTitle: { subTitle, title, shortDescription },
  } = data

  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.slice(0, 3).map(service => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={service.id}>
                  <div className="single-solutions-box">
                    <div className="icon">
                      <img
                        src={service.icon.url}
                        alt={service.icon.alternativeText}
                      />
                    </div>
                    <h3>
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p>{service.shortDescription}</p>

                    <Link
                      className="view-details-btn"
                      to={`/services/${service.slug}`}
                    >
                      View Details
                    </Link>
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

export default OurSolutions
