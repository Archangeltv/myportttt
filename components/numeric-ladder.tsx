"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ladder } from "@/lib/portfolio-data";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function NumericLadder() {
  const root = useRef<HTMLElement>(null);
  const activeYearRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [i, setI] = useState(0);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = root.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const updateYear = (index: number) => {
        const year = ladder[index]?.year ?? "2023";
        setI(index);
        if (activeYearRef.current) {
          const digits = activeYearRef.current.querySelectorAll("span");
          if (digits[0]) digits[0].textContent = year.slice(0, 2);
          if (digits[1]) digits[1].textContent = year.slice(2);
        }
        rowRefs.current.forEach((row, rowIndex) => {
          if (!row) return;
          row.classList.toggle("ladder-row--active", rowIndex === index);
        });
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              ladder.length - 1,
              Math.floor(self.progress * ladder.length),
            );
            updateYear(index);
            if (bar.current)
              bar.current.style.transform = `scaleX(${self.progress})`;
            if (progressRef.current)
              progressRef.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      ladder.forEach((_, index) => {
        const row = rowRefs.current[index];
        if (row) timeline.to(row, { x: 0, duration: 0.2 }, index * 0.2);
      });

      return () => timeline.scrollTrigger?.kill();
    });

    return () => media.revert();
  }, []);

  const y = ladder[i]?.year ?? "2023";

  return (
    <section
      id="experience-ladder"
      className="ladder-stage surface-glacier"
      ref={root}
      aria-labelledby="ladder-heading"
    >
      <div className="ladder-sticky">
        <div className="section-topline wrap">
          <span className="section-index mono"> THE RECORD</span>
          <span className="mono">
            CAREER NOTES <b>—</b> 2023–2026
          </span>
        </div>

        <div className="ladder-grid wrap">
          <div className="ladder-intro">
            <p className="eyebrow mono">AN ENGINEER IN MOTION</p>
            <h2 id="ladder-heading" className="ladder-display">
              A RECORD
              <br />
              OF <span>BUILDING.</span>
            </h2>
            <p className="ladder-body">
              I work across the visible product and the systems that make it
              function. I build from interfaces and APIs to data workflows and
              blockchain integrations.
            </p>
            <div className="ladder-current">
              <span className="mono">YEAR IN FOCUS</span>
              <span className="ladder-current-year" ref={activeYearRef}>
                <span>{y.slice(0, 2)}</span>
                <span className="ladder-year-accent">{y.slice(2)}</span>
              </span>
            </div>
          </div>

          <div className="ladder-list" aria-label="Career timeline">
            {ladder.map((item, index) => (
              <div
                className={`ladder-row ${index === i ? "ladder-row--active" : ""}`}
                key={item.year}
                data-on={index === i}
                onClick={() => {
                  setI(index);
                  if (activeYearRef.current) {
                    const digits =
                      activeYearRef.current.querySelectorAll("span");
                    if (digits[0])
                      digits[0].textContent = item.year.slice(0, 2);
                    if (digits[1]) digits[1].textContent = item.year.slice(2);
                  }
                  rowRefs.current.forEach((row, rowIndex) => {
                    if (!row) return;
                    row.classList.toggle(
                      "ladder-row--active",
                      rowIndex === index,
                    );
                  });
                }}
                ref={(element) => {
                  rowRefs.current[index] = element;
                }}
              >
                <span className="ladder-row-year mono">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="ladder-row-mark" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="ladder-bottom wrap">
          <span className="mono">A CONTINUOUS PRACTICE</span>
          <span className="ladder-progress">
            <i ref={progressRef} />
          </span>
          <span className="mono">
            0{i + 1} / 0{ladder.length}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/10">
          <div ref={bar} className="h-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </section>
  );
}

export default NumericLadder;
