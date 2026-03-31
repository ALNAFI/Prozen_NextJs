import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { servicesAreaData } from "../../../data/homeTwoData";

export default function ServicesArea() {
  const { section, mainThumb, services, slider } = servicesAreaData;

  return (
    <section className="ht-services-area pt-130 fix">
      <div className="container">
        {/* Section title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
                {section.subtitle}
              </span>
              <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                {section.title1} <br /> {section.title2}
              </h2>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="ht-services-wrapper-two">
          <div className="row">
            {/* Left thumb */}
            <div className="col-lg-4">
              <div
                className="ht-services-thumbs"
                data-aos="fade-up"
                data-aos-delay={mainThumb.delay}
              >
                <Image
                  src={mainThumb.image}
                  alt="img"
                  width={520}
                  height={620}
                  priority
                />
                <div className="content">
                  <h3>{mainThumb.title}</h3>
                  <Link href={mainThumb.buttonLink}
                    className="ht-btn style-4"
                  >
                    {mainThumb.buttonText}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right services */}
            <div className="col-lg-8">
              <div className="ht-services-item">
                {services.map((item) => (
                  <div
                    key={item.id}
                    className="single-item"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                    <Link href={item.link}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <Image
                      src={item.image}
                      alt="sm-img"
                      width={180}
                      height={180}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand slider */}
      <div className="brand-slider">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          speed={3000}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          className="ht-brand-slider"
        >
          {slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="brand-item">
                <h2>{item.text}</h2>
                <Image
                  src="/images/icon/9.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
