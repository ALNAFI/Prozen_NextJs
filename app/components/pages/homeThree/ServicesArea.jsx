import Link from "next/link";
import { servicesInsuranceData } from "../../../data/HomeThreeData";
import Image from "next/image";

export default function ServicesArea() {
  const { section, services } = servicesInsuranceData;

  return (
    <section className="ht-services-area pt-130 fix">
      <div className="container">
        {/* Section title */}
        <div className="section-title text-center">
          <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
            {section.subtitle}
          </span>
          <h2 className="title" data-aos="fade-up" data-aos-delay="500">
            {section.title1} <br /> {section.title2}
          </h2>
        </div>

        {/* Services */}
        <div className="ht-services-wrapper">
          <div className="row">
            {services.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="ht-services-items mt-25">
                  <div className="icon">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={64}
                      height={64}
                      style={{ width: "auto", height: "auto" }}
                      loading="lazy"
                    />
                  </div>

                  <Link href={item.link}>
                    <h3 className="title title-2">{item.title}</h3>
                  </Link>

                  <p className="desc">{item.desc}</p>

                  <Link href={item.link} className="link">
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
