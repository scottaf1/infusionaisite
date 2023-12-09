import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/_App/layout"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const query = graphql`
  {
    strapiGallery {
      imageList {
        id
        image {
          url
          alternativeText
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiGallery: { imageList },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Gallery"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Gallery"
      />

      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {imageList.map(galleryImage => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={galleryImage.id}>
                <div className="single-gallery-item">
                  
                    <img
                      src={galleryImage.image.url}
                      alt={galleryImage.image.alternativeText}
                    />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Gallery
