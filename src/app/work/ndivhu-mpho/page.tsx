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
            src="/images/work/work-img-3.webp" 
            alt="Ndivhu&Mpho project preview" 
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(214, 196, 172)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Ndivhu&amp;Mpho project is a bespoke, elegantly designed wedding reservation and RSVP management system created to celebrate and organize a very special day. Traditional wedding invitations often struggle with tracking RSVPs and dietary requirements in real time, leading to unnecessary stress for the couple. Recognizing this pain point, we built a dedicated, secure platform to offer a seamless, fully digital experience. Guests can easily confirm their attendance, access intricate event details such as venue locations and timelines, and leave personal messages of congratulations directly on the site.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            To ensure the highest level of reliability and speed, the application was engineered using a robust backend paired with a modern, responsive frontend framework. The architecture handles complex user sessions effortlessly, secures personal data with industry-standard encryption, and processes RSVP submissions instantly without page reloads. A custom-built administrative dashboard provides the couple with a real-time, comprehensive overview of their guest list, allowing them to filter responses, manage plus-ones, and track dietary restrictions in an incredibly intuitive interface.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Aesthetically, the platform was meticulously crafted to reflect the couple's unique personality and the romantic theme of their wedding. Warm, elegant color palettes—such as the distinctive beige and earthy tones used in the branding—are perfectly complemented by refined, modern typography. This thoughtful design strategy creates an inviting and premium digital atmosphere from the very first click, setting the perfect tone for the upcoming celebration. 
          </p>
          <p>
            Beyond its visual appeal, the platform was optimized to perform flawlessly across all devices and network conditions. Whether accessed from a desktop computer by tech-savvy friends or a smartphone by older relatives, the navigation remains exceptionally intuitive. The platform also integrates automated email confirmations, ensuring guests are constantly kept in the loop. This project perfectly highlights how tailored web solutions can elevate personal events into highly organized, memorable digital experiences.
          </p>
          
          <div style={{ 
            background: 'var(--color-bg-card)', 
            padding: '2.5rem', 
            borderRadius: 'var(--radius-md)', 
            marginTop: '4rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Project Confidentiality</h3>
            <p style={{ marginBottom: 0, fontStyle: 'italic' }}>
              Due to a strict client agreement and NDA signed, we are unable to disclose the live website URL for this project.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
