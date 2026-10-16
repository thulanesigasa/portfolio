"use client";
import { useEffect, useState } from "react";
import BackButton from "@/app/components/ui/back-button";
import Link from "next/link";

const SOUTHERN_AFRICA_COUNTRIES = [
  "ZA",
  "NA",
  "BW",
  "LS",
  "SZ",
  "ZW",
  "MZ",
  "AO",
  "ZM",
  "MW",
];

export default function Pricing() {
  const [region, setRegion] = useState<
    "loading" | "southern_africa" | "international"
  >("loading");

  useEffect(() => {
    async function fetchLocation() {
      try {
        // 1. Instant local check using browser timezone (Bypasses adblockers & network latency)
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const southernAfricaTimezones = [
          "Africa/Johannesburg",
          "Africa/Windhoek",
          "Africa/Gaborone",
          "Africa/Maseru",
          "Africa/Mbabane",
          "Africa/Harare",
          "Africa/Maputo",
          "Africa/Luanda",
          "Africa/Lusaka",
          "Africa/Blantyre",
        ];

        if (southernAfricaTimezones.includes(tz)) {
          setRegion("southern_africa");
          return;
        }

        // 2. Fallback to IP Geolocation if timezone is ambiguous or foreign
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Rate limited");
        const data = await res.json();
        if (
          data &&
          data.country_code &&
          SOUTHERN_AFRICA_COUNTRIES.includes(data.country_code)
        ) {
          setRegion("southern_africa");
          return;
        }
      } catch (error) {
        try {
          const res2 = await fetch("https://ipwho.is/");
          const data2 = await res2.json();
          if (
            data2 &&
            data2.country_code &&
            SOUTHERN_AFRICA_COUNTRIES.includes(data2.country_code)
          ) {
            setRegion("southern_africa");
            return;
          }
        } catch (fallbackError) {
          console.warn(
            "Geolocation failed, defaulting to international pricing.",
          );
        }
      }
      setRegion("international");
    }
    fetchLocation();
  }, []);

  const pricingPlans =
    region === "southern_africa"
      ? [
          {
            prefix: "From",
            currency: "R",
            price: "200",
            title: "Graphic Design",
            description:
              "Eye-catching and impactful designs tailored to your brand identity. From logos to full branding kits, we ensure your visuals leave a lasting impression.",
          },
          {
            prefix: "From",
            currency: "R",
            price: "11,500",
            title: "Mobile App Development",
            description:
              "Custom mobile applications for Android and iOS, built to deliver seamless user experiences and meet your business needs.",
          },
          {
            prefix: "From",
            currency: "R",
            price: "2,000",
            title: "Web App Development",
            description:
              "Modern, responsive, and secure web applications designed to enhance productivity and engage users.",
          },
        ]
      : [
          {
            prefix: "From",
            currency: "£",
            price: "20",
            title: "Graphic Design",
            description:
              "Eye-catching and impactful designs tailored to your brand identity. From logos to full branding kits, we ensure your visuals leave a lasting impression.",
          },
          {
            prefix: "From",
            currency: "£",
            price: "2,000",
            title: "Mobile App Development",
            description:
              "Custom mobile applications for Android and iOS, built to deliver seamless user experiences and meet your business needs.",
          },
          {
            prefix: "From",
            currency: "£",
            price: "1,000",
            title: "Web App Development",
            description:
              "Modern, responsive, and secure web applications designed to enhance productivity and engage users.",
          },
        ];

  return (
    <main className="site-services pricing-page">
      <BackButton />
      <header>
        <p className="studio-eyebrow">Ts Industries / PRICING</p>
        <h1>
          Clear starting points.
          <br />
          <em>Room for your ambition.</em>
        </h1>
        <p>
          Starting prices for design and development. Final pricing depends on
          your project’s requirements and agreed scope.
        </p>
      </header>
      <p role="status" className="studio-eyebrow">
        {region === "loading"
          ? "Loading regional pricing…"
          : region === "southern_africa"
            ? "PRICES IN SOUTH AFRICAN RAND"
            : "PRICES IN BRITISH POUNDS"}
      </p>
      <ul className="site-pricing-list">
        {pricingPlans.map((plan) => (
          <li key={plan.title}>
            <Link href="/#contact" className="pricing-row">
              <p className="site-price">
                <small>{plan.prefix}</small>
                <strong>
                  {region === "loading" ? "…" : `${plan.currency}${plan.price}`}
                </strong>
              </p>
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="studio-button" href="/#contact">
        Request a project quote <span>↗</span>
      </Link>
    </main>
  );
}
