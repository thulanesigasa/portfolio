import React from 'react';

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
