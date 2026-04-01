"use client";

import { LenisProvider } from "./contexts/LenisContext";
import { OffcanvasProvider } from "./contexts/OffcanvasContext";
import Offcanvas from "./components/common/Offcanvas";
import BackToTop from "./components/ui/BackToTop";
import Cursor from "./components/ui/Cursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import AOSInit from "./components/ui/AOSInit";
import { themeOptions } from "./data/themeOptions";

export default function Providers({ children }) {
  const options = themeOptions;

  const content = (
    <>
      {options.aos && <AOSInit />}
      {children}
      {options.offcanvas && <Offcanvas />}
      {options.scrollToTop && <ScrollToTop />}
      {options.backToTop && <BackToTop />}
      {options.cursor && <Cursor />}
    </>
  );

  return (
    <>
      {options.lenis ? (
        <LenisProvider>
          <OffcanvasProvider>{content}</OffcanvasProvider>
        </LenisProvider>
      ) : (
        <OffcanvasProvider>{content}</OffcanvasProvider>
      )}
    </>
  );
}
