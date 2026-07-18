"use client";

import { useEffect, useRef, useState } from "react";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "SaaS", "Mobile", "Web", "Design"];

const LatestWork = () => {
  const [workData, setWorkData] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [workData]);

  // Category tag map
  const catMap: Record<string, string> = {
    "SaaS Dashboard & Analytics": "SaaS",
    "Rhyma Music": "Web",
    "Resume Build": "Web",
    "Real Estate Web Portal": "Web",
    "AI Content Generator App": "SaaS",
    "Corporate Design System": "Design",
  };

  const filtered =
    activeFilter === "All"
      ? workData
      : workData.filter((w) => catMap[w.title] === activeFilter);

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
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="work-card-overlay">
                  <div className="work-card-overlay-icon">↗</div>
                </div>
              </div>
              <div className="work-card-body">
                <div className="work-card-title">{value?.title}</div>
                <div className="work-card-client">
                  Client: <span>{value?.client}</span>
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
