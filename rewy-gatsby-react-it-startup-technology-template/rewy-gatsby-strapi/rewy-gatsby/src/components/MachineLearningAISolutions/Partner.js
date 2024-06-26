import React from "react"

import Partner1 from "../../images/partner/partner1.png"
import Partner2 from "../../images/partner/partner2.png"
import Partner3 from "../../images/partner/partner3.png"
import Partner4 from "../../images/partner/partner4.png"
import Partner5 from "../../images/partner/partner5.png"
import Partner6 from "../../images/partner/partner6.png"

const Partner = () => {
  return (
    <>
      <div className="partner-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src={Partner1} alt="Partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={Partner2} alt="Partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="single-partner-item">
                  <img src={Partner3} alt="Partner" />
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="single-partner-item">
                  <img src={Partner4} alt="Partner" />
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="single-partner-item">
                  <img src={Partner5} alt="Partner" />
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="single-partner-item">
                  <img src={Partner6} alt="Partner" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  )
}

export default Partner
