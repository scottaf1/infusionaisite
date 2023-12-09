import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    strapiContactInfo {
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

const ContactInfo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiContactInfo: { contactInfoList },
  } = data

  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {contactInfoList.map(contactInfo => (
              <div className="col-lg-4 col-md-6" key={contactInfo.id}>
                <div className="contact-info-box">
                  <div className="back-icon">
                    <i className={contactInfo.iconName}></i>
                  </div>
                  <div className="icon">
                    <i className={contactInfo.iconName}></i>
                  </div>
                  <ReactMarkdown>
                    {contactInfo.content.data.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
