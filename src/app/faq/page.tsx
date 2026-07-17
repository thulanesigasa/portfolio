export default function FAQ() {
  return (
    <main className="container" style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <h1 className="hero-title">Frequently Asked Questions</h1>
      <div style={{ marginTop: "2rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
        <h3 style={{ color: "var(--color-text)", marginTop: "1.5rem" }}>What tech stack do you use?</h3>
        <p>We specialize in modern web technologies including React, Next.js, Node.js, and Python/Django.</p>
        
        <h3 style={{ color: "var(--color-text)", marginTop: "1.5rem" }}>How long does a typical project take?</h3>
        <p>Project timelines vary based on complexity, but a standard web application usually takes 4-8 weeks from design to deployment.</p>
        
        <h3 style={{ color: "var(--color-text)", marginTop: "1.5rem" }}>Do you offer ongoing support?</h3>
        <p>Yes, we offer maintenance and retainer packages to keep your software secure and up-to-date after launch.</p>
      </div>
    </main>
  );
}
