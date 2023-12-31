import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const TestimonialSection = () => {
  return (
    <>
      <section className="client-section">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Happy Client Say</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="client-image">
                <img src="/images/testimonial-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination]}
                className="client-slides"
              >
                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <img src="/images/client-image/1.jpg" alt="image" />
                      <h3>R.Mortein</h3>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <img src="/images/client-image/2.jpg" alt="image" />
                      <h3>R.Mortein</h3>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
