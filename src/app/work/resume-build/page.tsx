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
            src="/images/work/work-img-1.webp" 
            alt="Resume Build project preview" 
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(104, 47, 226)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Resume Build platform is a highly robust and sophisticated application meticulously designed to redefine how professionals create, format, and share their career accomplishments. Understanding the challenges job seekers face in crafting applicant-tracking-system (ATS) friendly resumes, we developed an intelligent, user-centric web platform that automates the tedious aspects of resume formatting. The core mission of this project was to bridge the gap between brilliant career histories and the modern recruiting software that parses them, ensuring our client's users have the highest possible chance of landing interviews.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Built using a modern, scalable tech stack, the application empowers users with dynamic form handling, real-time visual previews, and seamless PDF generation. It replaces the traditional, frustrating word-processor experience with a streamlined, form-driven interface. Users can effortlessly navigate through guided sections covering their professional summary, work experience, education, and technical skills. Behind the scenes, the engine dynamically calculates spatial layouts to ensure pixel-perfect typography and alignment, avoiding the common pitfalls of overlapping text or awkward page breaks.
          </p>
          <p>
            Beyond its core resume-generation capabilities, the platform was architected with security, speed, and cross-device compatibility in mind. Whether accessed from a desktop or a mobile device, the interface remains remarkably fluid. Complex state management ensures that every keystroke is securely maintained, allowing users to pause their progress and return later without losing any data. This project ultimately stands as a testament to combining sleek UI/UX design principles with complex, data-heavy frontend engineering to deliver an exceptionally polished end product.
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
              style={{ display: 'inline-block' }}
            >
              Visit rbptech.co.za
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
