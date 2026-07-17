import React from 'react';

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
