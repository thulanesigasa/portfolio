"use client";

import React, { useState } from "react";
import Script from "next/script";

const HANA_SCENE_URL = "https://prod.spline.design/7qpgU9QNeMfZ6spP-2LU/scene.hanacode";

const HeroSection = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="eternal-hero-section">
      <Script
        src="https://cdn.spline.design/@splinetool/hana-viewer@1.2.54/hana-viewer.js"
        type="module"
        onLoad={() => setIsScriptLoaded(true)}
      />

      {/* 3D Spline Canvas Container (Scaled to be fully visible inside screen) */}
      <div className="hana-webgl-wrapper">
        {!isScriptLoaded && (
          <div className="spline-loader-overlay">
            <div className="spline-spinner" />
            <span>Loading 3D Scene…</span>
          </div>
        )}
        
        {React.createElement("hana-viewer", {
          url: HANA_SCENE_URL,
          style: { width: "100%", height: "100%", display: "block" },
        })}
      </div>

      {/* Hero Overlay Content & Text */}
      <div className="eternal-hero-overlay-content">
        <div className="eternal-hero-badge">
          <span className="badge-pulse-cyan" />
          <span>NEXT-GEN SOFTWARE LAB</span>
        </div>

        <h1 className="eternal-title" onClick={scrollToSection("about")}>
          T.S INDUSTRIES.
        </h1>

        <p className="eternal-subtitle">
          Engineered beyond symmetry.
          <br />
          A revolution in web development &amp; custom software engineering.
        </p>

        <div className="eternal-cta-group">
          <button className="eternal-btn-primary" onClick={scrollToSection("works")}>
            DISCOVER OUR WORK
            <span className="btn-bracket">↵</span>
          </button>
          <button className="eternal-btn-outline" onClick={scrollToSection("contact")}>
            GET IN TOUCH
          </button>
        </div>

        <button className="eternal-scroll-hint" onClick={scrollToSection("about")}>
          EXPLORE THE VOID ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
