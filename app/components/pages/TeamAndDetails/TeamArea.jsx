import Link from "next/link";
import { teamData } from "../../../data/teamAndDetailsData";

export default function TeamArea() {
  return (
    <section className="ht-team-area section-padding fix">
      <div className="container">
        <div className="ht-team-wrapper">
          <div className="row">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={member.delay}
              >
                <div className="ht-team-items">
                  <div className="ht-team-thumb">
                    <Link href="/team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>

                    <div className="social">
                      {member.socials.map((icon) => (
                        <Link href="#" key={icon}>
                          <i
                            className={`fa-brands fa-${icon}`}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="ht-team-content">
                    <Link href="/team-details">
                      <h4 className="name">{member.name}</h4>
                    </Link>
                    <p className="role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
