"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const innerCursor = document.querySelector(".cursor-inner");
    const outerCursor = document.querySelector(".cursor-outer");

    if (!innerCursor || !outerCursor) return;

    let isStuck = false;

    const handleMouseMove = (e) => {
      if (!isStuck) {
        outerCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      innerCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest("a, .cursor-pointer");
      if (!target) return;

      innerCursor.classList.add("cursor-hover");
      outerCursor.classList.add("cursor-hover");
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest("a, .cursor-pointer");
      if (!target) return;

      innerCursor.classList.remove("cursor-hover");
      outerCursor.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseover", handleMouseEnter);
    document.body.addEventListener("mouseout", handleMouseLeave);

    innerCursor.style.visibility = "visible";
    outerCursor.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleMouseEnter);
      document.body.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}
