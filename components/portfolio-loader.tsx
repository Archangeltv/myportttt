"use client";
import { useEffect, useState } from "react";

const LINES = [12, 28, 44, 60, 76, 90];

export default function PortfolioLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let finished = false;
    const start = performance.now();
    const MIN = reduced ? 0 : 900; // brief; never waits longer than the page itself
    const MAX = 2500;               // safety: never block the page

    const finish = () => { if (!finished) { finished = true; setProgress(100); setDone(true); } };
    const tick = (now: number) => {
      const t = now - start;
      const loaded = document.readyState === "complete";
      setProgress((p) => Math.min(loaded ? 100 : 90, Math.max(p, (t / MAX) * 90)));
      if ((loaded && t >= MIN) || t >= MAX) finish(); else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => setGone(true), 1000);
    return () => clearTimeout(id);
  }, [done]);

  if (gone) return null;
  return (
    <div className="loader" data-done={done} role="status" aria-live="polite" aria-label="Loading portfolio">
      {LINES.map((top, i) => (
        <span key={top} aria-hidden="true" className="loader__line" style={{ top: `${top}%`, animationDuration: `${1.4 + i * 0.5}s`, animationDelay: `${-i * 0.4}s` }} />
      ))}
      <div className="meta absolute left-[var(--gutter)] top-6">AV / ARCHANGEL</div>
      <div className="meta absolute right-[var(--gutter)] top-6 opacity-60">SYSTEMS NOMINAL</div>
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        <div className="speeder" aria-hidden="true">
          <span className="speeder__trail" style={{ top: 12, width: 40 }} />
          <span className="speeder__trail" style={{ top: 22, width: 26, animationDelay: "-.2s" }} />
          <span className="speeder__trail" style={{ top: 32, width: 34, animationDelay: "-.35s" }} />
          <span className="speeder__body" />
          <span className="speeder__base" />
          <span className="speeder__wheel" />
          <span className="speeder__front" />
        </div>
        <div className="progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
        <div>
          <p className="meta">INITIALIZING PORTFOLIO</p>
          <p className="meta mt-2 opacity-55">COMPILING IDEAS INTO INTERFACES</p>
        </div>
      </div>
    </div>
  );
}
