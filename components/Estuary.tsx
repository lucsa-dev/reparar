import type { ReactNode } from "react";
import { RichText } from "@/components/RichText";
import type { EstuaryCopy } from "@/content/estuary";
import { contourRings } from "@/lib/estuary";

export type SceneKind = "sertao" | "rio" | "mangue" | "lama" | "encontro" | "mar";
/** Stretches where the water and the ground are dark, in both themes. */
const DARK: SceneKind[] = ["lama", "encontro", "mar"];

type SceneProps = {
  kind: SceneKind;
  /** Margin the river runs along beside this section. */
  side: "l" | "r" | "c";
  /** Shown once, at the start of each stretch: its number and name. */
  tag?: string;
  children: ReactNode;
};

/** One stretch of the river on the home page, wrapping an existing content section. */
export function Scene({ kind, side, tag, children }: SceneProps) {
  return (
    <div className={`scene s-${kind}${DARK.includes(kind) ? " ink-dark" : ""}`} data-kind={kind} data-side={side}>
      {tag && <span className={`scene-tag mono ${side === "r" ? "right" : "left"}`}>{tag}</span>}
      {children}
    </div>
  );
}

/** Slowly turning topographic lines behind the home page opening. */
export function Contours() {
  return (
    <svg className="contours" viewBox="0 0 1200 840" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>
        {contourRings().map((ring, i) => (
          <path key={i} d={ring.d} fill="none" stroke={ring.strong ? "#a7dcd6" : "#7fa79a"} strokeOpacity={ring.opacity.toFixed(3)} strokeWidth={ring.strong ? 1.4 : 0.9} />
        ))}
      </g>
    </svg>
  );
}

export function PartHeader({ label, titleHtml, id }: { label: string; titleHtml: string; id?: string }) {
  return (
    <div className="part" id={id}>
      <div className="mono">{label}</div>
      <RichText as="h2" html={titleHtml} />
    </div>
  );
}

/** The river's mouth: the last stretch, with the waves. */
export function SeaEnd({ copy }: { copy: EstuaryCopy["sea"] }) {
  return (
    <div className="scene s-mar ink-dark sea-end" data-kind="mar" data-side="c">
      <article className="rv-card">
        <div className="mono">{copy.tag}</div>
        <h3>{copy.title}</h3>
        <p>{copy.text}</p>
        <a className="backtop" href="#top">{copy.back}</a>
      </article>
      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none"><path d="M0 80 Q150 40 300 80 T600 80 T900 80 T1200 80 T1500 80 T1800 80 T2100 80 T2400 80 V200 H0Z" fill="#1a5a7a" opacity=".55" /></svg>
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none"><path d="M0 110 Q200 70 400 110 T800 110 T1200 110 T1600 110 T2000 110 T2400 110 V200 H0Z" fill="#134a68" opacity=".75" /></svg>
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none"><path d="M0 140 Q150 112 300 140 T600 140 T900 140 T1200 140 T1500 140 T1800 140 T2100 140 T2400 140 V200 H0Z" fill="#0a2436" /></svg>
      </div>
    </div>
  );
}
