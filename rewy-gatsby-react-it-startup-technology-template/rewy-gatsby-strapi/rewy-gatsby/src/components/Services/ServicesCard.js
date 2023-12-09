import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
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

const ServicesCard = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiService: { nodes: services },
  } = data

  return (
    <>
      {services && (
        <section className="solutions-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              {services.map(service => (
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
          </div>
        </section>
      )}
    </>
  )
}

export default ServicesCard
