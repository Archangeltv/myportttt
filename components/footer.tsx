import { identity, links } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="surface-ink border-t border-white/15 py-12">
      <div className="wrap">
        <p className="display text-[clamp(2.5rem,9vw,8rem)]">{identity.name}</p>
        <div className="meta mt-8 flex flex-wrap items-center justify-between gap-4 opacity-70">
          <span>{identity.nickname} · {identity.title}</span>
          <span>Designed with intent. Built with purpose.</span>
          <nav aria-label="Footer" className="flex gap-6">
            {links.map((l) => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#top" className="nav-link">Back to top ↑</a>
          </nav>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
