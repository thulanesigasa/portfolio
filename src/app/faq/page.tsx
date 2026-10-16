import BackButton from "@/app/components/ui/back-button";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Ts Industries",
  description:
    "Frequently asked questions about Ts Industries services, pricing, technical process, and design approach.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Ts Industries",
    description:
      "Find answers to common questions about our web development and design services.",
    url: "https://ts-industries.co.za/faq",
  },
};

export default function FAQ() {
  const categories = [
    {
      title: "General",
      faqs: [
        {
          q: "What services do you offer?",
          a: "We offer custom web applications, SaaS solutions, UI/UX design, and cloud architecture.",
        },
        {
          q: "Where are you located?",
          a: "We operate remotely with a global presence, serving clients worldwide.",
        },
        {
          q: "How do I get started?",
          a: "You can reach out via our Contact page to schedule an initial consultation.",
        },
        {
          q: "Do you offer ongoing support?",
          a: "Yes, we provide maintenance and ongoing support for all our projects.",
        },
        {
          q: "What industries do you work with?",
          a: "We have experience in e-commerce, real estate, healthcare, finance, and more.",
        },
      ],
    },
    {
      title: "Pricing & Billing",
      faqs: [
        {
          q: "How much does a website cost?",
          a: "Costs vary depending on scope. Graphic design starts at R150, web apps at R800, and mobile apps at R1,500.",
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we typically require a 50% deposit before commencing work.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, credit cards, and PayPal.",
        },
        {
          q: "Are there any hidden fees?",
          a: "No, all costs are outlined transparently in our proposals.",
        },
        {
          q: "Can I upgrade my plan later?",
          a: "Absolutely. Our solutions are scalable and can grow with your business.",
        },
      ],
    },
    {
      title: "Technical Process",
      faqs: [
        {
          q: "What technologies do you use?",
          a: "We specialize in React, Next.js, Node.js, Python, and cloud infrastructure like AWS/Vercel.",
        },
        {
          q: "How long does a project take?",
          a: "A standard web app takes 4-8 weeks, while complex SaaS platforms may take 3-6 months.",
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Yes, all our designs are fully responsive and optimized for mobile devices.",
        },
        {
          q: "Do you provide hosting?",
          a: "We offer managed hosting solutions and can also deploy to your preferred provider.",
        },
        {
          q: "Can you integrate third-party APIs?",
          a: "Yes, we have extensive experience integrating payment gateways, CRM systems, and custom APIs.",
        },
      ],
    },
    {
      title: "Design & UX",
      faqs: [
        {
          q: "Will I see designs before you build?",
          a: "Yes, we provide high-fidelity Figma prototypes for your approval before development begins.",
        },
        {
          q: "How many revisions are allowed?",
          a: "We typically include 2-3 rounds of revisions during the design phase.",
        },
        {
          q: "Do you provide branding services?",
          a: "Yes, we offer logo design, brand guidelines, and full visual identity services.",
        },
        {
          q: "What if I already have a design?",
          a: "We are happy to take your existing designs and translate them into clean, performant code.",
        },
        {
          q: "Is accessibility considered?",
          a: "Absolutely. We follow WCAG guidelines to ensure our apps are accessible to all users.",
        },
      ],
    },
  ];

  return (
    <main className="site-faq">
      <BackButton />
      <h1>Frequently asked questions</h1>
      {categories.map((category) => (
        <section key={category.title}>
          <h2>{category.title}</h2>
          {category.faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>
      ))}
    </main>
  );
}
