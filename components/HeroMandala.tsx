"use client";

import { useEffect, useRef } from "react";
import { initMandala } from "@/lib/mandala";
import { MANDALA_MARKUP } from "@/lib/mandala-markup";

/** Only the mandala drawing from the dashboard, reused on the landing page. */
const SVG_MARKUP = MANDALA_MARKUP.slice(MANDALA_MARKUP.indexOf("<svg"), MANDALA_MARKUP.indexOf("</svg>") + 6);

export function HeroMandala({ href, hint, label }: { href: string; hint: string; label: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node || node.dataset.ready) return;
    node.dataset.ready = "1";
    initMandala({ hero: true, href, hint });
  }, [href, hint]);
  return (
    <div className="md hero-mandala">
      <div className="mandala-box" ref={root} aria-label={label} dangerouslySetInnerHTML={{ __html: SVG_MARKUP }} />
    </div>
  );
}
