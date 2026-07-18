import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";

export default function RhymaMusicWorkPage() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Rhyma <span style={{ fontWeight: 300 }}>Music</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Client: Rhyma
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image 
            src="/images/work/rhyma(black).png" 
            alt="Rhyma Music project preview" 
            fill
            style={{ objectFit: 'contain', backgroundColor: '#ffffff' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Rhyma Music platform is a modern, dynamic web application designed to showcase and distribute musical content in a highly engaging manner. Recognizing the need for a strong digital presence in the music industry, we developed a sleek, user-centric website that seamlessly integrates multimedia streaming, event promotion, and artist discovery. Our primary goal was to create an immersive digital experience that deeply connects artists with their fans, ensuring a flawless performance across all devices.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Leveraging a robust Next.js and React architecture, the platform delivers lightning-fast page loads and optimized asset delivery, critical for high-fidelity audio and video content. The interface embraces a bold, aesthetic design language tailored to the music industry, prioritizing intuitive navigation and accessibility. Content management is handled dynamically, allowing for real-time updates of tour dates, new releases, and exclusive merchandise without requiring technical intervention.
          </p>
          <p>
            Beyond its striking visuals, the site is engineered for maximum engagement and discoverability. Advanced SEO techniques and responsive design principles ensure that the platform ranks well and performs beautifully on mobile devices, where the majority of music consumption occurs. The Rhyma Music project stands as a testament to our ability to merge creative design with scalable, high-performance web engineering to amplify an artist's digital footprint.
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
              We highly recommend visiting the live deployment of this project. Click the button below to visit the official website:
            </p>
            <a 
              href="https://rhymamusic.co.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-block', marginBottom: '2.5rem' }}
            >
              Visit rhymamusic.co.za
            </a>

            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem' }}>Study the Concept</h3>
            <p style={{ marginBottom: '1rem' }}>
              Interested in how this application was built from the ground up? Use the link below to study the whole concept and dive into the source code:
            </p>
            <a 
              href="https://github.com/thulanesigasa/rhymamusic.git" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 600, wordBreak: 'break-all' }}
            >
              https://github.com/thulanesigasa/rhymamusic.git
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
