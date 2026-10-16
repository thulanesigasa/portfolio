import type { Project } from "@/app/data/projects";

export default function ProjectGraphic({
  project,
  index,
  detail = false,
}: {
  project: Project;
  index: number;
  detail?: boolean;
}) {
  return (
    <figure
      className={`project-type-art type-${project.slug}${detail ? " project-type-detail" : ""}`}
    >
      <figcaption className="project-type-meta">
        <span>
          0{index + 1} / {project.category}
        </span>
        <span aria-hidden="true">✦</span>
      </figcaption>
      <p className="project-type-name" aria-hidden="true">
        {project.words.map((word, i) => (
          <span key={word}>
            {word}
            {i === 0 && project.slug === "service-link" ? <sup>↗</sup> : null}
          </span>
        ))}
      </p>
      <span className="project-type-tagline">{project.label}</span>
      {!detail && (
        <span className="project-type-open">
          Explore project <span aria-hidden="true">↗</span>
        </span>
      )}
    </figure>
  );
}
