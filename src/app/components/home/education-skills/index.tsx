"use client";

import { useEffect, useRef, useState } from "react";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FE4300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Custom Web Applications",
    description:
      "Fast, scalable, responsive web apps using React, Next.js, and modern frontend tools tailored to your business.",
    link: "/services/custom-web-applications",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FE4300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Robust SaaS Solutions",
    description:
      "Cloud-native database designs to high-concurrency API microservices — reliable, secure, and performant architectures.",
    link: "/services/robust-saas-solutions",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FE4300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="#FE4300"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="#FE4300"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="#FE4300"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="#FE4300"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
    title: "UI/UX & Design Systems",
    description:
      "Pixel-perfect interfaces and cohesive component libraries built with Figma, Tailwind, and CSS Modules.",
    link: "/services/ui-ux-design-systems",
  },
];

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [educationData]);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Services & Tech Stack</h2>
          <span className="section-number">03</span>
        </div>

        {/* Services list */}
        <div className="simple-service-list" style={{ marginBottom: "5rem" }}>
          {services.map((s, i) => (
            <Link key={i} href={s.link} className="simple-service-item reveal" style={{ textDecoration: 'none', display: 'block' }}>
              <h3 className="simple-service-title">{s.title}</h3>
              <p className="simple-service-desc">{s.description}</p>
            </Link>
          ))}
        </div>

        <div className="skill-tags-wrap reveal">
          <p className="skill-tags-label">Tech Stack</p>
          <div className="skill-grid">
            {educationData?.skills?.map((value: any, index: number) => {
              const rating = value?.rating || 0;
              return (
                <div key={index} className="skill-item">
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.name}
                    width={40}
                    height={40}
                    className="skill-item-icon"
                  />
                  <span className="skill-item-name">{value?.name}</span>
                  <div className="skill-dots">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span key={dot} className={`skill-dot ${dot <= rating ? 'filled' : ''}`}></span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
