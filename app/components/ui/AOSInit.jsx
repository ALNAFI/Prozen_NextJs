"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function AOSInit() {
  const pathname = usePathname();
  const aosRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      await new Promise((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      if (cancelled) return;

      const { default: AOS } = await import("aos");
      if (cancelled) return;

      aosRef.current = AOS;
      AOS.init({
        duration: 1000,
        once: true,
      });
      AOS.refresh();
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const AOS = aosRef.current;
    if (!AOS) return;

    const id = requestAnimationFrame(() => {
      AOS.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
