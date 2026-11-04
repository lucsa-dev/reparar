"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Locale } from "@/content";
import { zoomLabels } from "@/content/zoom-labels";

type ZoomableImageProps = {
  src: string;
  alt: string;
  locale: Locale;
  caption?: string;
  className?: string;
  lazy?: boolean;
};

export function ZoomableImage({ src, alt, locale, caption, className, lazy = true }: ZoomableImageProps) {
  const labels = zoomLabels[locale];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" className="zoom-trigger" aria-label={labels.open(alt)} onClick={() => setOpen(true)}>
        <img src={src} alt="" className={className} loading={lazy ? "lazy" : undefined} decoding="async" />
      </button>
      {open && (
        <dialog ref={dialogRef} className="zoom-dialog" aria-label={alt} onClick={closeOnBackdrop} onClose={() => setOpen(false)}>
          <button type="button" className="zoom-close" aria-label={labels.close} onClick={() => dialogRef.current?.close()}>×</button>
          <figure>
            <img src={src} alt={alt} />
            {(caption ?? alt) && <figcaption>{caption ?? alt}</figcaption>}
          </figure>
        </dialog>
      )}
    </>
  );
}
