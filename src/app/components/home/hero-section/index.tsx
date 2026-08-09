"use client";

import React, { useState } from "react";
import Script from "next/script";

const HANA_SCENE_URL = "https://prod.spline.design/7qpgU9QNeMfZ6spP-2LU/scene.hanacode";

const HeroSection = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  return (
    <section className="eternal-hero-section">
      <Script
        src="https://cdn.spline.design/@splinetool/hana-viewer@1.2.54/hana-viewer.js"
        type="module"
        onLoad={() => setIsScriptLoaded(true)}
      />

      <div className="hana-webgl-wrapper">
        {!isScriptLoaded && (
          <div className="spline-loader-overlay">
            <div className="spline-spinner" />
            <span>Loading 3D Experience…</span>
          </div>
        )}
        
        {/* Render Hana Viewer Custom Element cleanly in React */}
        {React.createElement("hana-viewer", {
          url: HANA_SCENE_URL,
          style: { width: "100%", height: "100%", display: "block" },
        })}
      </div>
    </section>
  );
};

export default HeroSection;
