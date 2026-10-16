"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allCertificates, type Certificate } from "../data/certificates";
import previews from "../data/certificate-previews.json";
import CertificateModal from "../components/ui/certificate-modal";
const issuers = [
  "All",
  "Cisco",
  "Huawei",
  "freeCodeCamp",
  "Vodacom Group",
  "AI Certification",
];
const topics = [
  "All skills",
  "Development",
  "Networking",
  "Cloud",
  "AI",
  "Digital skills",
];
const previewData: Record<
  string,
  { src: string; width: number; height: number }
> = previews;
function topic(cert: Certificate) {
  if (/AI|Artificial Intelligence/i.test(cert.title)) return "AI";
  if (/Cloud/i.test(cert.title)) return "Cloud";
  if (/Network|Protocols/i.test(cert.title)) return "Networking";
  if (
    /JavaScript|Web Design|Development|Visualization|Front End/i.test(
      cert.title,
    )
  )
    return "Development";
  return "Digital skills";
}
export default function CertificatesPage() {
  const [issuer, setIssuer] = useState("All");
  const [skill, setSkill] = useState("All skills");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Certificate | null>(null);
  const filtered = allCertificates.filter(
    (cert) =>
      (issuer === "All" || cert.issuer.includes(issuer)) &&
      (skill === "All skills" || topic(cert) === skill) &&
      `${cert.title} ${cert.issuer} ${cert.description}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const featured = filtered[0];
  const rest = filtered.slice(1);
  function reset() {
    setIssuer("All");
    setSkill("All skills");
    setQuery("");
  }
  return (
    <main className="credential-page">
      <header className="credential-intro">
        <Link className="studio-text-link" href="/">
          ← Back to the studio
        </Link>
        <p className="studio-eyebrow">Ts Industries / LEARNING IN PRACTICE</p>
        <h1>
          Curiosity.
          <br />
          <em>With credentials.</em>
        </h1>
        <p>
          A collection of the learning behind the work. Explore certificates in
          development, networking, cloud computing and digital skills.
        </p>
        <span className="credential-total">
          {allCertificates.length} certificates{" "}
          <span aria-hidden="true">/</span> {issuers.length - 1} issuer groups
        </span>
      </header>
      <section className="credential-browser" aria-label="Browse certificates">
        <nav
          className="credential-issuers"
          aria-label="Filter certificates by issuer"
        >
          {issuers.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={issuer === name}
              onClick={() => setIssuer(name)}
            >
              {name}
              <span>
                {
                  allCertificates.filter(
                    (cert) => name === "All" || cert.issuer.includes(name),
                  ).length
                }
              </span>
            </button>
          ))}
        </nav>
        <form
          className="credential-tools"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Find a certificate
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a title, issuer or skill"
            />
          </label>
          <label>
            Skill area
            <select value={skill} onChange={(e) => setSkill(e.target.value)}>
              {topics.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
          <p role="status" aria-live="polite">
            {filtered.length}{" "}
            {filtered.length === 1 ? "certificate" : "certificates"}
          </p>
        </form>
      </section>
      {featured ? (
        <>
          <section
            className="credential-feature"
            aria-labelledby="featured-title"
          >
            <figure>
              <button
                type="button"
                className="credential-preview feature"
                onClick={() => setActive(featured)}
                aria-label={`View ${featured.title}`}
              >
                <Image
                  {...previewData[String(featured.id)]}
                  alt={`${featured.title} certificate issued by ${featured.issuer}`}
                  priority
                  sizes="(max-width:760px) 90vw, 60vw"
                />
                <span className="credential-view">View certificate ↗</span>
              </button>
            </figure>
            <header>
              <p className="studio-eyebrow">
                IN FOCUS / {topic(featured).toUpperCase()}
              </p>
              <span className="credential-issuer">{featured.issuer}</span>
              <h2 id="featured-title">{featured.title}</h2>
              <p>{featured.description}</p>
              <button
                className="studio-button"
                type="button"
                onClick={() => setActive(featured)}
              >
                Take a closer look <span>↗</span>
              </button>
              <a className="studio-text-link" href={featured.pdfLink} download>
                Download PDF ↓
              </a>
            </header>
          </section>
          {rest.length > 0 && (
            <section aria-labelledby="collection-title">
              <header className="credential-collection-heading">
                <h2 id="collection-title">The collection.</h2>
                <p>Open any certificate to explore the details.</p>
              </header>
              <ul className="credential-gallery">
                {rest.map((cert, i) => (
                  <li key={cert.id}>
                    <figure>
                      <button
                        type="button"
                        className="credential-preview"
                        onClick={() => setActive(cert)}
                        aria-label={`View ${cert.title}`}
                      >
                        <Image
                          {...previewData[String(cert.id)]}
                          alt={`${cert.title} certificate issued by ${cert.issuer}`}
                          sizes="(max-width:600px) 90vw, 44vw"
                        />
                        <span className="credential-view">
                          View certificate ↗
                        </span>
                      </button>
                      <figcaption>
                        <small>
                          {String(i + 2).padStart(2, "0")} / {topic(cert)}
                        </small>
                        <h3>
                          <button type="button" onClick={() => setActive(cert)}>
                            {cert.title}
                            <span aria-hidden="true">↗</span>
                          </button>
                        </h3>
                        <p>{cert.issuer}</p>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <section className="credential-empty" aria-live="polite">
          <h2>No matching certificates.</h2>
          <p>Try a different title, issuer or skill area.</p>
          <button className="studio-button" onClick={reset} type="button">
            Clear filters ↺
          </button>
        </section>
      )}
      <footer className="credential-end">
        <p>Learning that becomes useful work.</p>
        <Link className="studio-text-link" href="/#works">
          Explore the projects ↗
        </Link>
      </footer>
      {active && (
        <CertificateModal
          pdfLink={active.pdfLink}
          title={active.title}
          issuer={active.issuer}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  );
}
