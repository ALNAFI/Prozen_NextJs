"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "../../../data/HomeThreeData";

export default function Testimonials() {
  const { bgShape, icon, testimonials } = testimonialsData;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const initNavigation = () => {
      const swiper = swiperRef.current;
      const prevEl = prevRef.current;
      const nextEl = nextRef.current;

      if (!swiper || !prevEl || !nextEl) {
        raf = window.requestAnimationFrame(initNavigation);
        return;
      }

      swiper.params.navigation = {
        ...(swiper.params.navigation || {}),
        prevEl,
        nextEl,
      };
      swiper.navigation?.destroy?.();
      swiper.navigation?.init?.();
      swiper.navigation?.update?.();
    };

    raf = window.requestAnimationFrame(initNavigation);
    return () => window.cancelAnimationFrame(raf);
  }, []);

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
                navigation={false}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                
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
              onClick={() => swiperRef.current?.slidePrev()}
              onKeyDown={(e) => e.key === "Enter" && swiperRef.current?.slidePrev()}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <div
              ref={nextRef}
              className="testi-slides-next"
              onClick={() => swiperRef.current?.slideNext()}
              onKeyDown={(e) => e.key === "Enter" && swiperRef.current?.slideNext()}
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
