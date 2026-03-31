"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HERO_BG = "/images/hero/hero-bg-3.jpg";
const HERO_SLIDES = [
  { id: 1, src: "/images/hero/3.jpg", alt: "Hero" },
  { id: 2, src: "/images/hero/3.jpg", alt: "Hero" },
  { id: 3, src: "/images/hero/3.jpg", alt: "Hero" },
];

export default function HeroArea() {
  const [bgStyle, setBgStyle] = useState({});
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = HERO_BG;
    img.onload = () => {
      setBgStyle({
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      });
    };
  }, []);

  useEffect(() => {
    let raf = 0;

    const initNavigation = () => {
      const swiper = swiperRef.current;
      const nextEl = nextRef.current;

      if (!swiper || !nextEl) {
        raf = window.requestAnimationFrame(initNavigation);
        return;
      }

      swiper.params.navigation = {
        ...(swiper.params.navigation || {}),
        nextEl,
      };
      swiper.navigation?.destroy?.();
      swiper.navigation?.init?.();
      swiper.navigation?.update?.();
    };

    raf = window.requestAnimationFrame(initNavigation);
    return () => window.cancelAnimationFrame(raf);
  }, []);


  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  return (
    <section className="ht-hero-area hero-3" style={bgStyle}>
      <div className="ht-hero-shape">
        <div className="arrow-shape-3 float-bob-y">
              <NextImage
            src="/images/shape/7.svg"
            alt="shape"
            width={180}
            height={180}
            priority
          />
        </div>
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="ht-hero-content style-3">
            <h1 data-aos="fade-up" data-aos-delay="300">
              Trusted <br /> Insurance for a <br /> Peaceful Life
            </h1>
            <p className="desc" data-aos="fade-up" data-aos-delay="600">
              Explore our tailored insurance solutions and experience the peace
              of mind that <br />
              comes with knowing you&apos;re with covered Potenti nullam{" "}
            </p>
            <Link href="/contact"
              className="ht-btn style-2"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Let&apos;s Get in Touch
            </Link>
          </div>
          <div className="video-card" data-aos="fade-up" data-aos-delay="300">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              loop={true}
              navigation={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
             
            >
              {HERO_SLIDES.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="thumb">
                    <NextImage
                      src={slide.src}
                      alt={slide.alt}
                      width={820}
                      height={520}
                      priority={slide.id === 1}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="txt">
              <span>Featured Services</span>
              <i
                ref={nextRef}
                className="fa-solid fa-arrow-right-long ht-hero-next"
                onClick={() => swiperRef.current?.slideNext()}
                onKeyDown={(e) => e.key === "Enter" && swiperRef.current?.slideNext()}
                role="button"
                tabIndex={0}
              />
            </div>
            <div className="play-icon">
              <NextImage
                src="/images/hero/text-spiner.png"
                alt="text"
                width={180}
                height={180}
              />
              <div className="icon">
                <button
                  type="button"
                  className="video-popup-btn"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play video"
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>

          {isVideoOpen && (
            <div
              className="video-modal-overlay"
              onClick={() => setIsVideoOpen(false)}
              role="button"
              tabIndex={-1}
              aria-label="Close video"
            >
              <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="video-modal-close"
                  onClick={() => setIsVideoOpen(false)}
                  aria-label="Close video"
                >
                  ×
                </button>
                <div className="video-modal-iframe-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/axzocwX0rEo?autoplay=1"
                    title="Featured services video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
