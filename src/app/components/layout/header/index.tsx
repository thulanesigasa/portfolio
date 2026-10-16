"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="studio-header">
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <Link className="studio-brand" href="/" aria-label="TS Industries home">
        ts<span>✳</span>
        <small>INDUSTRIES</small>
      </Link>
      <button
        ref={toggle}
        className="studio-menu-toggle"
        aria-expanded={open}
        aria-controls="studio-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ✕" : "Menu ☰"}
      </button>
      <nav
        id="studio-nav"
        className={open ? "studio-nav is-open" : "studio-nav"}
        aria-label="Main navigation"
      >
        {[
          ["Work", "/#works"],
          ["Services", "/#services"],
          ["About", "/#about"],
        ].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          className="studio-button small"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          Start a project <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
