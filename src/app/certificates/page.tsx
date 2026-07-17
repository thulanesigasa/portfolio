"use client";

import React from "react";
import Link from "next/link";
import CertificatesSec, { allCertificates } from "../components/home/certificates-sec";

export default function CertificatesPage() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="section-heading">
        <span className="section-eyebrow">Milestones</span>
        <h2 className="section-title">
          All <span style={{ fontWeight: 300 }}>Certifications</span>
        </h2>
        <p className="section-desc">
          A complete showcase of my professional certifications and technical achievements.
        </p>
      </div>

      <div className="cert-grid">
        {allCertificates.map((cert) => (
          <Link 
            key={cert.id} 
            href={cert.pdfLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-img-wrap">
              <iframe 
                src={`${cert.pdfLink}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                title={cert.title}
                className="cert-iframe-preview"
              />
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>
              <p className="cert-desc">{cert.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
