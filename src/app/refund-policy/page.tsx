import React from 'react';

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
