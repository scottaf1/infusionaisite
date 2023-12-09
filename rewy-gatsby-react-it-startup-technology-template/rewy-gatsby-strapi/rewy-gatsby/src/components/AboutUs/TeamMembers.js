import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiTeamMember2 {
      subTitle
      title
      shortDescription
      memberList {
        id
        image {
          url
          alternativeText
        }
        name
        designation
        socialLinks {
          id
          iconName
          link
        }
      }
    }
  }
`

const TeamMembers = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeamMember2: { subTitle, title, shortDescription, memberList },
  } = data

  return (
    <>
      <section className="scientist-area bg-color pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          <div className="row">
            {memberList.slice(0, 4).map(team => (
              <div className="col-lg-3 col-sm-6 col-md-6" key={team.id}>
                <div className="single-scientist-box">
                  <div className="image">
                    <img
                      src={team.image.url}
                      alt={team.image.alternativeText}
                    />
                  </div>
                  <div className="content">
                    <h3>{team.name}</h3>
                    <span>{team.designation}</span>

                    <ul className="social">
                      {team.socialLinks.map(social => (
                        <li key={social.id}>
                          <a
                            href={social.link}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={social.iconName}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMembers
