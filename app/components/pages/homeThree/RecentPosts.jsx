import Link from "next/link";
import { recentPostsData } from "../../../data/HomeThreeData";

export default function RecentPosts() {
  const { section, posts } = recentPostsData;

  return (
    <section className="ht-blog-area-3 section-padding fix ">
      <div className="container">
        <div className="ht-blog-wrapper">
          <div className="row gy-5">
            {/* Left content */}
            <div className="col-lg-5">
              <div className="ht-blog-contents">
                <div className="section-title">
                  <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
                    {section.subtitle}
                  </span>

                  <h2 className="title" data-aos="fade-up" data-aos-delay="500">
                    {section.title1} <br /> {section.title2}
                  </h2>

                  <p className="mt-7" data-aos="fade-up" data-aos-delay="800">
                    {section.desc}
                  </p>
                </div>

                <Link href={section.button.link} className="ht-btn style-2">
                  {section.button.text}
                </Link>
              </div>
            </div>

            {/* Right posts */}
            <div className="col-lg-7">
              <div className="ht-blog-item-wrapper">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="single-item"
                    data-aos="fade-up"
                    data-aos-delay={post.delay}
                  >
                    <div className="thumb">
                      <Link href={post.link}>
                        <img src={post.image} alt={post.titleLine1} />
                      </Link>
                    </div>

                    <div className="content">
                      <span className="meta">
                        {post.date} | {post.category}
                      </span>

                      <Link href={post.link}>
                        <h3>
                          {post.titleLine1} <br />
                          {post.titleLine2}
                        </h3>
                      </Link>

                      <Link href={post.link} className="link">
                        read more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end posts */}
          </div>
        </div>
      </div>
    </section>
  );
}
