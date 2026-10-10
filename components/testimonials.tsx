import { ArrowUpRight, FileCheck2 } from "lucide-react";

const principles = [
  {
    index: "01",
    title: "Clear communication",
    body: "Keep decisions visible, ask the useful questions early, and make progress easy to understand.",
  },
  {
    index: "02",
    title: "Practical engineering",
    body: "Choose an approach that fits the product, its constraints, and the people who will maintain it.",
  },
  {
    index: "03",
    title: "Thoughtful implementation",
    body: "Treat the details as part of the product — from empty states and edge cases to the final interaction.",
  },
  {
    index: "04",
    title: "Maintainable solutions",
    body: "Write code that another developer can follow, extend, and trust after the first release.",
  },
];

export function HowIWork() {
  return (
    <section
      className="principles-section section-light"
      aria-labelledby="principles-heading"
    >
      <div className="section-topline wrap">
        <span className="section-index mono">ENDORSEMENT</span>
        <span className="mono">VERIFIED RECOMMENDATION</span>
      </div>

      <div className="wrap pt-12 pb-4">
        <div className="border border-[var(--rule-light)] bg-[var(--glacier)] p-6 sm:p-10 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule-light)] pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-accent text-white">
                <FileCheck2 size={16} />
              </span>
              <div>
                <p className="mono text-xs font-bold tracking-wider text-accent uppercase">
                  EXECUTIVE RECOMMENDATION · KINGDOMLY CORP
                </p>
                <p className="text-xs text-[var(--muted-light)]">
                  Austin, Texas · Signed by CEO
                </p>
              </div>
            </div>
            <a
              href="/Kingdomly_Recommendation_Letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="meta inline-flex items-center gap-2 border border-[var(--rule-light)] bg-[var(--paper)] px-4 py-2 text-xs font-bold transition-colors hover:border-accent hover:text-accent"
            >
              VIEW OFFICIAL LETTER (PDF) <ArrowUpRight size={14} />
            </a>
          </div>

          <blockquote className="my-6 text-[clamp(15px,1.4vw,18px)] leading-relaxed font-medium text-[var(--ink)]">
            &ldquo;Victor consistently demonstrated exceptional technical skill,
            professional discipline, and a deep commitment to delivering
            high-quality results. He played a key role in ensuring seamless
            full-stack integration, overseeing database management, implementing
            secure coding practices, and deploying cloud-based solutions with
            CI/CD pipelines... In every respect, Victor proved to be an
            invaluable asset to Kingdomly Corp. I recommend him without
            reservation.&rdquo;
          </blockquote>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--rule-light)] text-xs text-[var(--muted-light)]">
            <div>
              <p className="font-bold text-[var(--ink)]">Ethan Rife</p>
              <p className="mono text-[11px]">
                Chief Executive Officer, Kingdomly Corp
              </p>
            </div>
            <span className="mono text-[10px] uppercase opacity-70">
              TENURE: JUL 2023 – SEP 2025
            </span>
          </div>
        </div>
      </div>

      {/* <div className="principles-heading wrap">
        <p className="eyebrow mono">ENGINEERING PHILOSOPHY</p>
        <h2 id="principles-heading" className="display-heading">
          GOOD WORK IS<br />
          <span>A TEAM SPORT.</span>
        </h2>
      </div>

      <div className="principles-list wrap">
        {principles.map((principle) => (
          <article className="principle-row" key={principle.index}>
            <span className="mono">{principle.index}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
            <span className="principle-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div> */}
    </section>
  );
}

export const Testimonials = HowIWork;
export default HowIWork;
