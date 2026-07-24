"use client";

import BackButton from "@/app/components/ui/back-button";
import React, { useState } from "react";
import Link from "next/link";
import CertificatesSec, { allCertificates, getIssuerIcon } from "../components/home/certificates-sec";
import Image from "next/image";

const TABS = ["All", "Cisco", "Huawei", "freeCodeCamp", "Vodacom Group"];

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCertificates = allCertificates.filter((cert) => {
    if (activeTab === "All") return true;
    if (activeTab === "Cisco") return cert.issuer.includes("Cisco");
    if (activeTab === "Huawei") return cert.issuer.includes("Huawei");
    if (activeTab === "freeCodeCamp") return cert.issuer.includes("freeCodeCamp");
    if (activeTab === "Vodacom Group") return cert.issuer.includes("Vodacom Group");
    return true;
  });

  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
        <BackButton />

      <div className="section-heading">
        <span className="section-eyebrow">Milestones</span>
        <h2 className="section-title">
          All <span style={{ fontWeight: 300 }}>Certifications</span>
        </h2>
        <p className="section-desc">
          A complete showcase of my professional certifications and technical achievements.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              background: activeTab === tab ? 'var(--color-primary)' : 'transparent',
              color: activeTab === tab ? '#fff' : 'var(--color-text)',
              border: `1px solid ${activeTab === tab ? 'var(--color-primary)' : 'var(--color-border)'}`,
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cert-grid">
        {filteredCertificates.map((cert) => (
          <Link 
            key={cert.id} 
            href={cert.pdfLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-img-wrap">
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', position: 'relative' }}>
                {getIssuerIcon(cert.issuer) ? (
                  <Image src={getIssuerIcon(cert.issuer)!} alt={cert.issuer} width={100} height={100} style={{ opacity: 0.9, objectFit: 'contain' }} />
                ) : (
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                )}
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
      
      {filteredCertificates.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '2rem' }}>
          No certificates found for this category yet.
        </div>
      )}
    </main>
  );
}
