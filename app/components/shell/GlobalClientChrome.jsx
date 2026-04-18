"use client";

import PropTypes from "prop-types";
import Offcanvas from "../common/Offcanvas";
import BackToTop from "../ui/BackToTop";
import Cursor from "../ui/Cursor";
import ScrollToTop from "../ui/ScrollToTop";

export default function GlobalClientChrome({ chrome }) {
  return (
    <>
      {chrome.offcanvas && <Offcanvas />}
      {chrome.scrollToTop && <ScrollToTop />}
      {chrome.backToTop && <BackToTop />}
      {chrome.cursor && <Cursor />}
    </>
  );
}

GlobalClientChrome.propTypes = {
  chrome: PropTypes.shape({
    offcanvas: PropTypes.bool,
    scrollToTop: PropTypes.bool,
    backToTop: PropTypes.bool,
    cursor: PropTypes.bool,
  }).isRequired,
};
