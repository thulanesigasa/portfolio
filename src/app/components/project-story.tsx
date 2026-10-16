import Link from "next/link";
import RepositoryActivity from "./repository-activity";
import projectHistory from "@/app/data/project-history.json";
import { projectBenefits } from "@/app/data/project-benefits";
import { projects } from "@/app/data/projects";
import ProjectGraphic from "./ui/project-graphic";

export default function ProjectStory({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return null;
  const benefits = projectBenefits[slug];
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main-content" className="studio-home project-story">
      <Link className="studio-text-link" href="/work">
        ← All projects
      </Link>
      <header className="project-story-heading">
        <p className="studio-eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>
      <ProjectGraphic project={project} index={index} detail />
      <section
        className="project-story-overview"
        aria-labelledby="project-purpose"
      >
        <h2 id="project-purpose">What it does.</h2>
        <p>{project.overview}</p>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      {benefits && (
        <>
          <section
            className="project-story-benefits"
            aria-labelledby="project-benefits"
          >
            <header>
              <p className="studio-eyebrow">THE VALUE IN EVERYDAY USE</p>
              <h2 id="project-benefits">How it helps.</h2>
              <p>{benefits.audience}</p>
            </header>
            <ol>
              {benefits.strengths.map((strength, i) => (
                <li key={strength.title}>
                  <span aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </li>
              ))}
            </ol>
          </section>
          <section
            className="project-story-role"
            aria-labelledby="project-example"
          >
            <h2 id="project-example">In practice.</h2>
            <p>{benefits.example}</p>
          </section>
        </>
      )}
      <section className="project-story-stack" aria-labelledby="project-stack">
        <header>
          <p className="studio-eyebrow">BEHIND THE BUILD</p>
          <h2 id="project-stack">Technology stack.</h2>
        </header>
        <ul>
          {project.stack.map((technology, i) => (
            <li key={technology}>
              <span aria-hidden="true">0{i + 1}</span>
              {technology}
            </li>
          ))}
        </ul>
      </section>
      {projectHistory.some((entry) => entry.slug === slug) && (
        <section
          className="project-story-role"
          aria-labelledby="project-activity"
        >
          <h2 id="project-activity">Development activity.</h2>
          <RepositoryActivity slug={slug} />
          <p>
            First and latest recorded commits on the repository’s default
            branch, checked on 16 October 2026.
          </p>
        </section>
      )}
      <section className="project-story-role" aria-labelledby="project-role">
        <h2 id="project-role">Our contribution.</h2>
        <p>{project.contribution}</p>
        {"url" in project && (
          <a
            className="studio-text-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.urlLabel} ↗
          </a>
        )}
      </section>
      <nav className="project-story-next" aria-label="Continue exploring">
        <Link className="studio-text-link" href="/#contact">
          Discuss a project →
        </Link>
        <Link className="studio-text-link" href={`/work/${next.slug}`}>
          Next: {next.title} ↗
        </Link>
      </nav>
    </main>
  );
}
