"use client";

import React, { useState, useEffect, useRef } from "react";

const SPLINE_SCENE_URL = "https://my.spline.design/theeternalarc-7fKloLQM5KzyMJontNr8hiEK-rma/";

const HeroSection = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle background animation as fallback / ambient layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.6,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(254, 67, 0, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 67, 0, ${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const handleResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWorkScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section hero-spline-section">
      {/* 3D Spline Background Canvas */}
      <div className="hero-spline-container">
        {!isSplineLoaded && (
          <div className="hero-spline-loader">
            <div className="spline-spinner" />
            <span>Loading 3D Experience…</span>
          </div>
        )}
        <iframe
          src={SPLINE_SCENE_URL}
          className={`hero-spline-iframe ${isSplineLoaded ? "loaded" : ""}`}
          title="Eternal Arc 3D Scene"
          onLoad={() => setIsSplineLoaded(true)}
          allow="autoplay; fullscreen; vr"
        />
      </div>

      {/* Particle Canvas & Radial Gradient Ambient Layer */}
      <canvas ref={canvasRef} id="particles-canvas" className="hero-particles-layer" />
      <div className="hero-bg-gradient" />

      {/* Hero Glassmorphism Content Overlay */}
      <div className="container hero-content-container">
        <div className="hero-glass-card reveal">
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span>NEXT-GEN DIGITAL LAB</span>
          </div>

          <h1 className="hero-title gradient-text">
            T.s Industries
          </h1>
          <h2 className="hero-subtitle">
            Portfolio &amp; Engineering Showcase
          </h2>

          <p className="hero-desc">
            Empowering modern businesses with high-performance web applications, 
            custom software engineering, and state-of-the-art interactive 3D digital experiences.
          </p>

          <div className="hero-cta-row">
            <button className="btn-primary" onClick={handleContactScroll}>
              Contact Us
            </button>
            <a
              href="#works"
              className="btn-outline"
              onClick={handleWorkScroll}
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
