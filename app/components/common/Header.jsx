"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "./TopHeader";
import { headerMenuData } from "../../data/headerMenuData";

import { useStickyHeader } from "../../hooks/useStickyHeader";
import MobileMenu from "../buttons/MobileMenu";

export default function Header() {
  
  const isSticky = useStickyHeader();

  return (
    <header className="ht-header-area header-1">
      {/* Top Header */}
      <TopHeader />

      {/* Main Header */}
      <div
        className={`ht-main-header header-1${isSticky ? " sticky" : ""}`}
      >
        <div className="container">
          <div className="ht-menu-wrapper">
            <div className="ht-menu-left">
              {/* Logo */}
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

              {/* Menu */}
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active">
                  <ul>
                    {headerMenuData.map((menu, index) => (
                      <li
                        key={index}
                        className={
                          menu.children ? "has-dropdown" : ""
                        }
                      >
                        {menu.to ? (
                          <Link href={menu.to}>
                            {menu.label}
                          </Link>
                        ) : (
                          <Link href="#">
                            {menu.label}
                          </Link>
                        )}

                        {menu.children && (
                          <ul className="sub-menu">
                            {menu.children.map((child, i) => (
                              <li key={i}>
                                <Link href={child.to}>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right */}
            <div className="ht-menu-right">
              <Link href="/contact"
                className="ht-btn d-none d-lg-block"
              >
                lets get in touch
              </Link>

              <MobileMenu />
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}
