"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true"); 
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
}
