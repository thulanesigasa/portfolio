import os

base_dir = "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app"

pages = {
    "faq": """import React from 'react';

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
""",

    "privacy-policy": """import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Privacy <span style={{ fontWeight: 300 }}>Policy</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p><strong>Last Updated: July 2026</strong></p>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>1. Introduction</h3>
          <p>Welcome to TS Industries. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>2. The Data We Collect About You</h3>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>3. How We Use Your Personal Data</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>4. Data Security</h3>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>5. Your Legal Rights</h3>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
        </div>
      </div>
    </main>
  );
}
""",

    "terms-of-service": """import React from 'react';

export default function TermsOfService() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Terms of <span style={{ fontWeight: 300 }}>Service</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p><strong>Effective Date: July 2026</strong></p>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>1. Agreement to Terms</h3>
          <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TS Industries ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>2. Intellectual Property Rights</h3>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>3. User Representations</h3>
          <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>4. Prohibited Activities</h3>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>5. Limitation of Liability</h3>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
        </div>
      </div>
    </main>
  );
}
""",

    "shipping-delivery": """import React from 'react';

export default function ShippingDelivery() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Shipping & <span style={{ fontWeight: 300 }}>Delivery</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>As a digital agency, the vast majority of our products and services are delivered electronically. However, in the rare event that physical deliverables are required, the following policy applies.</p>
          
          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>1. Digital Delivery</h3>
          <p>All software, source code, design assets, and digital documentation will be delivered via secure online portals, such as GitHub, Google Drive, or our proprietary client dashboard. Access credentials will be provided to the email address associated with your account upon project completion or at agreed milestones.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>2. Physical Deliverables</h3>
          <p>If your project includes physical items (e.g., printed brand guidelines, hardware configurations, promotional materials), they will be shipped via our trusted courier partners.</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li><strong>Domestic Shipping:</strong> 3-5 business days.</li>
            <li><strong>International Shipping:</strong> 7-14 business days, depending on customs processing in the destination country.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>3. Processing Time</h3>
          <p>Digital access is typically granted within 24 hours of final payment clearance. Physical orders are processed within 1-2 business days.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>4. Shipping Costs</h3>
          <p>Digital delivery is entirely free. Shipping costs for physical items are calculated at checkout or included in your custom project proposal.</p>
        </div>
      </div>
    </main>
  );
}
""",

    "refund-policy": """import React from 'react';

export default function RefundPolicy() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Refund <span style={{ fontWeight: 300 }}>Policy</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>We strive to deliver the highest quality digital products and services. Due to the custom nature of software development and design work, our refund policy is strictly structured.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>1. Custom Services & Development</h3>
          <p>For custom web applications, SaaS solutions, and design systems, refunds are generally not provided once work has commenced. We require approval at various milestones to ensure the project meets your expectations before continuing.</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li><strong>Initial Deposits:</strong> Non-refundable after the kickoff phase begins.</li>
            <li><strong>Milestone Payments:</strong> Payments made upon approval of a milestone are non-refundable.</li>
            <li><strong>Project Cancellation:</strong> If a project is cancelled by the client before completion, any unbilled work completed up to that point will be invoiced, and no previous payments will be refunded.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>2. Digital Products</h3>
          <p>Pre-packaged digital products, templates, and downloadable assets are non-refundable once the download link has been accessed or the files have been delivered.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>3. Exceptional Circumstances</h3>
          <p>We may, at our sole discretion, grant a partial or full refund in exceptional circumstances, such as:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Failure to deliver the agreed-upon scope of work due to our own technical limitations.</li>
            <li>Significant delays caused entirely by our team, exceeding the agreed timeline by more than 60 days without prior communication.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', fontSize: '1.5rem' }}>4. How to Request a Refund</h3>
          <p>If you believe you are entitled to a refund under this policy, please contact our support team in writing at our official contact email, detailing the reasons for your request. We will review your case and respond within 7 business days.</p>
        </div>
      </div>
    </main>
  );
}
""",

    "contact": """import React from 'react';

export default function Contact() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Get in <span style={{ fontWeight: 300 }}>Touch</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '4rem' }}>
          Whether you have a question, a project proposal, or just want to say hi, our inbox is always open. 
          Fill out the form below or reach us directly via our contact details.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Email Us</h3>
            <a href="mailto:pharezsigasa@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>pharezsigasa@gmail.com</a>
          </div>
          <div style={{ background: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Call Us</h3>
            <a href="tel:+447544357979" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>+44 75 4435 7979</a>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Name</label>
            <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Email</label>
            <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Message</label>
            <textarea rows={5} placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', resize: 'vertical' }}></textarea>
          </div>
          <button type="button" style={{ padding: '1rem 2.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
""",

    "dashboard": """import React from 'react';
import AboutSec from '@/app/components/home/about-sec';

export default function Dashboard() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          About <span style={{ fontWeight: 300 }}>Us</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Welcome to our central dashboard.</p>
      </div>
      
      {/* Import the actual About section as requested */}
      <AboutSec />
      
      <div className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ background: 'var(--color-bg-card)', padding: '3rem', borderRadius: 'var(--radius-md)', marginTop: '4rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Client Dashboard Access</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Log in to view your ongoing projects, invoices, and deliverables.</p>
          <button style={{ padding: '1rem 2.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, cursor: 'pointer' }}>
            Login to Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}
"""
}

for route, content in pages.items():
    dir_path = os.path.join(base_dir, route)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(content)

print("All pages generated successfully!")
