"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOffcanvas } from "../../contexts/OffcanvasContext";
import { offcanvasInfo, socialLinks } from "../../data/offcanvasData";
import { headerMenuData } from "../../data/headerMenuData";

export default function Offcanvas() {
  const { isOpen, closeOffcanvas } = useOffcanvas();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = useCallback((e, index) => {
    e.preventDefault();
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <div
        className={`ht-offcanvas${isOpen ? " ht-offcanvas-open" : ""}`}
      >
        <div className="ht-offcanvas-wrapper">
          {/* Header */}
          <div className="ht-offcanvas-header mb-50">
            <Link href="/" className="ht-offcanvas-logo">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={160}
                height={40}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>

            <button
              type="button"
              className="ht-offcanvas-toggle-close"
              onClick={closeOffcanvas}
              aria-label="Close menu"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="ht-offcanvas-menu d-xl-none mb-50">
            <nav>
              <ul>
                {headerMenuData.map((item, i) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isSubOpen = openIndex === i;

                  return (
                    <li
                      key={i}
                      className={hasChildren ? `has-dropdown${isSubOpen ? " active" : ""}` : ""}
                    >
                      {hasChildren ? (
                        <>
                          <Link href={item.to || "#"}
                            onClick={(e) => toggleSubmenu(e, i)}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            className="ht-menu-close"
                            onClick={(e) => toggleSubmenu(e, i)}
                            aria-label={isSubOpen ? "Close submenu" : "Open submenu"}
                          >
                            <i className="fas fa-chevron-right" />
                          </button>
                          <ul
                            className="sub-menu"
                            style={{
                              display: "block",
                              maxHeight: isSubOpen ? "500px" : 0,
                              overflow: "hidden",
                              transition: "max-height 0.6s ease-in-out",
                            }}
                          >
                            {item.children.map((sub, j) => (
                              <li key={j}>
                                <Link href={sub.to} onClick={closeOffcanvas}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={item.to || "#"} onClick={closeOffcanvas}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="ht-offcanvas-content d-none d-xl-block mb-50">
            <h2 className="ht-offcanvas-content__title">Hello There!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* Info */}
          <div className="ht-offcanvas-info mb-50">
            <h3 className="ht-offcanvas__title">Information</h3>

            {offcanvasInfo.map((item, index) => (
              <span key={index}>
                <Link href={item.to}>
                  {item.label} <br />
                </Link>
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="ht-offcanvas-social mb-50">
            <h3 className="ht-offcanvas__title">Follow Us</h3>

            {socialLinks.map((item, index) => (
              <Link href={item.to} key={index}>
                <i className={`fab ${item.icon}`} />{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`ht-offcanvas-overlay${isOpen ? " ht-offcanvas-overlay-open" : ""}`}
        onClick={closeOffcanvas}
        onKeyDown={(e) => e.key === "Enter" && closeOffcanvas()}
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      />
    </>
  );
}
