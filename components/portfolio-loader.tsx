"use client";
import { useEffect, useState } from "react";
import { projects } from "@/lib/portfolio-data";

const LINES = [12, 28, 44, 60, 76, 90];

const STATIC_IMAGES: string[] = [
  ...projects.map((p) => p.image).filter((img): img is string => Boolean(img)),
  "/images/about/lasu.jpg",
  "/images/about/codm.jpg",
  "/images/about/onestate.jpg",
  "/images/about/liverpool.jpg",
  "/images/about/messi.jpg",
  "/images/about/spotify.jpg",
];

export default function PortfolioLoader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING PORTFOLIO");
  const [subText, setSubText] = useState("COMPILING IDEAS INTO INTERFACES");
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let finished = false;
    const start = performance.now();
    const MIN = reduced ? 0 : 900; // brief minimum for animation rhythm
    const MAX = 2500;              // safety: never block the page

    let loadedCount = 0;
    // Collect all candidate sources to lazy-load
    const domImages = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
    const domSources = domImages
      .map((img) => img.currentSrc || img.getAttribute("src") || "")
      .filter(Boolean);

    const allSources = Array.from(new Set([...STATIC_IMAGES, ...domSources]));
    const totalCount = allSources.length;

    const finish = () => {
      if (!finished) {
        finished = true;
        setProgress(100);
        setStatusText("SYSTEMS READY");
        setSubText("SYSTEMS NOMINAL");
        setDone(true);
      }
    };

    const onItemLoaded = () => {
      loadedCount++;
    };

    // Lazy load and decode each image in the background
    allSources.forEach((src) => {
      try {
        const img = new window.Image();
        let settled = false;
        const settle = () => {
          if (!settled) {
            settled = true;
            onItemLoaded();
          }
        };

        img.onload = settle;
        img.onerror = settle;
        img.src = src;

        if ("decode" in img) {
          img.decode().then(settle).catch(settle);
        }
      } catch {
        onItemLoaded();
      }
    });

    // Also trigger decode on any existing DOM images if available
    domImages.forEach((img) => {
      if ("decode" in img && !img.complete) {
        img.decode().catch(() => {});
      }
    });

    const tick = (now: number) => {
      const t = now - start;
      const timeRatio = Math.min(1, t / MAX);
      const imgRatio = totalCount > 0 ? loadedCount / totalCount : 1;
      const allLoaded = totalCount === 0 || loadedCount >= totalCount;
      const isDocReady =
        document.readyState === "complete" || document.readyState === "interactive";

      // Dynamically calculate progress based on time and asset lazy-loading progress
      const targetProgress = Math.min(
        allLoaded ? 100 : 92,
        Math.max(timeRatio * 90, imgRatio * 90)
      );

      setProgress((p) => Math.min(100, Math.max(p, Math.round(targetProgress))));

      if (targetProgress > 70 && !finished) {
        setSubText("LAZY LOADING ASSETS & MEDIA");
      } else if (targetProgress > 30 && !finished) {
        setSubText("CACHING VISUAL ASSETS");
      }

      if ((allLoaded && isDocReady && t >= MIN) || t >= MAX) {
        finish();
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => setGone(true), 1000);
    return () => clearTimeout(id);
  }, [done]);

  if (gone) return null;
  return (
    <div
      className="loader"
      data-done={done}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      aria-hidden={done}
    >
      {LINES.map((top, i) => (
        <span
          key={top}
          aria-hidden="true"
          className="loader__line"
          style={{
            top: `${top}%`,
            animationDuration: `${1.4 + i * 0.5}s`,
            animationDelay: `${-i * 0.4}s`,
          }}
        />
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
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div>
          <p className="meta">{statusText}</p>
          <p className="meta mt-2 opacity-55">{subText}</p>
        </div>
      </div>
    </div>
  );
}
