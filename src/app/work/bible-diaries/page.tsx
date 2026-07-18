import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";
import ImageCarousel from "@/app/components/ui/image-carousel";

export default function BibleDiariesWorkPage() {
  const slides = [
    {
      imageSrc: [
        "/images/work/bible_diaries/feed-boy.webp",
        "/images/work/bible_diaries/feed-girl.webp"
      ],
      title: "Global Reflections Feed",
      description: "A beautifully categorized timeline of daily diaries, prayers, and reflections. Users can seamlessly scroll, like, comment, and share spiritual insights."
    },
    {
      imageSrc: [
        "/images/work/bible_diaries/filter-boy.webp",
        "/images/work/bible_diaries/filter-girl.webp"
      ],
      title: "Category Filtering",
      description: "Intuitive filtering allows members to easily navigate content by specific spiritual themes such as Hope, Faith, Love, and Gratitude to find exactly what uplifts them."
    },
    {
      imageSrc: [
        "/images/work/bible_diaries/connect-boy.webp",
        "/images/work/bible_diaries/connect-girl.webp"
      ],
      title: "Connect Directory",
      description: "Discover and interact with community members. The directory showcases detailed spiritual profiles, favorite verses, and personal journey stories."
    },
    {
      imageSrc: [
        "/images/work/bible_diaries/chat-boy.webp",
        "/images/work/bible_diaries/chat-girl.webp"
      ],
      title: "Real-Time Chat",
      description: "Secure, real-time messaging allows users to connect deeply and meaningfully. An AI moderation layer ensures all interactions remain respectful and uplifting."
    }
  ];

  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Bible<span style={{ fontWeight: 300 }}> Diaries</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Mobile Application
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image 
            src="/images/work/work-img-4.webp" 
            alt="Bible Diaries Thumbnail" 
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(255, 255, 255)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Bible Diaries is a premium, visually stunning mobile application designed for sharing daily diaries, spiritual reflections, and scripture readings. We recognized the need for a dedicated, secure space where individuals could document their spiritual journeys and connect with a like-minded community free from the distractions of traditional social media. Users can register with comprehensive profiles, publish their thoughts under various uplifting categories, and interact through likes, comments, and favorites.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            A standout feature of this platform is the integration of a dedicated AI Content Moderation service powered by OpenAI. During the drafting phase, the AI analyzes messages to ensure a safe, uplifting environment, automatically flagging and filtering out vulgar or explicit content with constructive feedback provided to the user. This guarantees that the community feed remains a sanctuary of positivity and faith.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Technically, the app leverages a robust backend framework (Supabase) to handle real-time data synchronization, secure authentication, and complex social interactions instantly. The user interface was meticulously crafted to feel modern yet deeply personal, ensuring that whether a user is reading a reflection, chatting in real-time, or filtering through the directory, the experience is flawlessly smooth across all devices.
          </p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '4rem', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>App Showcase</h3>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Swipe right to explore the application features and diverse avatar experiences.</p>
          
          <ImageCarousel slides={slides} />

        </div>
      </div>
    </main>
  );
}
