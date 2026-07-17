import Link from "next/link";

export default function RobustSaaS() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div style={{ marginBottom: "4rem" }}>
        <h1 className="hero-title" style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
          Robust <span style={{ fontWeight: 300 }}>SaaS</span><br/> Solutions
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px" }}>
          We provide innovative tech solutions that empower your business to operate smarter and more efficiently. From systems integration to custom software, we deliver tools that drive results.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Our <span style={{ fontWeight: 300 }}>Architecture</span></h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Our SaaS platforms are built on cloud-native databases and high-concurrency API microservices. This guarantees reliable, secure, and performant architectures capable of scaling with your rapidly growing user base.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px", 
            background: "var(--color-primary)", color: "#000", padding: "1rem 2rem", 
            borderRadius: "var(--radius-full)", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em"
          }}>
            Get an Estimate
          </Link>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Key Features</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>IT Consulting & Digital Strategy</li>
            <li>Cloud Solutions & Migration</li>
            <li>System & API Integration</li>
            <li>Secure Multi-Tenant Databases</li>
            <li>Subscription & Payment Gateways</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
