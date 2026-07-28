"use client";

import { useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";
import Link from "next/link";

const allMilestones = [
  {
    number: "01",
    date: "March 2024",
    type: "Inception",
    title: "T.S Industries Founded",
    description:
      "T.S Industries was established with a clear mission: to build premium, production-ready software for clients who demand excellence. We set up our core engineering team and defined our focus areas — custom web applications, mobile development, and UI/UX systems.",
  },
  {
    number: "02",
    date: "June 2024",
    type: "First Mobile Project",
    title: "Service Link",
    description:
      "Our very first mobile project — a React Native application connecting users with local service providers through interactive maps, real-time booking flows, and in-app messaging. This project established our React Native and Expo expertise.",
  },
  {
    number: "03",
    date: "September 2024",
    type: "First Web Client",
    title: "Ndivhu & Mpho",
    description:
      "We built a bespoke, elegantly designed wedding reservation web platform for a client committed to a seamless guest experience. The platform handles real-time RSVPs, guest list management, and a rich couple's story presentation.",
  },
  {
    number: "04",
    date: "January 2025",
    type: "SaaS Platform",
    title: "Resume Build — rbptech",
    description:
      "We delivered a full-scale SaaS resume builder platform for rbptech, featuring dynamic form handling, real-time visual previews, and PDF generation. The platform is ATS-optimised and handles complex resume layouts pixel-perfectly.",
  },
  {
    number: "05",
    date: "April 2025",
    type: "Community Mobile App",
    title: "Bible Diaries",
    description:
      "A premium spiritual community application built on Supabase with real-time chat, AI content moderation via OpenAI, and a global reflections feed organised by spiritual categories. Designed to nurture safe, uplifting digital community.",
  },
  {
    number: "06",
    date: "August 2025",
    type: "Healthcare Mobile App",
    title: "MedSync — Hokma Tech",
    description:
      "In collaboration with Hokma Tech, we delivered the full UI/UX design and partial backend contribution for MedSync — a clinical appointment management system built in React Native and Expo, interfacing with a Delphi-powered REST API backend.",
  },
];

const ExperienceSec = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const [activeStep, setActiveStep] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="journey" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Our Journey</div>
          <span className="section-number">02</span>
          <p className="positivus-header-desc">
            A milestone-by-milestone look at our evolution, key client deliveries, and engineering breakthroughs.
          </p>
        </div>

        {/* Process Accordion */}
        <div className="positivus-accordion-list reveal">
          {allMilestones.map((step, idx) => {
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
                    <div>
                      <h3 className="positivus-accordion-title">{step.title}</h3>
                      <span style={{ fontSize: "0.9rem", opacity: 0.85, fontWeight: 600 }}>{step.date} — {step.type}</span>
                    </div>
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