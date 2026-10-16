"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CertificateModal from "../../ui/certificate-modal";

export const getIssuerIcon = (issuer: string) => {
  if (issuer.includes("Cisco")) return "/images/icon/cisco-svgrepo-com.svg";
  if (issuer.includes("Vodacom")) return "/images/icon/Vodacom-Logo.wine.svg";
  if (issuer.includes("freeCodeCamp"))
    return "/images/icon/freecodecamp-svgrepo-com.svg";
  if (issuer.includes("Huawei")) return "/images/icon/huawei-seeklogo.svg";
  if (issuer.includes("AI")) return "/images/icon/ai-certs.svg";
  return null;
};

import { allCertificates } from "../../../data/certificates";
export { allCertificates } from "../../../data/certificates";

const CertificateCard = ({
  cert,
  onClick,
}: {
  cert: (typeof allCertificates)[0];
  onClick: () => void;
}) => (
  <button
    type="button"
    className="cert-card"
    onClick={onClick}
    style={{
      cursor: "pointer",
      textAlign: "left",
      width: "100%",
      background: "none",
      border: "none",
      padding: 0,
    }}
    aria-label={`View certificate: ${cert.title}`}
  >
    <div className="cert-img-wrap">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg-alt)",
          borderRadius: "var(--radius-md) var(--radius-md) 0 0",
          position: "relative",
        }}
      >
        {getIssuerIcon(cert.issuer) ? (
          <Image
            src={getIssuerIcon(cert.issuer)!}
            alt={cert.issuer}
            width={100}
            height={100}
            style={{ opacity: 0.9, objectFit: "contain" }}
          />
        ) : (
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
  </button>
);

const CertificatesSec = () => {
  const displayedCertificates = allCertificates.slice(0, 3);
  const [activeCert, setActiveCert] = useState<
    (typeof allCertificates)[0] | null
  >(null);

  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2>
            Certifications{" "}
            <span style={{ fontWeight: 300 }}>&amp; Achievements</span>
          </h2>
          <span className="section-number">04</span>
        </div>
        <div className="section-heading" style={{ marginTop: "-2rem" }}>
          <p className="section-desc">
            A showcase of my professional certifications. Click on any card to
            preview the official certificate.
          </p>
        </div>

        <div className="cert-grid">
          {displayedCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={() => setActiveCert(cert)}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Link href="/certificates" className="btn-outline">
            See More Certificates
          </Link>
        </div>
      </div>

      {activeCert && (
        <CertificateModal
          pdfLink={activeCert.pdfLink}
          title={activeCert.title}
          issuer={activeCert.issuer}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
};

export default CertificatesSec;
