import React from 'react';
import AboutMe from '@/app/components/home/about-me';

export default function Dashboard() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          About <span style={{ fontWeight: 300 }}>Us</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Welcome to our central dashboard.</p>
      </div>
      
      {/* Import the actual About section as requested */}
      <AboutMe />
      
      <div className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ background: 'var(--color-bg-card)', padding: '3rem', borderRadius: 'var(--radius-md)', marginTop: '4rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Client Dashboard Access</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Log in to view your ongoing projects, invoices, and deliverables.</p>
          <button style={{ padding: '1rem 2.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, cursor: 'pointer' }}>
            Login to Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}
