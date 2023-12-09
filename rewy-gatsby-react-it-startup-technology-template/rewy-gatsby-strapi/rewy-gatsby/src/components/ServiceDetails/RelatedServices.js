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

const RelatedServices = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiService: { nodes: services },
  } = data

  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <h2>More Services You Might Like</h2>
          </div>

          <div className="row">
            {services.slice(0, 3).map(service => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={service.id}>
                <div className="single-services-box ">
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
                    to={`/services/${service.slug}`}
                    className="read-more-btn"
                  >
                    Read More <i className="flaticon-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default RelatedServices
