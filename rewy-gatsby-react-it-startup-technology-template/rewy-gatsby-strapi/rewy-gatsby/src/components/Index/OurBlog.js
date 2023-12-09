import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import starIcon from "../../images/star-icon.png"

const query = graphql`
  {
    allStrapiBlog(sort: { strapi_id: DESC }) {
      nodes {
        id
        image {
          url
          alternativeText
        }
        title
        slug
        date
        authorImage {
          url
          alternativeText
        }
        authorName
        detailsContent {
          data {
            detailsContent
          }
        }
        category {
          title
          slug
        }
      }
    }
  }
`

const OurBlog = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <>
      <section className="blog-area pt-100 pb-70 bg-fffbf5">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="blog" />
              Our Blog
            </span>
            <h2>Latest Valuable Insights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.slice(0, 3).map(blog => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link to={`/blogs/${blog.slug}`}>
                        <img
                          src={blog.image.url}
                          alt={blog.image.alternativeText}
                        />
                      </Link>
                    </div>

                    <div className="post-content">
                      <ul className="post-meta d-flex justify-content-between align-items-center">
                        <li>
                          <div className="post-author d-flex align-items-center">
                            <img
                              src={blog.authorImage.url}
                              className="rounded-circle"
                              alt={blog.authorImage.alternativeText}
                            />
                            <span>{blog.authorName}</span>
                          </div>
                        </li>
                        <li>
                          <i className="flaticon-calendar"></i> {blog.date}
                        </li>
                      </ul>
                      <h3>
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>
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

export default OurBlog
