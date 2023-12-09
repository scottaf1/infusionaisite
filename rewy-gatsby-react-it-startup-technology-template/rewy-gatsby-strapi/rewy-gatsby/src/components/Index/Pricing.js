import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiPricing {
      subTitle
      title
      shortDescription
      tableTitle
      basicPlanTitle
      basicPlanPrice
      basicPlanDuration
      basicPlanBtnText
      basicPlanBtnLink
      advancedPlanTitle
      advancedPlanPrice
      advancedPlanDuration
      advancedPlanBtnText
      advancedPlanBtnLink
      expertPlanTitle
      expertPlanPrice
      expertPlanDuration
      expertPlanBtnText
      expertPlanBtnLink
      featuresList {
        id
        title
        iconOne
        iconTwo
        iconThree
      }
    }
  }
`

const Pricing = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPricing: {
      subTitle,
      title,
      shortDescription,
      tableTitle,
      basicPlanTitle,
      basicPlanPrice,
      basicPlanDuration,
      basicPlanBtnText,
      basicPlanBtnLink,
      advancedPlanTitle,
      advancedPlanPrice,
      advancedPlanDuration,
      advancedPlanBtnText,
      advancedPlanBtnLink,
      expertPlanTitle,
      expertPlanPrice,
      expertPlanDuration,
      expertPlanBtnText,
      expertPlanBtnLink,
      featuresList,
    },
  } = data

  return (
    <>
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span className="title">{tableTitle}</span>
                  </th>
                  <th>
                    <span className="price">{basicPlanPrice}</span>
                    <span className="title">{basicPlanTitle}</span>
                    <span className="desc">{basicPlanDuration}</span>
                  </th>
                  <th>
                    <span className="price">{advancedPlanPrice}</span>
                    <span className="title">{advancedPlanTitle}</span>
                    <span className="desc">{advancedPlanDuration}</span>
                  </th>
                  <th>
                    <span className="price">{expertPlanPrice}</span>
                    <span className="title">{expertPlanTitle}</span>
                    <span className="desc">{expertPlanDuration}</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {featuresList.map(feature => (
                  <tr key={feature.id}>
                    <td>{feature.title}</td>
                    <td className="item-check">
                      <i className={feature.iconOne}></i>
                    </td>
                    <td className="item-check">
                      <i className={feature.iconTwo}></i>
                    </td>
                    <td className="item-check">
                      <i className={feature.iconThree}></i>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td></td>
                  <td>
                    <Link to={basicPlanBtnLink} className="select-btn">
                      {basicPlanBtnText}
                    </Link>
                  </td>
                  <td>
                    <Link to={advancedPlanBtnLink} className="select-btn">
                      {advancedPlanBtnText}
                    </Link>
                  </td>
                  <td>
                    <Link to={expertPlanBtnLink} className="select-btn">
                      {expertPlanBtnText}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
