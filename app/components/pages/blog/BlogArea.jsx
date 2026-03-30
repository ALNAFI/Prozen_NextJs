import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../../data/blogData";

export default function BlogArea() {
  return (
    <section className="ht-blog-area section-padding fix">
      <div className="container">
        <div className="ht-blog-wrapper">
          <div className="row">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={blog.delay}
              >
                <div className="ht-blog-item v2 mt-20">
                  <div className="ht-blog-thumb">
                    <Link href={blog.link}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={860}
                        height={540}
                        style={{ width: "100%", height: "auto" }}
                        sizes="(max-width: 991px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <div className="ht-blog-content">
                    <ul className="ht-blog-meta">
                      <li>{blog.date}</li>
                      <li>{blog.category}</li>
                    </ul>

                    <Link href={blog.link}>
                      <h3 className="title">{blog.title}</h3>
                    </Link>

                    <Link href={blog.link} className="ht-link">
                      Read More
                    </Link>
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
    </section>
  );
}
