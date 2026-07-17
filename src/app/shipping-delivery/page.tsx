import React from 'react';

export default function ShippingDelivery() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Shipping & <span style={{ fontWeight: 300 }}>Delivery</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>As a leading digital agency and software development firm, the vast majority of our products, deliverables, and services are transferred and delivered electronically. However, in the comprehensive scope of enterprise projects, physical deliverables may occasionally be required. This policy extensively details our procedures for both digital access and physical shipping.</p>
          
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>1. Comprehensive Digital Delivery</h3>
          <p>Our primary mode of delivery is digital. All software, source code repositories, design assets (such as Figma files), digital documentation, and compiled application binaries will be delivered via secure, encrypted online portals. These portals may include, but are not limited to, private GitHub repositories, secure cloud storage environments, or our proprietary client dashboard.</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li><strong>Access Credentials:</strong> Secure access credentials will be provisioned and sent to the authorized email address associated with your organizational account upon the completion of agreed-upon milestones or the finalization of the project.</li>
            <li><strong>Data Integrity:</strong> We employ rigorous checksums and cryptographic verification to ensure that the digital assets you receive are uncorrupted and match the exact specifications outlined in our final quality assurance checks.</li>
            <li><strong>Downtime and Availability:</strong> Digital delivery portals are guaranteed 99.9% uptime to ensure you can access your deliverables whenever necessary.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>2. Physical Deliverables and Logistics</h3>
          <p>If your specific project scope includes physical items—such as printed brand guidelines, customized hardware configurations, promotional materials, or physical security tokens—they will be shipped via our globally recognized and trusted courier partners (e.g., FedEx, DHL, UPS).</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li><strong>Domestic Shipping (Within SA):</strong> Standard delivery typically takes 3-5 business days. Expedited overnight shipping is available upon request and subject to additional fees.</li>
            <li><strong>International Shipping:</strong> Global delivery generally takes 7-14 business days. Please note that this timeline is heavily dependent on customs processing and regulatory clearance in the destination country.</li>
            <li><strong>Tracking:</strong> A comprehensive tracking number will be provided immediately upon the dispatch of your physical items, allowing you to monitor the shipment's progress in real-time.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>3. Processing Times and Milestones</h3>
          <p>Digital access is typically granted automatically or within a strict 24-hour window following final payment clearance or milestone approval. Physical orders are processed and prepared for dispatch within 1-2 business days from the moment the physical asset is produced or procured.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>4. Shipping Costs and Tariffs</h3>
          <p>Digital delivery is entirely complimentary and included in your project cost. Shipping costs for physical items are calculated meticulously at checkout or are explicitly itemized within your custom project proposal. International clients are solely responsible for any import duties, taxes, or customs tariffs levied by their respective governments.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>5. Lost or Damaged Physical Goods</h3>
          <p>In the highly unlikely event that a physical deliverable is lost in transit or arrives severely damaged, please contact our logistics support team within 48 hours of the delivery date. We will initiate a full investigation with the courier and expedite a replacement shipment at no additional cost to you, provided the claim is validated.</p>
        </div>
      </div>
    </main>
  );
}
