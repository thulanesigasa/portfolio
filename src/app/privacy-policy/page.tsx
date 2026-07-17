import BackButton from "@/app/components/ui/back-button";
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
        <BackButton />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Privacy <span style={{ fontWeight: 300 }}>Policy</span>
        </h1>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p><strong>Last Updated: July 2026</strong></p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>1. Introduction</h3>
          <p>Welcome to TS Industries. We respect your privacy and are committed to protecting your personal data. This extensive privacy policy details precisely how we collect, process, store, and look after your personal data when you visit our website, utilize our software, or engage with our digital services. This document also outlines your privacy rights and how current data protection laws safeguard you.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>2. Comprehensive Data Collection</h3>
          <p>Personal data, or personal information, implies any piece of information concerning an individual from which that person can be unequivocally identified. It does not include data where the identity has been removed (anonymous data). We may collect, use, store, and transfer various categories of personal data about you which we have meticulously grouped together as follows:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details required for processing transactions securely.</li>
            <li><strong>Transaction Data:</strong> includes exhaustive details regarding payments to and from you and other detailed records of products and services you have purchased from us.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your secure login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Profile Data:</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
            <li><strong>Usage Data:</strong> includes nuanced information about how you use our website, products, and services, including heatmaps and clickstream data.</li>
            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>3. Mechanisms of Data Collection</h3>
          <p>We use different methods to collect data from and about you including through:</p>
          <p><strong>Direct Interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us by post, phone, email, or otherwise. This includes personal data you provide when you apply for our products or services, create an account on our website, subscribe to our service or publications, request marketing to be sent to you, enter a competition, promotion or survey, or give us feedback or contact us.</p>
          <p><strong>Automated Technologies or Interactions:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>4. Detailed Usage of Your Personal Data</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li><strong>Contractual Necessity:</strong> Where we need to perform the contract we are about to enter into or have entered into with you (e.g., to supply our software or web development services).</li>
            <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li><strong>Legal Obligation:</strong> Where we need to comply with a legal obligation.</li>
          </ul>
          <p>We generally do not rely on consent as a legal basis for processing your personal data, although we will obtain your consent before sending third-party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>5. Disclosures of Your Personal Data</h3>
          <p>We may share your personal data with internal and external third parties. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our strict instructions.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>6. International Transfers</h3>
          <p>We share your personal data within our corporate group. This may involve transferring your data outside the European Economic Area (EEA) or your local jurisdiction. Whenever we transfer your personal data out of your jurisdiction, we ensure a similar degree of protection is afforded to it by ensuring at least one of the legal safeguards is implemented.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>7. Data Security Protocol</h3>
          <p>We have put in place robust and appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a strict business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>8. Data Retention</h3>
          <p>We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>9. Your Legal Rights</h3>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent. If you wish to exercise any of the rights set out above, please contact our data privacy manager.</p>
        </div>
      </div>
    </main>
  );
}
