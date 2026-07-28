"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title1: "Search engine",
    title2: "optimization",
    bg: "#F3F3F3",
    badgeBg: "#B9FF66",
    badgeColor: "#191A23",
    textColor: "#191A23",
    btnBg: "#191A23",
    btnIconColor: "#B9FF66",
    link: "/services/custom-web-applications",
  },
  {
    id: 2,
    title1: "Pay-per-click",
    title2: "advertising",
    bg: "#B9FF66",
    badgeBg: "#FFFFFF",
    badgeColor: "#191A23",
    textColor: "#191A23",
    btnBg: "#191A23",
    btnIconColor: "#B9FF66",
    link: "/services/robust-saas-solutions",
  },
  {
    id: 3,
    title1: "Social Media",
    title2: "Marketing",
    bg: "#191A23",
    badgeBg: "#FFFFFF",
    badgeColor: "#191A23",
    textColor: "#FFFFFF",
    btnBg: "#FFFFFF",
    btnIconColor: "#191A23",
    link: "/services/ui-ux-design-systems",
  },
  {
    id: 4,
    title1: "Email",
    title2: "Marketing",
    bg: "#F3F3F3",
    badgeBg: "#B9FF66",
    badgeColor: "#191A23",
    textColor: "#191A23",
    btnBg: "#191A23",
    btnIconColor: "#B9FF66",
    link: "/services/custom-web-applications",
  },
  {
    id: 5,
    title1: "Content",
    title2: "Creation",
    bg: "#B9FF66",
    badgeBg: "#FFFFFF",
    badgeColor: "#191A23",
    textColor: "#191A23",
    btnBg: "#191A23",
    btnIconColor: "#B9FF66",
    link: "/services/robust-saas-solutions",
  },
  {
    id: 6,
    title1: "Analytics and",
    title2: "Tracking",
    bg: "#191A23",
    badgeBg: "#B9FF66",
    badgeColor: "#191A23",
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

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Services</div>
          <p className="positivus-header-desc">
            At T.s Industries, we offer a comprehensive range of software engineering and digital services to help businesses grow and scale online.
          </p>
        </div>

        {/* Services 2-Column Grid */}
        <div className="positivus-services-grid reveal">
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
                <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70" cy="60" r="45" fill={service.badgeBg} stroke="#191A23" strokeWidth="3"/>
                  <rect x="35" y="45" width="70" height="30" rx="8" fill="#191A23"/>
                  <circle cx="70" cy="60" r="6" fill="#B9FF66"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
