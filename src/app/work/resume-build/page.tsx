import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";

export default function ResumeBuildWorkPage() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Resume <span style={{ fontWeight: 300 }}>Build</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Client: rbptech
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image 
            src="/images/work/work-img-1.jpg" 
            alt="Resume Build project preview" 
            fill
            style={{ objectFit: 'contain', background: 'var(--color-bg-card)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p>
            The Resume Build project is a comprehensive web platform designed to streamline the resume creation process. 
            Built with a modern tech stack, this application allows users to seamlessly design, build, and download professional 
            resumes with real-time previews. The platform prioritizes a user-centric experience, ensuring that generating an 
            industry-standard resume is as intuitive as possible.
          </p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>The Solution</h3>
          <p>
            We implemented a scalable React and Next.js architecture to handle dynamic form state and instant visual feedback. 
            The system manages complex user data structures securely and renders pixel-perfect PDF outputs. The interface was 
            meticulously crafted to balance robust customization options with a clean, uncluttered user experience.
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
              href="https://www.rbptech.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-block', marginBottom: '2.5rem' }}
            >
              Visit rbptech.co.za
            </a>

            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem' }}>Study the Concept</h3>
            <p style={{ marginBottom: '1rem' }}>
              Interested in how this application was built from the ground up? Use the link below to study the whole concept and dive into the source code:
            </p>
            <a 
              href="https://github.com/thulanesigasa/resume_builder.git" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 600, wordBreak: 'break-all' }}
            >
              https://github.com/thulanesigasa/resume_builder.git
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
