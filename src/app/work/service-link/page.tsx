import React from 'react';
import Image from 'next/image';
import BackButton from "@/app/components/ui/back-button";
import ImageCarousel from "@/app/components/ui/image-carousel";

export default function ServiceLinkWorkPage() {
  const slides = [
    {
      imageSrc: "/images/work/service_link/discover.jpeg",
      title: "Interactive Discovery Map",
      description: "A dynamic map interface that allows users to seamlessly discover nearby service professionals based on their current location and filter criteria."
    },
    {
      imageSrc: "/images/work/service_link/discover-view_rating.jpeg",
      title: "Provider Profiles & Ratings",
      description: "Detailed provider profiles showcasing hourly rates, experience scores, specialized skills, and verified community reviews."
    },
    {
      imageSrc: "/images/work/service_link/discover-book_appointment.jpeg",
      title: "Seamless Booking Flow",
      description: "An intuitive booking system that takes the hassle out of scheduling, allowing users to select dates, times, and specific service needs instantly."
    },
    {
      imageSrc: "/images/work/service_link/feed.jpeg",
      title: "Service Feed & Activity",
      description: "A categorized list view of available professionals and recent community activity, providing an alternative to the map-based discovery."
    },
    {
      imageSrc: "/images/work/service_link/messages.jpeg",
      title: "In-App Messaging",
      description: "Direct, real-time chat functionality empowering users to communicate securely with providers to coordinate logistics and ask questions before booking."
    },
    {
      imageSrc: "/images/work/service_link/news.jpeg",
      title: "Platform Updates & News",
      description: "A dedicated news section keeping users informed about platform updates, new features, and tips for finding the best local services."
    },
    {
      imageSrc: "/images/work/service_link/profile.jpeg",
      title: "User Profile Management",
      description: "A comprehensive profile hub where users can manage their dark/light theme preferences, view past bookings, and update account settings."
    }
  ];

  return (
    <main className="container" style={{ paddingTop: '150px', paddingBottom: '120px', minHeight: '100vh' }}>
      <BackButton />
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Service<span style={{ fontWeight: 300 }}> Link</span>
        </h1>
        <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Mobile Application
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
          <Image 
            src="/images/work/work-img-5.png" 
            alt="Service Link Thumbnail" 
            fill
            style={{ objectFit: 'contain', backgroundColor: 'rgb(7, 7, 7)' }}
          />
        </div>

        <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <h3 style={{ color: 'var(--color-text)', marginTop: '2.5rem', fontSize: '1.5rem', marginBottom: '1rem' }}>Project Overview</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Service Link is a highly functional and modern React Native mobile application built to bridge the gap between users and local service providers. Whether someone is in urgent need of a plumber, an electrician, or any other professional service, Service Link was engineered to make finding, evaluating, and booking the right person an effortless experience.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The application features a robust interactive map and list view system, allowing users to dynamically discover nearby professionals. Real-time filtering algorithms process distance, category, and name searches instantly. Once a provider is found, users can dive into detailed profiles containing transparent hourly rates, aggregated experience scores, and authentic community reviews. A deeply integrated booking flow handles appointment scheduling seamlessly.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Built with Expo and React Native, the technical architecture utilizes file-based routing for snappy navigation and a custom context provider to ensure flawless transitions between light and dark modes. Furthermore, a secure in-app messaging system allows users and providers to chat directly, coordinating complex logistics securely without ever needing to leave the application.
          </p>

          <h3 style={{ color: 'var(--color-text)', marginTop: '4rem', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>App Showcase</h3>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Swipe right to explore the intuitive interface and features of Service Link.</p>
          
          <ImageCarousel slides={slides} />

        </div>
      </div>
    </main>
  );
}
