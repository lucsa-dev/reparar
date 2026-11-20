"use client";

import { useEffect, useRef } from "react";
import type { EstuaryCopy } from "@/content/estuary";
import { clamp, ease, lerp, smooth, type Pt } from "@/lib/estuary";

/* Simplified coastline and rivers, in [longitude, latitude]. Illustrative, not survey-grade. */
const K = 20;
const pr = ([lo, la]: Pt): Pt => [(lo + 82) * K, (13 - la) * K];
const P = (a: Pt[]) => a.map(pr);
const SA: Pt[] = [[-77.4,8.7],[-75.5,10.4],[-74.2,11.2],[-71.6,12.4],[-71.1,11.0],[-68.2,10.5],[-64.0,10.6],[-61.8,10.7],[-60.0,8.5],[-58.0,6.8],[-55.0,5.9],[-52.0,4.8],[-51.0,3.4],[-50.2,1.2],[-49.6,0.0],[-48.5,-1.0],[-46.0,-1.0],[-44.3,-2.5],[-41.8,-2.9],[-39.5,-2.85],[-38.5,-3.7],[-37.3,-4.8],[-35.2,-5.5],[-34.8,-7.1],[-35.1,-9.0],[-37.0,-11.0],[-38.6,-13.0],[-39.0,-15.5],[-39.7,-19.0],[-40.3,-20.3],[-41.0,-22.0],[-43.2,-23.0],[-45.0,-23.8],[-48.5,-26.5],[-48.6,-28.5],[-50.2,-31.0],[-52.1,-32.2],[-53.4,-33.7],[-54.9,-34.9],[-56.2,-34.9],[-57.2,-36.3],[-56.7,-36.9],[-57.6,-38.2],[-62.2,-38.8],[-62.3,-40.6],[-64.6,-41.0],[-64.0,-42.3],[-65.0,-45.0],[-67.5,-46.0],[-66.0,-47.5],[-67.8,-49.5],[-68.4,-52.3],[-68.6,-54.8],[-66.8,-55.0],[-70.0,-55.3],[-72.0,-53.5],[-74.5,-52.0],[-75.5,-48.0],[-74.5,-44.0],[-73.5,-41.5],[-73.6,-37.5],[-72.5,-35.0],[-71.6,-33.0],[-71.4,-30.0],[-70.6,-25.0],[-70.2,-20.0],[-70.3,-18.3],[-71.5,-17.3],[-75.2,-15.3],[-76.3,-13.5],[-77.2,-12.0],[-78.9,-8.5],[-79.9,-6.5],[-81.3,-4.5],[-80.3,-3.4],[-79.8,-2.2],[-80.9,-1.0],[-80.0,0.8],[-78.8,1.5],[-77.4,4.0],[-77.3,7.0]];
const EC: Pt[] = [[-80.9,-1.0],[-80.0,0.8],[-78.8,1.4],[-77.4,0.8],[-76.3,0.4],[-75.3,-0.1],[-75.2,-0.9],[-75.6,-1.6],[-76.6,-2.6],[-78.0,-3.4],[-78.7,-4.6],[-79.4,-4.9],[-80.3,-4.4],[-80.3,-3.4],[-79.8,-2.2]];
const CE: Pt[] = [[-41.4,-2.9],[-39.9,-2.85],[-38.5,-3.7],[-37.25,-4.8],[-38.0,-5.6],[-38.4,-6.3],[-38.6,-7.2],[-39.0,-7.85],[-39.9,-7.5],[-40.5,-7.4],[-40.9,-6.5],[-41.2,-5.0]];
const ANDES: Pt[] = [[-72,11],[-74,7],[-76.5,3],[-78.3,0],[-79,-3],[-77.5,-8],[-75,-12],[-71,-16],[-68.5,-20],[-68.5,-25],[-69.8,-30],[-70.3,-35],[-71.3,-40],[-72.5,-45],[-73,-50]];
const AMZ: Pt[] = [[-76,-1],[-70,1],[-62,1],[-55,0],[-50,-1],[-48,-4],[-52,-8],[-58,-10],[-65,-11],[-72,-9],[-75,-6]];
const AMAZ: Pt[] = [[-75.3,-4.8],[-74.2,-4.5],[-73.3,-3.8],[-72.9,-3.45],[-71.0,-4.2],[-69.95,-4.25],[-68.0,-3.6],[-66.0,-3.2],[-64.7,-3.6],[-62.5,-3.5],[-60.0,-3.2],[-58.5,-3.3],[-56.5,-2.7],[-54.7,-2.3],[-52.5,-1.6],[-51.0,-0.9],[-50.0,-0.2]];
const NAPO: Pt[] = [[-78.2,-0.9],[-77.4,-0.9],[-76.98,-0.46],[-76.3,-0.75],[-75.4,-1.25],[-74.6,-2.0],[-73.9,-2.7],[-72.9,-3.45]];
const JAG: Pt[] = [[-40.2,-6.6],[-39.3,-6.4],[-38.6,-5.9],[-38.1,-5.2],[-37.97,-4.94],[-37.85,-4.6],[-37.77,-4.42]];
const ROUTE: Pt[] = [[-76.88,0.09],[-76.98,-0.46],[-76.3,-0.75],[-75.4,-1.25],[-74.6,-2.0],[-73.9,-2.7],[-72.9,-3.45],[-71.0,-4.2],[-69.95,-4.25],[-68.0,-3.6],[-66.0,-3.2],[-64.7,-3.6],[-62.5,-3.5],[-60.0,-3.2],[-58.5,-3.3],[-56.5,-2.7],[-54.7,-2.3],[-52.5,-1.6],[-51.0,-0.9],[-50.0,-0.2],[-48.3,0.5],[-46.0,-0.2],[-43.5,-1.5],[-41.2,-2.3],[-39.3,-2.95],[-38.3,-3.45],[-37.6,-4.15],[-37.77,-4.45],[-37.86,-4.62],[-37.97,-4.94],[-38.05,-5.05]];

