import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";
import ImageCarousel from "@/app/components/ui/image-carousel";

export default function MedSyncWorkPage() {
  const slides = [
    {
      imageSrc: "/images/work/hokmatech/hokma-1.jpeg",
      title: "Splash & Onboarding",
      description: "A premium splash screen and guided onboarding experience that communicates MedSync's brand identity, adhering to a strict 60-30-10 colour rule for visual hierarchy and a polished first impression."
    },
    {
      imageSrc: "/images/work/hokmatech/hokma-2.jpeg",
      title: "Login & Authentication",
      description: "A clean, secure login screen with elegant form handling and validation. The interface prioritises ease of access for medical staff while maintaining strict data security standards."
    },
    {
      imageSrc: "/images/work/hokmatech/hokma-3.jpeg",
      title: "Home Dashboard",
      description: "The central hub of MedSync, offering medical staff a clear overview of active sessions, appointment queues, and system notifications — all surfaced in a calm, readable layout designed for high-pressure clinical environments."
    },
    {
      imageSrc: "/images/work/hokmatech/hokma-4.jpeg",
      title: "Booking & Confirmation",
      description: "A streamlined booking flow that interfaces directly with the Delphi-powered REST API backend. Staff can schedule, modify, and confirm appointments with minimal taps, reducing admin overhead significantly."
    }
  ];

  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Med<span style={{ fontWeight: 300 }}>Sync</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Mobile Application — Powered by Hokma Tech
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
          Front-end Development by <strong style={{ color: 'var(--color-text)' }}>Mpho</strong>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image
            src="/images/work/work-img-6.jpeg"
            alt="MedSync - Hokma Tech project preview"
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(254, 254, 254)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            MedSync is a production-ready, highly modular mobile application engineered to transform healthcare appointment management. Commissioned by and built for <strong style={{ color: 'var(--color-text)' }}>Hokma Tech</strong>, this application was designed to seamlessly interface with their Delphi-powered REST API backend. At its core, MedSync solves a deeply human problem: reducing the friction and administrative overhead that consumes valuable time for medical staff in high-pressure clinical environments.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our team's contribution was focused on the UI/UX design and implementation, ensuring every screen was rendered pixel-perfectly against the approved layout specification. We applied a strict 60-30-10 colour allocation rule throughout the interface to maintain strong visual hierarchy, professionalism, and brand consistency across all views — from the initial splash screen through to the booking confirmation flow. The entire UI/UX implementation reached 100% completion, with all key screens — Splash, Login, Home, Booking, and Confirmation — built and tested against the specification.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Alongside the front-end work, we contributed meaningfully to the backend architecture — helping define the API boundaries and establishing the decoupled component structure that ensures MedSync is fully ready for Context API or Redux-level state management once all live backend endpoints are deployed. The application is built with Expo and React Native, ensuring a consistent, high-quality experience across both iOS and Android platforms.
          </p>

          {/* Credits */}
          <div style={{
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.5rem',
            marginTop: '4rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>Credits & Rights</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, minWidth: '8px' }}>©</span>
                <span>All rights and intellectual property belong to <strong style={{ color: 'var(--color-text)' }}>Hokma Tech</strong>. This project is proprietary and was developed exclusively on their behalf.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, minWidth: '8px' }}>🎨</span>
                <span><strong style={{ color: 'var(--color-text)' }}>UI/UX Design & Development:</strong> rbptech — We designed and implemented the full user interface and experience from the ground up.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, minWidth: '8px' }}>⚙️</span>
                <span><strong style={{ color: 'var(--color-text)' }}>Backend Contribution:</strong> rbptech — We contributed to the backend development, defining API boundaries and ensuring a decoupled, scalable architecture.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, minWidth: '8px' }}>💻</span>
                <span><strong style={{ color: 'var(--color-text)' }}>Front-end Development:</strong> <strong style={{ color: 'var(--color-primary)' }}>Mpho</strong> — Front-end development lead and implementation.</span>
              </li>
            </ul>
          </div>

          <h3 style={{ color: 'var(--color-text)', marginTop: '4rem', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>App Showcase</h3>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Swipe right to explore MedSync's key screens and clinical workflows.</p>

          <ImageCarousel slides={slides} />
        </div>
      </div>
    </main>
  );
}
