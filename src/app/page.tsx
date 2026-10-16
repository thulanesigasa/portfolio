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
    tone: "peach",
  },
  {
    title: "Service Link",
    type: "Mobile application / Product design",
    image: "/images/work/service_link/discover.webp",
    slug: "service-link",
    description: "Helping people discover services and connect with providers.",
    tone: "lavender",
  },
  {
    title: "MedSync",
    type: "Healthcare / Product design",
    image: "/images/work/hokmatech/hokma-1.webp",
    slug: "medsync",
    description:
      "A healthcare interface designed around clear information and practical workflows.",
    tone: "slate",
  },
  {
    title: "Resume Build",
    type: "SaaS / Web application",
    image: "/images/work/work-img-1.webp",
    slug: "resume-build",
    description:
      "A focused web application for creating and presenting professional résumés.",
    tone: "silver",
  },
];
export default function Home() {
  return (
    <main id="main-content" className="studio-home">
      <section className="studio-hero">
        <div className="studio-hero-grid">
          <div className="studio-hero-copy">
            <p className="studio-eyebrow">
              <span className="studio-dot" /> TS INDUSTRIES / DESIGN &
              DEVELOPMENT
            </p>
            <h1>
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
            <div className="studio-actions">
              <Link className="studio-button" href="#works">
                View our projects <span>↗</span>
              </Link>
              <Link className="studio-text-link" href="#contact">
                Discuss your idea <span>→</span>
              </Link>
            </div>
            <div className="studio-hero-capabilities">
              <span>WEB DEVELOPMENT</span>
              <span>MOBILE APPLICATIONS</span>
              <span>UI/UX DESIGN</span>
            </div>
          </div>
          <div className="studio-product-stage">
            <div className="studio-stage-top">
              <span className="studio-dot" /> FROM THE PORTFOLIO{" "}
              <span>01 — 02</span>
            </div>
            <div className="studio-device-pair">
              <Link href="/work/bible-diaries" className="studio-device first">
                <Image
                  src="/images/work/bible_diaries/feed-boy.webp"
                  alt="Bible Diaries reflection feed interface"
                  width={430}
                  height={932}
                  priority
                  sizes="(max-width:760px) 42vw, 21vw"
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
                  sizes="(max-width:760px) 42vw, 21vw"
                />
                <span>Service Link ↗</span>
              </Link>
            </div>
            <div className="studio-stage-bottom">
              <span>IDEA → INTERFACE → EXPERIENCE</span>
              <span>EXPLORE THE WORK ↙</span>
            </div>
          </div>
        </div>
        <div className="studio-hero-bottom">
          <span>BASED IN SOUTH AFRICA</span>
          <p>
            Independent thinking.
            <br />
            Connected experiences.
          </p>
          <a href="#works">Discover what we build ↓</a>
        </div>
      </section>
      <section id="works" className="studio-section">
        <div className="studio-section-top">
          <div>
            <p className="studio-eyebrow">01 / SELECTED WORK</p>
            <h2>
              Selected projects.
              <br />
              <em>Purpose in every pixel.</em>
            </h2>
          </div>
          <p>
            Explore the thinking behind our software and interfaces.
            <br />
            From community platforms to practical business tools.
          </p>
        </div>
        <div className="studio-project-grid">
          {projects.map((p, i) => (
            <Link
              href={`/work/${p.slug}`}
              className={`studio-project ${p.tone}`}
              key={p.slug}
            >
              <div className="studio-project-image">
                <span className="studio-project-number">
                  0{i + 1} / {p.type.split(" / ")[0]}
                </span>
                <Image
                  src={p.image}
                  alt={`${p.title} project preview`}
                  width={900}
                  height={560}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <span className="studio-round-arrow">↗</span>
              </div>
              <div className="studio-project-meta">
                <h3>{p.title}</h3>
                <small>{p.type}</small>
              </div>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
        <details className="studio-more-work">
          <summary>
            More from the studio <span>＋</span>
          </summary>
          <div>
            <Link href="/work/rhyma-music">Rhyma Music ↗</Link>
            <Link href="/work/ndivhu-mpho">Ndivhu & Mpho ↗</Link>
            <Link href="/certificates">Technical credentials ↗</Link>
          </div>
        </details>
      </section>
      <section id="services" className="studio-services studio-section">
        <div>
          <p className="studio-eyebrow">02 / WHAT WE DO</p>
          <h2>
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
        </div>
        <div className="studio-service-list">
          {[
            [
              "01",
              "Websites & e-commerce",
              "Distinctive, responsive websites and online stores that make it easy to explore your business.",
              "custom-web-applications",
            ],
            [
              "02",
              "Apps & custom software",
              "Purposeful interfaces and connected systems, shaped around how your users work.",
              "robust-saas-solutions",
            ],
            [
              "03",
              "UI/UX & design systems",
              "Clear user journeys, considered interactions and consistent visual foundations.",
              "ui-ux-design-systems",
            ],
          ].map(([n, title, desc, slug]) => (
            <Link href={`/services/${slug}`} key={n}>
              <small>{n}</small>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section id="process" className="studio-section">
        <div className="studio-section-top">
          <div>
            <p className="studio-eyebrow">03 / THE PROCESS</p>
            <h2>
              A clear process.
              <br />
              <em>From idea to launch.</em>
            </h2>
          </div>
          <p>
            A clear path from “what if”
            <br />
            to something people can use.
          </p>
        </div>
        <div className="studio-process">
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
            <article key={title}>
              <span>
                0{i + 1} <b>↗</b>
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="studio-about studio-section">
        <div className="studio-about-mark" aria-hidden="true">
          <span className="studio-about-code">&lt;ts /&gt;</span>
          <small>DESIGN × DEVELOPMENT</small>
        </div>
        <div>
          <p className="studio-eyebrow">04 / THE PEOPLE BEHIND THE PIXELS</p>
          <h2>
            Design meets engineering.
            <br />
            <em>That’s TS Industries.</em>
          </h2>
          <p>
            TS Industries is the digital studio of Thulane Sigasa. Based in
            South Africa, we bring design and development together to turn ideas
            into useful digital experiences.
          </p>
          <p>
            Our work spans websites, e-commerce, community apps and custom
            platforms. We care about the details people see, and the systems
            that make everything work.
          </p>
          <div className="studio-actions">
            <Link className="studio-text-link" href="/journey">
              Explore the journey ↗
            </Link>
            <Link className="studio-text-link" href="/certificates">
              View credentials ↗
            </Link>
          </div>
          <div className="studio-tech">
            <span>TOOLS WE BUILD WITH</span>
            <p>React / Next.js / TypeScript / Python / PostgreSQL</p>
          </div>
        </div>
      </section>
      <section id="contact" className="studio-contact studio-section">
        <div>
          <p className="studio-eyebrow">05 / YOUR NEXT CHAPTER</p>
          <h2>
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
        </div>
        <ProjectEnquiry />
      </section>
    </main>
  );
}
