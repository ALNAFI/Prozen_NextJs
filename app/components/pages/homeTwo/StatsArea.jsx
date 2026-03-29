"use client";

import { memo } from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { statsData } from "../../../data/homeTwoData";

const StatItem = memo(function StatItem({ item }) {
  const { count, countRef } = useCountUp(item.count, 4000, 0);
  const displayValue = item.count % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div className="ht-stats-items-2" ref={countRef}>
      <h2 className="number">
        <span className="count">{displayValue}</span>
        {item.suffix}
      </h2>

      <h4>{item.title}</h4>

      <p>{item.desc}</p>
    </div>
  );
});
StatItem.displayName = "StatItem";

export default function StatsArea() {
  const { shape, items } = statsData;

  return (
    <section className="ht-stats-area-2 section-padding fix">
      {/* Shapes */}
      <div className="shape">
        <div className="up">
          <img src={shape.up} alt="shape" />
        </div>
        <div className="down">
          <img src={shape.down} alt="shape" />
        </div>
      </div>

      <div className="container">
        <div className="ht-stats-wrapper-2" data-aos="fade-up" data-aos-delay="200">
          {items.map((item) => (
            <StatItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
