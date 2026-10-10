import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

export function ExperienceStack() {
  return (
    <section
      id="experience"
      className="experience-section section-light"
      aria-labelledby="experience-heading"
    >
      <div className="section-topline wrap">
        <span className="section-index mono">EXPERIENCE</span>
        <span className="mono">A RECORD OF CONTRIBUTION</span>
      </div>
      <div className="experience-heading wrap">
        <div>
          <p className="eyebrow mono">PROFESSIONAL EXPERIENCE</p>
          <h2 id="experience-heading" className="display-heading">
            THE WORK
            <br />
            <span>BEHIND THE WORK.</span>
          </h2>
        </div>
        <p>
          Experience across full-stack product development, frontend
          implementation, backend workflows, and blockchain-connected features.
        </p>
      </div>
      <div className="experience-stack wrap">
        {experience.map((item, index) => (
          <article
            className={`experience-card experience-card--${index + 1}`}
            key={item.company}
            style={{
              top: `calc(var(--stack-card-base, var(--nav-height)) + ${index} * var(--stack-card-offset, 18px) + var(--stack-card-offset, 18px))`,
            }}
          >
            <div className="experience-card-top mono">
              <span>EXPERIENCE / {item.number}</span>
              <span>{item.period ?? "FREELANCE"}</span>
            </div>
            <div className="experience-card-main">
              <div className="experience-company-block">
                <h3>
                  {item.company}
                  <span>.</span>
                </h3>
                <p className="experience-role">{item.role}</p>
                <p className="mono experience-location">
                  {item.location ?? "REMOTE"}
                </p>
                {item.company.toLowerCase().includes("kingdomly") ? (
                  <div className="mt-5">
                    <a
                      href="/Kingdomly_Recommendation_Letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-doc-badge group"
                      aria-label="View Kingdomly executive recommendation letter PDF"
                    >
                      <FileCheck2 size={13} className="text-accent" />
                      <span>RECOMMENDATION LETTER</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="experience-details">
                <p className="experience-summary">{item.summary}</p>
                {item.highlights.length > 0 ? (
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="experience-verified mono">
                    DETAILS PENDING RÉSUMÉ VERIFICATION
                  </p>
                )}
                {item.technologies.length > 0 ? (
                  <div className="experience-tech mono">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="experience-card-bottom">
              <span className="mono">
                {item.number} / 0{experience.length}
              </span>
              <a
                href="#contact"
                className="experience-contact-btn"
                aria-label={`Discuss work similar to ${item.company}`}
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="experience-footnote wrap">
        <span className="mono">ACCURACY OVER DECORATION</span>
        <p>
          Dates, locations, and responsibilities are limited to the information
          currently verified in the portfolio brief.
        </p>
      </div>
    </section>
  );
}

export default ExperienceStack;
