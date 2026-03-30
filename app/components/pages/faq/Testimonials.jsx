"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "../../../data/faqData";
import Image from "next/image";

export default function Testimonials() {
  const { subtitle, title, items } = testimonialsData;
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
    <section className="ht-testimonials-area-2 section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end mb-30">
          <div className="section-title mb-0">
            <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
              {subtitle}
            </span>
            <h2 className="title" data-aos="fade-up" data-aos-delay="400">
              {title}
            </h2>
          </div>

          <div className="ht-testi-btn mt-0" data-aos="fade-up" data-aos-delay="600">
            <button ref={prevRef} className="ht-testi-prev ht-testi-prev-2">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button ref={nextRef} className="ht-testi-next ht-testi-next-2">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="ht-testimonials-wrapper-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
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
            breakpoints={{
              1200: { slidesPerView: 3 },
              992: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                  <div className="ht-testimonials-item ht-testimonials-item-2">
                    {/* Stars */}
                    <div className="star">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i className="fa-solid fa-star" key={i} />
                      ))}
                    </div>

                    <p className="desc desc-2">“{item.text}”</p>

                    <div className="ht-testimonials-author ht-testimonials-author-2">
                      <div className="avatar">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={80}
                          height={80}
                          style={{ width: "auto", height: "auto" }}
                        />
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
    </section>
  );
}
