import { faqAreaData } from "../../../data/faqData";
import Image from "next/image";
import Accordion from "../../buttons/Accordion";
export default function FaqAreas() {
  const { image, subtitle, title, description, items } = faqAreaData;
  return (
    <section className="ht-faq-area section-padding fix">
      <div className="container">
        <div className="ht-faq-wrapper">
          <div className="row gy-5">
            {/* Image */}
            <div className="col-xl-6 col-lg-6">
              <div className="ht-faq-thumb" data-aos="fade-up" data-aos-delay="300">
                <Image
                  src={image}
                  alt="faq"
                  width={860}
                  height={640}
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="ht-faq-content">
                <div className="section-title">
                  <span className="subtitle" data-aos="fade-up" data-aos-delay="300">
                    {subtitle}
                  </span>

                  <h2 className="title" data-aos="fade-up" data-aos-delay="600">
                    {title}
                  </h2>

                  <p data-aos="fade-up" data-aos-delay="900">
                    {description}
                  </p>
                </div>

                {/* Accordion */}
                <Accordion items={items} />
                {/* accordion end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
