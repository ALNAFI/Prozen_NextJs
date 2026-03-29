"use client";

import { memo } from "react";
import PropTypes from "prop-types";
import { useCountUp } from "../../../hooks/useCountUp";
import { statsData } from "../../../data/aboutUsData";

const StatItem = memo(function StatItem({ stat }) {
  const { count, countRef } = useCountUp(stat.value, 4000, 500);
  const displayValue = stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div className="ht-stats-items" ref={countRef}>
      <h2 className="number">
        <span className="count">{displayValue}</span>
        {stat.suffix}
      </h2>
      <h4>{stat.title}</h4>
      <p>{stat.description}</p>
    </div>
  );
});
StatItem.displayName = "StatItem";

export default function StatsArea({ pad = "" }) {
  return (
    <section className={`ht-stats-area section-padding fix ${pad}`}>
      <div className="container">
        <div
          className="ht-stats-wrapper"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {statsData.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

StatsArea.propTypes = {
  pad: PropTypes.string,
};
