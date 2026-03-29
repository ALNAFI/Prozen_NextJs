"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Search({ isOpen = false, onClose }) {
  const searchBarRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !onClose) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || typeof onClose !== "function") return;
    const handleClickOutside = (e) => {
      const isOutsideSearchBar = searchBarRef.current && !searchBarRef.current.contains(e.target);
      const isNotSearchToggle = !e.target.closest(".search-toggle");
      if (isOutsideSearchBar && isNotSearchToggle) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="ht-offcanvas-overlay active"
          onClick={() => typeof onClose === "function" && onClose()}
          onKeyDown={(e) => e.key === "Enter" && typeof onClose === "function" && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close search"
        />
      )}
      <div
        ref={searchBarRef}
        className={`ht-header-search-bar d-flex align-items-center justify-content-center${isOpen ? " open" : ""}`}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0
        }}
      >
        <button
          type="button"
          className="ht-search-close"
          onClick={() => typeof onClose === "function" && onClose()}
          aria-label="Close search"
        >
          x
        </button>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="ht-search-bar">
                <h3 className="ht-search-title text-center mb-20">
                  What are you looking for?
                </h3>
                <div className="ht-form-box ht-search-form-box">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Keywords..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
