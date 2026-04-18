import { useState, useEffect } from "react";
const STICKY_THRESHOLD = 250;

export const useStickyHeader = (threshold = STICKY_THRESHOLD) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold);
    };

    handleScroll();
    const options = { passive: true };
    window.addEventListener("scroll", handleScroll, options);
    return () => window.removeEventListener("scroll", handleScroll, options);
  }, [threshold]);

  return isSticky;
};
