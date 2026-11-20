"use client";

import { useEffect, useRef } from "react";
import type { EstuaryCopy } from "@/content/estuary";
import { clamp, lerp, smooth, type Pt } from "@/lib/estuary";

const NS = "http://www.w3.org/2000/svg";
/** Water colour where the river passes each stretch. */
const WATER: Record<string, string> = { sertao: "#4c9cc8", rio: "#3f8fb5", mangue: "#5c8f7a", lama: "#c69a5e", encontro: "#5fa9b8", mar: "#1f6f90" };
const WALLS = ["#efe4ce", "#f3d08a", "#cfe8e3", "#f4c2b0", "#f7f0e0", "#e9b9a0"];

type Item = { kind: string; x: number; y: number; s: number; wall?: string; text?: string; dark?: boolean; color?: string };

/**
 * The thread of water that runs down the home page, from the backlands to the sea.
 * It flows in the side margins next to each content section (`.scene`), crossing over between stretches,
 * and grows as the reader scrolls. Plants, houses, crabs and shrimp appear only where there is free space.
 */
export function River({ copy }: { copy: EstuaryCopy }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const crittersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current, crit = crittersRef.current;
    const fio = svg?.parentElement;
    if (!svg || !crit || !fio) return;
    const $ = <T extends Element>(s: string) => svg.querySelector(s) as T;
    const bed = $<SVGPathElement>(".rv-bed"), mask = $<SVGPathElement>(".rv-mask"), wide = $<SVGPathElement>(".rv-mask-wide");
    const ribbon = $<SVGPathElement>(".rv-ribbon"), flow = $<SVGPathElement>(".rv-flow"), head = $<SVGGElement>(".rv-head");
    const plantsG = $<SVGGElement>(".rv-plants"), grad = $<SVGLinearGradientElement>("#rv-water"), reveal = $<SVGMaskElement>("#rv-reveal");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let seed = 11;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    let FL = 1, W = 0, H = 0, sWide = 0, mobile = false, margin = 0, tWide = 0.93;
    let samples: [number, number][] = [];
    let plants: { e: SVGGElement; len: number; on: boolean }[] = [];
    let crabs: { e: HTMLDivElement; len: number; on: boolean }[] = [];
    let shrimps: { e: HTMLDivElement; lag: number; ph: number; sc: number }[] = [];

    const ptN = (len: number) => {
      const a = bed.getPointAtLength(Math.max(0, len - 1)), b = bed.getPointAtLength(Math.min(FL, len + 1)), p = bed.getPointAtLength(len);
      let tx = b.x - a.x, ty = b.y - a.y;
      const m = Math.hypot(tx, ty) || 1; tx /= m; ty /= m;
      return { x: p.x, y: p.y, nx: -ty, ny: tx, ang: (Math.atan2(ty, tx) * 180) / Math.PI };
    };
    /** Half width of the water: it widens downstream, but never past the free margin, and opens into the sea at the end. */
    const halfW = (t: number) => Math.max(2.5, Math.min(margin * 0.3, 13 + 46 * Math.pow(t, 1.35))) + Math.pow(clamp((t - tWide) / (1 - tWide)), 1.6) * W * 0.55;
    const lenAtY = (y: number) => {
      if (!samples.length || y <= samples[0][1]) return 0;
      let lo = 0, hi = samples.length - 1;
      if (y >= samples[hi][1]) return FL;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (samples[m][1] < y) lo = m; else hi = m; }
      const [l0, y0] = samples[lo], [l1, y1] = samples[hi];
      return lerp(l0, l1, (y - y0) / (y1 - y0 || 1));
    };

    const drawItem = (it: Item) => {
      const g = document.createElementNS(NS, "g") as SVGGElement;
      g.setAttribute("class", "grow");
      g.setAttribute("transform", `translate(${it.x.toFixed(1)},${it.y.toFixed(1)}) scale(${it.s.toFixed(2)})`);
      const sh = (w: number) => `<ellipse class="leaf" cx="0" cy="1" rx="${w}" ry="${(w * 0.28).toFixed(1)}" fill="#000" opacity=".13"/>`;
      let h = "";
      switch (it.kind) {
        case "caroa": h = `${sh(16)}<g transform="translate(-36,-50)" fill="#7d8f4e"><path class="leaf" d="M36 50 L30 6 L38 48Z"/><path class="leaf" d="M34 50 L16 14 L36 48Z" opacity=".8"/><path class="leaf" d="M38 50 L56 12 L36 48Z" opacity=".8"/><path class="leaf" d="M33 50 L6 30 L35 49Z" opacity=".6"/><path class="leaf" d="M39 50 L66 28 L37 49Z" opacity=".6"/><circle class="leaf" cx="30" cy="6" r="2.4" fill="#e8b04a"/></g>`; break;
        case "mandacaru": h = `${sh(12)}<g class="leaf" fill="none" stroke="#5d8a5a" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0V-58" stroke-width="11"/><path d="M0 -22H-14V-42" stroke-width="7.5"/><path d="M0 -30H13V-48" stroke-width="7.5"/><path d="M-2 -6V-52M2 -6V-52" stroke="#4a7448" stroke-width="1"/></g><circle class="leaf" cx="0" cy="-62" r="3" fill="#f4c2b0"/>`; break;
        case "carnauba": {
          let f = "";
          for (let a = -172; a <= -8; a += 13) { const r = a % 2 ? 23 : 20, rad = (a * Math.PI) / 180; f += `<path d="M0 0L${(Math.cos(rad) * r).toFixed(1)} ${(Math.sin(rad) * r).toFixed(1)}"/>`; }
          h = `${sh(10)}<path pathLength="1" d="M0 0 C1 -25 -2 -50 2 -76" stroke="#7a6550" stroke-width="3.4" fill="none"/><g transform="translate(2,-76)"><g class="leaf" stroke="#6f8f4e" stroke-width="2.1" stroke-linecap="round" fill="none">${f}</g></g>`; break;
        }
        case "coqueiro": {
          let f = "";
          for (const a of [-165, -130, -95, -60, -25, 10, 190]) { const rad = (a * Math.PI) / 180, ex = Math.cos(rad) * 32, ey = Math.sin(rad) * 32 + 16, cx = Math.cos(rad) * 20, cy = Math.sin(rad) * 20 - 8; f += `<path d="M0 0Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}"/>`; }
          h = `${sh(12)}<path pathLength="1" d="M0 0 C6 -30 3 -56 14 -82" stroke="#8a6a4a" stroke-width="4.2" fill="none" stroke-linecap="round"/><g transform="translate(14,-82)"><g class="leaf"><g stroke="#4f8a5b" stroke-width="3.2" stroke-linecap="round" fill="none">${f}</g><circle cx="-3" cy="4" r="3" fill="#8a6a2a"/><circle cx="3" cy="5" r="3" fill="#7a5a22"/></g></g>`; break;
        }
        case "tree": h = `${sh(18)}<path pathLength="1" d="M0 0V-24M0 -14L-7 -22" stroke="#6b4a32" stroke-width="4" fill="none" stroke-linecap="round"/><g class="leaf"><circle cx="-10" cy="-31" r="12" fill="#4f7a4a"/><circle cx="9" cy="-33" r="13" fill="#5f8f55"/><circle cx="0" cy="-44" r="14" fill="#6f9f5f"/></g>`; break;
        case "mangrove": case "root": {
          const c = it.color || "#2f5a3a";
          h = `<g transform="translate(-36,-50)"><g fill="none" stroke="${it.dark ? "#9a7a58" : "#3b2a1d"}" stroke-width="2.4" stroke-linecap="round"><path pathLength="1" d="M36 50 L36 14"/><path pathLength="1" d="M36 26 C28 28 22 38 20 50"/><path pathLength="1" d="M36 30 C44 32 50 40 52 50"/><path pathLength="1" d="M36 20 C24 22 12 34 10 50"/><path pathLength="1" d="M36 22 C50 24 60 36 62 50"/></g><ellipse class="leaf" cx="30" cy="11" rx="13" ry="7.5" fill="${c}" opacity=".75"/><ellipse class="leaf" cx="43" cy="9" rx="12" ry="7.5" fill="${it.kind === "mangrove" && !it.dark ? "#3d7a43" : c}"/></g>`; break;
        }
        case "house": h = `<g class="leaf">${sh(16)}<rect x="-13" y="-17" width="26" height="17" fill="${it.wall}"/><path d="M-16 -16 L0 -29 L16 -16Z" fill="#b9583a"/><path d="M-16 -16 L0 -29" stroke="#8e3f25" stroke-width="1.2"/><rect x="-4" y="-10" width="7" height="10" fill="#5a3b26"/><rect x="5" y="-13" width="5" height="5" fill="#2f6f70" opacity=".85"/></g>`; break;
        case "church": h = `<g class="leaf">${sh(16)}<rect x="-11" y="-30" width="22" height="30" fill="#f7f0e0"/><path d="M-14 -29 L0 -42 L14 -29Z" fill="#b9583a"/><rect x="-5" y="-52" width="10" height="23" fill="#f7f0e0"/><path d="M-7 -51 L0 -60 L7 -51Z" fill="#b9583a"/><path d="M0 -60v-8M-3 -65h6" stroke="#5a3b26" stroke-width="1.6"/><path d="M-4 0v-10a4 4 0 0 1 8 0v10z" fill="#5a3b26"/><circle cx="0" cy="-40" r="2.4" fill="#e8b04a"/></g>`; break;
        case "jangada": h = `<g class="leaf"><g class="bob"><path d="M-17 0H17" stroke="#7a5a3e" stroke-width="4.5" stroke-linecap="round"/><path d="M-2 -3V-44" stroke="#5a3b26" stroke-width="1.6"/><path d="M-1 -4 L-1 -42 Q12 -24 20 -7Z" fill="#f7f0e0"/><path d="M-1 -30 Q8 -22 14 -14" stroke="#d9542c" stroke-width="2" fill="none"/></g></g>`; break;
        case "label": {
          const t = document.createElementNS(NS, "text");
          t.setAttribute("class", "leaf rv-village");
          t.setAttribute("text-anchor", "middle");
          t.setAttribute("fill", it.dark ? "#efe4ce" : "#54321f");
          t.textContent = (it.text ?? "").toUpperCase();
          g.appendChild(t);
          break;
        }
      }
      if (h) g.innerHTML = h;
      plantsG.appendChild(g);
      plants.push({ e: g, len: Math.max(0, lenAtY(it.y) - 60), on: false });
    };

    const build = () => {
      seed = 11;
      W = fio.clientWidth; H = fio.clientHeight;
      mobile = W < 760;
      const fioBox = fio.getBoundingClientRect();
      const scenes = [...fio.querySelectorAll<HTMLElement>(":scope > .scene")];
      if (!scenes.length || !W) return;
      const topOf = (el: HTMLElement) => el.getBoundingClientRect().top - fioBox.top;
      // Content boxes: the river and the scenery keep out of them.
      const boxes: [number, number, number, number][] = [];
      let left = W, right = 0;
      scenes.forEach((sc) => {
        sc.querySelectorAll<HTMLElement>(":scope > section > :not(.botanical-roots), :scope > .rv-card, :scope > .part").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return;
          const b: [number, number, number, number] = [r.left - fioBox.left, r.top - fioBox.top, r.right - fioBox.left, r.bottom - fioBox.top];
          boxes.push(b);
          left = Math.min(left, b[0]); right = Math.max(right, b[2]);
        });
      });
      margin = Math.max(0, Math.min(left, W - right));
      const xL = Math.max(6, margin / 2), xR = W - xL;

      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      reveal.setAttribute("x", String(-W)); reveal.setAttribute("y", "-200");
      reveal.setAttribute("width", String(W * 3)); reveal.setAttribute("height", String(H + 400));
      grad.setAttribute("y2", String(H));
      grad.innerHTML = "";

      // Course: down one margin through a stretch, across to the other margin between stretches, then out to sea.
      const sideX = (s: string) => (s === "c" ? W / 2 : s === "r" ? xR : xL);
      const pts: Pt[] = [[sideX(scenes[0].dataset.side ?? "l"), 0]];
      scenes.forEach((sc) => {
        const top = topOf(sc), h = sc.offsetHeight, side = sc.dataset.side ?? "l";
        if (side === "c") pts.push([W / 2, top + h * 0.35]);
        else { pts.push([sideX(side), top + Math.min(90, h * 0.2)]); pts.push([sideX(side), top + h - Math.min(90, h * 0.2)]); }
        const st = document.createElementNS(NS, "stop");
        st.setAttribute("offset", ((top + h / 2) / H).toFixed(4));
        st.setAttribute("stop-color", WATER[sc.dataset.kind ?? "rio"] ?? WATER.rio);
        grad.appendChild(st);
      });
      pts.push([W / 2, H + 30]);
      const d = smooth(pts);
      [bed, mask, wide, flow].forEach((e) => e.setAttribute("d", d));
      FL = bed.getTotalLength();
      samples = [];
      for (let i = 0; i <= 800; i++) { const l = (FL * i) / 800; samples.push([l, bed.getPointAtLength(l).y]); }
      // The water only opens into the sea once it has reached the middle of the last stretch.
      const sea = scenes[scenes.length - 1];
      tWide = sea.dataset.side === "c" ? clamp(lenAtY(topOf(sea) + sea.offsetHeight * 0.4) / FL, 0.5, 0.98) : 0.93;
      sWide = FL * tWide;

      const N = 520, Lp: Pt[] = [], Rp: Pt[] = [];
      for (let i = 0; i <= N; i++) { const t = i / N, q = ptN(t * FL), hw = halfW(t); Lp.push([q.x + q.nx * hw, q.y + q.ny * hw]); Rp.push([q.x - q.nx * hw, q.y - q.ny * hw]); }
      ribbon.setAttribute("d", "M" + Lp.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join("L") + "L" + Rp.reverse().map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join("L") + "Z");
      mask.setAttribute("stroke-width", String(2 * halfW(tWide) + 44));
      wide.setAttribute("stroke-width", String(W * 1.3));
      mask.style.strokeDasharray = `${FL} ${FL}`;
      flow.style.display = margin < 60 ? "none" : "";

      plantsG.innerHTML = ""; crit.innerHTML = ""; plants = []; crabs = []; shrimps = [];
      if (margin < 70) return; // phones and narrow windows: only the thread of water

      const riverAt = (y: number) => { const l = lenAtY(y), q = bed.getPointAtLength(l); return { x: q.x, hw: halfW(l / FL) }; };
      const placed: [number, number, number][] = [];
      const items: Item[] = [];
      const ok = (x: number, y: number, r: number, gap: number, down = 0) => {
        if (x < r * 0.6 || x > W - r * 0.6) return false;
        const rv = riverAt(y);
        if (Math.abs(x - rv.x) < rv.hw + gap) return false;
        for (const b of boxes) if (x + r > b[0] - 24 && x - r < b[2] + 24 && y + down > b[1] - 24 && y - r * 1.6 < b[3] + 24) return false;
        for (const p of placed) if (Math.hypot(p[0] - x, (p[1] - y) * 1.4) < p[2] + r) return false;
        return true;
      };
      /** A random x in the free margins, where things can actually fit. */
      const freeX = () => (rnd() < 0.5 ? rnd() * left : right + rnd() * (W - right));
      const U = 1;
      const byKind = (k: string) => scenes.filter((s) => s.dataset.kind === k);
      const scatter = (k: string, perThousand: number, kind: string, r: number, gap: number, extra: Partial<Item> = {}) => {
        for (const sc of byKind(k)) {
          const n = Math.round((sc.offsetHeight / 1000) * perThousand);
          for (let i = 0; i < n; i++) for (let a = 0; a < 40; a++) {
            const x = freeX(), y = topOf(sc) + (0.04 + rnd() * 0.92) * sc.offsetHeight;
            if (ok(x, y, r * U, gap * U)) { placed.push([x, y, r * U]); items.push({ kind, x, y, s: U * (0.8 + rnd() * 0.45), ...extra }); break; }
          }
        }
      };
      const village = (k: string, label: string, nh: number, church: boolean) => {
        const sc = byKind(k)[0];
        if (!sc) return;
        const R = 100;
        for (let a = 0; a < 120; a++) {
          const cx = freeX(), cy = topOf(sc) + (0.1 + rnd() * 0.8) * sc.offsetHeight;
          if (!ok(cx, cy, R, R * 0.6, 90)) continue;
          placed.push([cx, cy, R]);
          for (let i = 0; i < nh; i++) items.push({ kind: church && i === 1 ? "church" : "house", x: cx + ((i % 3) - 1) * 34 + (rnd() - 0.5) * 10, y: cy + Math.floor(i / 3) * 26 - 14 + (rnd() - 0.5) * 8, s: 0.85 + rnd() * 0.25, wall: WALLS[Math.floor(rnd() * WALLS.length)] });
          items.push({ kind: "label", x: cx, y: cy + Math.ceil(nh / 3) * 26 + 12, s: 1, text: label, dark: sc.classList.contains("ink-dark") });
          return;
        }
      };
      village("sertao", copy.villages.home, 5, true);
      scatter("sertao", 5, "mandacaru", 26, 26); scatter("sertao", 9, "caroa", 22, 22); scatter("sertao", 3, "carnauba", 30, 30);
      village("rio", copy.villages.river, 4, false);
      scatter("rio", 7, "carnauba", 30, 28); scatter("rio", 5, "tree", 30, 28); scatter("rio", 4, "caroa", 20, 22);
      scatter("mangue", 3, "tree", 30, 34); scatter("mangue", 9, "mangrove", 34, 24);
      scatter("lama", 8, "mangrove", 34, 24, { color: "#5f9a68", dark: true });
      village("encontro", copy.villages.fishers, 4, false);
      scatter("encontro", 6, "coqueiro", 32, 28);
      // jangadas on the water near the mouth
      for (const t of [0.86, 0.9, 0.95, 0.975]) { const q = ptN(t * FL); items.push({ kind: "jangada", x: clamp(q.x + (rnd() - 0.5) * halfW(t) * 0.8, 30, W - 30), y: q.y, s: 0.9 + rnd() * 0.3 }); }
      // mangrove roots along both banks, through mangue and lama
      const stretch = (k: string) => { const s = byKind(k); return s.length ? [lenAtY(topOf(s[0])) / FL, lenAtY(topOf(s[s.length - 1]) + s[s.length - 1].offsetHeight) / FL] : null; };
      const mg = stretch("mangue"), lm = stretch("lama");
      if (mg && lm) {
        for (let t = mg[0]; t < lm[1]; t += 0.006) for (const side of [-1, 1]) {
          if (rnd() < 0.35) continue;
          const tt = t + rnd() * 0.003, q = ptN(tt * FL), o = halfW(tt) + 10 + rnd() * 26;
          const x = q.x + q.nx * o * side, y = q.y + q.ny * o * side;
          if (x < 12 || x > W - 12 || boxes.some((b) => x > b[0] - 10 && x < b[2] + 10 && y > b[1] - 10 && y < b[3] + 10)) continue;
          items.push({ kind: "root", x, y, s: 0.7 + rnd() * 0.5, color: tt < lm[0] ? "#2f5a3a" : "#5f9a68", dark: tt >= lm[0] });
        }
        // crabs on the mud banks
        for (let i = 0; i < 12; i++) {
          const t = lerp(mg[0] + (lm[0] - mg[0]) * 0.5, lm[1], i / 12) + rnd() * 0.01, side = rnd() < 0.5 ? -1 : 1;
          const q = ptN(t * FL), o = halfW(t) + 14 + rnd() * 30, x = q.x + q.nx * o * side, y = q.y + q.ny * o * side;
          if (x < 24 || x > W - 24 || boxes.some((b) => x > b[0] - 30 && x < b[2] + 30 && y > b[1] - 30 && y < b[3] + 30)) continue;
          const e = document.createElement("div");
          e.className = "rv-crab" + (rnd() < 0.5 ? " flip" : "");
          e.innerHTML = '<div class="b"><div class="w"><svg width="54" height="38"><use href="#rv-crab"/></svg></div></div>';
          e.style.transform = `translate(${x}px,${y}px) scale(${(0.75 + rnd() * 0.4).toFixed(2)})`;
          (e.querySelector(".w") as HTMLElement).style.animationDelay = (-rnd() * 3).toFixed(2) + "s";
          crit.appendChild(e); crabs.push({ e, len: t * FL, on: false });
        }
      }
      items.sort((a, b) => a.y - b.y).forEach(drawItem);
      // shrimp swimming just behind the head of the water
      for (let i = 0; i < 5; i++) {
        const e = document.createElement("div");
        e.className = "rv-shrimp";
        e.innerHTML = '<svg width="56" height="28"><use href="#rv-shrimp"/></svg>';
        crit.appendChild(e); shrimps.push({ e, lag: 70 + i * 58, ph: i * 1.7, sc: 0.8 + ((i * 37) % 10) / 25 });
      }
    };

    const render = (len: number, now: number) => {
      mask.style.strokeDashoffset = String(FL - len);
      wide.setAttribute("stroke-dasharray", `0 ${sWide} ${Math.max(0, len - sWide)} ${FL * 2}`);
      const h = ptN(Math.max(0.5, Math.min(FL - 0.5, len)));
      head.setAttribute("transform", `translate(${h.x.toFixed(1)},${h.y.toFixed(1)}) scale(${margin < 60 ? 0.45 : 1})`);
      head.style.opacity = len > 2 && len < FL * 0.97 ? "1" : "0";
      for (const p of plants) { const on = len > p.len - 10; if (on !== p.on) { p.e.classList.toggle("on", on); p.on = on; } }
      for (const c of crabs) { const on = len > c.len + 20; if (on !== c.on) { c.e.classList.toggle("on", on); c.on = on; } }
      const t = now / 1000;
      for (const s of shrimps) {
        const l = len - s.lag, tt = l / FL, vis = tt > 0.42 && tt < 0.97;
        s.e.classList.toggle("on", vis);
        if (!vis) continue;
        const q = ptN(l), wig = Math.sin(t * 1.6 + s.ph) * halfW(tt) * 0.45;
        s.e.style.transform = `translate(${(q.x + q.nx * wig).toFixed(1)}px,${(q.y + q.ny * wig).toFixed(1)}px) rotate(${(q.ang + Math.sin(t * 3 + s.ph) * 8).toFixed(1)}deg) scale(${s.sc})`;
      }
    };

    build();
    let cur = 0, raf = 0, timer = 0;
    const loop = (now: number) => {
      const r = fio.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) {
        const target = lenAtY(innerHeight * 0.62 - r.top);
        cur += (target - cur) * (reduce ? 1 : 0.14);
        render(cur, now);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    // Rebuild when the layout settles (fonts, photos, window size).
    const ro = new ResizeObserver(() => { clearTimeout(timer); timer = window.setTimeout(build, 180); });
    ro.observe(fio);
    document.fonts?.ready.then(build);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); clearTimeout(timer); };
  }, [copy]);

  return (
    <>
      <svg ref={svgRef} className="rv-svg" aria-hidden="true">
        <defs>
          <linearGradient id="rv-water" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000" />
          <mask id="rv-reveal" maskUnits="userSpaceOnUse">
            <path className="rv-mask" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="round" />
            <path className="rv-mask-wide" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="round" />
          </mask>
          <symbol id="rv-crab" viewBox="0 0 64 44">
            <g stroke="#6e2412" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M19 26 L9 30 L5 38" /><path d="M19 30 L11 36 L9 42" /><path d="M21 33 L16 40 L15 44" />
              <path d="M45 26 L55 30 L59 38" /><path d="M45 30 L53 36 L55 42" /><path d="M43 33 L48 40 L49 44" />
              <path d="M22 19 L14 12" /><path d="M42 19 L50 12" /><path d="M28 15 L27 8" /><path d="M36 15 L37 8" />
            </g>
            <ellipse cx="32" cy="25" rx="15.5" ry="10.5" fill="#d9542c" />
            <ellipse cx="28.5" cy="21.5" rx="7" ry="3.2" fill="#f08a5d" opacity=".75" />
            <path d="M14 12 c-6 -2 -9 -8 -5 -11 c2 3 5 4 8 3 c1 3 0 6 -3 8z" fill="#e2683b" />
            <path d="M50 12 c6 -2 9 -8 5 -11 c-2 3 -5 4 -8 3 c-1 3 0 6 3 8z" fill="#e2683b" />
            <circle cx="27" cy="7.5" r="2.1" fill="#120b07" /><circle cx="37" cy="7.5" r="2.1" fill="#120b07" />
          </symbol>
          <symbol id="rv-shrimp" viewBox="0 0 72 34">
            <path d="M12 21 L2 12 L5 22 L1 31 Z" fill="#e8876a" />
            <path d="M11 21 C17 8 38 3 55 10 C62 13 65 18 61 22 C50 17 31 17 15 26 Z" fill="#f4a48c" />
            <g stroke="#d9705a" strokeWidth="1.4" fill="none" strokeLinecap="round">
              <path d="M22 12 C24 16 24 19 22 22" /><path d="M30 9 C32 13 32 17 30 20" /><path d="M38 8 C40 12 40 16 38 19" /><path d="M46 9 C48 12 48 15 46 18" />
              <path d="M24 23 l-2 6" /><path d="M31 21 l-1.5 6" /><path d="M38 20 l-1 6" /><path d="M45 20 l-.5 6" /><path d="M51 20 l0 6" />
            </g>
            <g stroke="#f4a48c" strokeWidth="1.2" fill="none" strokeLinecap="round"><path d="M60 13 C68 6 72 4 71 0" /><path d="M61 15 C69 12 72 12 72 9" /></g>
            <circle cx="57" cy="13" r="1.8" fill="#241812" />
          </symbol>
        </defs>
        <path className="rv-bed" fill="none" stroke="url(#rv-water)" strokeWidth="2" strokeDasharray="1 11" strokeLinecap="round" opacity=".5" />
        <g mask="url(#rv-reveal)">
          <path className="rv-ribbon" fill="url(#rv-water)" />
          <path className="rv-flow" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2.6" strokeDasharray="3 18" strokeLinecap="round" />
        </g>
        <g className="rv-plants" />
        <g className="rv-head"><circle r="20" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" /><circle r="8" fill="#fff" /></g>
      </svg>
      <div ref={crittersRef} className="rv-critters" aria-hidden="true" />
    </>
  );
}
