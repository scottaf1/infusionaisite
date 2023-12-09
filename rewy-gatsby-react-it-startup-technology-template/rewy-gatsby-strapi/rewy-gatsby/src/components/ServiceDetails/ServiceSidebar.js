import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allStrapiService(sort: { strapi_id: DESC }) {
      nodes {
        id
        title
        slug
      }
    }

    strapiServiceSidebarContactInfo {
      heading
      contactInfoList {
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
`

const ServiceSidebar = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiService: { nodes: services },
    strapiServiceSidebarContactInfo: { heading, contactInfoList },
  } = data

  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          {services.slice(0, 5).map(service => (
            <li key={service.id}>
              <Link to={`/services/${service.slug}`}>{service.title}</Link>
            </li>
          ))}
        </ul>

        <div className="services-contact-info">
          <h3>{heading}</h3>

          <ul>
            {contactInfoList.map(contactInfo => (
              <li key={contactInfo.id}>
                <div className="icon">
                  <i className={contactInfo.iconName}></i>
                </div>
                <ReactMarkdown>
                  {contactInfo.content.data.content}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar
