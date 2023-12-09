import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiOurHistory {
      subTitle
      title
      historyList {
        id
        year
        date
        title
        shortDescription {
          data {
            shortDescription
          }
        }
        image {
          url
          alternativeText
        }
      }
    }
  }
`

const OurHistoryContentOne = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiOurHistory: { subTitle, title, historyList },
  } = data

  return (
    <>
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              {subTitle}
            </span>
            <h2>{title}</h2>
          </div>

          <ol className="timeline history-timeline">
            {historyList.map(history => (
              <li className="timeline-block" key={history.id}>
                <div className="timeline-date">
                  <span>{history.year}</span>
                  {history.date}
                  <sup>th</sup>
                </div>

                <div className="timeline-icon">
                  <span className="dot-badge"></span>
                </div>

                <div className="timeline-content">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                      <div className="content">
                        <h3>{history.title}</h3>
                        <ReactMarkdown>
                          {history.shortDescription.data.shortDescription}
                        </ReactMarkdown>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                      <div className="image">
                        <img
                          src={history.image.url}
                          alt={history.image.alternativeText}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default OurHistoryContentOne
