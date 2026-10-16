"use client";
import { useRef, useState } from "react";
import PhonePreview from "./phone-preview";
type SlideData = {
  imageSrc: string | string[];
  title: string;
  description: string;
};
export default function ImageCarousel({ slides }: { slides: SlideData[] }) {
  const rail = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  function sync() {
    const el = rail.current;
    if (!el) return;
    const first = (el.children[0] as HTMLElement)?.offsetLeft ?? 0;
    let nearest = 0;
    let distance = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const delta = Math.abs(
        (child as HTMLElement).offsetLeft - first - el.scrollLeft,
      );
      if (delta < distance) {
        distance = delta;
        nearest = i;
      }
    });
    setActive(nearest);
  }
  function go(index: number) {
    const el = rail.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    const first = el.children[0] as HTMLElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollTo({
      left: child.offsetLeft - first.offsetLeft,
      behavior: reduced ? "auto" : "smooth",
    });
  }
  return (
    <section className="phone-gallery" aria-label="Application screenshots">
      <ol className="phone-gallery-rail" ref={rail} onScroll={sync}>
        {slides.map((slide, i) => (
          <li
            key={slide.title}
            aria-label={`Screenshot ${i + 1} of ${slides.length}`}
          >
            <figure className="phone-gallery-pair">
              {(Array.isArray(slide.imageSrc)
                ? slide.imageSrc
                : [slide.imageSrc]
              ).map((src, n) => (
                <PhonePreview
                  key={src}
                  src={src}
                  alt={`${slide.title}${Array.isArray(slide.imageSrc) ? ` — view ${n + 1}` : ""}`}
                />
              ))}
            </figure>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </li>
        ))}
      </ol>
      <nav aria-label="Screenshot slides">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            aria-current={active === i ? "true" : undefined}
            onClick={() => go(i)}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </section>
  );
}
