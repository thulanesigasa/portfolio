"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const fullMenuData = [
  {
    title: "Homepage",
    links: [
      { label: "Landing page", href: "#!" },
      { label: "Personal", href: "#!" },
      { label: "Portfolio slider", href: "#!" },
    ]
  },
  {
    title: "Portfolio",
    links: [
      { label: "Transport & Logistics", href: "#!" },
      { label: "Food & Beverage", href: "#!" },
      { label: "Beauty & Wellness", href: "#!" },
      { label: "Lifestyle & Services", href: "#!" },
      { label: "Health & Education", href: "#!" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Services List", href: "#services" },
      { label: "Single service", href: "#!" },
    ]
  },
  {
    title: "Other pages",
    links: [
      { label: "Team", href: "#!" },
      { label: "Contact", href: "#contact" },
      { label: "404", href: "#!" },
    ]
  }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(2); // Default to Services open

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
      <div className={`fs-menu-overlay ${menuOpen ? "open" : ""}`}>
        <div className="container h-100">
          <div className="fs-menu-content">
            {/* Left Column: Main Navigation */}
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
                        {isActive && (
                          <ul className="fs-sub-nav">
                            {item.links.map((link, subIndex) => (
                              <li key={subIndex}>
                                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
                    <li><Link href="#!">Gentleman&apos;s Barbershop</Link></li>
                    <li><Link href="#!">Car Rental Platform</Link></li>
                    <li><Link href="#!">Clean Earth Initiative</Link></li>
                    <li><Link href="#!">EcoVolt Energy Systems</Link></li>
                    <li><Link href="#!">Foodi Delivery App</Link></li>
                    <li><Link href="#!">Healthcare &amp; Hospital Portal</Link></li>
                    <li><Link href="#!">Skincare &amp; Cosmetics Shop</Link></li>
                    <li><Link href="#!">Wanderlust Travel Planner</Link></li>
                  </ul>
                </div>
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Useful links</h6>
                  <ul className="fs-menu-list">
                    <li><Link href="#!">Privacy Policy</Link></li>
                    <li><Link href="#!">Terms and conditions</Link></li>
                    <li><Link href="#!">Cookie Policy</Link></li>
                    <li><Link href="#!">Careers</Link></li>
                  </ul>
                </div>
              </div>

              <div className="fs-menu-divider"></div>

              <div className="fs-menu-bottom-row">
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">South Africa</h6>
                  <p className="fs-menu-text">
                    6866 Ext 7 Sakhile Standerton<br/>
                    2431 +27 60 476 6693
                  </p>
                </div>
                <div className="fs-menu-block">
                  <h6 className="fs-menu-heading">Zimbabwe</h6>
                  <p className="fs-menu-text">
                    3125 Entumbane Street<br/>
                    Bulawayo +263 78 502 9078
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
