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
        <div className="hero-positivus-grid">
          <div className="hero-positivus-left">
            <h1 className="hero-positivus-title">
              Navigating the digital landscape for success
            </h1>
            <p className="hero-positivus-desc">
              T.s Industries is a forward-thinking tech startup specializing in modern web development, custom software engineering, and premium digital solutions that help businesses scale.
            </p>
            <div className="hero-cta-row">
              <button className="btn-positivus-dark" onClick={handleContactScroll}>
                Book a consultation
              </button>
              <a
                href="#works"
                className="btn-positivus-outline"
                onClick={handleWorkScroll}
              >
                Our Work
              </a>
            </div>
          </div>

          <div className="hero-positivus-right">
            <div className="hero-positivus-illustration">
              <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="360" height="280" rx="30" fill="#B9FF66" stroke="#191A23" strokeWidth="4"/>
                <circle cx="230" cy="190" r="70" fill="#191A23"/>
                <path d="M200 160L270 230M270 160L200 230" stroke="#B9FF66" strokeWidth="12" strokeLinecap="round"/>
                <rect x="300" y="240" width="120" height="90" rx="20" fill="#FFFFFF" stroke="#191A23" strokeWidth="4"/>
                <path d="M330 285L390 285" stroke="#191A23" strokeWidth="6" strokeLinecap="round"/>
                <circle cx="110" cy="110" r="25" fill="#FFFFFF" stroke="#191A23" strokeWidth="4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
