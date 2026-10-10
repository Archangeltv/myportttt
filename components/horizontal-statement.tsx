"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function HorizontalStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!section || !track || !viewport) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth + 48);
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 1.5, getDistance())}`,
          scrub: 0.6,
          pin: viewport,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => media.revert();
  }, []);

  return (
    <section
      id="services"
      className="statement-stage"
      ref={sectionRef}
      aria-label="How I build digital products"
    >
      <div className="statement-viewport" ref={viewportRef}>
        <h2 className="sr-only">How I build digital products: from interface to system, data, and deployment</h2>
        <div className="statement-topline wrap">
          <span className="section-index mono">THE METHOD</span>
          <span className="mono">END-TO-END PRODUCT ENGINEERING</span>
        </div>
        <div className="statement-track" ref={trackRef}>
          <span>
            I DESIGN THE <i>INTERFACE.</i>
          </span>
          <svg
            viewBox="0 0 76 76"
            aria-hidden="true"
            className="statement-symbol"
          >
            <path d="M8 38h60M38 8v60M15 15l46 46M61 15 15 61" />
            <circle cx="38" cy="38" r="26" />
            <circle cx="38" cy="38" r="6" />
          </svg>
          <span>
            I ENGINEER THE <i>SYSTEM.</i>
          </span>
          <span className="statement-plus" aria-hidden="true">
            +
          </span>
          <span>
            I CONNECT THE <i> DATA.</i>
          </span>
          <svg
            viewBox="0 0 90 60"
            aria-hidden="true"
            className="statement-arrow"
          >
            <path d="M3 30h77M58 8l22 22-22 22" />
            <path d="M3 10v40" />
          </svg>
          <span>
            I BUILD THE <i>PRODUCT.</i>
          </span>
          <span className="statement-last">
            FROM THE FIRST IDEA TO THE FINAL DEPLOYMENT.
          </span>
        </div>
        <div className="statement-bottom wrap">
          <span className="mono">DESIGN / BUILD / CONNECT / SHIP</span>
          <span className="mono">
            KEEP MOVING <b>↗</b>
          </span>
        </div>
      </div>
      <div className="statement-mobile wrap">
        <span className="section-index mono">THE METHOD</span>
        <h2>
          I DESIGN THE <em>INTERFACE.</em>
          <br />I ENGINEER THE <em>SYSTEM.</em>
          <br />I CONNECT THE <em>DATA.</em>
          <br />I BUILD THE <em>PRODUCT.</em>
        </h2>
        <p className="mono">FROM THE FIRST IDEA TO THE FINAL DEPLOYMENT.</p>
      </div>
    </section>
  );
}

export default HorizontalStatement;
