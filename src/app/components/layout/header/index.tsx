"use client";

import { useState, useEffect } from "react";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active nav link based on visible section
      const sectionIds = ["about", "journey", "services", "works", "contact"];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image
              src={getImgPath("/images/logo/logo.svg")}
              alt="T.s Indurstries"
              width={44}
              height={44}
              className="nav-logo-img"
            />
            <span className="nav-logo-text">T.s Indurstries</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link${activeSection === id ? " active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="nav-right">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-outline nav-cta"
            >
              Contact Us
            </a>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="mobile-nav">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link${activeSection === id ? " active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
