"use client";

import React, { useEffect, useCallback, useState } from "react";

interface CertificateModalProps {
  pdfLink: string;
  title: string;
  issuer: string;
  onClose: () => void;
}

export default function CertificateModal({ pdfLink, title, issuer, onClose }: CertificateModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [useGoogleFallback, setUseGoogleFallback] = useState(false);

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

  const fullPdfUrl = typeof window !== "undefined" 
    ? `${window.location.origin}${pdfLink}`
    : `https://ts-industries.co.za${pdfLink}`;

  const iframeSrc = useGoogleFallback
    ? `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(fullPdfUrl)}`
    : `${pdfLink}#toolbar=0&navpanes=0&scrollbar=0`;

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
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-modal-open-btn"
              aria-label="Open certificate in new tab"
              title="Open in new tab"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
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
          {isLoading && (
            <div className="cert-modal-loading">
              <div className="cert-modal-spinner" />
              <p>Loading certificate…</p>
            </div>
          )}
          
          <object
            data={`${pdfLink}#toolbar=0&navpanes=0&scrollbar=0`}
            type="application/pdf"
            className="cert-modal-iframe"
            style={{ display: isLoading ? "none" : "block", width: "100%", height: "100%" }}
            onLoad={() => setIsLoading(false)}
          >
            <iframe
              src={iframeSrc}
              title={title}
              className="cert-modal-iframe"
              style={{ width: "100%", height: "100%", border: "none" }}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                if (!useGoogleFallback) setUseGoogleFallback(true);
                setIsLoading(false);
              }}
            />
          </object>
        </div>
      </div>
    </div>
  );
}
