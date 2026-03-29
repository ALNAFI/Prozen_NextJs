"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "../../../data/HomeThreeData";

export default function Testimonials() {
  const { bgShape, icon, testimonials } = testimonialsData;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="ht-testimonials-area-2 section-padding fix">
      {/* Background shape */}
      <div className="bg-shape">
        <img src={bgShape} alt="shape" />
      </div>

      <div className="container">
        <div className="testimonial-slides-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                speed={2000}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={setSwiper}
                
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-slides-item">
                        <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>

                        <p>“{item.text}”</p>

                        <div className="info">
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Slider buttons */}
          <div className="swiper-testi-btn">
            <div
              ref={prevRef}
              className="testi-slides-prev"
              onClick={() => swiper?.slidePrev()}
              onKeyDown={(e) => e.key === "Enter" && swiper?.slidePrev()}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <div
              ref={nextRef}
              className="testi-slides-next"
              onClick={() => swiper?.slideNext()}
              onKeyDown={(e) => e.key === "Enter" && swiper?.slideNext()}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
