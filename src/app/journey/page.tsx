import React from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import history from "@/app/data/project-history.json";
import RepositoryActivity, {
  formatCommitDate,
} from "@/app/components/repository-activity";
import BackButton from "@/app/components/ui/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey | Ts Industries",
  description:
    "Explore the milestones, products, and clients that have shaped Ts Industries from inception in 2024 to the present day.",
  alternates: { canonical: "/journey" },
  openGraph: {
    title: "Our Journey | Ts Industries",
    description:
      "Milestones and products from Ts Industries — South African tech startup since 2024.",
    url: "https://ts-industries.co.za/journey",
  },
};

const studioMilestones = [
  {
    date: "March 2024",
    type: "Inception",
    title: "Ts Industries Founded",
    description:
      "Ts Industries was established with a clear mission: to build premium, production-ready software for clients who demand excellence. We set up our core engineering team and defined our focus areas — custom web applications, mobile development, and UI/UX systems.",
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
      "Ts Industries continues to grow its portfolio across healthcare, entertainment, fintech, and community platforms. We are actively scaling our team and capabilities into AI-powered interfaces, real-time data systems, and cross-platform mobile frameworks.",
  },
];

const milestoneDates = [
  "2024-03-01",
  "2024-06-01",
  "2024-09-01",
  "2025-01-01",
  "2025-04-01",
  "2025-08-01",
  "2026-02-01",
  "9999-12-31",
];
type Milestone = {
  date: string;
  type: string;
  title: string;
  description: string;
  sortDate: string;
  slug?: string;
};
const allMilestones: Milestone[] = [
  ...studioMilestones.map((milestone, index) => ({
    ...milestone,
    sortDate: milestoneDates[index],
  })),
  ...history.map((entry) => {
    const project = projects.find((item) => item.slug === entry.slug)!;
    const first = formatCommitDate(entry.first.date);
    const last = formatCommitDate(entry.last.date);
    return {
      date: first === last ? first : `${first} — ${last}`,
      type: project.category,
      title: project.title,
      description: project.description,
      sortDate: entry.first.date,
      slug: entry.slug,
    };
  }),
].sort((a, b) => a.sortDate.localeCompare(b.sortDate));

export default function JourneyPage() {
  return (
    <main className="site-services">
      <BackButton />
      <header>
        <p className="studio-eyebrow">Ts Industries / OUR JOURNEY</p>
        <h1>
          Ideas into experiences.
          <br />
          <em>One project at a time.</em>
        </h1>
        <p>
          Explore the milestones, products and collaborations that have shaped
          our story since 2024. Project activity ranges show the first and
          latest recorded commits, rather than launch dates.
        </p>
      </header>
      <ol className="site-journey">
        {allMilestones.map((m) => (
          <li key={m.title}>
            <header>
              <p>{m.date}</p>
              <small>{m.type}</small>
            </header>
            <article>
              <h2>
                {m.slug ? (
                  <Link href={`/work/${m.slug}`}>{m.title} ↗</Link>
                ) : (
                  m.title
                )}
              </h2>
              <p>{m.description}</p>
              {m.slug && <RepositoryActivity slug={m.slug} />}
            </article>
          </li>
        ))}
      </ol>
      <p className="journey-history-note">
        Repository activity checked on 16 October 2026 using all commits
        reachable from each repository’s default branch. Dates are shown in
        South African time. Select a commit date to view its source on GitHub.
      </p>
    </main>
  );
}
