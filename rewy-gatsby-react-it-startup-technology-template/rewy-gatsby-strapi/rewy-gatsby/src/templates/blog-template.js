import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import BlogSidebar from "./../components/BlogContent/BlogSidebar"
import Footer from "../components/_App/Footer"

import user1 from "./../images/user1.jpg"
import user2 from "./../images/user2.jpg"
import user3 from "./../images/user3.jpg"
import user4 from "./../images/user4.jpg"

import { graphql } from "gatsby"

const BlogDetailsPage = ({ data }) => {
  const { image, title, authorName, category, date, detailsContent, tags } =
    data.blog

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />

      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={image.url} alt={image.alternativeText} />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-group"></i>
                        <span>Author</span>
                        {authorName}
                      </li>
                      {category && (
                        <li>
                          <i className="bx bx-folder-open"></i>
                          <span>Category</span>
                          {category.title}
                        </li>
                      )}
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Last Updated</span>
                        {date}
                      </li>
                    </ul>
                  </div>

                  <ReactMarkdown>
                    {detailsContent.data.detailsContent}
                  </ReactMarkdown>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    {tags && (
                      <>
                        <span>
                          <i className="bx bx-purchase-tag"></i>
                        </span>
                        {tags.slice(0, 3).map(tag => (
                          <Link to={`/tags/${tag.slug}`} key={tag.id}>
                            {tag.title}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          className="twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="linkedin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={user1}
                              className="avatar"
                              alt="Blog post"
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 24, 2019 at 10:59 am</span>
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={user2}
                                  className="avatar"
                                  alt="Blog post"
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>April 24, 2019 at 10:59 am</span>
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link
                                to="#comment"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </div>

                          <ol className="children">
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <div className="comment-author vcard">
                                    <img
                                      src={user3}
                                      className="avatar"
                                      alt="Blog post"
                                    />
                                    <b className="fn">Sarah Taylor</b>
                                    <span className="says">says:</span>
                                  </div>

                                  <div className="comment-metadata">
                                    <span>April 24, 2019 at 10:59 am</span>
                                  </div>
                                </div>

                                <div className="comment-content">
                                  <p>
                                    Lorem Ipsum has been the industry’s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>

                                <div className="reply">
                                  <Link
                                    to="#comment"
                                    className="comment-reply-link"
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={user4}
                              className="avatar"
                              alt="Blog post"
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 24, 2019 at 10:59 am</span>
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={user1}
                                  className="avatar"
                                  alt="Blog post"
                                />
                                <b className="fn">James Anderson</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>April 24, 2019 at 10:59 am</span>
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link
                                to="#comment"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div id="comment" className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-author">
                        <label htmlFor="name">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          placeholder="Your Name*"
                          name="author"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-email">
                        <label htmlFor="email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email*"
                          name="email"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-url">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          id="url"
                          placeholder="Website"
                          name="url"
                        />
                      </p>

                      <p className="comment-form-comment">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          placeholder="Your Comment..."
                          rows="5"
                          required="required"
                        ></textarea>
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label htmlFor="cookies">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      image {
        url
        alternativeText
      }
      title
      authorName
      category {
        title
      }
      date
      detailsContent {
        data {
          detailsContent
        }
      }
      tags {
        id
        title
        slug
        blogs {
          id
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog Details" />

export default BlogDetailsPage
