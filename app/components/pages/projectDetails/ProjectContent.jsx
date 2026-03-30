import { projectDetailsData } from "../../../data/projectDetailsData";
import Image from "next/image";

export default function ProjectContent() {
  const {
    title,
    mainImage,
    description,
    gallery,
    extraContent,
    sections,
    sidebarInfo,
  } = projectDetailsData;

  return (
    <section className="ht-project-details-area section-padding">
      <div className="container">
        <div className="project-details-wrapper">
          {/* Thumbnail */}
          <div className="thumbnails">
            <Image
              src={mainImage}
              alt={title}
              width={1200}
              height={700}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 991px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="row">
            {/* Content */}
            <div className="col-xl-9">
              <div className="project-details-content">
                <h2 className="mb-12">{title}</h2>

                {description.map((item) => (
                  <p key={item.id} className="mb-18">
                    {item.text}
                  </p>
                ))}

                {/* Gallery */}
                <div className="row">
                  {gallery.map((img, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="project-thumbs">
                        <Image
                          src={img}
                          alt="project"
                          width={860}
                          height={540}
                          style={{ width: "100%", height: "auto" }}
                          sizes="(max-width: 767px) 100vw, 50vw"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-35">{extraContent}</p>

                {sections.map((section, index) => (
                  <div key={index}>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-3">
              <div className="project-details-sidebar">
                <h5 className="widget-title">
                  Project information
                </h5>

                <div className="widget-item-wrapper">
                  {sidebarInfo.map((item, index) => (
                    <div className="single-widget" key={index}>
                      <div className="icon">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={42}
                          height={42}
                          style={{ width: "auto", height: "auto" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="info">
                        <span>{item.label}</span>
                        <h6>{item.value}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