const LAND_D = smooth(P(SA), true, 0.9);
const ROUTE_D = smooth(P(ROUTE));
const BANDS: [number, string][] = [[150, "#10405f"], [100, "#134a6a"], [60, "#175676"], [30, "#1c6282"], [12, "#22708f"]];
/** Scroll ranges (0–1) in which each card is shown. */
const RANGES: [number, number][] = [[0, 0.05], [0.05, 0.15], [0.15, 0.4], [0.4, 0.62], [0.62, 0.84], [0.84, 1.01]];

type Label = { key: keyof EstuaryCopy["labels"]; ll: Pt; c: "sea" | "country" | "river" | "city"; min: number; max: number };
const LABELS: Label[] = [
  { key: "sea1", ll: [-88, -9], c: "sea", min: 5, max: 999 },
  { key: "sea2", ll: [-41, 3.2], c: "sea", min: 5, max: 999 },
  { key: "ec", ll: [-78.6, -2.0], c: "country", min: 3.2, max: 999 },
  { key: "co", ll: [-73.5, 4.5], c: "country", min: 8, max: 999 },
  { key: "pe", ll: [-75, -9], c: "country", min: 8, max: 999 },
  { key: "br", ll: [-52, -12], c: "country", min: 12, max: 999 },
  { key: "ce", ll: [-39.7, -6.2], c: "country", min: 1.6, max: 14 },
  { key: "napo", ll: [-75.0, -1.0], c: "river", min: 2.5, max: 22 },
  { key: "amazon", ll: [-63.5, -2.6], c: "river", min: 5, max: 60 },
  { key: "jag", ll: [-38.7, -5.65], c: "river", min: 0.8, max: 9 },
  { key: "mouth", ll: [-48.6, 1.3], c: "river", min: 5, max: 30 },
];
const FORTALEZA: Pt = [-38.52, -3.73];
const MARKERS: { ll: Pt; c: "ec" | "ce" }[] = [{ ll: [-76.88, 0.09], c: "ec" }, { ll: [-38.05, -5.05], c: "ce" }];

type Cam = { c: Pt; bw: number; bh: number };
const C0: Cam = { c: pr([-58.5, -7]), bw: 52 * K, bh: 22 * K };
const C1: Cam = { c: pr([-76.4, -1.3]), bw: 9 * K, bh: 7 * K };
const CEND: Cam = { c: pr([-38.6, -4.6]), bw: 5.2 * K, bh: 4 * K };
const mix = (a: Cam, b: Cam, t: number): Cam => ({
  c: [lerp(a.c[0], b.c[0], t), lerp(a.c[1], b.c[1], t)],
  bw: Math.exp(lerp(Math.log(a.bw), Math.log(b.bw), t)),
  bh: Math.exp(lerp(Math.log(a.bh), Math.log(b.bh), t)),
});

