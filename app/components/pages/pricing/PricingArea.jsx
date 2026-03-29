import Link from "next/link";
import { pricingData } from "../../../data/pricingData";

export default function PricingArea({pad=""}) {
  const { section, plans } = pricingData;

  return (
    <section className={`ht-price-area section-padding ${pad}`}>
      <div className="container">
        <div className="ht-price-wrapper">
          <div className="row">
            {/* Left content */}
            <div className="col-lg-6">
              <div className="ht-price-content">
                <div className="section-title">
                  <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
                    {section.subtitle}
                  </span>
                  <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                    {section.title}
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="600">
                    {section.description}
                  </p>
                </div>
                <Link href={section.button.link}
                  className="ht-btn style-2"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  {section.button.label}
                </Link>
              </div>
            </div>
            {/* Pricing cards */}
            <div className="col-lg-6">
              <div className="ht-price-item">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`single-item ${plan.style}`}
                    data-aos="fade-up"
                    data-aos-delay={plan.delay}
                  >
                    <div className="left">
                      <span>{plan.name}</span>
                      <h2>
                        ${plan.price}
                        <span>/{plan.duration}</span>
                      </h2>
                      <Link href={plan.link} className="link">
                        Read more <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="right">
                      <ul className="price-details">
                        {plan.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* pricing end */}
          </div>
        </div>
      </div>
    </section>
  );
}
