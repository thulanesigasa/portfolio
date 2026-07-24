"use client";

import React, { useEffect, useCallback } from "react";

interface CertificateModalProps {
  pdfLink: string;
  title: string;
  issuer: string;
  onClose: () => void;
}

export default function CertificateModal({ pdfLink, title, issuer, onClose }: CertificateModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="cert-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${title}`}
    >
      <div
        className="cert-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-header-info">
            <h2 className="cert-modal-title">{title}</h2>
            <p className="cert-modal-issuer">{issuer}</p>
          </div>
          <div className="cert-modal-actions">
            <a
              href={pdfLink}
              download
              className="cert-modal-download-btn"
              aria-label="Download certificate"
              title="Download PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
            <button
              className="cert-modal-close-btn"
              onClick={onClose}
              aria-label="Close certificate preview"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="cert-modal-body">
          <iframe
            src={`${pdfLink}#toolbar=0&navpanes=0&scrollbar=0`}
            title={title}
            className="cert-modal-iframe"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
