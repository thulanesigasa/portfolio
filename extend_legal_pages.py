import os

base_dir = "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app"

pages = {
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

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>1. Comprehensive Agreement to Terms</h3>
          <p>These exhaustive Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TS Industries ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website, mobile application, API, or software platform related, linked, or otherwise connected thereto. By accessing the site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>2. Intellectual Property Rights</h3>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws. The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>3. User Representations and Warranties</h3>
          <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>4. Exhaustive Prohibited Activities</h3>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
            <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site.</li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>5. User Generated Contributions</h3>
          <p>The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>6. Site Management</h3>
          <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems.</p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem' }}>7. Term and Termination</h3>
          <p>These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.</p>
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
"""
}

for route, content in pages.items():
    dir_path = os.path.join(base_dir, route)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(content)

print("Extended Legal pages generated successfully!")
