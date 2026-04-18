import { useState, useEffect, useRef } from "react";

export const useCountUp = (endValue, duration = 4000, startDelay = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!isVisible) return;

    const startAnimation = () => {
      setCount(0);
      startTimeRef.current = performance.now() + startDelay;

      const animate = (currentTime) => {
        if (!startTimeRef.current) {
          startTimeRef.current = currentTime;
        }

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = endValue * easeOutQuart;

        setCount(Math.max(0, currentCount));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, endValue, duration, startDelay]);

  return { count, countRef };
};
