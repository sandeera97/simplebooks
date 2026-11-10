/**
 * Guilloche: the fine engraved rosettes printed on certificates and banknotes.
 *
 * Used as the site's mark — the seal in the paperwork section and the floor
 * under the hero both come from here, so they are visibly the same object.
 */

export const TAU = Math.PI * 2;

export const NAVY = "10,18,51";
export const ORANGE = "255,91,46";
export const GREEN = "46,196,138";

/**
 * One band: copies of a sine-modulated circle, phase-shifted so they weave.
 * Two opposite twists crossing each other give the net of a banknote; few,
 * wide strands read as engraving, where many dense ones blur into a tint.
 */
export function weave(
  g: CanvasRenderingContext2D,
  rMid: number,
  amp: number,
  lobes: number,
  copies: number,
  twists: number[],
) {
  const steps = Math.max(480, lobes * 28);
  for (const twist of twists) {
    for (let i = 0; i < copies; i++) {
      const ph = (i / copies) * TAU;
      g.beginPath();
      for (let s = 0; s <= steps; s++) {
        const th = (s / steps) * TAU;
        const r = rMid + amp * Math.sin(twist * lobes * th + ph);
        const x = r * Math.cos(th);
        const y = r * Math.sin(th);
        if (s) g.lineTo(x, y);
        else g.moveTo(x, y);
      }
      g.stroke();
    }
  }
}

export function ring(g: CanvasRenderingContext2D, r: number, alpha: number, width = 0.8, rgb = NAVY) {
  g.strokeStyle = `rgba(${rgb},${alpha})`;
  g.lineWidth = width;
  g.beginPath();
  g.arc(0, 0, r, 0, TAU);
  g.stroke();
}

/** A serrated rim, like an embossed notary seal. */
export function serratedRim(g: CanvasRenderingContext2D, R: number, teeth: number, depth: number) {
  g.beginPath();
  for (let s = 0; s <= teeth * 8; s++) {
    const th = (s / (teeth * 8)) * TAU;
    const r = R + depth * Math.sin(teeth * th);
    if (s) g.lineTo(r * Math.cos(th), r * Math.sin(th));
    else g.moveTo(r * Math.cos(th), r * Math.sin(th));
  }
  g.closePath();
  g.stroke();
}

/** Text set around a circle, spaced so the ring closes exactly. */
export function textRing(g: CanvasRenderingContext2D, text: string, radius: number) {
  const chars = Array.from(text);
  g.textAlign = "center";
  g.textBaseline = "middle";
  for (let i = 0; i < chars.length; i++) {
    const th = (i / chars.length) * TAU - Math.PI / 2;
    g.save();
    g.rotate(th + Math.PI / 2);
    g.translate(0, -radius);
    g.fillText(chars[i], 0, 0);
    g.restore();
  }
}
