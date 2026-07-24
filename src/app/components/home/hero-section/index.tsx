"use client";

import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number;
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

    const handleResize = () => { resize(); init(); };
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
    <section className="hero-section">
      <canvas ref={canvasRef} id="particles-canvas" />
      <div className="hero-bg-gradient" />

      <div className="container">
        <div className="hero-content-single">


          <h1 className="hero-title gradient-text">
            T.s Indurstries
          </h1>
          <h2 className="hero-subtitle">
            Web Development Specialists
          </h2>

          <p className="hero-desc">
            We are a tech startup specializing in modern web development,
            custom software engineering, and premium digital solutions that
            help businesses scale.
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
              Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
