"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const fullMenuData = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Our Journey", href: "/#journey" },
    ]
  },
  {
    title: "Expertise",
    links: [
      { label: "Custom Web Applications", href: "/services/custom-web-applications" },
      { label: "Robust SaaS Solutions", href: "/services/robust-saas-solutions" },
      { label: "UI/UX & Design Systems", href: "/services/ui-ux-design-systems" },
    ]
  },
  {
    title: "Portfolio",
    links: [
      { label: "All Works", href: "/#works" },
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "Get in Touch", href: "/contact" },
    ]
  }
];

const projects = [
  { title: "SaaS Dashboard & Analytics", href: "#works" },
  { title: "Mobile E-Commerce App", href: "#works" },
  { title: "Cloud Architecture Migration", href: "#works" },
  { title: "Real Estate Web Portal", href: "#works" },
  { title: "AI Content Generator App", href: "#works" },
  { title: "Corporate Design System", href: "#works" },
];

const socialLinks = [
  { title: "GitHub", href: "https://github.com/thulanesigasa" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/thulanesigasa/" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-right" style={{ width: "100%", justifyContent: "flex-end" }}>
              <button
                className={`hamburger${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                style={{ zIndex: 1000 }}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fs-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="container h-100">
          <div className="fs-menu-content" onClick={(e) => e.stopPropagation()}>
            {/* Left Column: Main Navigation (Accordion) */}
            <div className="fs-menu-left">
              <nav className="fs-main-nav">
                <ul>
                  {fullMenuData.map((item, index) => {
                    const isActive = activeMenuIndex === index;
                    return (
                      <li key={index} className={`fs-nav-item ${isActive ? "active" : ""}`}>
                        <div 
                          className="fs-nav-title" 
                          onClick={() => setActiveMenuIndex(isActive ? null : index)}
                        >
                          {isActive && <span className="fs-nav-dot"></span>}
                          {item.title}
                        </div>
                        <div 
                          className="fs-sub-nav-wrapper"
                          style={{
                            display: "grid",
                            gridTemplateRows: isActive ? "1fr" : "0fr",
                            transition: "grid-template-rows 0.4s ease-in-out"
                          }}
                        >
                          <div style={{ overflow: "hidden" }}>
                            <ul className="fs-sub-nav">
                              {item.links.map((link, subIndex) => (
                                <li key={subIndex} style={{ 
                                  opacity: isActive ? 1 : 0, 
                                  transform: isActive ? "translateY(0)" : "translateY(10px)",
                                  transition: `all 0.4s ease ${subIndex * 0.05 + 0.1}s`
                                }}>
                                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Right Column: Projects, Links, Addresses */}
            <div className="fs-menu-right">
              <div className="fs-menu-top-row">
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Projects</h6>
                  <ul className="fs-menu-list">
                    {projects.map((proj, idx) => (
                      <li key={idx}>
                        <a href={proj.href} onClick={(e) => handleNavClick(e, proj.href)}>
                          {proj.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Socials</h6>
                  <ul className="fs-menu-list">
                    {socialLinks.map((social, idx) => (
                      <li key={idx}>
                        <Link href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="fs-menu-divider"></div>

              <div className="fs-menu-bottom-row">
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Contact Details</h6>
                  <p className="fs-menu-text">
                    <a href="mailto:pharezsigasa@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                      pharezsigasa@gmail.com
                    </a>
                    <br />
                    <a href="tel:+447544357979" style={{ color: "inherit", textDecoration: "none" }}>
                      +44 75 4435 7979
                    </a>
                  </p>
                </div>
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Website</h6>
                  <p className="fs-menu-text">
                    <a href="https://ts-industries.co.za" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                      ts-industries.co.za
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
