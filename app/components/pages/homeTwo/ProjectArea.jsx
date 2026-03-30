import Link from "next/link";
import { projectAreaData } from "../../../data/homeTwoData";
import Image from "next/image";

export default function ProjectArea() {
  const { section, topButton, projects, bottomButton } = projectAreaData;

  return (
    <section className="ht-project-area-2 section-padding fix pt-0">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end">
          <div className="section-title mb-0">
            <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
              {section.subtitle}
            </span>
            <h2 className="title" data-aos="fade-up" data-aos-delay="400">
              {section.title1} <br /> {section.title2}
            </h2>
          </div>

          <Link href={topButton.link}
            className="ht-btn style-2"
            data-aos="fade-up"
            data-aos-delay={topButton.delay}
          >
            {topButton.text}
          </Link>
        </div>

        {/* Projects */}
        <div className="ht-project-wrapper">
          <div className="row g-5">
            {projects.map((item) => (
              <div
                key={item.id}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="single-item">
                  <div className="thumb">
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={650}
                        style={{ width: "100%", height: "auto" }}
                        sizes="(max-width: 991px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <div className="content">
                    <Link href={item.link}>
                      <h4>{item.title}</h4>
                    </Link>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom button */}
            <Link href={bottomButton.link}
              className="project-btn mx-auto"
              data-aos="fade-up"
              data-aos-delay={bottomButton.delay}
            >
              {bottomButton.textLine1} <br />
              {bottomButton.textLine2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
