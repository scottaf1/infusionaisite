import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiTeamMember2 {
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

const Team = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeamMember2: { memberList },
  } = data

  return (
    <>
      <div className="scientist-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="row justify-content">
            {memberList.map(team => (
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
      </div>
    </>
  )
}

export default Team
