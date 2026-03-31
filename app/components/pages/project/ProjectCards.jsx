import Link from "next/link";
import { projectData } from "../../../data/projectData";
import Image from "next/image";
export default function ProjectCards() {
  return (
    <div className="ht-project-area section-padding">
      <div className="container">
        <div className="project-slide-wrapper inner-two">
          <div className="row gy-5">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={project.delay}
              >
                <div className="single-item v2">
                  <div className="thumb">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={650}
                        loading="lazy"
                      />
                    </Link>

                    <div className="content">
                      <Link href={project.link}>
                        <h3>{project.title}</h3>
                      </Link>

                      <div className="bottom">
                        <p>{project.category}</p>

                        <Link href={project.link}>
                          <Image
                            src="/images/icon/arrow-up.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="page-nav-wrap text-center">
            <ul>
              <li className="active">
                <Link className="page-numbers" href="#">
                  01
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  02
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  03
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  <i className="fa-solid fa-chevron-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
