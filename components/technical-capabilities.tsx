import { skills, education } from "@/lib/portfolio-data";
import SectionHead from "./section-head";

export default function TechnicalCapabilities() {
  return (
    <section id="stack" className="surface-glacier py-20 md:py-28" aria-labelledby="stack-h">
      <div className="wrap">
        <SectionHead index="06" label="STACK" />
        <h2 id="stack-h" className="display mt-8 text-[clamp(3rem,8vw,7rem)]">What I build with</h2>
        <div className="mt-12 grid border-l border-black/20 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.label} className="border-b border-r border-t border-black/20 p-6">
              <h3 className="meta text-accent">{g.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
        <p className="meta mt-8 opacity-70">{education.degree}, {education.school}, {education.period}</p>
      </div>
    </section>
  );
}
