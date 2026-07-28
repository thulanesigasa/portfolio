"use client";

import { useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    description: "During the initial consultation, we will discuss your business goals, target audience, and project requirements. This forms the foundation for a tailored software architecture and strategy.",
  },
  {
    number: "02",
    title: "Research & Strategy Development",
    description: "We perform competitor analysis, define user personas, map technical system architecture, and lay out a clear roadmap for project execution and design systems.",
  },
  {
    number: "03",
    title: "Implementation & Engineering",
    description: "Our core engineering team builds high-performance web applications, responsive user interfaces, and robust APIs using modern tools like Next.js, React, and TypeScript.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous automated and manual testing ensures your software application is bug-free, fully secure, highly accessible, and optimized for maximum speed across all devices.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description: "We deploy your application to scalable cloud infrastructure, setup automated deployment pipelines (CI/CD), and ensure zero-downtime launches.",
  },
  {
    number: "06",
    title: "Continual Optimization & Support",
    description: "Post-launch support, monitoring, analytics tracking, and continuous improvement ensure your digital product scales seamlessly with user growth.",
  },
];

const ExperienceSec = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const [activeStep, setActiveStep] = useState<number | null>(0); // First step open by default

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="journey" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Our Working Process</div>
          <p className="positivus-header-desc">
            Step-by-step guide to achieving your business goals through structured software development.
          </p>
        </div>

        {/* Process Accordion */}
        <div className="positivus-accordion-list reveal">
          {processSteps.map((step, idx) => {
            const isOpen = activeStep === idx;
            return (
              <div
                key={idx}
                className={`positivus-accordion-item ${isOpen ? "active" : ""}`}
                onClick={() => toggleStep(idx)}
              >
                <div className="positivus-accordion-header">
                  <div className="positivus-accordion-title-wrap">
                    <span className="positivus-accordion-num">{step.number}</span>
                    <h3 className="positivus-accordion-title">{step.title}</h3>
                  </div>
                  <button
                    className="positivus-accordion-toggle-btn"
                    aria-label={isOpen ? "Collapse step" : "Expand step"}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {isOpen && (
                  <div className="positivus-accordion-body">
                    <hr className="positivus-accordion-divider" />
                    <p className="positivus-accordion-text">{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/journey"
            className="btn-positivus-dark"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            See Full Journey
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;