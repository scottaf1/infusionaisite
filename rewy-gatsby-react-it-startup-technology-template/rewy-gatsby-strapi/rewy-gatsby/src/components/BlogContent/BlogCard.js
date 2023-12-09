import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiBlog(sort: {strapi_id: DESC}) {
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

const BlogCard = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {blogs.map(blog => (
              <div className="col-lg-4 col-md-6" key={blog.id}>
                <div className="single-blog-post bg-fffbf5">
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
        </div>
      </div>
    </>
  )
}

export default BlogCard
