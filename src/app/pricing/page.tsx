"use client";
import { useEffect, useState } from "react";
import BackButton from "@/app/components/ui/back-button";
import Link from "next/link";

const SOUTHERN_AFRICA_COUNTRIES = ['ZA', 'NA', 'BW', 'LS', 'SZ', 'ZW', 'MZ', 'AO', 'ZM', 'MW'];

export default function Pricing() {
  const [region, setRegion] = useState<"loading" | "southern_africa" | "international">("loading");

  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_code && SOUTHERN_AFRICA_COUNTRIES.includes(data.country_code)) {
          setRegion("southern_africa");
        } else {
          setRegion("international");
        }
      } catch (error) {
        console.error("Error fetching location", error);
        // Default to international if fetch fails
        setRegion("international");
      }
    }
    fetchLocation();
  }, []);

  const pricingPlans = region === "southern_africa" ? [
    {
      currency: "R",
      price: "200",
      title: "Graphic Design",
      description: "Eye-catching and impactful designs tailored to your brand identity. From logos to full branding kits, we ensure your visuals leave a lasting impression.",
    },
    {
      currency: "R",
      price: "22,500",
      title: "Mobile App Development",
      description: "Custom mobile applications for Android and iOS, built to deliver seamless user experiences and meet your business needs.",
    },
    {
      currency: "R",
      price: "6,500",
      title: "Web App Development",
      description: "Modern, responsive, and secure web applications designed to enhance productivity and engage users.",
    }
  ] : [
    {
      currency: "£",
      price: "20",
      title: "Graphic Design",
      description: "Eye-catching and impactful designs tailored to your brand identity. From logos to full branding kits, we ensure your visuals leave a lasting impression.",
    },
    {
      currency: "£",
      price: "2,000",
      title: "Mobile App Development",
      description: "Custom mobile applications for Android and iOS, built to deliver seamless user experiences and meet your business needs.",
    },
    {
      currency: "£",
      price: "900",
      title: "Web App Development",
      description: "Modern, responsive, and secure web applications designed to enhance productivity and engage users.",
    }
  ];

  return (
    <main className="pricing-page" style={{ paddingTop: "150px", paddingBottom: "120px" }}>
      <div className="container">
        <BackButton />
        <div style={{ textAlign: "center", marginBottom: "5rem", marginTop: "1rem" }}>
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
              transition: "all 0.3s ease",
              opacity: region === "loading" ? 0.4 : 1,
              pointerEvents: region === "loading" ? "none" : "auto"
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                <span style={{ fontSize: "1.2rem", color: "var(--color-text-muted)" }}>
                  {region === "loading" ? "-" : plan.currency}
                </span>
                <span style={{ fontSize: "2.5rem", color: "var(--color-primary)", fontWeight: 600 }}>
                  {region === "loading" ? "..." : plan.price}
                </span>
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
