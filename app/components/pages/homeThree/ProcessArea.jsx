import { processAreaData } from "../../../data/HomeThreeData";
import Image from "next/image";

export default function ProcessArea() {
  const { section, items, circleImage } = processAreaData;

  return (
    <div className="section ht-process-area-3">
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

        {/* Process items */}
        <div className="ht-process-wrapper-3">
          <div className="row gy-5 justify-content-between">
            {items.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="process-item">
                  <div className="thumb">
                    <Image
                      src={item.image}
                      alt="process-img"
                      width={520}
                      height={520}
                    />

                    <div className="circle">
                      <Image
                        src={circleImage}
                        alt="circle"
                        width={120}
                        height={120}
                      />
                    </div>

                    <span className={item.stepClass || ""}>
                      {item.step}
                    </span>

                    {item.arrow && (
                      <div className="step-arrow">
                        <Image
                          src={item.arrow}
                          alt="arrow-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>

                  <div className="contents">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
