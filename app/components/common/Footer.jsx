import Link from "next/link";
import { getCurrentYear } from "../../utils/getCurrentYear";
import { footerMenus, footerSocialLinks } from "../../data/footerData";
export default function Footer() {
  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        {/* Top */}
        <div className="ht-footer-top-wrapper">
          <div className="ht-footer-top-left">
            <Link href="/">
              <img src="/images/logo/logo-white.svg" alt="logo" />
            </Link>
            <p className="desc">
              At the core of our ethos lies a dedication to our clients.
              <br />
              Your success is our shared triumph, and we&apos;re.
            </p>
          </div>

          <div className="ht-footer-top-right">
            <ul className="footer-social">
              {footerSocialLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.to}>
                    <i className={`fa-brands ${item.icon}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Widgets */}
        <div className="ht-footer-widget-wrapper">
          <div className="ht-footer-widget">
            {footerMenus.map((menu, index) => (
              <div className="ht-footer-widget-items" key={index}>
                <h5 className="head">{menu.title}</h5>
                <ul className="link-list">
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="ht-footer-copyright">
          <p>
            ©{getCurrentYear()} <span>Hurraytheme</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
