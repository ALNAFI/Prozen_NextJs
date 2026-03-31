"use client";

import { useOffcanvas } from "../../contexts/OffcanvasContext";
export default function MobileMenu() {
    const { openOffcanvas } = useOffcanvas();
    return (
        <button
            type="button"
            className="ht-menu-btn d-lg-none offcanvas-toggle"
            onClick={openOffcanvas}
            aria-label="Open menu"
        >
            <i className="fa-solid fa-bars-staggered" />
        </button>
    )
}
