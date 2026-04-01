"use client";

import Link from "next/link";
import Image from "next/image";
import { headerMenuData } from "../../../data/headerMenuData";
import { useStickyHeader } from "../../../hooks/useStickyHeader";
import { useOffcanvas } from "../../../contexts/OffcanvasContext";
import { useState } from "react";
import Search from "../../ui/Search";

export default function Header({ onSearchClick }) {
  const isSticky = useStickyHeader();
  const { openOffcanvas } = useOffcanvas();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick =
    typeof onSearchClick === "function"
      ? onSearchClick
      : () => setSearchOpen(true);

  return (
    <>
      <header className="ht-header-area">
        <div className={`ht-main-header header-2${isSticky ? " sticky" : ""}`}>
          <div className="container">
            <div className="ht-menu-wrapper">
              {/* Left */}
              <div className="ht-menu-left">
                <div className="ht-menu-logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/logo.svg"
                      alt="logo"
                      width={160}
                      height={40}
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="ht-menu-right">
                <div className="ht-menu-main d-none d-lg-block">
                  <nav className="ht-mobile-menu-active">
                    <ul>
                      {headerMenuData.map((menu, index) => {
                        const hasChildren =
                          menu.children && menu.children.length > 0;

                        return (
                          <li
                            key={index}
                            className={hasChildren ? "has-dropdown" : ""}
                          >
                            {/* Parent */}
                            {menu.to ? (
                              <Link href={menu.to}>{menu.label}</Link>
                            ) : (
                              <Link href="#">{menu.label}</Link>
                            )}

                            {/* Dropdown */}
                            {hasChildren && (
                              <ul className="sub-menu">
                                {menu.children.map((child, idx) => (
                                  <li key={idx}>
                                    <Link href={child.to}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                {/* Search */}
                <button
                  type="button"
                  className="search d-none d-lg-block search-toggle"
                  onClick={handleSearchClick}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
                  aria-label="Open search"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    lineHeight: "inherit",
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                {/* CTA */}
                <Link href="/contact" className="ht-btn d-none d-lg-block">
                  get in touch
                </Link>

                {/* Mobile button */}
                <button
                  type="button"
                  className="ht-menu-btn d-lg-none offcanvas-toggle"
                  onClick={openOffcanvas}
                  aria-label="Open menu"
                >
                  <i className="fa-solid fa-bars-staggered"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {typeof onSearchClick !== "function" && (
        <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
}
