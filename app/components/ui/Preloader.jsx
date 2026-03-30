"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    // Always resolve loading via an async callback to avoid
    // react-hooks/set-state-in-effect (synchronous setState in effect body).
    const delay = hasVisited ? 0 : 1500;

    const timer = setTimeout(() => {
      setLoading(false);
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
      }
    }, delay);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
}
