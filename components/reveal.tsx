"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "p" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("rev");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = Tag as "div";
  return <T ref={ref as React.RefObject<HTMLDivElement>} className={className}>{children}</T>;
}
