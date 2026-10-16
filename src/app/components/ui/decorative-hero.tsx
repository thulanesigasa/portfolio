"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
export default function DecorativeHero() {
  const art = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const motion = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    motion.current = !media.matches;
    const update = () => {
      motion.current = !media.matches;
      if (media.matches) {
        cancelAnimationFrame(frame.current);
        art.current?.style.setProperty("--art-x", "0deg");
        art.current?.style.setProperty("--art-y", "0deg");
      }
    };
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame.current);
      media.removeEventListener("change", update);
    };
  }, []);
  function move(e: PointerEvent<HTMLElement>) {
    if (!motion.current || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width - 0.5) * 7;
    const y = ((e.clientY - box.top) / box.height - 0.5) * -7;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      art.current?.style.setProperty("--art-x", `${y}deg`);
      art.current?.style.setProperty("--art-y", `${x}deg`);
    });
  }
  function reset() {
    cancelAnimationFrame(frame.current);
    art.current?.style.setProperty("--art-x", "0deg");
    art.current?.style.setProperty("--art-y", "0deg");
  }
  return (
    <figure
      ref={art}
      className="decorative-hero"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <Image
        className="decorative-ribbon"
        src="/images/decorative/gold-ribbon.webp"
        alt=""
        width={1254}
        height={1254}
        priority
        sizes="(max-width:760px) 90vw, 48vw"
      />
      <span className="decorative-spark spark-one" />
      <span className="decorative-spark spark-two" />
      <span className="decorative-trail" />
    </figure>
  );
}
