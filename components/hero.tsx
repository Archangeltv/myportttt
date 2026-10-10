"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScanlineCanvas from "./scanline-canvas";
import { identity } from "@/lib/portfolio-data";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.6 } });
        tl.to(".h-name", { scale: 0.66, opacity: 0, ease: "none", duration: 0.5 }, 0)
          .to(".h-meta", { opacity: 0, ease: "none", duration: 0.3 }, 0)
          .fromTo(".h-claim", { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "none", duration: 0.4 }, 0.45);
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} id="top" className="hero-wrap surface-ink" aria-label="Introduction">
      <div className="hero-stick">
        <ScanlineCanvas />
        <div className="wrap relative z-10">
          <div className="hero-stack">
            <div className="h-name">
              <p className="meta mb-4 text-accent">{identity.nickname}</p>
              <h1 className="display text-[clamp(3.5rem,19vw,17rem)]">{identity.first}<br />{identity.last}</h1>
            </div>
            <div className="h-claim">
              <h2 className="display text-[clamp(2.5rem,9vw,8rem)]">I build digital products from the ground up.</h2>
              <p className="meta mt-6 opacity-70">From interface to backend. From idea to execution.</p>
            </div>
          </div>
        </div>
        <div className="h-meta meta absolute inset-x-0 bottom-6 z-10 grid grid-cols-1 gap-1 px-[var(--gutter)] text-center opacity-70 sm:grid-cols-3 sm:text-left">
          <span>{identity.title}</span><span className="sm:text-center">WEB / SYSTEMS / WEB3</span><span className="sm:text-right">{identity.location}</span>
        </div>
      </div>
    </section>
  );
}
