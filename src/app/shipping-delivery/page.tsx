import React from 'react';

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
