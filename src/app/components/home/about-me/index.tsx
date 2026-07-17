"use client";

import { useEffect, useRef } from "react";

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => {
      // If already in viewport on mount, show immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { count: "03+", label: "Years" },
    { count: "28+", label: "Clients" },
    { count: "42+", label: "Projects" },
  ];

  const focusAreas = ["Web Apps", "E-Commerce", "SaaS Systems", "Custom APIs"];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-bg-glow" />
      <div className="container">
        <div className="section-header reveal">
          <h2>About Us</h2>
          <span className="section-number">01</span>
        </div>

        <p className="reveal about-intro">
          T.s Indurstries is a forward-thinking tech startup specializing in
          modern web development. We help brands, startups, and established
          enterprises build high-performance web applications, seamless SaaS
          integrations, and intuitive, conversion-focused user interfaces.
          Our team combines creative design with cutting-edge technologies to
          deliver software that scales.
        </p>

        <div className="about-stats-row reveal">
          {stats.map((s, i) => (
            <div key={i} className="about-stat">
              <div className="about-stat-num">{s.count}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="focus-areas-row reveal">
          <span className="focus-label">Focus:</span>
          {focusAreas.map((area) => (
            <span key={area} className="badge badge-primary">{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
