"use client";

import Link from "next/link";
import Image from "next/image";
import Tags from "./Tags";
import Services from "./Services";
import RecentPosts from "./RecentPosts";
import { blogDetailsData } from "../../../data/blogListAndDetailsData";
import Search from "./Search";
import Form from "./Form";
import { servicesData } from "../../../data/blogListAndDetailsData";

export default function BlogDetailsArea() {
  const { hero, paragraphs, quote, gallery, tags, social, author, comments } =
    blogDetailsData;

  return (
    <section className="ht-blog-details-area section-padding">
      <div className="container">
        <div className="row gy-5">
          {/* CONTENT */}
          <div className="col-lg-8">
            <div className="ht-blog-details-wrapper">
              {/* Hero */}
              <div className="blog-single-post">
                <div className="thumb">
                  <Image
                    src={hero.image}
                    alt={hero.title}
                    width={900}
                    height={520}
                    priority
                  />
                </div>

                <div className="content">
                  <div className="blog-meta">
                    {hero.meta.map((m, i) => (
                      <div className="single-meta" key={i}>
                        <Image
                          src={m.icon}
                          alt="icon"
                          width={18}
                          height={18}
                        />
                        <span>{m.text}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="title">{hero.title}</h2>

                  {paragraphs.map((text, i) => (
                    <p key={i} className={i === 1 ? "mt-20" : ""}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="qoute">
                <div className="icon">
                  <Image
                    src="/images/icon/10.svg"
                    alt="icon"
                    width={42}
                    height={42}
                  />
                </div>
                <p>{quote}</p>
              </div>

              {/* Gallery */}
              <div className="row my-40 gy-3 gy-lg-0">
                {gallery.map((img, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="details-img">
                      <Image
                        src={img}
                        alt="blog"
                        width={860}
                        height={540}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags & Social */}
              <div className="tag-social">
                <div className="tag">
                  <h6>tags:</h6>
                  <div className="taglink">
                    {tags.map((tag) => (
                      <Link key={tag} href="#">
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="social">
                  <h6>share:</h6>
                  <ul className="social-list">
                    {social.map((icon) => (
                      <li key={icon}>
                        <Link href="#">
                          <i className={`fa-brands fa-${icon}`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Author */}
              <div className="blog-details-author">
                <div className="thumb">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={120}
                    height={120}
                  />
                </div>
                <div className="content">
                  <h3>{author.name}</h3>
                  <p>{author.bio}</p>
                </div>
              </div>

              {/* Comments */}
              <div className="blog-comment-area">
                <h3 className="mb-30">{comments.length} Comments</h3>

                <div className="comment-wrapper">
                  {comments.map((c) => (
                    <div className="single-comment" key={c.id}>
                      <div className="thumb">
                        <Image
                          src={c.image}
                          alt={c.name}
                          width={90}
                          height={90}
                        />
                      </div>
                      <div className="content">
                        <p>{c.text}</p>
                        <h5>{c.name}</h5>
                        <p className="dt">{c.date}</p>
                        <Link href="#" className="reply">
                          <Image
                            src="/images/icon/11.svg"
                            alt="icon"
                            width={18}
                            height={18}
                          />{" "}
                          Reply
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Form/>
            </div>
          </div>

          {/* SIDEBAR */}
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
