import Link from "next/link";
import { servicesAreaData } from "../../../data/serviceAndDetailsData";

export default function ServicesArea() {
  return (
    <section className="ht-services-area section-padding fix">
      <div className="container">
        <div className="ht-services-wrapper">
          <div className="row">
            {servicesAreaData.map((service) => (
              <div
                key={service.id}
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="ht-services-items mt-30">
                  <div className="icon">
                    <img
                      src={service.icon}
                      alt={service.title}
                    />
                  </div>

                  <Link href="/service-details">
                    <h3 className="title">
                      {service.title}{" "}
                      <img
                        className={service.arrowClass}
                        src="/images/icon/arrow-up.svg"
                        alt="icon"
                      />
                    </h3>
                  </Link>
                  <p className="desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
