import { processData } from "../../../data/aboutUsData";
import Image from "next/image";

export default function ProcessArea({
  bgColor = "",
  titleColor = "",
  subtitleColor = "",
  descriptionColor = "",
  shape = "",
}) {
  const {  subtitle, title1, title2, steps } = processData;

  return (
    <section className={`fix section-padding ${bgColor}`}>
      {/* Shape */}
      <div className="ht-process-shape">
        <Image
          src={shape}
          alt="shape"
          width={260}
          height={260}
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />
      </div>

      <div className="container">
        {/* Section title */}
        <div className="section-title text-center">
          <span
            className={`subtitle ${subtitleColor}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {subtitle}
          </span>

          <h2
            className={`title ${titleColor}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {title1} <br /> {title2}
          </h2>
        </div>

        {/* Steps */}
        <div className="ht-process-wrapper">
          <div className="row justify-content-between">
            {steps.map((item) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className={`mt-25 ${descriptionColor}`}>
                  <span className="step">{item.step}</span>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
