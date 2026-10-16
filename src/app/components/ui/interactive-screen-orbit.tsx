"use client";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type {
  PointerEvent,
  KeyboardEvent,
  MouseEvent,
  CSSProperties,
} from "react";
import Link from "next/link";
import ScreenPreview from "./screen-preview";
import {
  activeScreenIndex,
  clampScreenTilt,
  dragScreenRotation,
  stepScreenAngle,
} from "../../utils/screen-orbit";
const screens = [
  {
    src: "/images/work/bible_diaries/feed-boy.webp",
    title: "Bible Diaries",
    detail: "Reflections feed",
    href: "/work/bible-diaries",
  },
  {
    src: "/images/work/service_link/discover.webp",
    title: "Service Link",
    detail: "Service discovery",
    href: "/work/service-link",
  },
  {
    src: "/images/work/hokmatech/hokma-3.webp",
    title: "MedSync",
    detail: "Clinical dashboard",
    href: "/work/medsync",
  },
  {
    src: "/images/work/bible_diaries/connect-girl.webp",
    title: "Bible Diaries",
    detail: "Community directory",
    href: "/work/bible-diaries",
  },
  {
    src: "/images/work/service_link/messages.webp",
    title: "Service Link",
    detail: "In-app messaging",
    href: "/work/service-link",
  },
  {
    src: "/images/work/hokmatech/hokma-2.webp",
    title: "MedSync",
    detail: "Account access",
    href: "/work/medsync",
  },
];
type Drag = {
  id: number;
  x: number;
  y: number;
  angle: number;
  tilt: number;
  touch: boolean;
  locked: boolean;
};
export default function InteractiveScreenOrbit() {
  const id = useId();
  const ring = useRef<HTMLUListElement>(null);
  const stage = useRef<HTMLElement>(null);
  const angle = useRef(0);
  const tilt = useRef(-10);
  const drag = useRef<Drag | null>(null);
  const dragged = useRef(false);
  const visible = useRef(true);
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [dragging, setDragging] = useState(false);
  const paint = useCallback((yaw: number, pitch: number) => {
    angle.current = yaw;
    tilt.current = clampScreenTilt(pitch);
    ring.current?.style.setProperty("--orbit-y", `${yaw}deg`);
    ring.current?.style.setProperty("--orbit-x", `${tilt.current}deg`);
    setActive(activeScreenIndex(yaw, screens.length));
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    setAuto(!media.matches);
    const change = () => {
      setReduced(media.matches);
      if (media.matches) setAuto(false);
    };
    media.addEventListener("change", change);
    const observer = new IntersectionObserver((entries) => {
      visible.current = entries[0]?.isIntersecting ?? false;
    });
    if (stage.current) observer.observe(stage.current);
    return () => {
      media.removeEventListener("change", change);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!auto || reduced) return;
    let frame = 0;
    let last = 0;
    function tick(now: number) {
      const delta = last ? Math.min(now - last, 50) : 0;
      last = now;
      if (visible.current && !document.hidden && !drag.current)
        paint(angle.current - delta * 0.006, tilt.current);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [auto, reduced, paint]);
  function start(e: PointerEvent<HTMLElement>) {
    if (
      !e.isPrimary ||
      e.button !== 0 ||
      (e.target as Element).closest("dialog")
    )
      return;
    dragged.current = false;
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      angle: angle.current,
      tilt: tilt.current,
      touch: e.pointerType === "touch",
      locked: false,
    };
  }
  function move(e: PointerEvent<HTMLElement>) {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x,
      dy = e.clientY - d.y;
    if (!d.locked) {
      if (Math.hypot(dx, dy) < 7) return;
      if (d.touch && Math.abs(dy) > Math.abs(dx)) {
        drag.current = null;
        return;
      }
      d.locked = true;
      dragged.current = true;
      setDragging(true);
      setAuto(false);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    const next = dragScreenRotation(d.angle, d.tilt, dx, d.touch ? 0 : dy);
    paint(next.angle, next.tilt);
  }
  function finish(e: PointerEvent<HTMLElement>) {
    if (drag.current?.id !== e.pointerId) return;
    const moved = drag.current.locked;
    drag.current = null;
    setDragging(false);
    if (moved) stage.current?.focus({ preventScroll: true });
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
  }
  function suppressDragClick(e: MouseEvent<HTMLElement>) {
    if ((e.target as Element).closest("dialog")) return;
    if (dragged.current && e.detail !== 0) {
      e.preventDefault();
      e.stopPropagation();
      dragged.current = false;
    }
  }
  function step(direction: number) {
    setAuto(false);
    paint(
      stepScreenAngle(angle.current, screens.length, direction),
      tilt.current,
    );
  }
  function keyboard(e: KeyboardEvent<HTMLElement>) {
    if ((e.target as Element).closest("dialog")) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      step(e.key === "ArrowRight" ? 1 : -1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      setAuto(false);
      paint(angle.current, tilt.current + (e.key === "ArrowUp" ? 4 : -4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setAuto(false);
      paint(0, -10);
    }
  }
  const current = screens[active];
  return (
    <section
      className="orbit-showcase"
      aria-label="Interactive 3D app showcase"
      aria-roledescription="carousel"
    >
      <header>
        <span>THE INTERFACE LAB</span>
        <span>{String(active + 1).padStart(2, "0")} / 06</span>
      </header>
      <section
        ref={stage}
        className={`orbit-stage${dragging ? " is-dragging" : ""}`}
        tabIndex={0}
        aria-label="Drag horizontally to rotate the screens. Use left and right arrow keys to change screens, up and down to tilt, or Home to reset."
        aria-describedby={id}
        onFocusCapture={() => setAuto(false)}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={finish}
        onPointerCancel={finish}
        onLostPointerCapture={() => {
          drag.current = null;
          setDragging(false);
        }}
        onClickCapture={suppressDragClick}
        onKeyDown={keyboard}
        onDragStart={(e) => e.preventDefault()}
      >
        <span className="orbit-ground" aria-hidden="true" />
        <ul
          ref={ring}
          className="orbit-rotor"
          aria-label="Application interfaces"
        >
          {screens.map((screen, i) => (
            <li
              key={screen.src}
              className={`orbit-card${active === i ? " is-active" : ""}`}
              style={{ "--screen-angle": `${i * 60}deg` } as CSSProperties}
            >
              <ScreenPreview
                src={screen.src}
                alt={`${screen.title} — ${screen.detail}`}
                sizes="(max-width:600px) 130px, 160px"
                priority={i === 0}
                tabIndex={active === i ? 0 : -1}
                onInspect={() => setAuto(false)}
              />
              <span className="orbit-card-caption" aria-hidden="true">
                {String(i + 1).padStart(2, "0")} / {screen.detail}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <p className="orbit-instructions" id={id}>
        Drag to rotate <span>·</span> Tap a screen to inspect
      </p>
      <footer>
        <nav aria-label="3D showcase controls">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous screen"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next screen"
          >
            →
          </button>
          <button
            type="button"
            aria-pressed={auto}
            disabled={reduced}
            onClick={() => setAuto(!auto)}
          >
            {auto ? "Pause rotation" : "Auto rotate"}
          </button>
          <button
            type="button"
            onClick={() => {
              setAuto(false);
              paint(0, -10);
            }}
          >
            Reset view
          </button>
        </nav>
        <p className="orbit-selected" aria-live={auto ? "off" : "polite"}>
          <Link href={current.href}>{current.title} ↗</Link>
          <span>{current.detail}</span>
        </p>
      </footer>
    </section>
  );
}
