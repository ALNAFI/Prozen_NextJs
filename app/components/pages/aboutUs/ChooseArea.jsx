import Link from "next/link";
import { chooseData } from "../../../data/aboutUsData";

export default function ChooseArea() {
  const { left, benefits } = chooseData;
  return (
    <section className="ht-choose-area section-padding">
      <div className="container">
        <div className="ht-choose-wrapper">
          <div className="row gy-5">
            {/* Left */}
            <div className="col-xl-7 col-lg-6">
              <div className="ht-choose-left">
                <div className="content">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {left.title}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {left.description}
                  </p>
                  <Link href={left.button.link}
                    className="ht-btn style-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {left.button.label}
                  </Link>
                </div>

                <div
                  className="thumb"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <img src={left.image} alt="choose" />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-xl-5 col-lg-6">
              <div className="ht-choose-right">
                {benefits.map((item) => (
                  <div
                    key={item.id}
                    className="single-item"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <div className="icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* right end */}
          </div>
        </div>
      </div>
    </section>
  );
}
