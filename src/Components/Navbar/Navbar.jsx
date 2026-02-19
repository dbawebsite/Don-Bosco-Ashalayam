import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LogoImage from "./../../assets/DonBoscoLogo.webp";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 800) setMenuOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    function handleLinkClick() {
        setMenuOpen(false);
    }

    return (
        <header
            className={
                "db-navbar" +
                (scrolled ? " db-navbar--scrolled" : "") +
                (menuOpen ? " db-navbar--menu-open" : "")
            }
            role="banner"
        >
            <nav
                className="db-navbar__inner"
                role="navigation"
                aria-label="Main navigation"
            >
                <a
                    className="db-navbar__brand"
                    href="/"
                    onClick={handleLinkClick}
                >
                    <img
                        src={LogoImage}
                        alt="Don Bosco Ashalayam logo"
                        className="db-navbar__logo-img"
                    />
                    <span className="db-navbar__brand-text">
                        Don Bosco Ashalayam
                    </span>
                </a>

                <div className="db-nav-actions">
                    <ul
                        className="db-nav-links"
                        role="menubar"
                        aria-label="Primary"
                    >
                        <li role="none">
                            <a
                                role="menuitem"
                                className="db-nav-link"
                                href="/"
                                onClick={handleLinkClick}
                            >
                                Home
                            </a>
                        </li>
                        <li role="none">
                            <a
                                role="menuitem"
                                className="db-nav-link"
                                href="/about"
                                onClick={handleLinkClick}
                            >
                                About
                            </a>
                        </li>
                        <li role="none">
                            <a
                                role="menuitem"
                                className="db-nav-link"
                                href="/gallery"
                                onClick={handleLinkClick}
                            >
                                Gallery
                            </a>
                        </li>
                        <li role="none">
                            <a
                                role="menuitem"
                                className="db-nav-link"
                                href="#contact"
                                onClick={handleLinkClick}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <a
                        className="db-nav-cta"
                        href="/contribute"
                        onClick={handleLinkClick}
                    >
                        Contribute
                    </a>

                    <button
                        className={
                            "db-nav-toggle" +
                            (menuOpen ? " db-nav-toggle--open" : "")
                        }
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        {menuOpen ? "Close" : "Open"}
                    </button>
                </div>
            </nav>

            <div
                className={
                    "db-nav-mobile" + (menuOpen ? " db-nav-mobile--open" : "")
                }
                aria-hidden={!menuOpen}
            >
                <ul className="db-nav-mobile__list" role="menu">
                    <li role="none">
                        <a
                            className="db-nav-mobile__link"
                            href="/"
                            onClick={handleLinkClick}
                        >
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a
                            className="db-nav-mobile__link"
                            href="/about"
                            onClick={handleLinkClick}
                        >
                            About
                        </a>
                    </li>
                    <li role="none">
                        <a
                            className="db-nav-mobile__link"
                            href="/gallery"
                            onClick={handleLinkClick}
                        >
                            Gallery
                        </a>
                    </li>
                    <li role="none">
                        <a
                            className="db-nav-mobile__link"
                            href="#contact"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </a>
                    </li>
                    <li role="none">
                        <a
                            className="db-nav-mobile__link db-nav-mobile__link--cta"
                            href="/contribute"
                            onClick={handleLinkClick}
                        >
                            Contribute
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
