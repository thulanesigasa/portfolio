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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? staticWorkData
      : staticWorkData.filter((w) => catMap[w.title] === activeFilter);

  return (
    <section id="works" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Latest Works</div>
          <span className="section-number">05</span>
          <p className="positivus-header-desc">
            Explore our portfolio of web applications, mobile platforms, and custom software systems.
          </p>
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
            <Link key={index} href={`/work/${value?.slug}`} className="positivus-work-card reveal" style={{ textDecoration: 'none' }}>
              <div className="work-card-img-wrap">
                <Image
                  src={getImgPath(value?.image)}
                  alt={value?.title}
                  width={570}
                  height={320}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="work-card-badge" style={{ backgroundColor: "#FE4300", color: "#FFFFFF" }}>{catMap[value?.title] || "Work"}</div>
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
