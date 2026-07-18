"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  imageSrc: string | string[]; // Can be an array of 2 for side-by-side
  title: string;
  description: string;
}

interface ImageCarouselProps {
  slides: SlideData[];
}

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ width: "100%", margin: "3rem 0" }}>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: "2rem"
        }}
      >
        {slides.map((slide, i) => (
          <div 
            key={i} 
            style={{ 
              minWidth: "100%", 
              scrollSnapAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            <div style={{ 
              background: "var(--color-bg-card)", 
              borderRadius: "var(--radius-lg)", 
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              border: "1px solid var(--color-border)",
              height: "500px",
              position: "relative"
            }}>
              {Array.isArray(slide.imageSrc) ? (
                <>
                  <div style={{ position: "relative", width: "45%", height: "100%" }}>
                    <Image src={slide.imageSrc[0]} alt={`${slide.title} 1`} fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div style={{ position: "relative", width: "45%", height: "100%" }}>
                    <Image src={slide.imageSrc[1]} alt={`${slide.title} 2`} fill style={{ objectFit: 'contain' }} />
                  </div>
                </>
              ) : (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={slide.imageSrc} alt={slide.title} fill style={{ objectFit: 'contain' }} />
                </div>
              )}
            </div>
            
            <div style={{ textAlign: "center", padding: "0 1rem" }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>
                {slide.title}
              </h4>
              <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: activeIndex === i ? "30px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: activeIndex === i ? "var(--color-primary)" : "var(--color-border)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hide scrollbar pseudo-element for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        div::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
