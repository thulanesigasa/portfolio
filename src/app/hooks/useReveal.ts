import { useEffect, RefObject } from "react";

/**
 * Adds the "visible" class to every .reveal element inside a section ref.
 * Elements already in the viewport on mount are shown immediately.
 * Off-screen elements animate in as they enter the viewport.
 */
const useReveal = (sectionRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sectionRef]);
};

export default useReveal;
