import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    strapiTeamMember {
      subTitle
      title
      shortDescription
      teamMember {
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

const TeamMember = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeamMember: { subTitle, title, shortDescription, teamMember },
  } = data

  return (
    <>
      <section className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>

          {teamMember && (
            <div className="row">
              {teamMember.map(team => (
                <div className="col-lg-3 col-sm-6" key={team.id}>
                  <div className="single-scientist-item-box">
                    <div className="image">
                      <img
                        src={team.image.url}
                        alt={team.image.alternativeText}
                      />

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

                    <div className="content">
                      <h3>{team.name}</h3>
                      <span>{team.designation}</span>
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

export default TeamMember
