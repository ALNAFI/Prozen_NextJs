"use client";

import { useState, useEffect } from "react";
import { footerSocialLinks } from "../../../data/footerData";
import { footerMenu } from "../../../data/HomeThreeData";
import Link from "next/link";
import NextImage from "next/image";

const FOOTER_BG = "/images/footer/bg-3.jpg";

export default function Footer() {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    const img = new window.Image();
    img.src = FOOTER_BG;
    img.onload = () => {
      setBgStyle({
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      });
    };
  }, []);

  return (
    <footer className="ht-footer-areas fix" style={bgStyle}>
      <div className="container">
        <div className="ht-footer-three section-padding">
          <div className="shape float-bob-y">
            <NextImage
              src="/images/shape/10.svg"
              alt="shape"
              width={180}
              height={180}
              style={{ width: "auto", height: "auto" }}
              loading="lazy"
            />
          </div>

          <div className="row gy-5">
            {/* Left */}
            <div className="col-xl-5 col-lg-6">
              <div className="ht-footer-info">
                <Link href="/">
                  <NextImage
                    src="/images/logo/logo-white-2.svg"
                    alt="logo"
                    width={160}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>

                <p className="desc">
                  A state of plants, usually at night, when their <br />
                  leaflets approach each other and the flowers <br />
                  close and droop, or are covered.
                </p>

                <ul className="footer-social">
                  {footerSocialLinks.map((item, i) => (
                    <li key={i}>
                      <Link href={item.to}>
                        <i className={`fa-brands ${item.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="col-xl-7 col-lg-6">
              <div className="content">
                <h2>
                  Let&apos;s talk about <br /> your business <br /> goals
                </h2>
                <Link href="/contact" className="ht-btn style-2">
                  Get Updates
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="ht-footer-copyrights">
          <p>
            ©2025 <span>Hurraytheme</span>. All rights reserved.
          </p>

          <div className="ht-footer-menu">
            <Link href="mailto:prozen@gmail.com">
              <NextImage
                src="/images/icon/8.svg"
                alt="icon"
                width={20}
                height={20}
                style={{ width: "auto", height: "auto" }}
              />{" "}
              Prozen@gmail.com
            </Link>

            <ul className="menu-list">
              {footerMenu.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
