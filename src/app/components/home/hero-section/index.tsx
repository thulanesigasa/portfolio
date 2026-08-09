"use client";

import React, { useEffect, useState } from "react";
import OrbitalHeroSection from "@/app/components/ui/orbital-hero-section";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

const HeroSection = () => {
  const narrow = useNarrow();

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="eternal-hero-section">
      <OrbitalHeroSection
        focus={narrow ? [0.5, 0.82] : [0.72, 0.45]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={narrow ? 0.94 : 0.88}
        viewRadius={narrow ? 2.2 : 3.2}
        lead={narrow ? 0.05 : 0.12}
        glow={narrow ? 0.6 : 1}
      >
        <div className="eternal-hero-overlay-content">
          <h1 className="eternal-title" onClick={scrollToSection("about")}>
            T.s Industries
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
      </OrbitalHeroSection>
    </section>
  );
};

export default HeroSection;
