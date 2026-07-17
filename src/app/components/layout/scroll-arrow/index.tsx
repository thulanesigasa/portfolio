"use client";

import { useEffect, useState } from "react";

const ScrollArrow = () => {
  const [pos, setPos] = useState<"bottom" | "top" | null>(null);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY < 80) {
        setPos("bottom"); // Near top → show scroll-down arrow
      } else if (scrollY > maxScroll - 80) {
        setPos("top");    // Near bottom → show scroll-up arrow
      } else {
        // In the middle: show whichever direction is more useful
        setPos(scrollY > maxScroll / 2 ? "top" : "bottom");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleClick = () => {
    if (pos === "bottom") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (pos === null) return null;

  return (
    <button
      onClick={handleClick}
      className={`scroll-arrow-btn ${pos}`}
      aria-label={pos === "bottom" ? "Scroll to bottom" : "Scroll to top"}
      title={pos === "bottom" ? "Scroll to bottom" : "Scroll to top"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: pos === "bottom" ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
};

export default ScrollArrow;
