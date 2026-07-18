import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";

export default function NdivhuMphoWorkPage() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Ndivhu<span style={{ fontWeight: 300 }}>&amp;Mpho</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Client: Ndivhuwo &amp; Mpho
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image 
            src="/images/work/ndivhu-mpho.png" 
            alt="Ndivhu&Mpho project preview" 
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(214, 196, 172)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Ndivhu&amp;Mpho project is a bespoke, elegantly designed wedding reservation and RSVP management system created to celebrate and organize a very special day. Traditional wedding invitations often struggle with tracking RSVPs and dietary requirements in real time. We built this dedicated platform to offer a seamless, fully digital experience for the couple's guests, allowing them to easily confirm their attendance, access event details, and leave personal messages of congratulations.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            To ensure the highest level of reliability and speed, the application was engineered using a robust backend paired with a modern, responsive frontend framework. The architecture seamlessly handles user sessions, secures personal data, and processes RSVP submissions instantly. A custom administrative dashboard provides the couple with a real-time overview of their guest list, greatly reducing the stress associated with wedding planning and headcount management.
          </p>
          <p>
            Aesthetically, the platform was meticulously crafted to reflect the couple's unique personality and wedding theme. Warm, elegant color palettes (such as the distinctive beige used in the branding) and refined typography create an inviting and premium digital atmosphere. The platform performs flawlessly across all devices, ensuring that older relatives and tech-savvy friends alike can navigate the site with absolute ease. This project perfectly highlights how tailored web solutions can elevate personal events into memorable digital experiences.
          </p>
          
          <div style={{ 
            background: 'var(--color-bg-card)', 
            padding: '2.5rem', 
            borderRadius: 'var(--radius-md)', 
            marginTop: '4rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>View the Live Project</h3>
            <p style={{ marginBottom: '1rem' }}>
              We invite you to explore the live deployment of this beautiful project. Click the button below to visit the official website:
            </p>
            <a 
              href="https://www.ndivhuandmpho.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-block', marginBottom: '2.5rem' }}
            >
              Visit ndivhuandmpho.co.za
            </a>

            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem' }}>Study the Concept</h3>
            <p style={{ marginBottom: '1rem' }}>
              Interested in the technical architecture behind this reservation system? Use the link below to dive into the source code and study the full implementation:
            </p>
            <a 
              href="https://github.com/thulanesigasa/wedding_reservation.git" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 600, wordBreak: 'break-all' }}
            >
              https://github.com/thulanesigasa/wedding_reservation.git
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
