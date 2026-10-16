import Link from "next/link";
import BackButton from "./ui/back-button";
type Props = {
  title: string;
  intro: string;
  approachTitle: string;
  approach: string;
  featuresTitle: string;
  features: string[];
};
export default function ServiceDetail(p: Props) {
  return (
    <main className="site-services">
      <BackButton />
      <header>
        <p className="studio-eyebrow">Ts Industries / EXPERTISE</p>
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
      </header>
      <section className="site-service-body" aria-label="Service details">
        <article>
          <h2>{p.approachTitle}</h2>
          <p>{p.approach}</p>
          <Link className="studio-button" href="/#contact">
            Discuss your project <span>↗</span>
          </Link>
        </article>
        <article>
          <h2>{p.featuresTitle}</h2>
          <ul>
            {p.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
