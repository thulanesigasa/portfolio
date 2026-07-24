"use client";

import React from "react";
import Link from "next/link";

export const allCertificates = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description: "Certified in building responsive, accessible, and modern web interfaces using HTML and CSS.",
    pdfLink: "/images/certificates/responsive-web-design.pdf",
  },
  {
    id: 2,
    title: "CCNA - Introduction to Networks",
    issuer: "Cisco Networking Academy",
    description: "Foundational networking knowledge including architecture, structure, functions, and models of the Internet.",
    pdfLink: "/images/certificates/CCNA-_Introduction_to_Networks_certificate_pharezsigasa-gmail-com_752fabf4-9c4d-4877-bf16-52f9a21fb35a.pdf",
  },
  {
    id: 3,
    title: "Basics of Network Layer Protocols",
    issuer: "Huawei Technologies",
    description: "Technical expertise in network layer protocols and IP addressing.",
    pdfLink: "/images/certificates/Basics_of_Network_Layer_Protocols_Micro_Certification.pdf",
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    description: "Demonstrates strong foundational knowledge in JavaScript, algorithms, and data structures.",
    pdfLink: "/images/certificates/javascript-algorithms-and-data-structures.pdf",
  },
  {
    id: 5,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    description: "Certified skills in React, Redux, and modern front-end engineering principles.",
    pdfLink: "/images/certificates/front-end-development-libraries.pdf",
  },
  {
    id: 6,
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    description: "Comprehensive understanding of computer hardware, software, and advanced troubleshooting.",
    pdfLink: "/images/certificates/IT_Essentials_certificate_sigasathulane584-gmail-com_b9069ced-ec69-4653-91e5-3f6b491c8a0a.pdf",
  },
  {
    id: 7,
    title: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    description: "Proficiency in operating systems installation, configuration, and maintenance.",
    pdfLink: "/images/certificates/Operating_Systems_Suport_Cisco.pdf",
  },
  {
    id: 8,
    title: "Cloud Service Computing",
    issuer: "Huawei Technologies",
    description: "Knowledge of cloud service models, deployments, and infrastructure.",
    pdfLink: "/images/certificates/Cloud_Service_Computing_Micro_Certification.pdf",
  },
  {
    id: 9,
    title: "Data Link Network Layer Technology",
    issuer: "Huawei Technologies",
    description: "Understanding of data link protocols, switching, and network access technologies.",
    pdfLink: "/images/certificates/Data_Link_Network_Layer_Technology_Micro_Certification.pdf",
  },
  {
    id: 10,
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    description: "Certified in building data visualizations using D3.js and modern web APIs.",
    pdfLink: "/images/certificates/data-visualization.pdf",
  },
  {
    id: 11,
    title: "Legacy Data Visualization",
    issuer: "freeCodeCamp",
    description: "Certification in legacy data visualization techniques.",
    pdfLink: "/images/certificates/legacy-data-visualization.pdf",
  },
  {
    id: 12,
    title: "Legacy Front End",
    issuer: "freeCodeCamp",
    description: "Certification in legacy front-end web development.",
    pdfLink: "/images/certificates/legacy-front-end.pdf",
  },
  {
    id: 13,
    title: "JavaScript Algorithms & Data Structures (v8)",
    issuer: "freeCodeCamp",
    description: "Updated certification in JS algorithms and data structures.",
    pdfLink: "/images/certificates/javascript-algorithms-and-data-structures-v8.pdf",
  },
  {
    id: 14,
    title: "AI+ Foundation™",
    issuer: "AI Certification",
    description: "Foundational knowledge in Artificial Intelligence principles and applications.",
    pdfLink: "/images/certificates/null_AI+_Foundation™__certificate.pdf",
  },
  {
    id: 15,
    title: "Using Computer and Mobile Devices",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_4bc7c6a6-6b7a-4523-a170-0d77040a1402.pdf",
  },
  {
    id: 16,
    title: "Digital Safety and Security Awareness",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_58d22fe6-1131-4576-b614-4acf9aa75904.pdf",
  },
  {
    id: 17,
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_6d48752f-ac10-478f-a52a-b2ff68da6897.pdf",
  },
  {
    id: 18,
    title: "Digital Awareness",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_7fdf6300-5260-43d2-aa3e-9edb37075ba6.pdf",
  },
  {
    id: 19,
    title: "Create Digital Content, Communicate and Collaborate Online",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_8d3aaf88-df7a-4333-8a96-440397e77832.pdf",
  },
  {
    id: 20,
    title: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_ab9cf82f-08ac-4b3d-b283-4e09e8d82a1e.pdf",
  },
  {
    id: 21,
    title: "Vodacom Group Certification I",
    issuer: "Vodacom Group",
    description: "Official certificate of completion.",
    pdfLink: "/images/certificates/certificate-thulane-sigasa.pdf",
  },
  {
    id: 22,
    title: "Vodacom Group Certification II",
    issuer: "Vodacom Group",
    description: "Official certificate of completion.",
    pdfLink: "/images/certificates/certificate-thulane-sigasa-1.pdf",
  },
  {
    id: 23,
    title: "Vodacom Group Certification III",
    issuer: "Vodacom Group",
    description: "Official certificate of completion.",
    pdfLink: "/images/certificates/certificate-thulane-sigasa-2.pdf",
  }
];

const CertificatesSec = () => {
  const displayedCertificates = allCertificates.slice(0, 3);

  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2>Certifications <span style={{ fontWeight: 300 }}>& Achievements</span></h2>
          <span className="section-number">04</span>
        </div>
        <div className="section-heading" style={{ marginTop: '-2rem' }}>
          <p className="section-desc">
            A showcase of my professional certifications. Click on any card to view the official PDF certificate.
          </p>
        </div>

        <div className="cert-grid">
          {displayedCertificates.map((cert) => (
            <Link 
              key={cert.id} 
              href={cert.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-img-wrap">
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link href="/certificates" className="btn-outline">
            See More Certificates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSec;
