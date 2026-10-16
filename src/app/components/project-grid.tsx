import Link from "next/link";
import { projects } from "@/app/data/projects";
import ProjectGraphic from "./ui/project-graphic";

export default function ProjectGrid({ limit }: { limit?: number }) {
  return (
    <ul className="studio-project-grid">
      {projects.slice(0, limit).map((project, index) => (
        <li key={project.slug}>
          <article className="studio-project">
            <Link
              className="project-graphic-link"
              href={`/work/${project.slug}`}
              aria-label={`Explore ${project.title}: overview and technology stack`}
            >
              <ProjectGraphic project={project} index={index} />
            </Link>
            <h3>
              <Link href={`/work/${project.slug}`}>
                {project.title} <span aria-hidden="true">↗</span>
              </Link>
            </h3>
            <small>{project.category}</small>
            <p>{project.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
