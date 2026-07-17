"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.back()} 
      style={{ 
        background: 'none', border: 'none', color: 'var(--color-primary)', 
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
        fontSize: '1rem', fontWeight: 600, padding: 0, marginBottom: '2rem'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Go Back
    </button>
  );
}
