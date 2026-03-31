"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCountUp } from "../../../hooks/useCountUp";
import { aboutAreaData } from "../../../data/homeTwoData";

const ReviewCounter = memo(function ReviewCounter({ review }) {
  const { count, countRef } = useCountUp(review.count, 4000, 0);
  const displayValue = review.count % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div className="client-review float-bob-y" ref={countRef}>
      <h2>
        <span className="count">{displayValue}</span>
        {review.suffix}
      </h2>
      <p>{review.text}</p>
    </div>
  );
});
ReviewCounter.displayName = "ReviewCounter";

const StatItem = memo(function StatItem({ item }) {
  const { count, countRef } = useCountUp(item.count, 4000, 0);
  const displayValue = item.count % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div
      className="review-item"
      data-aos="fade-up"
      data-aos-delay={item.delay}
      ref={countRef}
    >
      <h2>
        <span className="count">{displayValue}</span>
        {item.suffix}
      </h2>
      <p>{item.label}</p>
    </div>
  );
});
StatItem.displayName = "StatItem";

export default function AboutArea() {
  const { image, section, stats, button } = aboutAreaData;

  return (
    <section className="ht-about-area section-padding fix">
      <div className="container">
        <div className="ht-about-wrapper">
          <div className="row align-items-lg-center g-5">
            {/* Left image */}
            <div className="col-lg-6 col-sm-12">
              <div
                className="ht-about-img ht-about-img-2"
                data-aos="fade-up"
                data-aos-delay={image.delay}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={860}
                  height={640}
                  priority
                />

                <ReviewCounter review={image.review} />
              </div>
            </div>

            {/* Right content */}
            <div className="col-lg-6 col-sm-12">
              <div className="ht-about-content style-2">
                <div className="section-title">
                  <span className="subtitle" data-aos="fade-up" data-aos-delay="200">
                    {section.subtitle}
                  </span>

                  <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                    {section.title}
                  </h2>

                  <p>{section.desc}</p>
                </div>

                {/* Stats */}
                <div className="client-reviews">
                  {stats.map((item) => (
                    <StatItem key={item.id} item={item} />
                  ))}
                </div>

                {/* Button */}
                <Link href={button.link}
                  className="ht-btn style-3"
                  data-aos="fade-up"
                  data-aos-delay={button.delay}
                >
                  {button.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
