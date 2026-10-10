"use client";
import { useEffect, useRef } from "react";

export default function ScanlineCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true, last = 0;
    const small = () => window.innerWidth < 768;
    const resize = () => { w = c.width = c.clientWidth; h = c.height = c.clientHeight; if (reduced) draw(0); };
    const draw = (t: number) => {
      ctx.fillStyle = "#0B0E14"; ctx.fillRect(0, 0, w, h);
      const bx = ((t / 14000) % 1.4 - 0.2) * w;
      const g = ctx.createRadialGradient(bx, h * 0.55, 0, bx, h * 0.55, w * 0.5);
      g.addColorStop(0, "rgba(255,77,0,.16)"); g.addColorStop(1, "rgba(255,77,0,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(233,237,242,.06)"; ctx.lineWidth = 1; ctx.beginPath();
      const step = small() ? 9 : 5;
      for (let y = 0, r = 0; y < h; y += step, r++) { const o = Math.sin(t / 1800 + r * 0.35) * 6; ctx.moveTo(o, y + 0.5); ctx.lineTo(w + o, y + 0.5); }
      ctx.stroke();
    };
    const loop = (t: number) => { raf = requestAnimationFrame(loop); if (!visible || t - last < 33) return; last = t; draw(t); };
    resize(); window.addEventListener("resize", resize);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);
    if (!reduced) raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); io.disconnect(); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
