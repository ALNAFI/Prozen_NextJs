import Link from "next/link";
import Image from "next/image";
import { recentPostsData } from "../../../data/blogListAndDetailsData";

export default function RecentPosts() {
  return (
    <div className="single-widget">
      <h4 className="widget-title">Recent Posts</h4>
      <div className="recent-post-wrapper">
        {recentPostsData.map((post) => (
          <div className="recent-post" key={post.id}>
            <div className="thumb">
              <Image
                src={post.image}
                alt={post.title}
                width={90}
                height={90}
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
              />
            </div>
            <div className="content">
              <Link href={post.link}>
                <h5 className="title">{post.title}</h5>
              </Link>
              <span className="date">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
