import React from "react";
import BackButton from "@/app/components/ui/back-button";

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

export default function JourneyPage() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "120px", minHeight: "100vh" }}>
      <BackButton />

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="hero-title" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
          Our <span style={{ fontWeight: 300 }}>Journey</span>
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", marginBottom: "4rem", lineHeight: 1.8 }}>
          T.S Industries has been designing, developing, and architecting solutions since 2024. Explore the milestones, products, and clients that have shaped our story from inception to the present day.
        </p>

        <div className="journey-timeline">
          {allMilestones.map((m, i) => (
            <div key={i} className="timeline-item reveal visible" style={{ opacity: 1, transform: "none" }}>
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
      </div>
    </main>
  );
}
