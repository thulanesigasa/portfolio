import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | T.s Industries",
  description: "Transparent pricing for web development, mobile apps, UI/UX design, and SaaS solutions by T.s Industries. Prices shown in Rands (ZAR) or Pounds (GBP) based on your location.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | T.s Industries",
    description: "Affordable, transparent pricing for web apps, mobile apps, and digital products by T.s Industries.",
    url: "https://ts-industries.co.za/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
