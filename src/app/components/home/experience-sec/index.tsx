"use client";

import { useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";

const allMilestones = [
  {
    date: "March 2024",
    type: "Inception",
    title: "T.S Industries Founded",
    description:
      "T.S Industries was established with a clear mission: to build premium, production-ready software for clients who demand excellence. We set up our core engineering team and defined our focus areas — custom web applications, mobile development, and UI/UX systems.",
  },
  {
    date: "June 2024",
    type: "First Mobile Project",
    title: "Service Link",
    description:
      "Our very first mobile project — a React Native application connecting users with local service providers through interactive maps, real-time booking flows, and in-app messaging. This project established our React Native and Expo expertise.",
  },
  {
    date: "September 2024",
    type: "First Web Client",
    title: "Ndivhu & Mpho",
    description:
      "We built a bespoke, elegantly designed wedding reservation web platform for a client committed to a seamless guest experience. The platform handles real-time RSVPs, guest list management, and a rich couple's story presentation.",
  },
  {
    date: "January 2025",
    type: "SaaS Platform",
    title: "Resume Build — rbptech",
    description:
      "We delivered a full-scale SaaS resume builder platform for rbptech, featuring dynamic form handling, real-time visual previews, and PDF generation. The platform is ATS-optimised and handles complex resume layouts pixel-perfectly.",
  },
  {
    date: "April 2025",
    type: "Community Mobile App",
    title: "Bible Diaries",
    description:
      "A premium spiritual community application built on Supabase with real-time chat, AI content moderation via OpenAI, and a global reflections feed organised by spiritual categories. Designed to nurture safe, uplifting digital community.",
  },
  {
    date: "August 2025",
    type: "Healthcare Mobile App",
    title: "MedSync — Hokma Tech",
    description:
      "In collaboration with Hokma Tech, we delivered the full UI/UX design and partial backend contribution for MedSync — a clinical appointment management system built in React Native and Expo, interfacing with a Delphi-powered REST API backend.",
  },
  {
    date: "February 2026",
    type: "Music Platform",
    title: "Rhyma Music",
    description:
      "We built a stunning web presence and music streaming platform for Rhyma — an independent South African artist. The platform combines brand identity, music discovery, and an immersive listening experience into a cohesive digital product.",
  },
  {
    date: "2026 — Present",
    type: "Continuous Growth",
    title: "Expanding Frontiers",
    description:
      "T.S Industries continues to grow its portfolio across healthcare, entertainment, fintech, and community platforms. We are actively scaling our team and capabilities into AI-powered interfaces, real-time data systems, and cross-platform mobile frameworks.",
  },
];

const INITIAL_COUNT = 3;

const ExperienceSec = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  useReveal(sectionRef);

  const visible = expanded ? allMilestones : allMilestones.slice(0, INITIAL_COUNT);

  return (
    <section id="journey" className="journey-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Our Journey</h2>
          <span className="section-number">02</span>
        </div>

        <div className="journey-timeline">
          {visible.map((m, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-year">
                <div className="timeline-year-text">{m.date}</div>
                <div className="timeline-year-label">{m.type}</div>
              </div>
              <div className="timeline-line-col">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-card">
                <div className="timeline-card-title">{m.title}</div>
                <p className="timeline-card-desc">{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              onClick={() => setExpanded(true)}
              className="btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              See Full Journey
              <span style={{ fontSize: "1.1rem" }}>↓</span>
            </button>
          </div>
        )}

        {expanded && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              onClick={() => setExpanded(false)}
              className="btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
            >
              Show Less
              <span style={{ fontSize: "1.1rem" }}>↑</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSec;