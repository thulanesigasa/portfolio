"use client";

import { useEffect, useRef, useState } from "react";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "SaaS", "App", "Web", "Design"];

const catMap: Record<string, string> = {
  "Ndivhu&Mpho": "Web",
  "Rhyma Music": "Web",
  "Resume Build": "SaaS",
  "Bible Diaries": "App",
  "Service Link": "App",
  "MedSync": "Design",
};

const staticWorkData = [
  { image: "/images/work/work-img-3.webp", title: "Ndivhu&Mpho", client: "Ndivhuwo & Mpho", slug: "ndivhu-mpho" },
  { image: "/images/work/work-img-2.webp", title: "Rhyma Music", client: "Rhyma", slug: "rhyma-music" },
  { image: "/images/work/work-img-1.webp", title: "Resume Build", client: "rbptech", slug: "resume-build" },
  { image: "/images/work/work-img-4.webp", title: "Bible Diaries", client: "Internal Project", slug: "bible-diaries" },
  { image: "/images/work/work-img-5.webp", title: "Service Link", client: "Internal Project", slug: "service-link" },
  { image: "/images/work/work-img-6.webp", title: "MedSync", client: "Hokma Tech", slug: "medsync" },
];

const LatestWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mark all visible immediately on filter change
  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filtered =
    activeFilter === "All"
      ? staticWorkData
      : staticWorkData.filter((w) => catMap[w.title] === activeFilter);

  return (
    <section id="works" className="works-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Latest Works</h2>
          <span className="section-number">04</span>
        </div>

        {/* Filters */}
        <div className="works-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Work grid */}
        <div className="works-grid">
          {filtered.map((value: any, index: number) => (
            <Link key={index} href={`/work/${value?.slug}`} className="work-card reveal" style={{ textDecoration: 'none' }}>
              <div className="work-card-img-wrap">
                <Image
                  src={getImgPath(value?.image)}
                  alt={value?.title}
                  width={570}
                  height={320}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Category badge */}
                <div className="work-card-badge">{catMap[value?.title] || "Work"}</div>
                {/* Gradient footer overlay */}
                <div className="work-card-overlay">
                  <div className="work-card-overlay-meta">
                    <div className="work-card-overlay-title">{value?.title}</div>
                    <div className="work-card-overlay-client">{value?.client}</div>
                  </div>
                  <div className="work-card-overlay-icon">↗</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
