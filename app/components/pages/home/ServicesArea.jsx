import Link from "next/link";
import { servicesData } from "../../../data/homeData";
import Image from "next/image";

export default function ServicesArea() {
  return (
    <section className="ht-services-area pt-130 fix">
      <div className="container">
        {/* Section title */}
        <div className="section-title text-center">
          <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
            Our Services
          </span>
          <h2 className="title" data-aos="fade-up" data-aos-delay="400">
            Versatile Range <br /> of Business Solutions
          </h2>
        </div>

        {/* Services */}
        <div className="ht-services-wrapper">
          <div className="row">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="ht-services-items mt-30">
                  <div className="icon">
                    <Image
                      src={service.icon}
                      alt="icon"
                      width={64}
                      height={64}
                      style={{ width: "auto", height: "auto" }}
                      loading="lazy"
                    />
                  </div>

                  <Link href="/service-details">
                    <h3 className="title">
                      {service.title}{" "}
                      <Image
                        className={service.arrowClass}
                        src="/images/icon/arrow-up.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        style={{ width: "auto", height: "auto" }}
                        loading="lazy"
                      />
                    </h3>
                  </Link>

                  <p className="desc">
                    Our team prioritizes usability and accessibility to ensure
                    that every visitor enjoys a seamless intuitive.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
