/** Geometry shared by the hero contours, the route map and the river: smooth curves through points. */

export type Pt = [number, number];

/** Catmull-Rom spline through the points, as an SVG path. */
export function smooth(pts: Pt[], closed = false, tension = 1): string {
  const n = pts.length;
  if (n < 2) return "";
  const at = (i: number) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = [p1[0] + ((p2[0] - p0[0]) / 6) * tension, p1[1] + ((p2[1] - p0[1]) / 6) * tension];
    const c2 = [p2[0] - ((p3[0] - p1[0]) / 6) * tension, p2[1] - ((p3[1] - p1[1]) / 6) * tension];
    d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return closed ? d + "Z" : d;
}

/** Topographic contour rings for the hero, in a 1200×840 box. Deterministic, so it renders on the server. */
export function contourRings(): { d: string; strong: boolean; opacity: number }[] {
  const cx = 620, cy = 420;
  return Array.from({ length: 14 }, (_, i) => {
    const pts: Pt[] = [];
    const r = 60 + i * 38;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 14) {
      const k = 1 + 0.16 * Math.sin(3 * a + i * 0.35) + 0.08 * Math.sin(5 * a + 1.3 + i * 0.2);
      pts.push([cx + Math.cos(a) * r * k * 1.25, cy + Math.sin(a) * r * k]);
    }
    return { d: smooth(pts, true), strong: i % 4 === 0, opacity: 0.32 - i * 0.016 };
  });
}

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
