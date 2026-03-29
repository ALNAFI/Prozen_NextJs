"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const KEY_SCROLL = 100;
    function onKeyDown(e) {
      const active = document.activeElement;
      const isInput = active && (
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable
      );
      if (isInput) return;

      let delta = 0;
      let target = null;
      switch (e.key) {
        case "ArrowDown":
          delta = KEY_SCROLL;
          break;
        case "ArrowUp":
          delta = -KEY_SCROLL;
          break;
        case "PageDown":
          delta = window.innerHeight;
          break;
        case "PageUp":
          delta = -window.innerHeight;
          break;
        case " ":
          delta = e.shiftKey ? -window.innerHeight : window.innerHeight;
          break;
        case "Home":
          target = 0;
          break;
        case "End":
          target = instance.limit;
          break;
        default:
          return;
      }
      e.preventDefault();
      if (target !== null) {
        instance.scrollTo(target, { duration: 1.2 });
      } else {
        instance.scrollTo(instance.scroll + delta, { duration: 1 });
      }
    }
    window.addEventListener("keydown", onKeyDown, { passive: false });

    function raf(time) {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    setLenis(instance);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

LenisProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLenisInstance() {
  return useContext(LenisContext);
}