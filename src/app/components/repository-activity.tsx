import history from "@/app/data/project-history.json";

export function formatCommitDate(date: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(date));
}

export default function RepositoryActivity({ slug }: { slug: string }) {
  const entry = history.find((item) => item.slug === slug);
  if (!entry) return null;
  return (
    <dl className="repository-dates">
      {(
        [
          ["First commit", entry.first],
          ["Latest commit", entry.last],
        ] as const
      ).map(([label, commit]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>
            <a
              href={`https://github.com/${entry.repository}/commit/${commit.sha}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <time dateTime={commit.date}>
                {formatCommitDate(commit.date)}
              </time>{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
