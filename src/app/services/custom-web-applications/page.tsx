import BackButton from "@/app/components/ui/back-button";
import Link from "next/link";

export default function CustomWebApps() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "120px", minHeight: "100vh" }}>
        <BackButton />

      <div style={{ marginBottom: "4rem" }}>
        <h1 className="hero-title" style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
          Custom <span style={{ fontWeight: 300 }}>Web</span><br/> Applications
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px" }}>
          We design and build modern, user-friendly websites that deliver seamless experiences across devices. Our focus is on functionality, aesthetics, and performance to help your brand thrive online.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Our <span style={{ fontWeight: 300 }}>Approach</span></h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px", 
            background: "var(--color-primary)", color: "#fff", padding: "1rem 2rem", 
            borderRadius: "var(--radius-full)", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em"
          }}>
            Start a Project
          </Link>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Key Features</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>Responsive Design</li>
            <li>E-commerce Solutions</li>
            <li>SEO Optimization</li>
            <li>High Performance & Core Web Vitals</li>
            <li>Scalable React & Next.js Architecture</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
