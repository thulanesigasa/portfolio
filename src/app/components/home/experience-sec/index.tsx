"use client";

import { useRef } from "react";
import useReveal from "@/app/hooks/useReveal";

const milestones = [
  {
    year: "2024",
    type: "Inception",
    title: "Foundation & Setup",
    company: "T.s Indurstries",
    description:
      "Established T.s Indurstries to deliver premium web development and software architecture, setting up our core engineering team.",
  },
  {
    year: "2025",
    type: "Expansion",
    title: "Scaling & E-Commerce",
    company: "T.s Indurstries",
    description:
      "Successfully launched custom e-commerce applications and high-performance web tools for enterprise partners.",
  },
  {
    year: "2026",
    type: "Technological Leap",
    title: "Cloud & Headless Stack",
    company: "T.s Indurstries",
    description:
      "Specialized in cloud-native serverless architectures, headless CMS platforms, and Next.js design systems.",
  },
  {
    year: "2026+",
    type: "Continuous Growth",
    title: "Future Innovation",
    company: "T.s Indurstries",
    description:
      "Expanding services into AI-powered interfaces, real-time data streaming applications, and cross-platform mobile frameworks.",
  },
];

const ExperienceSec = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef);


  return (
    <section id="journey" className="journey-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Our Journey</h2>
          <span className="section-number">02</span>
        </div>

        <div className="journey-timeline">
          {milestones.map((m, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-year">
                <div className="timeline-year-text">{m.year}</div>
                <div className="timeline-year-label">{m.type}</div>
              </div>
              <div className="timeline-line-col">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-card">
                <div className="timeline-card-title">{m.title}</div>
                <div className="timeline-card-company">{m.company}</div>
                <p className="timeline-card-desc">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;