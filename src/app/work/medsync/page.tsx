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
            padding: '2.5rem 3rem',
            marginTop: '4rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Credits & Rights</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              This section transparently outlines the ownership, contributions, and professional responsibilities of every party involved in the design, development, and delivery of MedSync.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Intellectual Property & Ownership</div>
                <p style={{ margin: 0, lineHeight: 1.8 }}>
                  All intellectual property, branding, business logic, and data associated with MedSync are the exclusive property of <strong style={{ color: 'var(--color-text)' }}>Hokma Tech</strong>. This includes, but is not limited to, the product name, application concept, client data structures, and any proprietary workflows. T.S Industries was engaged as a development partner and does not claim any ownership over the product or its commercial rights.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>UI/UX Design & Development — T.S Industries</div>
                <p style={{ margin: 0, lineHeight: 1.8 }}>
                  <strong style={{ color: 'var(--color-text)' }}>T.S Industries</strong> was responsible for the full end-to-end UI/UX design and implementation of MedSync. This encompassed creating the design system, defining the 60-30-10 colour hierarchy, architecting all navigation flows, and building every screen — Splash, Login, Home Dashboard, Booking, and Confirmation — to pixel-perfect accuracy against the approved specification. All component architecture decisions, screen transitions, and responsive layout considerations were handled by T.S Industries.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Backend Contribution — T.S Industries</div>
                <p style={{ margin: 0, lineHeight: 1.8 }}>
                  In addition to the front-end scope, <strong style={{ color: 'var(--color-text)' }}>T.S Industries</strong> contributed to backend development by defining the API boundary contracts, establishing the decoupled component architecture, and ensuring the application is fully prepared for Context API or Redux integration upon live endpoint deployment. Our backend contribution focused on ensuring the long-term scalability and maintainability of the product for Hokma Tech's engineering team.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Front-end Development — Mpho</div>
                <p style={{ margin: 0, lineHeight: 1.8 }}>
                  Front-end development was led and executed by <strong style={{ color: 'var(--color-text)' }}>Mpho</strong>, who was responsible for translating the designs produced by T.S Industries into fully functional React Native components. Mpho's contribution covers the implementation of the component codebase, state management using local hooks, and the integration layer connecting the UI to MedSync's Delphi-powered REST API backend.
                </p>
              </div>

            </div>
          </div>

          <h3 style={{ color: 'var(--color-text)', marginTop: '4rem', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>App Showcase</h3>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Swipe right to explore MedSync's key screens and clinical workflows.</p>

          <ImageCarousel slides={slides} />
        </div>
      </div>
    </main>
  );
}
