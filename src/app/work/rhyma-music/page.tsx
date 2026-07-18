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
            src="/images/work/work-img-2.webp" 
            alt="Rhyma Music project preview" 
            fill
            style={{ objectFit: 'contain', backgroundColor: '#ffffff' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Rhyma Music platform is an immersive, highly dynamic digital ecosystem crafted exclusively to elevate the music streaming and discovery experience. Born out of a deep passion for the music industry, this application is meticulously engineered to bridge the gap between emerging artists and their rapidly expanding fanbases. The core philosophy was to move beyond traditional, static portfolios and instead create a vibrant, interactive community hub where music, art, and engagement seamlessly intersect. Every element of the interface was designed to visually resonate with the energy of the artists it hosts, providing users with a truly captivating digital concert experience right from their devices.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            From a technical standpoint, the platform leverages the cutting-edge capabilities of Next.js and React to deliver a lightning-fast, highly optimized user experience. High-fidelity audio and video streaming demand an architecture that can handle heavy bandwidth without sacrificing rendering speed. We achieved this through aggressive asset optimization, intelligent caching strategies, and server-side rendering, ensuring that fans never face frustrating buffering screens. The architecture is inherently scalable, prepared to seamlessly handle massive spikes in traffic during new album drops or exclusive live-streamed events.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Moreover, we prioritized a seamless administrative backend, empowering the Rhyma team to effortlessly update tour schedules, upload new merchandise, and push instant news updates to their community. The bold aesthetic design language, coupled with micro-animations and smooth page transitions, ensures that navigating the site is just as enjoyable as the content itself. Accessibility and mobile responsiveness were woven into the project from day one, recognizing that the vast majority of music discovery occurs on mobile devices on the go.
          </p>
          <p>
            The Rhyma Music project stands as a prime example of blending high-performance web engineering with striking creative design. It not only amplifies the digital footprint of the artists involved but also sets a new standard for how fans interact with the music they love. Through continuous iteration and user-focused design principles, we successfully delivered a robust platform that is ready to evolve alongside the ever-changing landscape of digital entertainment.
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
              We highly recommend visiting the live deployment of this project to experience the platform firsthand. Click the button below to explore the official website:
            </p>
            <a 
              href="https://rhymamusic.co.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-block' }}
            >
              Visit rhymamusic.co.za
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
