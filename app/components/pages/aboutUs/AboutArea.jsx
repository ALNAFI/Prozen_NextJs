import Link from "next/link";
import { aboutData } from "../../../data/aboutUsData";
import Image from "next/image";

export default function AboutArea({ image }) {
  const { subtitle, title, description, button } = aboutData;

  return (
    <section className="ht-about-area section-padding fix">
      <div className="container">
        <div className="ht-about-wrapper">
          <div className="row align-items-lg-center g-5">
            {/* Image */}
            <div className="col-lg-6 col-sm-12">
              <div
                className="ht-about-img"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src={image}
                  alt="about"
                  width={860}
                  height={640}
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Content */}
            <div className="offset-lg-1 col-lg-5 col-sm-12">
              <div className="ht-about-content">
                <div className="section-title">
                  <span
                    className="subtitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {subtitle}
                  </span>
                  <h2
                    className="title"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    {title}
                  </h2>
                  <p
                    data-aos="fade"
                    data-aos-delay="800"
                  >
                    {description}
                  </p>
                </div>
                <Link href={button.link}
                  className="ht-btn style-3"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  {button.label}
                </Link>
              </div>
            </div>
            {/* content end */}
          </div>
        </div>
      </div>
    </section>
  );
}
