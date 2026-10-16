"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
type Props = { src: string; alt: string; priority?: boolean; sizes?: string };
function PhoneScreen({
  src,
  alt,
  priority,
  sizes,
  original = false,
}: Props & { original?: boolean }) {
  return (
    <span className={`phone-shell${original ? " phone-original" : ""}`}>
      <span className="phone-camera" aria-hidden="true" />
      <Image
        className="phone-screen"
        src={src}
        alt={alt}
        width={738}
        height={1600}
        priority={priority}
        sizes={sizes ?? "(max-width:600px) 42vw, 230px"}
      />
      <span className="phone-home" aria-hidden="true" />
    </span>
  );
}
export default function PhonePreview(props: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const label = useId();
  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show() {
    setOriginal(false);
    dialog.current?.showModal();
    setOpen(true);
  }
  return (
    <>
      <button
        type="button"
        className="phone-preview-trigger"
        onClick={show}
        aria-label={`Enlarge ${props.alt}`}
        aria-haspopup="dialog"
      >
        <PhoneScreen {...props} />
        <span className="phone-enlarge-hint">Enlarge ↗</span>
      </button>
      <dialog
        ref={dialog}
        className="phone-dialog"
        aria-labelledby={label}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <header>
          <h2 id={label}>{props.alt}</h2>
          <button
            autoFocus
            className="phone-close"
            type="button"
            aria-label="Close screenshot"
            onClick={() => dialog.current?.close()}
          >
            ✕
          </button>
        </header>
        {open && (
          <PhoneScreen
            src={props.src}
            alt={props.alt}
            original={original}
            sizes="300px"
          />
        )}
        <footer>
          <p>Preview appearance</p>
          <nav aria-label="Screenshot colour treatment">
            <button
              type="button"
              aria-pressed={!original}
              onClick={() => setOriginal(false)}
            >
              White & gold
            </button>
            <button
              type="button"
              aria-pressed={original}
              onClick={() => setOriginal(true)}
            >
              Original colours
            </button>
          </nav>
        </footer>
      </dialog>
    </>
  );
}
