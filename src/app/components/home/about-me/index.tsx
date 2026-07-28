"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AnimatedStat = ({ endValue, suffix }: { endValue: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    let animationFrame: number;
    let observer: IntersectionObserver;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(endValue * easeOut));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (statRef.current) observer.observe(statRef.current);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (observer) observer.disconnect();
    };
  }, [endValue]);

  return (
    <div ref={statRef} className="about-stat-num">
      {count < 10 && endValue >= 10 ? `0${count}` : (endValue < 10 ? `0${count}` : count)}{suffix}
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    title1: "Custom Web",
    title2: "Applications",
    bg: "#F3F3F3",
    badgeBg: "#FE4300",
    badgeColor: "#FFFFFF",
    textColor: "#191A23",
    btnBg: "#191A23",
    btnIconColor: "#FE4300",
    link: "/services/custom-web-applications",
  },
  {
    id: 2,
    title1: "Robust SaaS",
    title2: "Solutions",
    bg: "#FE4300",
    badgeBg: "#FFFFFF",
    badgeColor: "#191A23",
    textColor: "#FFFFFF",
    btnBg: "#191A23",
    btnIconColor: "#FE4300",
    link: "/services/robust-saas-solutions",
  },
  {
    id: 3,
    title1: "UI/UX & Design",
    title2: "Systems",
    bg: "#191A23",
    badgeBg: "#FE4300",
    badgeColor: "#FFFFFF",
    textColor: "#FFFFFF",
    btnBg: "#FFFFFF",
    btnIconColor: "#191A23",
    link: "/services/ui-ux-design-systems",
  },
];

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => {
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
    { target: 3, suffix: "+", label: "Years Experience" },
    { target: 28, suffix: "+", label: "Happy Clients" },
    { target: 42, suffix: "+", label: "Projects Completed" },
  ];

  const focusAreas = ["Web Apps", "E-Commerce", "SaaS Systems", "Custom APIs"];

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Services &amp; Expertise</div>
          <span className="section-number">01</span>
          <p className="positivus-header-desc">
            T.s Industries is a forward-thinking tech startup specializing in modern web development, SaaS platforms, and custom digital engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="positivus-services-grid reveal" style={{ marginBottom: "4rem" }}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="positivus-service-card"
              style={{
                backgroundColor: service.bg,
                color: service.textColor,
                borderColor: "#191A23",
              }}
            >
              <div className="positivus-service-card-left">
                <div className="positivus-service-title-wrap">
                  <span
                    className="positivus-card-badge"
                    style={{
                      backgroundColor: service.badgeBg,
                      color: service.badgeColor,
                    }}
                  >
                    {service.title1}
                  </span>
                  <span
                    className="positivus-card-badge"
                    style={{
                      backgroundColor: service.badgeBg,
                      color: service.badgeColor,
                    }}
                  >
                    {service.title2}
                  </span>
                </div>

                <Link
                  href={service.link}
                  className="positivus-service-link-btn"
                  style={{ color: service.textColor }}
                >
                  <span
                    className="positivus-arrow-circle"
                    style={{
                      backgroundColor: service.btnBg,
                      color: service.btnIconColor,
                    }}
                  >
                    ↗
                  </span>
                  <span className="positivus-link-text">Learn more</span>
                </Link>
              </div>

              <div className="positivus-service-card-right">
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="50" r="40" fill={service.badgeBg} stroke="#191A23" strokeWidth="3"/>
                  <rect x="30" y="38" width="60" height="24" rx="6" fill="#191A23"/>
                  <circle cx="60" cy="50" r="5" fill="#FFFFFF"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & Focus Areas Positivus Container */}
        <div className="positivus-contact-card reveal" style={{ gridTemplateColumns: "1fr" }}>
          <div className="about-stats-row" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", width: "100%" }}>
            {stats.map((s, i) => (
              <div key={i} className="about-stat" style={{ textAlign: "center" }}>
                <AnimatedStat endValue={s.target} suffix={s.suffix} />
                <div className="about-stat-label" style={{ fontWeight: 600, marginTop: "0.5rem" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="focus-areas-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span className="focus-label" style={{ fontWeight: 700, fontSize: "1.1rem" }}>Core Focus:</span>
            {focusAreas.map((area) => (
              <span key={area} className="positivus-card-badge" style={{ backgroundColor: "#FE4300", color: "#FFFFFF", fontSize: "0.95rem" }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
