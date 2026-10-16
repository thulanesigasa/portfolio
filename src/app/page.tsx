import Link from "next/link";
import Image from "next/image";
import ProjectEnquiry from "./components/home/project-enquiry";
const projects = [
  {
    title: "Exclusive Apparel",
    type: "E-commerce / Web development",
    image: "/images/work/exclusive-apparel.jpg",
    slug: "exclusive-apparel",
    description: "An everyday clothing brand, brought to life online.",
    tone: "sage",
  },
  {
    title: "Bible Diaries",
    type: "Mobile application / Community",
    image: "/images/work/bible_diaries/feed-boy.webp",
    slug: "bible-diaries",
    description: "A dedicated space for reflection, scripture and connection.",
    tone: "peach",
  },
  {
    title: "Ndivhu & Mpho",
    type: "Website / Digital experience",
    image: "/images/work/work-img-3.webp",
    slug: "ndivhu-mpho",
    description: "A personal celebration, thoughtfully translated to the web.",
    tone: "sand",
  },
  {
    title: "Service Link",
    type: "Mobile application / Product design",
    image: "/images/work/service_link/discover.webp",
    slug: "service-link",
    description: "Helping people discover services and connect with providers.",
    tone: "lavender",
  },
];
export default function Home() {
  return (
    <main id="main-content" className="studio-home">
      <section className="studio-hero">
        <div className="studio-eyebrow">
          <span className="studio-dot" /> INDEPENDENT DIGITAL STUDIO · SOUTH
          AFRICA
        </div>
        <div className="studio-hero-grid">
          <div>
            <h1>
              Your next
              <br />
              big idea.
              <br />
              <em>Built to work.</em>
            </h1>
            <p>
              We design and develop websites, mobile apps and custom software
              that help businesses move forward.
            </p>
            <div className="studio-actions">
              <Link className="studio-button" href="#works">
                Explore our work <span>↘</span>
              </Link>
              <Link className="studio-text-link" href="#contact">
                Let’s talk ↗
              </Link>
            </div>
          </div>
          <Link href="/work/exclusive-apparel" className="studio-hero-showcase">
            <div className="studio-browser">
              <span>● ● ●</span>
              <span>SELECTED PROJECT / 01</span>
              <span>↗</span>
            </div>
            <div className="studio-store-preview">
              <div className="studio-store-nav">
                <strong>EXCLUSIVE.</strong>
                <span>MEN / WOMEN / KIDS</span>
              </div>
              <div className="studio-store-grid">
                <div>
                  <small>THE EVERYDAY COLLECTION</small>
                  <h2>
                    Made for
                    <br />
                    your <em>everyday.</em>
                  </h2>
                  <p>
                    Good fits. Clean details.
                    <br />
                    Your own kind of exclusive.
                  </p>
                  <span className="studio-store-cta">
                    Explore the collection ↗
                  </span>
                </div>
                <Image
                  src="/images/work/exclusive-model.webp"
                  alt="Exclusive Apparel T-shirt product photography"
                  width={768}
                  height={1024}
                  priority
                  sizes="(max-width: 850px) 45vw, 26vw"
                />
              </div>
            </div>
            <div className="studio-showcase-caption">
              <div>
                <small>COMMERCE WITH CHARACTER</small>
                <strong>Exclusive Apparel</strong>
              </div>
              <span className="studio-round-arrow">↗</span>
            </div>
            <span className="studio-project-stamp">
              DESIGN.
              <br />
              BUILD.
              <br />
              MAKE IT MATTER.
            </span>
          </Link>
        </div>
        <div className="studio-hero-bottom">
          <span>FROM FIRST SKETCH TO FINAL SHIP.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <div className="studio-strip" aria-label="Our focus">
        <span>Web experiences</span>
        <b>✳</b>
        <span>Mobile applications</span>
        <b>✳</b>
        <span>Custom software</span>
        <b>✳</b>
        <span>Thoughtful design</span>
      </div>
      <section id="works" className="studio-section">
        <div className="studio-section-top">
          <div>
            <p className="studio-eyebrow">01 / SELECTED WORK</p>
            <h2>
              Good ideas.
              <br />
              <em>Real experiences.</em>
            </h2>
          </div>
          <p>
            A selection of brands, products and platforms.
            <br />
            Each with a different story to tell.
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
            <Link href="/work/resume-build">Resume Build ↗</Link>
            <Link href="/work/medsync">MedSync ↗</Link>
          </div>
        </details>
      </section>
      <section id="services" className="studio-services studio-section">
        <div>
          <p className="studio-eyebrow">02 / WHAT WE DO</p>
          <h2>
            Made to look good.
            <br />
            <em>Built to do more.</em>
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
              Big picture thinking.
              <br />
              <em>Care in every detail.</em>
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
          ts<span>✳</span>
        </div>
        <div>
          <p className="studio-eyebrow">04 / THE PEOPLE BEHIND THE PIXELS</p>
          <h2>
            A personal approach.
            <br />
            <em>A bigger ambition.</em>
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
            Have something
            <br />
            <em>in mind?</em>
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
