"use client";

import React from "react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    pdfLink: "/images/certificates/aws-cert.pdf",
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    description: "Demonstrates proficiency in building and deploying highly scalable applications on Google Cloud Platform.",
    pdfLink: "/images/certificates/gcp-cert.pdf",
  },
  {
    id: 3,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    description: "Certified skills in React, responsive web design, and modern front-end engineering principles.",
    pdfLink: "/images/certificates/meta-cert.pdf",
  }
];

const CertificatesSec = () => {
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
          {certificates.map((cert) => (
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
      </div>
    </section>
  );
};

export default CertificatesSec;
