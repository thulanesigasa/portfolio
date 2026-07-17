"use client";

import { useEffect, useRef, useState } from "react";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";

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
      "Intuitive user journeys and premium design systems in Figma that seamlessly transition to clean frontend code.",
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

        <div className="services-grid">
          {/* Services list */}
          <div className="service-list">
            {services.map((s, i) => (
              <div key={i} className="service-item reveal">
                <div className="service-icon">{s.icon}</div>
                <div>
                  <div className="service-item-title">{s.title}</div>
                  <p className="service-item-desc">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills — flat tags, no boxes */}
          <div className="skill-tags-wrap reveal">
            <p className="skill-tags-label">Tech Stack</p>
            <div className="skill-tags">
              {educationData?.skills?.map((value: any, index: number) => (
                <div key={index} className="skill-tag">
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.name}
                    width={20}
                    height={20}
                    className="skill-tag-icon"
                  />
                  <span className="skill-tag-name">{value?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
