"use client";

import { useEffect, useRef } from "react";
import { initMandala } from "@/lib/mandala";
import { MANDALA_MARKUP } from "@/lib/mandala-markup";

/** Painel interativo da mandala; a marcação é estática e o script monta a mandala e os filtros. */
export function MandalaDashboard() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node || node.dataset.ready) return;
    node.dataset.ready = "1";
    initMandala();
  }, []);
  return <div className="md" ref={root} dangerouslySetInnerHTML={{ __html: MANDALA_MARKUP }} />;
}
