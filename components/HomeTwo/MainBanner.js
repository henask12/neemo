import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
				toggler={toggler}
				sources={[
					'https://www.youtube.com/watch?v=_ysd-zHamjk',
				]}
			/>

      <div className="home-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="main-banner-content">
                    <h1>Exquisite of Digital Marketing</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        More About Us
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Watch Video <i className="flaticon-play-button"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="banner-form">
                    <form>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Register Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-img-wrapper">
          <div className="banner-img-1">
            <img src="/images/left-shape.png" alt="image" />
          </div>

          <div className="banner-img-2">
            <img src="/images/right-shape.png" alt="image" />
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/2.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/6.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/2.png" alt="image" />
        </div>
        <div className="shape-img8">
          <img src="/images/shape/10.png" alt="image" />
        </div>
        <div className="shape-img9">
          <img src="/images/shape/7.png" alt="image" />
        </div>
        <div className="shape-img10">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img11">
          <img src="/images/shape/11.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
