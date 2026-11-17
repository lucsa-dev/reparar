"use client";

import { useEffect, useRef } from "react";
import { initMandala } from "@/lib/mandala";
import { MANDALA_MARKUP } from "@/lib/mandala-markup";

/** Only the mandala drawing from the dashboard, reused on the landing page. */
const SVG_MARKUP = MANDALA_MARKUP.slice(MANDALA_MARKUP.indexOf("<svg"), MANDALA_MARKUP.indexOf("</svg>") + 6);

type HeroMandalaProps = { href: string; hint: string; label: string; close: string; more: string };

export function HeroMandala({ href, hint, label, close, more }: HeroMandalaProps) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node || node.dataset.ready) return;
    node.dataset.ready = "1";
    initMandala({ hero: true, href, hint, close, more });
  }, [href, hint, close, more]);
  return (
    <div className="md hero-mandala">
      <div className="mandala-box" ref={root} aria-label={label} dangerouslySetInnerHTML={{ __html: SVG_MARKUP }} />
    </div>
  );
}

/** Side block filled by the mandala script when a sense or a point is clicked. */
export function HeroMandalaPanel() {
  return (
    <div className="md hero-panel-wrap">
      <aside className="panel" id="panel" aria-live="polite" hidden />
    </div>
  );
}
