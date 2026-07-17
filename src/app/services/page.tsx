import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Fast, scalable, responsive web apps using React, Next.js, and modern frontend tools tailored to your business.",
      href: "/services/custom-web-applications"
    },
    {
      title: "Robust SaaS Solutions",
      description: "Cloud-native database designs to high-concurrency API microservices — reliable, secure, and performant architectures.",
      href: "/services/robust-saas-solutions"
    },
    {
      title: "UI/UX & Design Systems",
      description: "Intuitive user journeys and premium design systems in Figma that seamlessly transition to clean frontend code.",
      href: "/services/ui-ux-design-systems"
    }
  ];

  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 className="hero-title" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          This is <span style={{ fontWeight: 300 }}>what</span><br/> we do <span style={{ fontWeight: 300 }}>best</span>
        </h1>
      </div>

      <div className="service-list">
        {services.map((s, i) => (
          <Link href={s.href} key={i} className="service-card" style={{ textDecoration: "none" }}>
            <div className="service-card-inner">
              <h3 className="service-card-title">{s.title}</h3>
              <div className="service-card-hover-content">
                <p className="service-card-desc">{s.description}</p>
              </div>
              <div className="service-card-footer">
                <span className="service-card-dot"></span>
                <button className="service-card-btn" aria-label="Learn more">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
