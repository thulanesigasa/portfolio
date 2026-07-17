import React from 'react';

export default function FAQ() {
  const categories = [
    {
      title: "General",
      faqs: [
        { q: "What services do you offer?", a: "We offer custom web applications, SaaS solutions, UI/UX design, and cloud architecture." },
        { q: "Where are you located?", a: "We operate remotely with a global presence, serving clients worldwide." },
        { q: "How do I get started?", a: "You can reach out via our Contact page to schedule an initial consultation." },
        { q: "Do you offer ongoing support?", a: "Yes, we provide maintenance and ongoing support for all our projects." },
        { q: "What industries do you work with?", a: "We have experience in e-commerce, real estate, healthcare, finance, and more." },
      ]
    },
    {
      title: "Pricing & Billing",
      faqs: [
        { q: "How much does a website cost?", a: "Costs vary depending on scope. Graphic design starts at R150, web apps at R800, and mobile apps at R1,500." },
        { q: "Do you require a deposit?", a: "Yes, we typically require a 50% deposit before commencing work." },
        { q: "What payment methods do you accept?", a: "We accept bank transfers, credit cards, and PayPal." },
        { q: "Are there any hidden fees?", a: "No, all costs are outlined transparently in our proposals." },
        { q: "Can I upgrade my plan later?", a: "Absolutely. Our solutions are scalable and can grow with your business." },
      ]
    },
    {
      title: "Technical Process",
      faqs: [
        { q: "What technologies do you use?", a: "We specialize in React, Next.js, Node.js, Python, and cloud infrastructure like AWS/Vercel." },
        { q: "How long does a project take?", a: "A standard web app takes 4-8 weeks, while complex SaaS platforms may take 3-6 months." },
        { q: "Will my website be mobile-friendly?", a: "Yes, all our designs are fully responsive and optimized for mobile devices." },
        { q: "Do you provide hosting?", a: "We offer managed hosting solutions and can also deploy to your preferred provider." },
        { q: "Can you integrate third-party APIs?", a: "Yes, we have extensive experience integrating payment gateways, CRM systems, and custom APIs." },
      ]
    },
    {
      title: "Design & UX",
      faqs: [
        { q: "Will I see designs before you build?", a: "Yes, we provide high-fidelity Figma prototypes for your approval before development begins." },
        { q: "How many revisions are allowed?", a: "We typically include 2-3 rounds of revisions during the design phase." },
        { q: "Do you provide branding services?", a: "Yes, we offer logo design, brand guidelines, and full visual identity services." },
        { q: "What if I already have a design?", a: "We are happy to take your existing designs and translate them into clean, performant code." },
        { q: "Is accessibility considered?", a: "Absolutely. We follow WCAG guidelines to ensure our apps are accessible to all users." },
      ]
    }
  ];

  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        Frequently Asked <span style={{ fontWeight: 300 }}>Questions</span>
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
              {cat.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cat.faqs.map((faq, j) => (
                <div key={j} style={{ background: 'var(--color-bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
