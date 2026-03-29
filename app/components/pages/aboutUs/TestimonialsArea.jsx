"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsAreaData } from "../../../data/aboutUsData";

export default function TestimonialsArea() {
  const { section, items } = testimonialsAreaData;
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
    <section className="ht-testimonials-area section-padding pt-0">
      <div className="container">
        <div className="ht-testimonials-wrapper">
          <div className="row gy-5">
            {/* Left */}
            <div className="col-lg-5">
              <div className="section-title">
                <span
                  className="subtitle"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {section.subtitle}
                </span>

                <h2 className="title">
                  What are <br /> they saying <br /> about us?
                </h2>
              </div>

              <div className="ht-testi-btn">
                <button 
                  ref={prevRef} 
                  className="ht-testi-prev"
                  onClick={() => swiper?.slidePrev()}
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <button 
                  ref={nextRef} 
                  className="ht-testi-next"
                  onClick={() => swiper?.slideNext()}
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="col-lg-7">
              <div className="ht-testimonials-slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
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
                  breakpoints={{
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  
                >
                  {items.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="ht-testimonials-item">
                          {/* Stars */}
                          <div className="star">
                            {Array.from({
                              length: item.rating,
                            }).map((_, i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                          </div>

                          <p className="desc">“{item.text}”</p>

                          <div className="ht-testimonials-author">
                            <div className="avatar">
                              <img src={item.avatar} alt={item.name} />
                            </div>
                            <div className="author-info">
                              <h5 className="name">{item.name}</h5>
                              <p className="role">{item.role}</p>
                            </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* right end */}
          </div>
        </div>
      </div>
    </section>
  );
}
