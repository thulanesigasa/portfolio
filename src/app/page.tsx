import Link from "next/link";
import Image from "next/image";
import ProjectEnquiry from "./components/home/project-enquiry";
const projects = [
  {
    title: "Bible Diaries",
    type: "Mobile application / Community",
    image: "/images/work/bible_diaries/feed-boy.webp",
    slug: "bible-diaries",
    description: "A dedicated space for reflection, scripture and connection.",
  },
  {
    title: "Service Link",
    type: "Mobile application / Product design",
    image: "/images/work/service_link/discover.webp",
    slug: "service-link",
    description: "Helping people discover services and connect with providers.",
  },
  {
    title: "MedSync",
    type: "Healthcare / Product design",
    image: "/images/work/hokmatech/hokma-1.webp",
    slug: "medsync",
    description:
      "A healthcare interface designed around clear information and practical workflows.",
  },
  {
    title: "Resume Build",
    type: "SaaS / Web application",
    image: "/images/work/work-img-1.webp",
    slug: "resume-build",
    description:
      "A focused web application for creating and presenting professional résumés.",
  },
];
export default function Home() {
  return (
    <main id="main-content" className="studio-home">
      <section className="studio-hero" aria-labelledby="hero-title">
        <header className="studio-hero-copy">
          <p className="studio-eyebrow">TS INDUSTRIES / DESIGN & DEVELOPMENT</p>
          <h1 id="hero-title">
            Websites.
            <br />
            Applications.
            <br />
            <em>Built around you.</em>
          </h1>
          <p>
            We turn complex ideas into clear digital experiences. Websites,
            mobile apps and custom software — designed with purpose and built
            with care.
          </p>
          <nav className="studio-actions" aria-label="Get started">
            <Link className="studio-button" href="#works">
              View our projects <span>↗</span>
            </Link>
            <Link className="studio-text-link" href="#contact">
              Discuss your idea →
            </Link>
          </nav>
          <p className="studio-hero-capabilities">
            WEB DEVELOPMENT / MOBILE APPLICATIONS / UI/UX DESIGN
          </p>
        </header>
        <figure
          className="studio-device-pair"
          aria-label="Selected application interfaces"
        >
          <Link href="/work/bible-diaries" className="studio-device first">
            <Image
              src="/images/work/bible_diaries/feed-boy.webp"
              alt="Bible Diaries reflection feed interface"
              width={430}
              height={932}
              priority
              sizes="(max-width:760px) 40vw, 20vw"
            />
            <span>Bible Diaries ↗</span>
          </Link>
          <Link href="/work/service-link" className="studio-device second">
            <Image
              src="/images/work/service_link/discover.webp"
              alt="Service Link discovery interface"
              width={430}
              height={932}
              priority
              sizes="(max-width:760px) 40vw, 20vw"
            />
            <span>Service Link ↗</span>
          </Link>
        </figure>
        <footer className="studio-hero-bottom">
          <span>BASED IN SOUTH AFRICA</span>
          <p>
            Independent thinking.
            <br />
            Connected experiences.
          </p>
          <a href="#works">Discover what we build ↓</a>
        </footer>
      </section>
      <section
        id="works"
        className="studio-section"
        aria-labelledby="work-title"
      >
        <header className="studio-section-top">
          <p className="studio-eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Selected projects.
            <br />
            <em>Purpose in every pixel.</em>
          </h2>
          <p>
            Explore the thinking behind our software and interfaces. From
            community platforms to practical business tools.
          </p>
        </header>
        <ul className="studio-project-grid">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="studio-project">
                <figure className="studio-project-image">
                  <figcaption className="studio-project-number">
                    0{i + 1} / {p.type.split(" / ")[0]}
                  </figcaption>
                  <Image
                    src={p.image}
                    alt={`${p.title} project preview`}
                    width={900}
                    height={560}
                    sizes="(max-width:700px) 100vw, 45vw"
                  />
                </figure>
                <h3>
                  {p.title}
                  <span aria-hidden="true">↗</span>
                </h3>
                <small>{p.type}</small>
                <p>{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <nav className="studio-more-work" aria-label="More projects">
          <span>More work</span>
          <Link href="/work/rhyma-music">Rhyma Music ↗</Link>
          <Link href="/work/ndivhu-mpho">Ndivhu & Mpho ↗</Link>
          <Link href="/certificates">Technical credentials ↗</Link>
        </nav>
      </section>
      <section
        id="services"
        className="studio-services studio-section"
        aria-labelledby="services-title"
      >
        <header>
          <p className="studio-eyebrow">02 / WHAT WE DO</p>
          <h2 id="services-title">
            The right solution.
            <br />
            <em>From the ground up.</em>
          </h2>
          <p>
            From a first online presence to a product with complex workflows, we
            connect design with development.
          </p>
          <Link className="studio-text-link" href="/pricing">
            Explore pricing ↗
          </Link>
        </header>
        <ol className="studio-service-list">
          {[
            [
              "Websites & e-commerce",
              "Distinctive, responsive websites and online stores that make it easy to explore your business.",
              "custom-web-applications",
            ],
            [
              "Apps & custom software",
              "Purposeful interfaces and connected systems, shaped around how your users work.",
              "robust-saas-solutions",
            ],
            [
              "UI/UX & design systems",
              "Clear user journeys, considered interactions and consistent visual foundations.",
              "ui-ux-design-systems",
            ],
          ].map(([title, desc, slug], i) => (
            <li key={slug}>
              <Link href={`/services/${slug}`}>
                <small>0{i + 1}</small>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="process"
        className="studio-section"
        aria-labelledby="process-title"
      >
        <header className="studio-section-top">
          <p className="studio-eyebrow">03 / THE PROCESS</p>
          <h2 id="process-title">
            A clear process.
            <br />
            <em>From idea to launch.</em>
          </h2>
          <p>A clear path from “what if” to something people can use.</p>
        </header>
        <ol className="studio-process">
          {[
            [
              "Discover",
              "We start with your goals, your audience and the problem worth solving.",
            ],
            [
              "Design",
              "We map the experience and shape a visual direction before development.",
            ],
            [
              "Develop",
              "We turn the approved design into working software and test the important journeys.",
            ],
            [
              "Launch",
              "We prepare the handover and agree on the next steps for keeping things running.",
            ],
          ].map(([title, desc], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="about"
        className="studio-about studio-section"
        aria-labelledby="about-title"
      >
        <p className="studio-eyebrow">04 / ABOUT TS INDUSTRIES</p>
        <h2 id="about-title">
          Design meets engineering.
          <br />
          <em>That’s TS Industries.</em>
        </h2>
        <p>
          TS Industries is the digital studio of Thulane Sigasa. Based in South
          Africa, we bring design and development together to turn ideas into
          useful digital experiences.
        </p>
        <p>
          Our work spans websites, e-commerce, community apps and custom
          platforms. We care about the details people see, and the systems that
          make everything work.
        </p>
        <nav className="studio-actions" aria-label="About the studio">
          <Link className="studio-text-link" href="/journey">
            Explore the journey ↗
          </Link>
          <Link className="studio-text-link" href="/certificates">
            View credentials ↗
          </Link>
        </nav>
        <p className="studio-tech">
          <span>TOOLS WE BUILD WITH</span>React / Next.js / TypeScript / Python
          / PostgreSQL
        </p>
      </section>
      <section
        id="contact"
        className="studio-contact studio-section"
        aria-labelledby="contact-title"
      >
        <header>
          <p className="studio-eyebrow">05 / YOUR NEXT CHAPTER</p>
          <h2 id="contact-title">
            Let’s build
            <br />
            <em>what’s next.</em>
          </h2>
          <p>
            Tell us what you’re thinking. We’ll help you work out what comes
            next.
          </p>
          <a className="studio-email" href="mailto:pharezsigasa@gmail.com">
            pharezsigasa@gmail.com ↗
          </a>
        </header>
        <ProjectEnquiry />
      </section>
    </main>
  );
}
