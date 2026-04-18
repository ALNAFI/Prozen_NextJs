"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const OffcanvasContext = createContext(null);

const noop = () => {};
const OFFCANVAS_FALLBACK = {
  isOpen: false,
  openOffcanvas: noop,
  closeOffcanvas: noop,
};

export function OffcanvasProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = useCallback(() => setIsOpen(true), []);
  const closeOffcanvas = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openOffcanvas, closeOffcanvas }),
    [isOpen, openOffcanvas, closeOffcanvas],
  );

  return (
    <OffcanvasContext.Provider value={value}>
      {children}
    </OffcanvasContext.Provider>
  );
}

OffcanvasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useOffcanvas() {
  const ctx = useContext(OffcanvasContext);
  if (!ctx) return OFFCANVAS_FALLBACK;
  return ctx;
}