/** Scroll-driven map: the camera follows the water from the Clínica Ambiental to Lagoa dos Cavalos. */
export function RouteMap({ copy }: { copy: EstuaryCopy }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = <T extends Element>(s: string) => root.querySelector(s) as T;
    const stage = q<HTMLDivElement>(".rm-stage");
    const map = q<SVGSVGElement>(".rm-map");
    const route = q<SVGPathElement>(".rm-route");
    const halo = q<SVGPathElement>(".rm-halo");
    const ripples = q<SVGPatternElement>("#rm-ripples");
    const tip = q<HTMLDivElement>(".rm-tip");
    const bandEls = [...root.querySelectorAll<SVGPathElement>(".rm-band")];
    const labelEls = [...root.querySelectorAll<HTMLDivElement>(".rm-lbl")];
    const markerEls = [...root.querySelectorAll<HTMLDivElement>(".rm-mk")];
    const cards = [...root.querySelectorAll<HTMLElement>(".rm-card")];
    const chapBtns = [...root.querySelectorAll<HTMLButtonElement>(".rm-chap button")];
    const chap = q<HTMLDivElement>(".rm-chap");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const RL = route.getTotalLength();
    route.style.strokeDasharray = halo.style.strokeDasharray = `${RL} ${RL}`;
    const labelXY = [...LABELS.map((l) => pr(l.ll)), pr(FORTALEZA)];
    const labelZoom = [...LABELS.map((l) => [l.min, l.max]), [1, 16]];
    const markerXY = MARKERS.map((m) => pr(m.ll));
    const follow = (f: number): Cam => { const p = route.getPointAtLength(f * RL); return { c: [p.x, p.y], bw: 20 * K, bh: 13 * K }; };
    const camAt = (p: number, f: number): Cam => {
      if (p < 0.02) return C0;
      if (p < 0.09) return mix(C0, C1, ease((p - 0.02) / 0.07));
      if (p < 0.13) return C1;
      if (p < 0.2) return mix(C1, follow(f), ease((p - 0.13) / 0.07));
      if (p < 0.8) return follow(f);
      if (p < 0.9) return mix(follow(f), CEND, ease((p - 0.8) / 0.1));
      return CEND;
    };

    let last = -1;
    const render = (p: number) => {
      const W = stage.clientWidth, H = stage.clientHeight;
      const f = clamp((p - 0.13) / (0.84 - 0.13));
      const cam = camAt(p, f);
      const w = Math.max(cam.bw, (cam.bh * W) / H), h = (w * H) / W;
      const x0 = cam.c[0] - w / 2, y0 = cam.c[1] - h / 2, s = w / W;
      map.setAttribute("viewBox", `${x0} ${y0} ${w} ${h}`);
      bandEls.forEach((e, i) => e.setAttribute("stroke-width", String(BANDS[i][0] * s)));
      route.setAttribute("stroke-width", String(3.4 * s));
      halo.setAttribute("stroke-width", String(13 * s));
      route.style.strokeDashoffset = halo.style.strokeDashoffset = String(RL * (1 - f));
      ripples.setAttribute("patternTransform", `scale(${s})`);
      const z = Math.min(w, h) / K;
      labelEls.forEach((e, i) => {
        e.style.transform = `translate(${(labelXY[i][0] - x0) / s}px,${(labelXY[i][1] - y0) / s}px) translate(-50%,-50%)`;
        e.style.opacity = z >= labelZoom[i][0] && z <= labelZoom[i][1] ? "1" : "0";
      });
      markerEls.forEach((e, i) => { e.style.transform = `translate(${(markerXY[i][0] - x0) / s}px,${(markerXY[i][1] - y0) / s}px)`; });
      const tp = route.getPointAtLength(f * RL);
      tip.style.transform = `translate(${(tp.x - x0) / s}px,${(tp.y - y0) / s}px)`;
      tip.style.opacity = f > 0 && f < 1 ? "1" : "0";
      const ci = RANGES.findIndex((r) => p >= r[0] && p < r[1]);
      if (ci !== last) {
        cards.forEach((c, i) => c.classList.toggle("on", i === ci));
        chapBtns.forEach((b, i) => b.classList.toggle("on", i === ci));
        chap.classList.toggle("hide", ci === 0);
        last = ci;
      }
    };

    const progress = () => {
      const top = root.getBoundingClientRect().top + scrollY;
      return clamp((scrollY - top) / (root.offsetHeight - innerHeight));
    };
    chapBtns.forEach((b, i) => {
      b.onclick = () => {
        const m = (RANGES[i][0] + Math.min(1, RANGES[i][1])) / 2;
        const top = root.getBoundingClientRect().top + scrollY;
        scrollTo({ top: top + m * (root.offsetHeight - innerHeight), behavior: reduce ? "auto" : "smooth" });
      };
    });

    let p = progress(), raf = 0;
    render(p);
    const loop = () => {
      const r = root.getBoundingClientRect();
      if (r.bottom > -50 && r.top < innerHeight + 50) {
        const target = progress();
        p += (target - p) * (reduce ? 1 : 0.11);
        render(p);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onResize = () => render(p);
    addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="rm" ref={rootRef} aria-label={copy.mapLabel}>
      <div className="rm-stage">
        <svg className="rm-map" role="img" aria-label={copy.mapLabel} viewBox={`${C0.c[0] - C0.bw / 2} ${C0.c[1] - C0.bh / 2} ${C0.bw} ${C0.bh}`} preserveAspectRatio="xMidYMid slice">
          <defs>
            <clipPath id="rm-land-clip"><path d={LAND_D} /></clipPath>
            <filter id="rm-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14" /></filter>
            <pattern id="rm-ripples" width="60" height="22" patternUnits="userSpaceOnUse"><path d="M0 11 q15 -6 30 0 t30 0" fill="none" stroke="#a7dcd6" strokeWidth="1" opacity=".09" /></pattern>
          </defs>
          <rect x="-4000" y="-4000" width="10000" height="10000" fill="#0e3550" />
          <rect x="-4000" y="-4000" width="10000" height="10000" fill="url(#rm-ripples)" />
          <g>{BANDS.map(([w, c]) => <path key={c} className="rm-band" d={LAND_D} fill="none" stroke={c} strokeWidth={w} strokeLinejoin="round" />)}</g>
          <path d={LAND_D} fill="#33241a" stroke="#6b5444" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <g clipPath="url(#rm-land-clip)">
            <path d={smooth(P(ANDES))} fill="none" stroke="#56402e" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round" filter="url(#rm-soft)" opacity=".9" />
            <path d={smooth(P(AMZ), true)} fill="#1e4636" filter="url(#rm-soft)" opacity=".55" />
          </g>
          <path d={smooth(P(EC), true, 0.6)} fill="#d9542c" fillOpacity=".28" stroke="#d9542c" strokeOpacity=".6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={smooth(P(CE), true, 0.6)} fill="#e8b04a" fillOpacity=".25" stroke="#e8b04a" strokeOpacity=".7" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={smooth(P(AMAZ))} fill="none" stroke="#a7dcd6" strokeOpacity=".55" strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d={smooth(P(NAPO)) + smooth(P(JAG))} fill="none" stroke="#a7dcd6" strokeOpacity=".55" strokeWidth="1.4" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path className="rm-halo" d={ROUTE_D} fill="none" stroke="#a7dcd6" strokeOpacity=".22" strokeLinecap="round" strokeLinejoin="round" />
          <path className="rm-route" d={ROUTE_D} fill="none" stroke="#cff3ee" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="rm-overlay" aria-hidden="true">
          {LABELS.map((l) => <div key={l.key} className={`rm-lbl ${l.c}`}>{copy.labels[l.key]}</div>)}
          <div className="rm-lbl city">Fortaleza</div>
          <div className="rm-mk ec"><span className="dot" /><span className="tag">{copy.markers.clinic}<small>{copy.markers.clinicPlace}</small></span></div>
          <div className="rm-mk ce"><span className="dot" /><span className="tag">{copy.markers.collective}<small>{copy.markers.collectivePlace}</small></span></div>
          <div className="rm-tip" />
        </div>
        <div className="rm-cards">
          {copy.cards.map((card, i) => (
            <article key={card.title} className={i === 0 ? "rm-card on" : "rm-card"}>
              <div className="mono">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.coord && <span className="coord mono">{card.coord}</span>}
            </article>
          ))}
        </div>
        <div className="rm-chap hide">
          {copy.chapters.map((c) => <button key={c} type="button">{c}<i /></button>)}
        </div>
        <div className="rm-note mono">{copy.mapNote}</div>
      </div>
    </section>
  );
}
