"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { identity } from "@/lib/portfolio-data";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (open) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Always show at the very top of the page
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 4) {
        // Scrolling DOWN -> hide navbar, stays hidden even when scrolling stops (static)
        setVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 4) {
        // Scrolling UP -> reveal navbar
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible || open ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between text-[var(--on-dark)]">
        <a href="#top" className="flex items-baseline gap-3" aria-label={`${identity.name}, back to top`}>
          <span className="display text-2xl">AV.</span>
          <span className="meta hidden opacity-60 sm:inline">{identity.nickname}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-link meta" aria-current={active === n.id}>{n.label}</a>
          ))}
          <a href="#contact" className="meta border border-accent bg-accent px-4 py-2 text-ink transition-colors duration-300 hover:bg-transparent hover:text-accent">LET&apos;S TALK ↗</a>
        </nav>

        <button ref={toggleRef} className="p-2 md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-ink md:hidden">
          <ul className="wrap flex flex-col py-6">
            {NAV.map((n) => (
              <li key={n.id} className="border-b border-white/10">
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="display block py-4 text-4xl" aria-current={active === n.id}>{n.label}</a>
              </li>
            ))}
            <li className="pt-6"><a href="#contact" onClick={() => setOpen(false)} className="meta inline-block bg-accent px-5 py-3 text-ink">LET&apos;S TALK ↗</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
