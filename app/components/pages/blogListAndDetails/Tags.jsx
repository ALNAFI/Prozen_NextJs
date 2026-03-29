import Link from "next/link";
import { tagsData } from "../../../data/blogListAndDetailsData";

export default function Tags() {
  return (
    <div className="single-widget">
      <h4 className="widget-title">Tags</h4>

      <div className="tags-list">
        {tagsData.map((tag, index) => (
          <Link href="#" key={`${tag}-${index}`}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
