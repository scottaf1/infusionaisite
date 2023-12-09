import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiPartner {
      partnersList {
        id
        image {
          url
          alternativeText
        }
        aosDelay
      }
    }
  }
`

const Partner = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPartner: { partnersList },
  } = data

  return (
    <>
      <div className="partner-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row align-items-center">
            {partnersList.map(partner => (
              <div
                className="col-lg-2 col-6 col-sm-4 col-md-4"
                key={partner.id}
              >
                <div
                  className="single-partner-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={partner.aosDelay}
                >
                  <img
                    src={partner.image.url}
                    alt={partner.image.alternativeText}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  )
}

export default Partner
