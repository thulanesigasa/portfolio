import Link from "next/link";

export default function Pricing() {
  const pricingPlans = [
    {
      price: "150",
      title: "Graphic Design",
      description: "Eye-catching and impactful designs tailored to your brand identity. From logos to full branding kits, we ensure your visuals leave a lasting impression.",
    },
    {
      price: "1,500",
      title: "Mobile App Development",
      description: "Custom mobile applications for Android and iOS, built to deliver seamless user experiences and meet your business needs.",
    },
    {
      price: "800",
      title: "Web App Development",
      description: "Modern, responsive, and secure web applications designed to enhance productivity and engage users.",
    },
  ];

  return (
    <main className="pricing-page" style={{ paddingTop: "150px", paddingBottom: "120px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Reasonable <span style={{ fontWeight: 300 }}>prices</span> <br />
            for innovative <span style={{ fontWeight: 300 }}>solutions</span>
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            At our agency, we have a unique approach to web design and development. <br />
            We believe in creating in terms of user experience, functionality.
          </p>
        </div>

        <div className="pricing-list" style={{ display: "flex", flexDirection: "column" }}>
          {pricingPlans.map((plan, i) => (
            <Link href="#contact" key={i} className="pricing-row" style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 3fr auto",
              gap: "2rem",
              alignItems: "center",
              padding: "2.5rem 0",
              borderTop: "1px solid var(--color-border)",
              borderBottom: i === pricingPlans.length - 1 ? "1px solid var(--color-border)" : "none",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s ease"
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                <span style={{ fontSize: "1.2rem", color: "var(--color-text-muted)" }}>R</span>
                <span style={{ fontSize: "2.5rem", color: "var(--color-primary)", fontWeight: 600 }}>{plan.price}</span>
              </div>
              <h5 style={{ fontSize: "1.2rem", fontFamily: "var(--font-heading)", fontWeight: 600 }}>{plan.title}</h5>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{plan.description}</p>
              <div className="pricing-arrow-btn" style={{
                width: "44px", height: "44px", borderRadius: "50%", background: "var(--color-primary)", 
                display: "flex", alignItems: "center", justifyContent: "center", color: "#fff"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px", 
            background: "var(--color-primary)", color: "#fff", padding: "1rem 2.5rem", 
            borderRadius: "var(--radius-full)", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em"
          }}>
            Individual Solution
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
