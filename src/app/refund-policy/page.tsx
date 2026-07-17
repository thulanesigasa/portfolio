import BackButton from "@/app/components/ui/back-button";
import React from 'react';

export default function RefundPolicy() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
        <BackButton />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Refund <span style={{ fontWeight: 300 }}>Policy</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>At TS Industries, we pride ourselves on delivering the highest quality digital products, custom software architectures, and comprehensive design services. Because of the highly bespoke and custom nature of software development, our refund policy is strictly structured and designed to protect both the intellectual property of our agency and the financial commitment of our clients.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>1. Custom Services & Software Development</h3>
          <p>For custom web applications, robust SaaS solutions, enterprise design systems, and any consulting services, refunds are generally not provided once tangible work has commenced. Our development process is highly collaborative, requiring client approval at various critical milestones to ensure the project meets expectations before continuing.</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li><strong>Initial Deposits:</strong> To initiate a project and allocate necessary engineering resources, a deposit is required. This deposit becomes non-refundable 48 hours after the formal project kickoff phase begins, as our team has already committed time and infrastructure.</li>
            <li><strong>Milestone Payments:</strong> Payments made upon the formal approval of a defined project milestone are strictly non-refundable. Approval indicates your satisfaction with the work completed up to that point.</li>
            <li><strong>Project Cancellation:</strong> If a project is prematurely cancelled by the client before final completion, any unbilled work completed up to the date of cancellation will be invoiced accordingly. No previous payments or deposits will be refunded under any circumstances.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>2. Pre-Packaged Digital Products</h3>
          <p>Any pre-packaged digital products, UI templates, code boilerplates, and downloadable design assets purchased directly from our website are strictly non-refundable once the secure download link has been accessed or the digital files have been delivered to your email address. This policy is in place because digital files cannot be physically returned once they have been duplicated onto your local system.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>3. Retainer Contracts and Maintenance</h3>
          <p>For ongoing maintenance contracts and monthly retainers, payments are billed at the beginning of the billing cycle. If you choose to terminate a retainer agreement, you must provide written notice at least 30 days prior to the next billing cycle. We do not provide prorated refunds for the remainder of a billing cycle if services are cancelled mid-month.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>4. Exceptional Circumstances for Review</h3>
          <p>While our policy is strict, we maintain a commitment to ethical business practices. We may, at our sole and absolute discretion, grant a partial or full refund in highly exceptional circumstances. These circumstances may include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li>A verifiable failure on our part to deliver the explicitly agreed-upon scope of work due solely to our own technical limitations or negligence.</li>
            <li>Significant, inexcusable delays caused entirely by our engineering team, exceeding the formally agreed-upon project timeline by more than 60 days without any prior communication or mutually agreed extension.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>5. Formal Procedure to Request a Refund Review</h3>
          <p>If you believe your specific situation warrants an exception to this policy, you must submit a formal refund review request. Please contact our administrative team in writing at our official contact email. Your request must comprehensively detail the reasons for your dispute, including referenced milestones, communication logs, and the specific failure points. Our executive team will review your case meticulously and provide a binding response within 10 to 14 business days.</p>
        </div>
      </div>
    </main>
  );
}
