import type { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "@/app/components/project-grid";

export const metadata: Metadata = {
  title: "All projects — Ts Industries",
  description:
    "Explore our websites, mobile applications and custom software. Discover each project's purpose, features and technology stack.",
  alternates: { canonical: "/work/" },
};

export default function AllProjectsPage() {
  return (
    <main id="main-content" className="studio-home project-story">
      <Link className="studio-text-link" href="/">
        ← Home
      </Link>
      <header className="project-story-heading">
        <p className="studio-eyebrow">THE COLLECTION / DESIGN & DEVELOPMENT</p>
        <h1>All projects.</h1>
        <p>
          Websites, applications and ideas brought to life. Explore a project to
          learn what it does and how it was built.
        </p>
      </header>
      <ProjectGrid />
      <nav
        className="project-story-next"
        aria-label="Start a project"
        style={{ marginTop: "60px" }}
      >
        <Link className="studio-text-link" href="/#contact">
          Have an idea? Let’s build it →
        </Link>
      </nav>
    </main>
  );
}
