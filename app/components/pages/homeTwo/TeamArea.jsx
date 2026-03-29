import Link from "next/link";
import { teamAreaData } from "../../../data/homeTwoData";
export default function TeamArea() {
  const { section, members, socials } = teamAreaData;

  return (
    <section className="ht-team-area section-padding fix">
      <div className="container">
        <div className="ht-team-wrapper">
          <div className="row gy-5">
            {/* Left content */}
            <div className="col-lg-4">
              <div className="ht-team-content-2">
                <div className="section-title">
                  <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
                    {section.subtitle}
                  </span>
                  <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                    {section.title}
                  </h2>
                  <p>{section.desc}</p>
                </div>

                <Link href={section.button.link}
                  className="ht-btn"
                  data-aos="fade-up"
                  data-aos-delay={section.button.delay}
                >
                  {section.button.text}
                </Link>
              </div>
            </div>

            {/* Team members */}
            <div className="col-lg-8">
              <div className="ht-team-items-wrapper">
                <div className="row g-4">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={member.delay}
                    >
                      <div className="single-item">
                        <div className="thumb">
                          <Link href={member.link}>
                            <img src={member.image} alt={member.name} />
                          </Link>

                          <div className="social-wrapper">
                            {socials.map((social) => (
                              <Link key={social.id} href={social.link}>
                                <i className={`fa-brands ${social.icon}`}></i>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="info">
                          <Link href={member.link}>
                            <h4>{member.name}</h4>
                          </Link>
                          <p>{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end members */}
          </div>
        </div>
      </div>
    </section>
  );
}
