"use client";
import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { allCertificates } from "../../data/certificates";
import previews from "../../data/certificate-previews.json";
type Props = {
  pdfLink: string;
  title: string;
  issuer: string;
  onClose: () => void;
};
const previewData: Record<
  string,
  { src: string; width: number; height: number }
> = previews;
export default function CertificateModal({
  pdfLink,
  title,
  issuer,
  onClose,
}: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const label = useId();
  const cert = allCertificates.find((c) => c.pdfLink === pdfLink);
  const preview = cert ? previewData[String(cert.id)] : null;
  useEffect(() => {
    const modal = dialog.current;
    const previous = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previous;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="credential-dialog"
      aria-labelledby={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialog.current?.close();
      }}
    >
      <header>
        <h2 id={label}>
          {title}
          <small>{issuer}</small>
        </h2>
        <nav aria-label="Certificate actions">
          <a href={pdfLink} download>
            Download ↓
          </a>
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            Open PDF ↗
          </a>
          <button
            autoFocus
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close certificate"
          >
            ✕
          </button>
        </nav>
      </header>
      {preview ? (
        <Image
          className="credential-full-preview"
          {...preview}
          alt={`${title} certificate issued by ${issuer}`}
          sizes="(max-width:760px) 95vw, 1100px"
          priority
        />
      ) : (
        <p>
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            Open the original certificate PDF ↗
          </a>
        </p>
      )}
    </dialog>
  );
}
