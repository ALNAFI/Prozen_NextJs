"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { projectData } from "../../../data/homeData";

export default function ProjectArea() {
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
    <section className="ht-project-area section-padding fix pt-0">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end mb-25">
          <div className="section-title">
            <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
              Selected Works
            </span>
            <h2 className="title" data-aos="fade-up" data-aos-delay="400">
              Our complete <br /> project list
            </h2>
          </div>

          <div
            className="ht-project-btn mb-25"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button 
              ref={prevRef} 
              className="ht-project-prev"
              onClick={() => swiper?.slidePrev()}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              ref={nextRef} 
              className="ht-project-next"
              onClick={() => swiper?.slideNext()}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="project-slide-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={setSwiper}
            breakpoints={{
              992: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="single-item">
                  <div className="thumb">
                    <Link href={project.link}>
                      <img src={project.image} alt={project.title} />
                    </Link>

                    <div className="content">
                      <Link href={project.link}>
                        <h3>{project.title}</h3>
                      </Link>

                      <div className="bottom">
                        <p>{project.category}</p>
                        <Link href={project.link}>
                          <img
                            src="images/icon/arrow-up.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
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
