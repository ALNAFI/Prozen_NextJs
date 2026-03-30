import { teamDetailsData } from "../../../data/teamAndDetailsData";
import Link from "next/link";
import Image from "next/image";

export default function TeamDetailsArea() {
  const { profile, about, skills } = teamDetailsData;

  return (
    <section className="team-details-area fix section-padding">
      <div className="container">
        {/* TOP */}
        <div className="team-details-wrapper">
          <div className="team-author-items">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="thumb">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={720}
                    height={820}
                    style={{ width: "100%", height: "auto" }}
                    sizes="(max-width: 991px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="content">
                  <h2>{profile.name}</h2>
                  <h6>{profile.role}</h6>
                  <p>{profile.shortBio}</p>

                  <Link className="tl" href={`tel:${profile.phone}`}>
                    <i className="fa-solid fa-phone" />{" "}
                    {profile.phone}
                  </Link>

                  <Link
                    className="tl" href={`mailto:${profile.email}`}
                  >
                    <i className="fa-solid fa-envelope" />{" "}
                    {profile.email}
                  </Link>

                  <ul className="team-social">
                    {profile.socials.map((icon) => (
                      <li key={icon}>
                        <Link href="#">
                          <i
                            className={`fa-brands fa-${icon}`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT + SKILLS */}
        <div className="team-details-info-skills">
          <div className="row">
            {/* About */}
            <div className="col-lg-6">
              <div className="team-about">
                <h3>About Me</h3>
                {about.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="col-lg-6">
              <div className="team-skills">
                <h3>Professional skills</h3>
                <p>
                  We begin with an in-depth consultation to understand your
                  energy needs and goals. Our team then conducts a site
                  assessment.
                </p>

                <div className="skills">
                  {skills.map((skill, i) => (
                    <div className="skill" key={i}>
                      <div className="skill-header">
                        <span>{skill.label}</span>
                        <span
                          className={`percent ${skill.className}`}
                        >
                          {skill.percent}%
                        </span>
                      </div>

                      <div className="progress-bar">
                        <div
                          className={`progress ${skill.className}`}
                          style={{ width: `${skill.percent}%` }}
                        />
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
