import Link from "next/link";
import { projects } from "@/app/data/projects";
import ProjectGraphic from "./ui/project-graphic";

export default function ProjectStory({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return null;
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
