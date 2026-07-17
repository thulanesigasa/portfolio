"use client";

import React, { useState } from "react";
import Link from "next/link";

const allCertificates = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description: "Certified in building responsive, accessible, and modern web interfaces using HTML and CSS.",
    pdfLink: "/images/certificates/responsive-web-design.pdf",
  },
  {
    id: 2,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    description: "Demonstrates strong foundational knowledge in JavaScript, algorithms, and data structures.",
    pdfLink: "/images/certificates/javascript-algorithms-and-data-structures.pdf",
  },
  {
    id: 3,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    description: "Certified skills in React, Redux, and modern front-end engineering principles.",
    pdfLink: "/images/certificates/front-end-development-libraries.pdf",
  },
  {
    id: 4,
    title: "CCNA - Introduction to Networks",
    issuer: "Cisco",
    description: "Foundational networking knowledge including architecture, structure, functions, and models of the Internet.",
    pdfLink: "/images/certificates/CCNA-_Introduction_to_Networks_certificate_pharezsigasa-gmail-com_752fabf4-9c4d-4877-bf16-52f9a21fb35a.pdf",
  },
  {
    id: 5,
    title: "IT Essentials",
    issuer: "Cisco",
    description: "Comprehensive understanding of computer hardware, software, and advanced troubleshooting.",
    pdfLink: "/images/certificates/IT_Essentials_certificate_sigasathulane584-gmail-com_b9069ced-ec69-4653-91e5-3f6b491c8a0a.pdf",
  },
  {
    id: 6,
    title: "Operating Systems Support",
    issuer: "Cisco",
    description: "Proficiency in operating systems installation, configuration, and maintenance.",
    pdfLink: "/images/certificates/Operating_Systems_Suport_Cisco.pdf",
  },
  {
    id: 7,
    title: "Basics of Network Layer Protocols",
    issuer: "Micro Certification",
    description: "Technical expertise in network layer protocols and IP addressing.",
    pdfLink: "/images/certificates/Basics_of_Network_Layer_Protocols_Micro_Certification.pdf",
  },
  {
    id: 8,
    title: "Cloud Service Computing",
    issuer: "Micro Certification",
    description: "Knowledge of cloud service models, deployments, and infrastructure.",
    pdfLink: "/images/certificates/Cloud_Service_Computing_Micro_Certification.pdf",
  },
  {
    id: 9,
    title: "Data Link Network Layer Technology",
    issuer: "Micro Certification",
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
    title: "Technical Certification 1",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_4bc7c6a6-6b7a-4523-a170-0d77040a1402.pdf",
  },
  {
    id: 16,
    title: "Technical Certification 2",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_58d22fe6-1131-4576-b614-4acf9aa75904.pdf",
  },
  {
    id: 17,
    title: "Technical Certification 3",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_6d48752f-ac10-478f-a52a-b2ff68da6897.pdf",
  },
  {
    id: 18,
    title: "Technical Certification 4",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_7fdf6300-5260-43d2-aa3e-9edb37075ba6.pdf",
  },
  {
    id: 19,
    title: "Technical Certification 5",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_8d3aaf88-df7a-4333-8a96-440397e77832.pdf",
  },
  {
    id: 20,
    title: "Technical Certification 6",
    issuer: "Cisco Academy",
    description: "Official course completion certificate.",
    pdfLink: "/images/certificates/_certificate_sigasathulane584-gmail-com_ab9cf82f-08ac-4b3d-b283-4e09e8d82a1e.pdf",
  }
];

const CertificatesSec = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll ? allCertificates : allCertificates.slice(0, 3);

  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Milestones</span>
          <h2 className="section-title">
            Certifications <span style={{ fontWeight: 300 }}>& Achievements</span>
          </h2>
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
                {/* SVG Placeholder for PDF Preview */}
                <svg className="cert-img-placeholder" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && allCertificates.length > 3 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              className="btn-outline" 
              onClick={() => setShowAll(true)}
              style={{ cursor: 'pointer' }}
            >
              See More Certificates
            </button>
          </div>
        )}
        
        {showAll && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              className="btn-outline" 
              onClick={() => setShowAll(false)}
              style={{ cursor: 'pointer' }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSec;
