import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import RecentPosts from "./RecentPosts";
import Services from "./Services";
import Tags from "./Tags";
import { blogListPostsData } from "../../../data/blogListAndDetailsData";
import { servicesData } from "../../../data/blogListAndDetailsData";

export default function BlogListArea() {
  return (
    <section className="ht-blog-list-area section-padding">
      <div className="container">
        <div className="row gy-5">
          {/* Blog list */}
          <div className="col-lg-8">
            <div className="blog-list-wrapper">
              <div className="row">
                {blogListPostsData.map((post) => (
                  <div className="col-12" key={post.id}>
                    <div className="blog-list-item">
                      <div className="thumb">
                        <Link href={post.link}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={900}
                            height={520}
                            style={{ width: "100%", height: "auto" }}
                            sizes="(max-width: 991px) 100vw, 66vw"
                            loading="lazy"
                          />
                        </Link>
                      </div>

                      <div className="content">
                        <div className="blog-meta">
                          {post.meta.map((item, idx) => (
                            <div className="single-meta" key={idx}>
                              <Image
                                src={item.icon}
                                alt="icon"
                                width={18}
                                height={18}
                                style={{ width: "auto", height: "auto" }}
                              />
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={post.link}>
                          <h2 className="title">{post.title}</h2>
                        </Link>

                        <p>{post.excerpt}</p>

                        <Link href={post.link}
                          className="ht-btn style-2"
                        >
                          view details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="page-nav-wrap">
                <ul>
                  {["01", "02", "03"].map((page, index) => (
                    <li
                      key={page}
                      className={index === 0 ? "active" : ""}
                    >
                      <Link className="page-numbers" href="#">
                        {page}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link className="page-numbers" href="#">
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="ht-sidebar-area">
              <Search />
              <RecentPosts />
              <Services servicesData={servicesData} />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
