"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: true } });
        tl.to({}, { duration: 0.3 })
          .to(".mani-head", { "--p": 0, ease: "none", duration: 0.7 }, 0.3)
          .to(".mani-cap", { opacity: 0, ease: "none", duration: 0.4 }, 0.3);
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="mani-wrap surface-glacier" aria-label="Manifesto">
      <div className="mani-stick">
        <div className="wrap text-center">
          <h2 className="mani-head display text-[clamp(3rem,11vw,10rem)]">I turn complex<br />ideas into<br />working products.</h2>
          <p className="mani-cap meta mt-8 opacity-70">Thoughtful engineering. Intentional design. Real functionality.</p>
        </div>
      </div>
    </section>
  );
}
