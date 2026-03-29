"use client";

import Link from "next/link";
import PropTypes from "prop-types";
import { useMemo } from "react";

export default function RecentPosts({
  data,
  variant = "v1",
  sectionClassName = "ht-blog-area section-padding fix ",
  pad = "",
}) {
  const { section, posts } = data;

  const { isV2, metaClass, linkClass, safePosts } = useMemo(() => {
    const isV2Local = variant === "v2";
    return {
      isV2: isV2Local,
      metaClass: isV2Local ? "ht-blog-meta ht-blog-meta-2" : "ht-blog-meta",
      linkClass: isV2Local ? "ht-link ht-link-2" : "ht-link",
      safePosts: Array.isArray(posts) ? posts : [],
    };
  }, [variant, posts]);
  return (
    <section className={`${sectionClassName} ${pad}`}>
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
            {section.subtitle}
          </span>
          <h2 className="title" data-aos="fade-up" data-aos-delay="400">
            {section.title1 ? (
              <>
                {section.title1} <br /> {section.title2}
              </>
            ) : (
              <>
                {section.title}{" "}
              </>
            )}
          </h2>
        </div>
        <div className="ht-blog-wrapper">
          <div className="row">
            {safePosts.map((post) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={post.delay}
              >
                <div className="ht-blog-item mt-20">
                  <div className="ht-blog-thumb">
                    <Link href={post.link}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </div>
                  <div className="ht-blog-content">
                    <ul className={metaClass}>
                      {isV2 ? (
                        <>
                          <li className="ct">{post.category}</li>
                          <li className="dt">{post.date}</li>
                        </>
                      ) : (
                        <>
                          <li>{post.date}</li>
                          <li>{post.category}</li>
                        </>
                      )}
                    </ul>
                    <Link href={post.link}>
                      <h3 className="title">{post.title}</h3>
                    </Link>
                    <Link href={post.link} className={linkClass}>
                      Read More
                    </Link>
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

RecentPosts.propTypes = {
  data: PropTypes.shape({
    section: PropTypes.shape({
      subtitle: PropTypes.string,
      title: PropTypes.string,
      title1: PropTypes.string,
      title2: PropTypes.string,
    }).isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      })
    ).isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(["v1", "v2"]),
  sectionClassName: PropTypes.string,
  pad: PropTypes.string,
};
