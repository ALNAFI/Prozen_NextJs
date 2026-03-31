"use client";

import { headerMenuData } from "../../../data/HomeThreeData";
import Link from "next/link";
import Image from "next/image";
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
        <div className={`ht-main-header header-3${isSticky ? " sticky" : ""}`}>
          <div className="container-fluid">
            <div className="ht-menu-wrapper">
              {/* Left */}
              <div className="ht-menu-left">
                <div className="ht-menu-logo">
                  <Link href="/home-two">
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
                      {headerMenuData.map((item, i) => (
                        <li
                          key={i}
                          className={item.children ? "has-dropdown" : ""}
                        >
                          <Link href={item.link || "#"}>{item.title}</Link>

                          {item.children && (
                            <ul className="sub-menu">
                              {item.children.map((sub, j) => (
                                <li key={j}>
                                  <Link href={sub.link}>{sub.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div
                  className="search d-none d-lg-block search-toggle"
                  onClick={handleSearchClick}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
                  role="button"
                  tabIndex={0}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <Link href="/contact" className="ht-btn d-none d-lg-block">
                  get in touch
                </Link>

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
