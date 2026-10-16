"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  tabIndex?: number;
};
function ScreenImage({ src, alt, priority, sizes }: Props) {
  return (
    <Image
      className="screen-image"
      src={src}
      alt={alt}
      width={738}
      height={1600}
      priority={priority}
      sizes={sizes ?? "(max-width:600px) 42vw, 230px"}
    />
  );
}
export default function ScreenPreview(props: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const label = useId();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show() {
    dialog.current?.showModal();
    setOpen(true);
  }
  return (
    <>
      <button
        type="button"
        className="screen-preview-trigger"
        onClick={show}
        aria-label={`Enlarge ${props.alt}`}
        aria-haspopup="dialog"
        tabIndex={props.tabIndex}
      >
        <span className="screen-print">
          <ScreenImage {...props} />
        </span>
        <span className="screen-enlarge-hint">Explore screen ↗</span>
      </button>
      <dialog
        ref={dialog}
        className="screen-lightbox"
        aria-labelledby={label}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <header>
          <h2 id={label}>
            <small>INTERFACE STUDY</small>
            {props.alt}
          </h2>
          <button
            autoFocus
            className="screen-close"
            type="button"
            aria-label="Close screenshot"
            onClick={() => dialog.current?.close()}
          >
            Close ×
          </button>
        </header>
        {open && (
          <ScreenImage
            src={props.src}
            alt={props.alt}
            sizes="(max-width:760px) 80vw, 360px"
          />
        )}
      </dialog>
    </>
  );
}
