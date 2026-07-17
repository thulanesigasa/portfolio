import React from 'react';

export default function Contact() {
  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          Get in <span style={{ fontWeight: 300 }}>Touch</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '4rem' }}>
          Whether you have a question, a project proposal, or just want to say hi, our inbox is always open. 
          Fill out the form below or reach us directly via our contact details.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Email Us</h3>
            <a href="mailto:pharezsigasa@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>pharezsigasa@gmail.com</a>
          </div>
          <div style={{ background: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Call Us</h3>
            <a href="tel:+447544357979" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>+44 75 4435 7979</a>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Name</label>
            <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Email</label>
            <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Message</label>
            <textarea rows={5} placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', resize: 'vertical' }}></textarea>
          </div>
          <button type="button" style={{ padding: '1rem 2.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
