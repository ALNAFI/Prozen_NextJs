"use client";

import { LenisProvider } from "./contexts/LenisContext";
import { OffcanvasProvider } from "./contexts/OffcanvasContext";
import Offcanvas from "./components/common/Offcanvas";
import BackToTop from "./components/ui/BackToTop";
import Cursor from "./components/ui/Cursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import AOSInit from "./components/ui/AOSInit";

export default function Providers({ children }) {
  return (
    <LenisProvider>
      <OffcanvasProvider>
        <AOSInit />
        {children}
        <Offcanvas />
        <ScrollToTop />
        <BackToTop />
        <Cursor />
      </OffcanvasProvider>
    </LenisProvider>
  );
}
