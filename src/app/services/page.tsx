import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | T.s Industries",
  description:
    "T.s Industries offers custom web applications, SaaS solutions, and premium UI/UX design systems built for modern businesses in South Africa and beyond.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | T.s Industries",
    description:
      "Custom web apps, SaaS solutions, and design systems built by T.s Industries.",
    url: "https://ts-industries.co.za/services",
  },
};

export default function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      description:
        "Fast, scalable, responsive web apps using React, Next.js, and modern frontend tools tailored to your business.",
      href: "/services/custom-web-applications",
    },
    {
      title: "Robust SaaS Solutions",
      description:
        "Cloud-native database designs to high-concurrency API microservices — reliable, secure, and performant architectures.",
      href: "/services/robust-saas-solutions",
    },
    {
      title: "UI/UX & Design Systems",
      description:
        "Intuitive user journeys and premium design systems in Figma that seamlessly transition to clean frontend code.",
      href: "/services/ui-ux-design-systems",
    },
  ];

  return (
    <main className="site-services">
      <header>
        <p className="studio-eyebrow">TS INDUSTRIES / OUR EXPERTISE</p>
        <h1>
          Digital solutions.
          <br />
          <em>Built for your business.</em>
        </h1>
        <p>
          Design, development and the systems behind a useful digital
          experience.
        </p>
      </header>
      <ol className="site-services-list">
        {services.map((service, i) => (
          <li key={service.href}>
            <Link href={service.href}>
              <small>0{i + 1}</small>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ol>
      <Link className="studio-text-link" href="/#contact">
        Discuss your project ↗
      </Link>
    </main>
  );
}
