"use client";

import Link from "next/link";
import Image from "next/image";
import { useInputForm } from "../../../hooks/useInputForm";
import {
  footerQuickLinks,
  footerServiceLinks,
  footerCopyrightLinks,
} from "../../../data/homeTwoData";
import { footerSocialLinks } from "../../../data/footerData";
import { getCurrentYear } from "../../../utils/getCurrentYear";

export default function Footer() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting, formStatus } =
    useInputForm();

  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        <div className="ht-footer-wrapper section-padding">
          <div className="row gy-5">
            {/* Left */}
            <div className="col-xl-4">
              <div className="ht-footer-info" data-aos="fade-up" data-aos-delay="300">
                <Link href="/">
                  <Image
                    src="/images/logo/logo-white-2.svg"
                    alt="logo"
                    width={160}
                    height={40}
                  />
                </Link>

                <p className="desc">
                  A state of plants, usually at night, when their <br />
                  leaflets approach each other and the flowers <br />
                  close and droop, or are covered.
                </p>

                <ul className="footer-social">
                  {footerSocialLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.to}>
                        <i className={`fa-brands ${item.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="offset-xl-1 col-xl-7">
              <div className="ht-footer-widgets">
                {/* Quick Links */}
                <div className="widget-item" data-aos="fade-up" data-aos-delay="600">
                  <h5 className="head">Quick Links</h5>
                  <ul className="link-list">
                    {footerQuickLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="widget-item" data-aos="fade-up" data-aos-delay="900">
                  <h5 className="head">Our Services</h5>
                  <ul className="link-list">
                    {footerServiceLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subscribe */}
                <div
                  className="widget-subscriber"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>Subscribe for updates and exclusive offers!</h5>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-right"></i>
                      )}
                    </button>
                    {errors.email && (
                      <span className="text-danger small mt-1 d-block">
                        {errors.email.message}
                      </span>
                    )}
                    {formStatus.message && (
                      <div
                        className={`mt-2 small ${
                          formStatus.type === "success"
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {formStatus.message}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="ht-footer-copyright ht-footer-copyright-2"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <p>
            ©{getCurrentYear()} <span>Hurraytheme</span>. All rights reserved.
          </p>
          <ul className="copyright-links">
            {footerCopyrightLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
