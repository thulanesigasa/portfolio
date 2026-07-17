import Link from "next/link";

export default function UIUXDesign() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div style={{ marginBottom: "4rem" }}>
        <h1 className="hero-title" style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
          UI/UX & <span style={{ fontWeight: 300 }}>Design</span><br/> Systems
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px" }}>
          We craft visually striking designs that capture your brand's essence and connect with your audience. From intuitive user journeys to premium design systems, our creative expertise ensures your brand stands out with clarity and impact.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>The <span style={{ fontWeight: 300 }}>Process</span></h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. We generate multiple solutions, build prototypes in Figma, and iterate based on feedback to create user-centric digital experiences.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px", 
            background: "var(--color-primary)", color: "#fff", padding: "1rem 2rem", 
            borderRadius: "var(--radius-full)", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em"
          }}>
            Discuss Your Brand
          </Link>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Our Expertise</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>UX Audits & Research</li>
            <li>Wireframing & Prototyping</li>
            <li>Visual Identity & Brand Guidelines</li>
            <li>Responsive Figma Design Systems</li>
            <li>Accessibility & Usability Testing</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
