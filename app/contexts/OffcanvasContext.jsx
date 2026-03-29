"use client";

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const OffcanvasContext = createContext(null);

export function OffcanvasProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => setIsOpen(true);
  const closeOffcanvas = () => setIsOpen(false);

  return (
    <OffcanvasContext.Provider
      value={{ isOpen, openOffcanvas, closeOffcanvas }}
    >
      {children}
    </OffcanvasContext.Provider>
  );
}

OffcanvasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useOffcanvas() {
  const ctx = useContext(OffcanvasContext);
  if (!ctx) {
    return {
      isOpen: false,
      openOffcanvas: () => {},
      closeOffcanvas: () => {},
    };
  }
  return ctx;
}
